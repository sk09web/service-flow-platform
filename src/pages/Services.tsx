
import { useState } from "react";
import { Search, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    id: 1,
    name: "Home Cleaning",
    category: "cleaning",
    price: "From $50",
    rating: 4.8,
    reviewCount: 124,
    description: "Professional home cleaning services with thorough dusting, vacuuming, and sanitizing of all areas.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Plumbing Repair",
    category: "plumbing",
    price: "From $80",
    rating: 4.7,
    reviewCount: 98,
    description: "Expert plumbing repair services including leak fixes, pipe installations, and drain cleaning.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Electrical Installation",
    category: "electrical",
    price: "From $90",
    rating: 4.9,
    reviewCount: 87,
    description: "Professional electrical installation and repair services for all your home electrical needs.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3",
  },
  {
    id: 4,
    name: "Furniture Assembly",
    category: "carpentry",
    price: "From $60",
    rating: 4.6,
    reviewCount: 112,
    description: "Quick and reliable furniture assembly services for all types of furniture items.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3",
  },
  {
    id: 5,
    name: "Lawn Mowing",
    category: "gardening",
    price: "From $45",
    rating: 4.7,
    reviewCount: 76,
    description: "Professional lawn mowing and maintenance services to keep your lawn healthy and beautiful.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3",
  },
  {
    id: 6,
    name: "Interior Painting",
    category: "painting",
    price: "From $150",
    rating: 4.8,
    reviewCount: 92,
    description: "High-quality interior painting services with attention to detail and professional finish.",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd230771?ixlib=rb-4.0.3",
  },
];

const categories = [
  { id: "all", name: "All Services" },
  { id: "cleaning", name: "Cleaning" },
  { id: "plumbing", name: "Plumbing" },
  { id: "electrical", name: "Electrical" },
  { id: "carpentry", name: "Carpentry" },
  { id: "gardening", name: "Gardening" },
  { id: "painting", name: "Painting" },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{service.name}</h3>
          <span className="text-primary font-medium">{service.price}</span>
        </div>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <span className="text-amber-400">★</span>
            <span className="ml-1 text-gray-900">{service.rating}</span>
          </div>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600">{service.reviewCount} reviews</span>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Button className="w-full">Book Service</Button>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our comprehensive range of professional home services designed to meet all your household needs.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search services..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Sliders size={18} />
            Filters
          </Button>
        </div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="mb-6 flex flex-wrap h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
