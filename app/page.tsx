import Link from "next/link";
import Experiences from "./Experiences";

export default function Home() {
  return (
    <div className="py-4 container mx-auto px-4 lg:w-3/4 2xl:w-1/2">
      <h1>Luke Davies</h1>
      <p>Frontend Developer, <Link href="/2024-2025_Briar_Cliff_CS_Outline.pdf">Briar Cliff University Computer Science</Link></p>
      <h2 className="mt-8 mb-1">Projects</h2>
      <a href="https://github.com/LukeDavies12/qblogs?tab=readme-ov-file" className="block">QB Logs</a>
      <a href="https://github.com/LukeDavies12/daviescards" className="block mt-1">Davies Cards</a>
      <h2 className="mt-8 mb-1">Writing</h2>
      <Link href={"/update-ux"}>App Router: Crafting a Clean UX for Update Pages</Link>
      <h2 className="mt-8 mb-1">Internship Experience</h2>
      <Experiences />
    </div>
  );
}
