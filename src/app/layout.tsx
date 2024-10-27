import "@/app/globals.css";
import { Header } from "@/components/layouts";
import type { Metadata } from "next";
import { MSWProvider } from "./msw-provider";

if (process.env.NEXT_RUNTIME === "nodejs") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { server } = require("../mocks/node");
  server.listen();
}

export const metadata: Metadata = {
  title: "プロジェクト管理アプリ",
  description: "プロジェクト管理アプリのサンプルです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-100">
        <MSWProvider>
          <header>
            <Header />
          </header>
          <main className="p-5">{children}</main>
        </MSWProvider>
      </body>
    </html>
  );
}
