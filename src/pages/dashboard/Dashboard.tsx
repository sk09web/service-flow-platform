
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminDashboard from "@/components/dashboard/AdminDashboard";
import ProfessionalDashboard from "@/components/dashboard/ProfessionalDashboard";
import CustomerDashboard from "@/components/dashboard/CustomerDashboard";
import Layout from "@/components/layout/Layout";

const Dashboard = () => {
  const [activeRole, setActiveRole] = useState("customer");

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 bg-white shadow-sm border rounded-lg p-4">
          <p className="text-center text-gray-500 mb-2">
            DEMO MODE: Switch between different user roles
          </p>
          <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="customer">Customer</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {activeRole === "customer" && <CustomerDashboard />}
        {activeRole === "professional" && <ProfessionalDashboard />}
        {activeRole === "admin" && <AdminDashboard />}
      </div>
    </Layout>
  );
};

export default Dashboard;
