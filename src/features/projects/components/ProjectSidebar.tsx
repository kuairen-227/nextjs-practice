import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { BiSolidHome } from "react-icons/bi";
import { FaFolder, FaGitAlt, FaPlus } from "react-icons/fa";
import { FaChartGantt } from "react-icons/fa6";
import { FcWikipedia } from "react-icons/fc";
import { IoIosListBox, IoIosSettings } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineViewKanban } from "react-icons/md";
import { SiSubversion } from "react-icons/si";

import Link from "next/link";

const items = [
  {
    title: "ホーム",
    url: "/",
    icon: BiSolidHome,
  },
  {
    title: "課題の追加",
    url: "/add",
    icon: FaPlus,
  },
  {
    title: "課題",
    url: "/find",
    icon: IoIosListBox,
  },
  {
    title: "ボード",
    url: "/board",
    icon: MdOutlineViewKanban,
  },
  {
    title: "ガントチャート",
    url: "/gantt",
    icon: FaChartGantt,
  },
  {
    title: "ドキュメント",
    url: "/document",
    icon: IoDocumentTextOutline,
  },
  {
    title: "Wiki",
    url: "/wiki",
    icon: FcWikipedia,
  },
  {
    title: "ファイル",
    url: "file",
    icon: FaFolder,
  },
  {
    title: "Subversion",
    url: "/subversion",
    icon: SiSubversion,
  },
  {
    title: "Git",
    url: "/git",
    icon: FaGitAlt,
  },
  {
    title: "プロジェクト設定",
    url: "/settings",
    icon: IoIosSettings,
  },
];

export const ProjectSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-green-950">
        <SidebarMenu>
          <SidebarTrigger />
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
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
