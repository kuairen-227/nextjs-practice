import { ProjectLinks } from "@/features/projects/components";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div>
      {/* TODO: 動的に写真と会社名を設定できるようにする */}
      <div className="flex justify-center">
        <Image src="/" width={50} height={50} alt="Company Icon" />
        <h1 className="font-bold text-xl">Your Company</h1>
      </div>
      <div>
        <ProjectLinks />
      </div>
    </div>
  );
}
