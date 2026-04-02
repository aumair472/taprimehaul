"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Activity,
  Map,
  ShieldCheck,
  Zap,
  Truck,
  Ship,
  Plane,
  Warehouse,
  Package,
  Network,
  CheckCircle2,
  Phone,
  Globe,
} from "lucide-react";

import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/lib/animations";

export default function HomeClient() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark pt-32 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="Logistics background"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/50 to-dark" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInLeft}
              className="flex flex-col items-start"
            >
              <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-4 backdrop-blur-md">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
                  Trusted by 15K+ businesses worldwide
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-white font-syne sm:text-5xl lg:text-5xl">
                Seamless Logistics <br />
                <span className="text-primary italic">Delivered</span> Right
              </h1>
              <p className="mb-10 max-w-lg text-lg font-medium leading-relaxed text-text-muted">
                Transform your supply chain with our end-to-end logistics solutions. From freight to last-mile delivery, we make shipping simple and reliable.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-10 h-14 rounded-full">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-10 h-14 gap-2 rounded-full border-white/20 text-white hover:bg-white/10">
                  <Play className="h-4 w-4 fill-current" /> Watch Demo
                </Button>
              </div>

              {/* Stats Row */}
              <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 w-full">
                <div className="flex flex-col gap-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-syne">15K+</div>
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-text-muted">Deliveries Made</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-syne">99.8%</div>
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-text-muted">On-Time Rate</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-syne">150+</div>
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-text-muted">Countries Served</div>
                </div>
              </div>
            </motion.div>

            {/* Right Feature Cards */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
            >
              {[
                { title: "Real-Time Tracking", desc: "Monitor your shipment 24/7", icon: Activity },
                { title: "Smart Routing", desc: "Optimized paths for speed", icon: Map },
                { title: "Secure Handling", desc: "Fragile items, safe hands", icon: ShieldCheck },
                { title: "Fast Delivery", desc: "Priority shipping global", icon: Zap },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition-all hover:bg-white/10"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white font-syne tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-text-muted">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5 shadow-2xl">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-2 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. SERVICES SECTION */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              Our Services
            </div>
            <h2 className="mb-4 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight">
              Comprehensive Logistics Solutions
            </h2>
            <p className="max-w-2xl text-lg font-medium text-gray-500">
              From freight transport to supply chain management, we offer end-to-end logistics services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Full Truckload (FTL)", icon: Truck, color: "bg-blue-600", desc: "Dedicated truck capacity for large shipments with direct and efficient delivery.", href: "/services/full-truckload" },
              { title: "Less Than Truckload (LTL)", icon: Package, color: "bg-emerald-600", desc: "Cost-effective shipping for smaller loads with flexible scheduling.", href: "/services/less-than-truckload" },
              { title: "Warehousing & Distribution", icon: Warehouse, color: "bg-orange-600", desc: "Secure storage, inventory support, and fast fulfillment operations.", href: "/services/warehousing" },
              { title: "Hazmat Transport", icon: ShieldCheck, color: "bg-purple-600", desc: "Safe and compliant transportation for hazardous freight.", href: "/services/hazmat" },
              { title: "Customs Clearance", icon: Globe, color: "bg-sky-500", desc: "Cross-border documentation and clearance coordination.", href: "/services/customs" },
              { title: "Drop Trailer Services", icon: Network, color: "bg-rose-500", desc: "Flexible drop-and-hook services to reduce dock wait times.", href: "/services/drop-trailer" }
            ].map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                description={service.desc}
                icon={service.icon}
                iconColor={service.color}
                href={service.href}
                delay={i * 0.1}
              />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/services">
              <Button variant="primary" className="bg-dark hover:bg-black group px-10 h-14 rounded-full">
                View All Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. WHY CHOOSE US */}
      <SectionWrapper className="bg-white pt-0">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <motion.div initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Why Choose Us
              </div>
              <h2 className="mb-6 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight">
                Your Trusted Logistics Partner
              </h2>
              <p className="mb-10 text-lg font-medium text-gray-500">
                We combine industry-leading technology and dedicated expertise to provide logistical excellence that drives your business forward.
              </p>

              {/* 2x2 Benefits Grid */}
              <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {[
                  { title: "Secure & Reliable", icon: ShieldCheck, desc: "Total safety for your cargo with 24/7 monitoring." },
                  { title: "Fast Delivery", icon: Zap, desc: "Optimized routes to guarantee on-time arrival." },
                  { title: "24/7 Support", icon: Phone, desc: "Personal account manager for your shipments." },
                  { title: "Global Network", icon: Globe, desc: "Connecting 150+ countries with seamless transit." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex flex-col gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{item.title}</h4>
                      <p className="text-xs font-medium text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Checklist */}
              <div className="mb-10 grid grid-cols-1 gap-4 border-t border-gray-100 pt-8 sm:grid-cols-2">
                <ul className="flex flex-col gap-3">
                  {[
                    "Real-time tracking",
                    "Reliable scheduling",
                    "Dedicated account manager"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-3">
                  {[
                    "Competitive pricing",
                    "Custom solutions",
                    "Quality assurance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Image */}
            <div className="relative">
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-2xl"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/why_choose_us.png"
                    alt="Logistics Expert"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle overlay to match premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
                </div>
              </motion.div>

              {/* Overlay Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8 lg:-left-12 lg:p-10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-dark font-syne">99.8%</div>
                    <div className="text-[10px] sm:text-xs font-bold text-gray-400">Customer Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. TESTIMONIALS */}
      <SectionWrapper className="bg-dark">
        <div className="container mx-auto px-6 lg:px-12 text-center items-center flex flex-col">
          <div className="mb-16 flex flex-col items-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md">
              Testimonials
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white font-syne sm:text-4xl lg:text-6xl tracking-tight">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl text-lg font-medium text-text-muted">
              Discover why thousands of businesses trust SwiftLogix as their preferred logistics partner for global success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            <TestimonialCard
              quote="SwiftLogix has revolutionized our supply chain. Their real-time tracking is second to none, giving us complete peace of mind."
              author="Sarah Johnson"
              title="Supply Chain Director"
              company="Apex Manufacturing"
              rating={5}
              avatar="/avatars/avatar_2.png"
            />
            <TestimonialCard
              quote="The most reliable logistics partner we've ever worked with. Their customs expertise saved us thousands in potential delays."
              author="Michael Chen"
              title="Operations Manager"
              company="Global Trade Inc."
              rating={5}
              avatar="/avatars/avatar_3.png"
              delay={0.1}
            />
            <TestimonialCard
              quote="Fast, efficient, and professional. Their last-mile delivery team helped us reach customers in record time across Europe."
              author="Emily Rodriguez"
              title="CEO"
              company="EuroRetail Solutions"
              rating={5}
              avatar="/avatars/avatar_1.png"
              delay={0.2}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* 5. CTA BANNER */}
      <section className="px-4 sm:px-6 lg:px-12 pb-24 lg:pb-32 bg-white pt-10">
        <div className="container mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-orange-400 via-primary to-orange-700 p-8 shadow-2xl lg:flex-row lg:p-16 relative"
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 h-64 w-64 bg-white/10 blur-[100px] -rotate-45" />

            <div className="max-w-2xl text-center lg:text-left relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-white font-syne sm:text-4xl lg:text-6xl tracking-tight leading-[1.1]">
                Ready to Transform <br /> Your Logistics?
              </h2>
              <p className="mb-10 text-lg font-medium text-white/90 leading-relaxed">
                Join thousands of businesses streamlining their supply chain with SwiftLogix. Get a custom quote tailored to your business needs today.
              </p>

              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Button size="lg" className="bg-white text-primary hover:bg-orange-50 px-10 h-14 rounded-full shadow-xl shadow-black/10">
                  Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border border-white/40 text-white hover:bg-white/10 px-10 h-14 rounded-full">
                  Call Us Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
