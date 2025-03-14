import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, CheckCircle, XCircle, MinusCircle, Shield } from "lucide-react";
import React from "react";

const UsersTabList = () => {
  return (
    <TabsList className="w-full max-w-3xl grid grid-cols-5 bg-gray-100 p-1 rounded-lg h-full">
      <TabsTrigger
        value="all"
        className="flex items-center justify-center gap-2 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
      >
        <Users className="h-4 w-4" />
        <span>All</span>
      </TabsTrigger>
      <TabsTrigger
        value="verified"
        className="flex items-center justify-center gap-2 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
      >
        <CheckCircle className="h-4 w-4" />
        <span>Verified</span>
      </TabsTrigger>
      <TabsTrigger
        value="unverified"
        className="flex items-center justify-center gap-2 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
      >
        <XCircle className="h-4 w-4" />
        <span>Unverified</span>
      </TabsTrigger>
      <TabsTrigger
        value="deactivated"
        className="flex items-center justify-center gap-2 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
      >
        <MinusCircle className="h-4 w-4" />
        <span>Deactivated</span>
      </TabsTrigger>
      <TabsTrigger
        value="admin"
        className="flex items-center justify-center gap-2 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
      >
        <Shield className="h-4 w-4" />
        <span>Admin</span>
      </TabsTrigger>
    </TabsList>
  );
};

export default UsersTabList;
