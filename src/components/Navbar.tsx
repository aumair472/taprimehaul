"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./ui/Button";
import { SITE_CONFIG } from "@/constants";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Carriers", href: "/carriers" },
  { name: "Shippers", href: "/shippers" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        scrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-white/5" : "py-6 bg-white"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <motion.div
              animate={{ scale: scrolled ? 0.9 : 1 }}
              className="relative h-10 w-10 overflow-hidden"
            >
              <Image
                src="/logo.png"
                alt={SITE_CONFIG.name}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-dark font-syne">
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
                className="relative text-sm font-bold uppercase tracking-widest text-dark/70 transition-colors hover:text-dark group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Button size="sm" className="rounded-full px-6 shadow-lg shadow-primary/10" asChild>
              <Link href="/contact" className="flex items-center">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              className="text-dark focus:outline-none p-2 rounded-lg hover:bg-dark/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
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
                  <button onClick={() => setMobileMenuOpen(false)} className="text-white/60 hover:text-white">
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
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto space-y-6">
                  <Button className="w-full rounded-2xl h-14 text-lg" asChild>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Free Quote</Link>
                  </Button>
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
