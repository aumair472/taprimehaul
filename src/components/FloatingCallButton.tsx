"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 300px scroll
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-8 right-6 z-[60] lg:hidden"
        >
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            aria-label="Call Taprime Haul Now"
            className="group relative flex h-16 w-16 items-center justify-center"
          >
            {/* Ping animation background */}
            <div className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
            
            {/* Main button */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/40 transition-transform active:scale-95">
              <Phone className="h-7 w-7" />
            </div>
            
            {/* Tooltip-like label */}
            <div className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-dark/90 px-3 py-1.5 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
              Call Now
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCallButton;
