"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({ label, value, icon, className }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-dark-card p-6 shadow-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-primary/5",
        className
      )}
    >
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
        )}
        <h3 className="mb-1 bg-gradient-to-br from-white to-white/60 bg-clip-text text-3xl font-bold text-transparent font-syne">
          {value}
        </h3>
        <p className="text-sm font-medium text-text-muted">{label}</p>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:bg-primary/10 group-hover:opacity-100" />
    </motion.div>
  );
};

export default StatCard;
