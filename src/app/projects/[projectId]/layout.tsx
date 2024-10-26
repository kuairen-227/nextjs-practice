import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ProjectSidebar } from "@/features/projects/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロジェクト管理アプリ",
  description: "プロジェクト管理アプリのサンプルです",
};

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectId: string }>;
}) {
  const projectId = await (await params).projectId;

  return (
    <SidebarProvider>
      <ProjectSidebar projectId={projectId} />
      <main className="p-5">{children}</main>
    </SidebarProvider>
  );
}
