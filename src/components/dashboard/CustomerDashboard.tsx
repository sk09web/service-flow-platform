
import { useState } from "react";
import { Calendar, Clock, User, MapPin, MessageSquare, Search, Package, Heart, Home, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="p-6">
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
            <AvatarFallback>EJ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Welcome, Emma Johnson</h1>
            <p className="text-gray-600">Manage your service requests and appointments</p>
          </div>
        </div>
      </header>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-3xl">
          <TabsTrigger value="active">Active Requests</TabsTrigger>
          <TabsTrigger value="history">Request History</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="profile">My Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-sm text-gray-600 mt-1">In progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Scheduled Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1</div>
                <p className="text-sm text-gray-600 mt-1">Upcoming</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Completed Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <p className="text-sm text-gray-600 mt-1">All time</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Current Service Requests</CardTitle>
                  <CardDescription>Track your active service requests</CardDescription>
                </div>
                <Button>
                  Request New Service
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    service: "Plumbing Repair",
                    professional: "John Smith",
                    status: "Scheduled",
                    address: "123 Main St, Apt 4B",
                    date: "May 15, 2023",
                    time: "10:00 AM - 12:00 PM",
                    price: "$85",
                    details: "Leaking pipe under kitchen sink"
                  },
                  {
                    id: 2,
                    service: "Electrical Repair",
                    professional: "Michael Brown",
                    status: "Pending",
                    address: "123 Main St, Apt 4B",
                    date: "Awaiting confirmation",
                    time: "To be determined",
                    price: "$110",
                    details: "Light fixture installation in living room"
                  },
                  {
                    id: 3,
                    service: "House Cleaning",
                    professional: "Sarah Johnson",
                    status: "In Progress",
                    address: "123 Main St, Apt 4B",
                    date: "Today",
                    time: "1:00 PM - 3:00 PM",
                    price: "$120",
                    details: "Deep cleaning of entire apartment"
                  }
                ].map((request) => (
                  <div key={request.id} className="border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Package size={20} className="text-primary" />
                          <h3 className="text-lg font-semibold">{request.service}</h3>
                          <Badge variant={
                            request.status === "Scheduled" ? "outline" : 
                            request.status === "In Progress" ? "default" : "secondary"
                          }>
                            {request.status}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-gray-500" />
                            <span>{request.professional}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin size={16} className="text-gray-500 mt-0.5" />
                            <span>{request.address}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Calendar size={16} className="text-gray-500 mt-0.5" />
                            <span>{request.date}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Clock size={16} className="text-gray-500 mt-0.5" />
                            <span>{request.time}</span>
                          </div>
                          <p className="font-medium text-primary">{request.price}</p>
                        </div>
                        <div className="mt-3">
                          <p className="text-gray-700">{request.details}</p>
                        </div>
                      </div>
                      <div className="flex md:flex-col gap-2">
                        <Button variant="outline" className="flex-1 md:w-32">
                          <MessageSquare size={16} className="mr-2" />
                          Contact
                        </Button>
                        <Button variant="outline" className="flex-1 md:w-32">
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Service History</CardTitle>
              <CardDescription>Past service requests and outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    service: "House Cleaning",
                    professional: "Sarah Johnson",
                    date: "April 28, 2023",
                    price: "$120",
                    status: "Completed",
                    rating: 5,
                    reviewed: true
                  },
                  {
                    id: 2,
                    service: "Furniture Assembly",
                    professional: "Michael Brown",
                    date: "April 15, 2023",
                    price: "$80",
                    status: "Completed",
                    rating: 4,
                    reviewed: true
                  },
                  {
                    id: 3,
                    service: "Plumbing Repair",
                    professional: "John Smith",
                    date: "April 2, 2023",
                    price: "$95",
                    status: "Completed",
                    rating: 5,
                    reviewed: true
                  },
                  {
                    id: 4,
                    service: "Painting Services",
                    professional: "David Wilson",
                    date: "March 20, 2023",
                    price: "$450",
                    status: "Completed",
                    rating: 0,
                    reviewed: false
                  }
                ].map((service) => (
                  <div key={service.id} className="border rounded-lg p-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Package size={20} className="text-primary" />
                        <h3 className="text-lg font-semibold">{service.service}</h3>
                        <Badge className="ml-auto" variant={service.status === "Completed" ? "default" : "secondary"}>
                          {service.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                        <div className="flex items-center gap-2 text-sm">
                          <User size={16} className="text-gray-500" />
                          <span>{service.professional}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={16} className="text-gray-500" />
                          <span>{service.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-primary">{service.price}</span>
                        </div>
                      </div>
                      
                      {service.reviewed ? (
                        <div className="mt-3">
                          <div className="flex items-center mb-2">
                            <p className="text-sm text-gray-600">Your rating:</p>
                            <div className="flex ml-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={16} 
                                  className={i < service.rating ? "text-amber-400" : "text-gray-300"} 
                                  fill={i < service.rating ? "currentColor" : "none"}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-3">
                          <Button variant="outline" size="sm">
                            Leave a Review
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="favorites" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Favorite Professionals</CardTitle>
                  <CardDescription>Service providers you've saved</CardDescription>
                </div>
                <div className="flex-1 max-w-xs">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search favorites..."
                      className="pl-8"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    id: 1,
                    name: "John Smith",
                    profession: "Plumber",
                    rating: 4.9,
                    image: "https://randomuser.me/api/portraits/men/32.jpg",
                    favorite: true
                  },
                  {
                    id: 2,
                    name: "Sarah Johnson",
                    profession: "Cleaner",
                    rating: 4.8,
                    image: "https://randomuser.me/api/portraits/women/44.jpg",
                    favorite: true
                  },
                  {
                    id: 3,
                    name: "Michael Brown",
                    profession: "Electrician",
                    rating: 4.7,
                    image: "https://randomuser.me/api/portraits/men/22.jpg",
                    favorite: true
                  }
                ].map((professional) => (
                  <Card key={professional.id} className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={professional.image} />
                            <AvatarFallback>{professional.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-base font-semibold">{professional.name}</h3>
                            <p className="text-sm text-gray-500">{professional.profession}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-primary hover:text-primary">
                          <Heart size={20} fill="currentColor" />
                        </Button>
                      </div>
                      <div className="flex items-center text-amber-500 mb-4">
                        <Star size={16} fill="currentColor" />
                        <span className="ml-1 text-gray-900">{professional.rating}</span>
                        <span className="mx-1 text-gray-400">•</span>
                        <span className="text-gray-600">28 reviews</span>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button>Book Service</Button>
                        <Button variant="outline">View Profile</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Favorite Services</CardTitle>
              <CardDescription>Services you've saved for quick booking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    id: 1,
                    name: "House Cleaning",
                    category: "Cleaning",
                    price: "From $80",
                    icon: "🧹",
                    favorite: true
                  },
                  {
                    id: 2,
                    name: "Plumbing Repair",
                    category: "Plumbing",
                    price: "From $100",
                    icon: "🔧",
                    favorite: true
                  },
                  {
                    id: 3,
                    name: "Electrical Repair",
                    category: "Electrical",
                    price: "From $110",
                    icon: "💡",
                    favorite: true
                  }
                ].map((service) => (
                  <Card key={service.id} className="overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-3xl mb-2">{service.icon}</div>
                          <h3 className="text-lg font-semibold">{service.name}</h3>
                          <p className="text-sm text-gray-500">{service.category}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="text-primary hover:text-primary">
                          <Heart size={20} fill="currentColor" />
                        </Button>
                      </div>
                      <p className="font-medium text-primary mb-4">{service.price}</p>
                      <Button className="w-full">Book Now</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your profile details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center mb-6">
                    <Avatar className="h-28 w-28 mb-4">
                      <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
                      <AvatarFallback>EJ</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="text-base">Emma Johnson</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-base">emma.johnson@example.com</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="text-base">(123) 456-7890</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Location</p>
                      <p className="text-base">New York, NY</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Member Since</p>
                      <p className="text-base">March 2023</p>
                    </div>
                    <Button className="w-full">Edit Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Saved Addresses</CardTitle>
                  <CardDescription>Manage your service locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 1, name: "Home", address: "123 Main St, Apt 4B, New York, NY 10001", default: true },
                      { id: 2, name: "Office", address: "456 Business Ave, Suite 200, New York, NY 10002", default: false },
                      { id: 3, name: "Vacation Home", address: "789 Beach Rd, Hampton Bays, NY 11946", default: false }
                    ].map((location) => (
                      <div key={location.id} className="flex items-start justify-between p-4 border rounded-md">
                        <div>
                          <div className="flex items-center">
                            <p className="font-medium">{location.name}</p>
                            {location.default && (
                              <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                                Default
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{location.address}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          {!location.default && (
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Remove
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                    <Button className="w-full mt-2">
                      <Home size={16} className="mr-2" />
                      Add New Address
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payment options</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 1, type: "Credit Card", last4: "4242", expires: "05/25", default: true },
                      { id: 2, type: "Credit Card", last4: "1234", expires: "09/24", default: false }
                    ].map((method) => (
                      <div key={method.id} className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-center">
                          <div className="mr-4">
                            {method.type === "Credit Card" ? "💳" : "🏦"}
                          </div>
                          <div>
                            <div className="flex items-center">
                              <p className="font-medium">
                                {method.type} •••• {method.last4}
                              </p>
                              {method.default && (
                                <Badge variant="outline" className="ml-2 bg-primary/10 text-primary">
                                  Default
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">Expires {method.expires}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          {!method.default && (
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Remove
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                    <Button className="w-full mt-2">
                      Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerDashboard;
