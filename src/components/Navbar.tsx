"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Carriers", href: "/carriers" },
  { name: "Shippers", href: "/shippers" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-dark/90 border-b border-white/5 backdrop-blur-xl py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <motion.div
              animate={{ scale: scrolled ? 0.9 : 1 }}
              className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-primary/20 transition-transform group-hover:rotate-12"
            >
              T
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-white font-syne">
              TA<span className="text-primary font-dm-sans">PRIME</span>
              HAUL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button size="sm" className="rounded-full px-6 shadow-lg shadow-primary/10">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-white lg:hidden focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-screen w-[300px] bg-dark-card border-l border-white/10 shadow-2xl lg:hidden p-8"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                    <X className="h-8 w-8" />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-2xl font-bold font-syne text-white transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button className="w-full rounded-2xl h-14 text-lg">Get Free Quote</Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
