
import { Users, Shield, Clock, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Nest Care</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting homeowners with trusted service professionals since 2023
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Nest Care, we believe that maintaining your home should be simple, reliable, and stress-free. Our mission is to connect homeowners with skilled professionals who can deliver high-quality service, all through a seamless digital platform.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to building a community of trust between customers and service providers, ensuring transparency, quality, and satisfaction in every interaction.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3" 
                alt="Team meeting" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We build lasting relationships between customers and professionals, creating a community of trust and mutual support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">
                We verify all professionals and ensure transparency in pricing, reviews, and service quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises with on-time service, clear communication, and consistent quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in every service, constantly improving and innovating.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO & Founder",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                bio: "With over 15 years in the home services industry, Sarah founded Nest Care to revolutionize how homeowners connect with service professionals."
              },
              {
                name: "Michael Chen",
                title: "Chief Technology Officer",
                image: "https://randomuser.me/api/portraits/men/22.jpg",
                bio: "Michael leads our technology team, building innovative solutions that make home services more accessible and efficient for everyone."
              },
              {
                name: "David Wilson",
                title: "Chief Operations Officer",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                bio: "David oversees our day-to-day operations, ensuring both customers and professionals have a seamless experience on our platform."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              Nest Care was born out of a simple frustration: finding reliable home service professionals was too difficult, time-consuming, and often led to disappointing results.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our founder, Sarah Johnson, experienced this firsthand when trying to renovate her first home. After multiple no-shows, unclear pricing, and subpar work, she realized there had to be a better way.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              In 2023, she assembled a team of technology and service industry experts to create Nest Care - a platform that vets professionals, ensures transparent pricing, and makes booking home services as easy as ordering a meal online.
            </p>
            <p className="text-lg text-gray-600">
              Today, we've helped thousands of homeowners connect with trusted professionals, and we're just getting started on our mission to transform the home services industry.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
