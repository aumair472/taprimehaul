import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import Newsletter from "./Newsletter";
import { SITE_CONFIG } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#08090C] pt-40 pb-12">
      <Newsletter />

      <div className="container mx-auto px-6 lg:px-12 mt-20 lg:mt-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt={SITE_CONFIG.name} 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-syne">
                TA<span className="text-primary font-dm-sans">PRIME</span>
                HAUL
              </span>
            </Link>
            <p className="text-sm font-medium leading-relaxed text-text-muted">
              Pioneering the future of logistics with tech-driven solutions. {SITE_CONFIG.name} provides reliable, efficient, and transparent supply chain management for global businesses.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-primary hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white font-syne">Services</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-text-muted">
              {["Freight Forwarding", "Warehousing", "Supply Chain", "Last Mile Delivery", "Customs Brokerage"].map((item) => (
                <li key={item}>
                  <Link href="#" className="transition-colors hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white font-syne">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-text-muted">
              {["About Us", "Our Team", "Careers", "Case Studies", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Contact" ? "/contact" : "#"} className="transition-colors hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold text-white font-syne">Contact Info</h4>
            <ul className="flex flex-col gap-6 text-sm font-medium text-text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  aria-label="Call Taprime Haul"
                  className="flex items-center gap-3 transition-colors hover:text-primary group"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-bold text-white group-hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4 ring-primary/20">
                    {SITE_CONFIG.phone}
                  </span>
                </a>
              </li>
              <li className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.email.primary}`} className="hover:text-primary transition-colors">
                    {SITE_CONFIG.email.primary}
                  </a>
                </div>
                <div className="flex items-center gap-3 ml-0">
                   <Mail className="h-5 w-5 text-primary shrink-0 opacity-0" />
                  <a href={`mailto:${SITE_CONFIG.email.secondary}`} className="hover:text-primary transition-colors">
                    {SITE_CONFIG.email.secondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/50">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>{SITE_CONFIG.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 lg:flex-row">
          <p className="text-xs font-medium text-text-muted">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-medium text-text-muted">
            <Link href="#" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="#" className="transition-colors hover:text-white">Terms of Service</Link>
            <Link href="#" className="transition-colors hover:text-white">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
