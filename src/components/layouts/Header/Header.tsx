import { House } from "lucide-react";
import Link from "next/link";
import { Filter } from "./Filter";
import { Help } from "./Help";
import { ModeToggle } from "./ModeToggle";
import { NavProjects } from "./NavProjects";
import { NavRecentView } from "./NavRecentView";
import { Notification } from "./Notification";
import { ProfileIcon } from "./ProfileIcon";
import { SearchBox } from "./SearchBox";
import { Watch } from "./Watch";

export const Header = () => {
  return (
    <div className="flex items-center justify-between border-y-2">
      <div className="flex items-center">
        <Link href={"/"}>
          <House />
        </Link>
        <Link href={"/"}>ダッシュボード</Link>
        <NavProjects />
        <NavRecentView />
        <Filter />
      </div>
      <div className="flex items-center">
        <ModeToggle />
        <SearchBox />
        <Watch />
        <Notification />
        <Help />
        <ProfileIcon />
      </div>
    </div>
  );
};
