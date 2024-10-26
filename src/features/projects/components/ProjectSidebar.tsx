import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { projectPages } from "../const/projectPages";

import Link from "next/link";

type ProjectSidebarProps = {
  projectId: string;
};

export const ProjectSidebar = ({ projectId }: ProjectSidebarProps) => {
  const baseUrl = `/projects/${projectId}`;

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-green-950">
        <SidebarMenu>
          <SidebarTrigger />
          {projectPages.map((page) => (
            <SidebarMenuItem key={page.title}>
              <SidebarMenuButton asChild>
                <Link href={baseUrl + page.url}>
                  <page.icon />
                  <span>{page.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
