import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getProjects } from "@/features/projects/api";
import Link from "next/link";

/**
 * プロジェクトナビゲーション
 */
export const NavProjects = async () => {
  const projects = await getProjects();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="data-[state=open]:text-green-600">
            プロジェクト
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {project.name}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
