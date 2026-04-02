"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer } from "@/lib/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  variant?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "staggerContainer";
  viewportOnce?: boolean;
}

const variantsMap: Record<string, Variants> = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer
};

const SectionWrapper = ({ 
  children, 
  className, 
  id, 
  delay = 0, 
  variant = "fadeInUp",
  viewportOnce = true
}: SectionWrapperProps) => {
  const selectedVariant = variantsMap[variant];

  return (
    <motion.section
      id={id}
      initial="initial"
      whileInView="animate"
      viewport={{ once: viewportOnce, margin: "-100px" }}
      variants={selectedVariant}
      transition={{ delay }}
      className={cn("relative overflow-hidden py-24 lg:py-32", className)}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
