import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ProjectList } from "@/feature/projects/api/getProjects";
import Link from "next/link";

export const NavProjects = () => {
  // TODO: プロジェクト一覧取得機能の実装
  const projects = ProjectList;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-gray-100 data-[state=open]:text-green-600">
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
