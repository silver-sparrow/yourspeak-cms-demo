"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  BottomNavUser,
  NavMain,
  SidebarSwitcher,
} from "@/components/shared/common/sidebar";
import { SIDEBAR_DATA } from "@/context/sidebar-context";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={SIDEBAR_DATA.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <BottomNavUser user={SIDEBAR_DATA.user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
