"use client"

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type ExperienceItemProps = {
  company: string;
  header: React.ReactNode;
  children: React.ReactNode;
};

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <div
        className="flex justify-between items-center py-2 px-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold">{company}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && (
        <div className="py-2 px-6">
          {header}
          {children}
        </div>
      )}
    </div>
  );
};