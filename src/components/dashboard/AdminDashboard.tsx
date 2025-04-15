
import { useState } from "react";
import { Users, Settings, Package, Calendar, BarChart2, Bell, PlusCircle, UserCheck, UserX } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage users, services, and monitor platform activities</p>
      </header>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-3xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2,845</div>
                <p className="text-sm text-green-600 mt-1">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Active Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">164</div>
                <p className="text-sm text-green-600 mt-1">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Services Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">892</div>
                <p className="text-sm text-green-600 mt-1">+18% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Revenue Generated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$48,295</div>
                <p className="text-sm text-green-600 mt-1">+15% from last month</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>New service professionals requiring approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 30}.jpg`} />
                          <AvatarFallback>PR</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Professional Name {i}</p>
                          <p className="text-xs text-gray-500">Plumbing • 5 years experience</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <UserCheck size={16} />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-destructive">
                          <UserX size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest platform activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { icon: UserCheck, text: "New professional approved", time: "10 minutes ago" },
                    { icon: Package, text: "New service created", time: "45 minutes ago" },
                    { icon: Users, text: "New customer registered", time: "1 hour ago" },
                    { icon: Calendar, text: "Service request completed", time: "3 hours ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="mt-0.5">
                        <activity.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm">{activity.text}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage platform users</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Input className="w-64" placeholder="Search users..." />
                <Button>
                  <PlusCircle size={16} className="mr-2" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { name: "John Smith", email: "john@example.com", role: "Professional", status: "Active" },
                      { name: "Sarah Johnson", email: "sarah@example.com", role: "Professional", status: "Active" },
                      { name: "Michael Brown", email: "michael@example.com", role: "Customer", status: "Active" },
                      { name: "Amy Wilson", email: "amy@example.com", role: "Customer", status: "Active" },
                      { name: "David Lee", email: "david@example.com", role: "Professional", status: "Pending" },
                    ].map((user, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <Avatar>
                                <AvatarImage src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`} />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.role === "Professional" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm" className="text-destructive">Block</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="services" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Service Management</CardTitle>
                <CardDescription>Create and manage service offerings</CardDescription>
              </div>
              <Button>
                <PlusCircle size={16} className="mr-2" />
                Add Service
              </Button>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Price</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { name: "Home Cleaning", category: "Cleaning", price: "$50", status: "Active" },
                      { name: "Plumbing Repair", category: "Plumbing", price: "$80", status: "Active" },
                      { name: "Electrical Installation", category: "Electrical", price: "$90", status: "Active" },
                      { name: "Furniture Assembly", category: "Carpentry", price: "$60", status: "Active" },
                      { name: "Lawn Mowing", category: "Gardening", price: "$45", status: "Inactive" },
                    ].map((service, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{service.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{service.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{service.price}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            service.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}>
                            {service.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Reports</CardTitle>
              <CardDescription>Generate and download reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <Button variant="outline" className="p-6 h-auto flex flex-col items-center justify-center text-center">
                  <Users className="h-8 w-8 mb-2" />
                  <span className="text-lg font-medium">User Growth Report</span>
                  <span className="text-sm text-gray-500 mt-1">User registrations over time</span>
                </Button>
                <Button variant="outline" className="p-6 h-auto flex flex-col items-center justify-center text-center">
                  <Package className="h-8 w-8 mb-2" />
                  <span className="text-lg font-medium">Service Usage Report</span>
                  <span className="text-sm text-gray-500 mt-1">Most popular services</span>
                </Button>
                <Button variant="outline" className="p-6 h-auto flex flex-col items-center justify-center text-center">
                  <BarChart2 className="h-8 w-8 mb-2" />
                  <span className="text-lg font-medium">Revenue Report</span>
                  <span className="text-sm text-gray-500 mt-1">Financial performance</span>
                </Button>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Custom Report</CardTitle>
                  <CardDescription>Generate a customized report based on specific parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Report Type</label>
                        <select className="w-full border border-gray-300 rounded-md p-2">
                          <option>User Activity</option>
                          <option>Service Requests</option>
                          <option>Financial</option>
                          <option>Professional Performance</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Date Range</label>
                        <select className="w-full border border-gray-300 rounded-md p-2">
                          <option>Last 7 days</option>
                          <option>Last 30 days</option>
                          <option>Last 90 days</option>
                          <option>Custom</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Format</label>
                        <select className="w-full border border-gray-300 rounded-md p-2">
                          <option>CSV</option>
                          <option>PDF</option>
                          <option>Excel</option>
                        </select>
                      </div>
                    </div>
                    <Button>Generate Report</Button>
                  </form>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
