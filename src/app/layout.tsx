import { Header } from "@/components/layouts";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-gray-100">
        <header>
          <Header />
        </header>
        <div className="p-5">{children}</div>
      </body>
    </html>
  );
}
