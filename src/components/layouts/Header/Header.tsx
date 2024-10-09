import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { NavProjects } from "./NavProjects";
import { ProfileIcon } from "./ProfileIcon";

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <IoHomeOutline width={100} height={100} />
        <Link href={"/"}>ダッシュボード</Link>
        <NavProjects />
      </div>
      <div className="flex items-center">
        <ProfileIcon />
      </div>
    </div>
  );
};
