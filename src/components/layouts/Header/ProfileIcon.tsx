import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

export const ProfileIcon = () => {
  // TODO: プロフィール機能の実装
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <CircleUserRound />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href={"/accounts"}>個人設定</Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
