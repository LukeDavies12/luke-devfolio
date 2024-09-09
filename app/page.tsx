import { Briefcase, Calendar, CheckCircle, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="py-2 container mx-auto px-4 lg:w-3/4 2xl:w-1/2">
      <div className="flex flex-col gap-3">
        <div>
          <h1>Luke Davies</h1>
          <p>Founder QB Logs, Student-Athlete</p>
        </div>
        <div>
          <h2>Projects</h2>
        </div>
        <div>
          <h2>Writing</h2>
        </div>
        <div>
          <h2 className="mb-2">Experience</h2>
          <div className="py-2 px-6 bg-white rounded-2xl">
            <h3 className="mb-2">Empirical Foods</h3>
            <div className="flex items-center">
              <Briefcase className="mr-2" size={14} />
              <span className="font-medium">Software Engineer Intern</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2" size={14} />
              <span>May 2023 - August 2024</span>
            </div>
            <div className="flex items-center mb-4">
              <Code className="mr-2" size={14} />
              <span>Power BI, Azure Logic Apps (Power Automate), C# Web APIs</span>
            </div>
            <p className="mb-4">Focused on report creation and API development across three internships: Summer '23, part-time Spring '24, and Summer '24. 40 hours a week in the summers.</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Achievement: Optimized Mislabeled Product Trackdown Process</h4>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 text-neutral-700 flex-shrink-0 mt-1" size={14} />
                  <span>Developed an automated system to replace manual next-day tracking of incorrectly labeled products from Dynamics AX 2009, saving 1,300 hours annually (25 hours/week)</span>
                </li>
                <li className="flex items-start">
                  <Code className="mr-2 text-neutral-700 flex-shrink-0 mt-1" size={14} />
                  <span>Designed and implemented a <span className="text-neutral-900">Data Warehouse</span> for product line scan queues, accompanied by a comprehensive <span className="text-neutral-900">Power BI report</span> and <span className="text-neutral-900">Power Automate solution</span></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-2 px-6 bg-white rounded-2xl mt-2">
            <h3 className="mb-2">Thompson Solutions Group</h3>
            <div className="flex items-center">
              <Briefcase className="mr-2" size={14} />
              <span className="font-medium">Software Engineer Intern</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2" size={14} />
              <span>May 2022 - August 2022</span>
            </div>
            <div className="flex items-center mb-4">
              <Code className="mr-2" size={14} />
              <span>Full-stack ASP .NET | Agribusiness Software</span>
            </div>
            <p className="mb-4">Gained hands-on experience in Full-stack ASP .NET development, contributing to maintenance management software in the agribusiness sector. 20 hours a week.</p>
          </div>
        </div>
        <div>
          <h2>Education</h2>
        </div>
      </div>
    </div>
  );
}
