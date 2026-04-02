"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  href?: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, iconColor, href = "#", delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col items-start gap-4 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110", iconColor)}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-dark font-syne">{title}</h3>
      <p className="text-sm font-medium leading-relaxed text-text-muted">{description}</p>
      
      <Link href={href} className="mt-4 flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3">
        Learn More <ArrowRight className="h-4 w-4 text-primary" />
      </Link>

      {/* Decorative gradient */}
      <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
};

export default ServiceCard;
