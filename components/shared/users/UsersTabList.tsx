import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, CheckCircle, XCircle, MinusCircle, Shield } from "lucide-react";
import React from "react";

const tabs = [
  { value: "all", label: "All", icon: Users },
  { value: "verified", label: "Verified", icon: CheckCircle },
  { value: "unverified", label: "Unverified", icon: XCircle },
  { value: "deactivated", label: "Deactivated", icon: MinusCircle },
  { value: "admin", label: "Admin", icon: Shield },
];

const UsersTabList = () => {
  return (
    <TabsList className="w-full xl:max-w-3xl grid grid-cols-2 sm:grid-cols-5 bg-gray-100 p-1 rounded-lg h-full">
      {tabs.map(({ value, label, icon: Icon }) => (
        <TabsTrigger
          key={value}
          value={value}
          className="flex items-center justify-center gap-2 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all min-w-[100px]"
        >
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default UsersTabList;
