"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  avatar: string;
  delay?: number;
}

const TestimonialCard = ({ quote, author, title, company, rating, avatar, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-dark-card p-8 shadow-2xl transition-all hover:border-primary/30 hover:shadow-primary/5"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Quote className="h-6 w-6" />
      </div>

      <p className="text-lg font-medium leading-relaxed italic text-white/90">
        "{quote}"
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/10">
             <div className="flex h-full w-full items-center justify-center text-xs font-bold text-white uppercase italic">
                {author[0]}{author.split(' ')[1]?.[0] || ''}
             </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white font-syne">{author}</h4>
            <p className="text-xs font-medium text-text-muted">{title}, {company}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${i < rating ? "fill-primary text-primary" : "fill-white/10 text-white/10"}`}
            />
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-primary/5 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
};

export default TestimonialCard;
