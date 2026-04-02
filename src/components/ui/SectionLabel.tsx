import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel = ({ children, className }: SectionLabelProps) => {
  return (
    <div className={cn("mb-4 flex items-center gap-3", className)}>
      <span className="h-[2px] w-8 rounded-full bg-primary" />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary font-syne">
        {children}
      </span>
    </div>
  );
};

export default SectionLabel;
