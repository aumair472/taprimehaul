import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Newsletter from "./Newsletter";

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
              <span className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white text-xl">S</span>
              <span className="text-2xl font-bold tracking-tight text-white font-syne">
                TA<span className="text-primary font-dm-sans">PRIME</span>
                HAUL
              </span>
            </Link>
            <p className="text-sm font-medium leading-relaxed text-text-muted">
              Pioneering the future of logistics with tech-driven solutions. SwiftLogix provides reliable, efficient, and transparent supply chain management for global businesses.
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
                  <Link href="#" className="transition-colors hover:text-primary">
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
                <span>123 Logistics Way, Suite 500,<br />Chicago, IL 60601, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+1 (800) 555-SWIFT</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@taprimehaul.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 lg:flex-row">
          <p className="text-xs font-medium text-text-muted">
            © {currentYear} Taprimehaul. All rights reserved.
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
