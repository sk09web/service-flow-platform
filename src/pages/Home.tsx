
import { ArrowRight, Search, Star, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const services = [
  {
    id: 1,
    name: "Cleaning",
    description: "Professional home cleaning services",
    icon: "🧹",
    path: "/services/cleaning",
  },
  {
    id: 2,
    name: "Plumbing",
    description: "Pipe repairs and installations",
    icon: "🔧",
    path: "/services/plumbing",
  },
  {
    id: 3,
    name: "Electrical",
    description: "Electrical repairs and installations",
    icon: "💡",
    path: "/services/electrical",
  },
  {
    id: 4,
    name: "Carpentry",
    description: "Custom woodwork and repairs",
    icon: "🪚",
    path: "/services/carpentry",
  },
  {
    id: 5,
    name: "Gardening",
    description: "Lawn care and landscaping",
    icon: "🌱",
    path: "/services/gardening",
  },
  {
    id: 6,
    name: "Painting",
    description: "Interior and exterior painting",
    icon: "🎨",
    path: "/services/painting",
  },
];

const professionals = [
  {
    id: 1,
    name: "John Smith",
    role: "Cleaning Specialist",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    path: "/professionals/john-smith",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Plumber",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    path: "/professionals/sarah-johnson",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Electrician",
    rating: 4.7,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    path: "/professionals/michael-brown",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                Home Services, <span className="text-primary">Simplified</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Connect with trusted professionals for all your household needs. Quality service guaranteed.
              </p>
              <div className="flex space-x-4">
                <Link to="/services">
                  <Button className="px-6">Browse Services</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" className="px-6">
                    Become a Provider
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                    alt="Home Services" 
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="flex-1">
                <Input 
                  type="text" 
                  placeholder="What service do you need?" 
                  className="w-full" 
                />
              </div>
              <div className="flex-1">
                <Input 
                  type="text" 
                  placeholder="Your location" 
                  className="w-full" 
                />
              </div>
              <Button className="flex items-center gap-2">
                <Search size={18} />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Find the perfect service for your home needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id} 
                to={service.path}
                className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md hover:translate-y-[-2px]"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-primary font-medium">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="px-6">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Top Professionals</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet our highest-rated service providers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionals.map((pro) => (
              <Link
                key={pro.id}
                to={pro.path}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-md"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={pro.image}
                      alt={pro.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{pro.name}</h3>
                      <p className="text-gray-600">{pro.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-400">
                    <Star size={18} fill="currentColor" />
                    <span className="ml-1 text-gray-900">{pro.rating}</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-gray-600">25 reviews</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/professionals">
              <Button variant="outline" className="px-6">
                View All Professionals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Nest Care</h2>
            <p className="mt-4 text-lg text-gray-600">
              We're committed to providing the best home service experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-600">
                All service providers undergo thorough background checks and verification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We ensure top-quality service or your money back.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">On-time Service</h3>
              <p className="text-gray-600">
                Our professionals respect your time and arrive as scheduled.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                We're not happy until you're completely satisfied with our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their homes with our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                Book a Service
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Join as Professional
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
