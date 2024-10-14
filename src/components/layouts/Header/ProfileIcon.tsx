import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";

export const ProfileIcon = () => {
  // TODO: プロフィール機能の実装
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <VscAccount />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href={"/accounts"}>個人設定</Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
