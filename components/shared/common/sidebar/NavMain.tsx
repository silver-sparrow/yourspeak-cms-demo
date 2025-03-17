"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
const NavMain = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: LucideIcon;
    }[];
  }[];
}) => {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isGroupActive = item.items?.some(
            (subItem) => pathname === subItem.url
          );

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isGroupActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton isActive={isGroupActive}>
                    {item.icon && <item.icon />}
                    <span className="font-semibold text-md">{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub className="pt-2">
                    {item.items?.map((subItem) => {
                      const isActive =
                        pathname === subItem.url ||
                        pathname.startsWith(subItem.url + "/");

                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild data-active={isActive}>
                            <Link href={subItem.url}>
                              <>
                                {subItem.icon && (
                                  <span>
                                    <subItem.icon className="size-4" />
                                  </span>
                                )}
                                <span>{subItem.title}</span>
                              </>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
