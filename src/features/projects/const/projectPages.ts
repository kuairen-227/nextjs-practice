import { BiSolidHome } from "react-icons/bi";
import { FaFolder, FaGitAlt, FaPlus } from "react-icons/fa";
import { FaChartGantt } from "react-icons/fa6";
import { FcWikipedia } from "react-icons/fc";
import { IoIosListBox, IoIosSettings } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineViewKanban } from "react-icons/md";
import { SiSubversion } from "react-icons/si";

export const projectPages = [
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
