import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { Filter } from "./Filter";
import { Help } from "./Help";
import { NavProjects } from "./NavProjects";
import { NavRecentView } from "./NavRecentView";
import { Notification } from "./Notification";
import { ProfileIcon } from "./ProfileIcon";
import { SearchBox } from "./SearchBox";
import { Watch } from "./Watch";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Link href={"/"}>
          <IoHomeOutline width={100} height={100} />
        </Link>
        <Link href={"/"}>ダッシュボード</Link>
        <NavProjects />
        <NavRecentView />
        <Filter />
      </div>
      <div className="flex items-center">
        <SearchBox />
        <Watch />
        <Notification />
        <Help />
        <ProfileIcon />
      </div>
    </div>
  );
};
