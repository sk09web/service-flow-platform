
import { useState } from "react";
import { Calendar, Clock, CheckCircle, XCircle, Wrench, Star, BellRing, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfessionalDashboard = () => {
  const [activeTab, setActiveTab] = useState("requests");

  return (
    <div className="p-6">
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Welcome, John Smith</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10 text-primary font-normal">
                Plumbing Professional
              </Badge>
              <div className="flex items-center text-amber-500">
                <Star size={16} fill="currentColor" />
                <span className="ml-1 text-gray-900">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-3xl">
          <TabsTrigger value="requests">Service Requests</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="profile">My Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="requests" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">New Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">7</div>
                <p className="text-sm text-gray-600 mt-1">Awaiting your response</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Scheduled Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-gray-600 mt-1">For the next 7 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$1,284</div>
                <p className="text-sm text-green-600 mt-1">+18% this month</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>New Service Requests</CardTitle>
              <CardDescription>Review and respond to new service requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    service: "Pipe Leak Repair",
                    customer: "Michael Brown",
                    address: "123 Main Street, Apt 4B",
                    date: "Wed, May 15, 2023",
                    time: "10:00 AM - 12:00 PM",
                    price: "$85",
                    details: "Leaking pipe under the kitchen sink needs repair."
                  },
                  {
                    id: 2,
                    service: "Bathroom Sink Installation",
                    customer: "Emma Wilson",
                    address: "456 Park Avenue",
                    date: "Thu, May 16, 2023",
                    time: "2:00 PM - 4:00 PM",
                    price: "$120",
                    details: "Need to install a new bathroom sink with faucet."
                  },
                  {
                    id: 3,
                    service: "Water Heater Check",
                    customer: "David Miller",
                    address: "789 Broadway, Unit 12",
                    date: "Fri, May 17, 2023",
                    time: "9:00 AM - 11:00 AM",
                    price: "$70",
                    details: "Water heater not producing hot water consistently."
                  }
                ].map((request) => (
                  <div key={request.id} className="border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Wrench size={20} className="text-primary" />
                          <h3 className="text-lg font-semibold">{request.service}</h3>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-gray-500" />
                            <span>{request.customer}</span>
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
                        <Button className="flex-1 md:w-32">
                          <CheckCircle size={16} className="mr-2" />
                          Accept
                        </Button>
                        <Button variant="outline" className="flex-1 md:w-32">
                          <XCircle size={16} className="mr-2" />
                          Decline
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scheduled" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Services</CardTitle>
              <CardDescription>Your scheduled service appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    service: "Pipe Leak Repair",
                    customer: "Michael Brown",
                    address: "123 Main Street, Apt 4B",
                    date: "Tomorrow",
                    time: "10:00 AM - 12:00 PM",
                    status: "confirmed"
                  },
                  {
                    id: 2,
                    service: "Bathroom Sink Installation",
                    customer: "Emma Wilson",
                    address: "456 Park Avenue",
                    date: "May 16, 2023",
                    time: "2:00 PM - 4:00 PM",
                    status: "confirmed"
                  },
                  {
                    id: 3,
                    service: "Water Heater Check",
                    customer: "David Miller",
                    address: "789 Broadway, Unit 12",
                    date: "May 17, 2023",
                    time: "9:00 AM - 11:00 AM",
                    status: "confirmed"
                  }
                ].map((appointment) => (
                  <div key={appointment.id} className="border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Wrench size={20} className="text-primary" />
                          <h3 className="text-lg font-semibold">{appointment.service}</h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700 font-normal">
                            Confirmed
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-gray-500" />
                            <span>{appointment.customer}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Calendar size={16} className="text-gray-500 mt-0.5" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Clock size={16} className="text-gray-500 mt-0.5" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col gap-2">
                        <Button variant="outline" className="flex-1 md:w-32">
                          Navigate
                        </Button>
                        <Button variant="secondary" className="flex-1 md:w-32">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Completed Services</CardTitle>
              <CardDescription>Your service history and customer reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    service: "Water Pipe Installation",
                    customer: "Jennifer Lee",
                    date: "May 10, 2023",
                    price: "$150",
                    rating: 5,
                    review: "John did an excellent job. Very professional and completed the work quickly."
                  },
                  {
                    id: 2,
                    service: "Bathroom Faucet Replacement",
                    customer: "Robert Taylor",
                    date: "May 8, 2023",
                    price: "$85",
                    rating: 4,
                    review: "Good work, fixed the issue promptly. Slightly pricier than expected."
                  },
                  {
                    id: 3,
                    service: "Drain Cleaning",
                    customer: "Sarah Johnson",
                    date: "May 5, 2023",
                    price: "$70",
                    rating: 5,
                    review: "Excellent service! Solved our drainage issues completely."
                  }
                ].map((service) => (
                  <div key={service.id} className="border rounded-lg p-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Wrench size={20} className="text-primary" />
                        <h3 className="text-lg font-semibold">{service.service}</h3>
                        <div className="ml-auto font-medium text-primary">{service.price}</div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                        <div className="flex items-center gap-2 text-sm">
                          <User size={16} className="text-gray-500" />
                          <span>{service.customer}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar size={16} className="text-gray-500" />
                          <span>{service.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className={i < service.rating ? "text-amber-400" : "text-gray-300"} 
                              fill={i < service.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">"{service.review}"</p>
                    </div>
                  </div>
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
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Your personal and professional details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center mb-6">
                    <Avatar className="h-28 w-28 mb-4">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Photo
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="text-base">John Smith</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-base">john.smith@example.com</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p className="text-base">(123) 456-7890</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Specialization</p>
                      <p className="text-base">Plumbing</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Years of Experience</p>
                      <p className="text-base">8 years</p>
                    </div>
                    <Button className="w-full">Edit Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Service Offerings</CardTitle>
                  <CardDescription>Services you provide and their pricing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Pipe Repair", rate: "$80 per hour", status: "Available" },
                      { name: "Faucet Installation", rate: "$120 per service", status: "Available" },
                      { name: "Drain Cleaning", rate: "$70 per service", status: "Available" },
                      { name: "Water Heater Repair", rate: "$150 per service", status: "Available" },
                      { name: "Toilet Installation", rate: "$200 per service", status: "Unavailable" }
                    ].map((service, i) => (
                      <div key={i} className="flex justify-between items-center p-3 border-b">
                        <div>
                          <p className="font-medium">{service.name}</p>
                          <p className="text-sm text-gray-600">{service.rate}</p>
                        </div>
                        <Badge variant={service.status === "Available" ? "default" : "secondary"}>
                          {service.status}
                        </Badge>
                      </div>
                    ))}
                    <Button className="w-full mt-2">Manage Services</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Schedule & Availability</CardTitle>
                  <CardDescription>Manage your working hours and availability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { day: "Monday", hours: "9:00 AM - 5:00 PM", status: "Available" },
                      { day: "Tuesday", hours: "9:00 AM - 5:00 PM", status: "Available" },
                      { day: "Wednesday", hours: "9:00 AM - 5:00 PM", status: "Available" },
                      { day: "Thursday", hours: "9:00 AM - 5:00 PM", status: "Available" },
                      { day: "Friday", hours: "9:00 AM - 5:00 PM", status: "Available" },
                      { day: "Saturday", hours: "10:00 AM - 2:00 PM", status: "Limited" },
                      { day: "Sunday", hours: "Not Available", status: "Unavailable" }
                    ].map((day, i) => (
                      <div key={i} className="flex justify-between items-center p-3 border-b">
                        <div className="w-32">{day.day}</div>
                        <div className="flex-1 text-center">{day.hours}</div>
                        <Badge variant={
                          day.status === "Available" ? "default" : 
                          day.status === "Limited" ? "outline" : "secondary"
                        }>
                          {day.status}
                        </Badge>
                      </div>
                    ))}
                    <Button className="w-full mt-2">Update Schedule</Button>
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

export default ProfessionalDashboard;
