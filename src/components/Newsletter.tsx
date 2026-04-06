"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="relative z-10 -mb-20 px-6 lg:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#0F1117] border border-white/5 p-8 shadow-2xl lg:flex-row lg:p-12"
        >
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-bold text-white font-syne lg:text-4xl">
              Stay ahead in <span className="text-primary italic">logistics</span>
            </h2>
            <p className="text-text-muted">
              Subscribe to our newsletter for the latest industry insights, supply chain tips, and TA Prime Haul updates.
            </p>
          </div>

          <form
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-14 flex-1 rounded-md bg-white/5 border border-white/10 px-6 font-medium text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <Button className="h-14 gap-2 whitespace-nowrap">
              Subscribe Now <Send className="h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
