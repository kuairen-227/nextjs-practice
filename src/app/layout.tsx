import "@/app/globals.css";
import { Header } from "@/components/layouts";
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
    <html lang="ja">
      <body className="bg-gray-100">
        <header>
          <Header />
        </header>
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
