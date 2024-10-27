import {
  ChartGantt,
  FileText,
  Folder,
  GitCommitHorizontal,
  GitGraph,
  House,
  List,
  Plus,
  Settings,
  SquareKanban,
  TableOfContents,
} from "lucide-react";

export const projectPages = [
  {
    title: "ホーム",
    url: "/",
    icon: House,
  },
  {
    title: "課題の追加",
    url: "/add",
    icon: Plus,
  },
  {
    title: "課題",
    url: "/find",
    icon: List,
  },
  {
    title: "ボード",
    url: "/board",
    icon: SquareKanban,
  },
  {
    title: "ガントチャート",
    url: "/gantt",
    icon: ChartGantt,
  },
  {
    title: "ドキュメント",
    url: "/document",
    icon: FileText,
  },
  {
    title: "Wiki",
    url: "/wiki",
    icon: TableOfContents,
  },
  {
    title: "ファイル",
    url: "file",
    icon: Folder,
  },
  {
    title: "Subversion",
    url: "/subversion",
    icon: GitCommitHorizontal,
  },
  {
    title: "Git",
    url: "/git",
    icon: GitGraph,
  },
  {
    title: "プロジェクト設定",
    url: "/settings",
    icon: Settings,
  },
];
