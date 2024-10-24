import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ProjectSidebar } from "@/features/projects/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロジェクト管理アプリ",
  description: "プロジェクト管理アプリのサンプルです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <ProjectSidebar />
      <main className="p-5">{children}</main>
    </SidebarProvider>
  );
}
