"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark">
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo Placeholder / Symbol */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/20"
        >
          <div className="h-8 w-8 rounded-lg bg-primary shadow-lg shadow-primary/40" />
        </motion.div>

        {/* Progress Bar Container */}
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>
        
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">
          Loading SwiftLogix
        </span>
      </div>
    </div>
  );
}
