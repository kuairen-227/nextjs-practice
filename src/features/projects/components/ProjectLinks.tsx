import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "../api";

export const ProjectLinks = async () => {
  const projects = await getProjects();

  return (
    <>
      {/* TODO: 課題とかも選択できるようにする */}
      <Accordion type="single" collapsible>
        <AccordionItem value="projects">
          <AccordionTrigger>プロジェクト</AccordionTrigger>
          <AccordionContent>
            {projects.map((project) => (
              <Link
                href={`/projects/${project.id}`}
                className="flex bg-white border"
              >
                <Image src="/" width={50} height={50} alt="Project Icon" />
                {project.name}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
