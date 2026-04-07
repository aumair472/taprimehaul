"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  Users,
  TrendingUp,
  Quote,
  Clock,
  Map,
  MessageSquare,
  Maximize,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const features = [
  {
    title: "Experienced Logistics Professionals",
    icon: Users,
    desc: "Our team brings real-world logistics and freight handling experience to ensure smooth and efficient operations.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Reliable & On-Time Delivery",
    icon: Clock,
    desc: "We prioritize punctuality and consistency so your shipments arrive exactly when expected.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Nationwide Coverage",
    icon: Map,
    desc: "We provide freight solutions across the United States with a strong and growing network.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Customer-First Approach",
    icon: Heart,
    desc: "We work closely with our clients to understand their needs and deliver tailored solutions.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Transparent Communication",
    icon: MessageSquare,
    desc: "Stay informed with clear updates and responsive support throughout the shipping process.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Scalable Solutions",
    icon: Maximize,
    desc: "Whether small shipments or large freight operations, we grow with your business.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const values = [
  { title: "Excellence", icon: Star, desc: "We strive for perfection in every delivery and logistics solution we provide." },
  { title: "Integrity", icon: ShieldCheck, desc: "Honesty and transparency are at the core of our relationships with partners and clients." },
  { title: "Collaboration", icon: Users, desc: "We believe in the power of partnership to solve the world's complex logistics challenges." },
  { title: "Innovation", icon: TrendingUp, desc: "Constantly pushing boundaries with new technologies to lead the industry forward." }
];

export default function AboutClient() {
  return (
    <main className="flex flex-col bg-dark overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_hero_bg.webp"
            alt="Logistics Excellence"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/50 to-dark" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <Badge variant="primary" className="mb-6 uppercase tracking-widest px-6 py-2">About Us</Badge>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-8 mx-auto text-5xl font-bold leading-[1.1] text-white font-syne sm:text-7xl lg:text-8xl tracking-tight"
          >
            Efficiency Driven by <br /><span className="text-primary italic">Expertise.</span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-12 max-w-3xl mx-auto text-lg sm:text-xl font-medium text-white/50 leading-relaxed"
          >
            We are a team of logistics specialists dedicated to providing reliable, tech-enabled freight solutions across North America.
          </motion.p>

          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
             <Button size="lg" className="rounded-full h-16 px-10 text-lg group" asChild>
                <a href="#why-choose-us">
                  Discover Our Value <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
             </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="relative z-20 py-32 bg-[#0A0C11]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Badge variant="primary" className="mb-6 opacity-80">Our Value</Badge>
              <h2 className="mb-6 text-4xl font-bold text-white font-syne sm:text-6xl tracking-tight leading-tight">
                Why Choose <span className="text-primary">Taprime Haul</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg font-medium text-white/40 leading-relaxed">
                Delivering reliable freight solutions backed by real industry expertise and commitment.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative flex flex-col gap-6 rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-10 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-2xl" />
                
                <div className={cn("relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl", feature.bg)}>
                  <feature.icon className={cn("h-8 w-8", feature.color)} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white font-syne mb-4 tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm font-medium text-white/40 leading-relaxed">{feature.desc}</p>
                </div>

                {/* Decorative corner tag */}
                <div className="absolute top-6 right-6 h-1 w-8 rounded-full bg-white/5 transition-all group-hover:bg-primary group-hover:w-12" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24 text-center"
          >
            <p className="text-2xl sm:text-3xl font-bold font-syne text-white/90 italic tracking-tight">
              &ldquo;Built on experience. Driven by reliability. Focused on your success.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <SectionWrapper className="bg-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInLeft}>
              <SectionLabel className="text-primary border-primary/20 bg-primary/10">Our Philosophy</SectionLabel>
              <h2 className="mb-6 text-4xl font-bold text-white font-syne sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                A Fresh Perspective <br /> on Global Freight
              </h2>
              <div className="space-y-6 text-lg font-medium text-white/40 leading-relaxed">
                <p>
                  At TA Prime Haul, we believe that logistics is more than just moving freight—it&apos;s about creating trust through transparency and reliability. Our team combined decades of industry experience to build a service that prioritizes the customer experience at every step.
                </p>
                <p>
                  By leveraging the latest technology and maintaining a high-touch personal approach, we ensure that your shipments are handled with the care and precision they deserve. Whether you are a small business or a large corporation, we adapt to your specific needs.
                </p>
              </div>

              <div className="mt-12 flex flex-col gap-6 rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-32 w-32 bg-primary/10 rounded-bl-[5rem] -mr-16 -mt-16 transition-all group-hover:scale-110" />
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary opacity-40 relative z-10" />
                <p className="text-xl sm:text-2xl font-bold italic text-white relative z-10 leading-snug">
                  &ldquo;Our mission is to empower businesses with seamless connectivity and dependable logistics solutions.&rdquo;
                </p>
                <div className="flex items-center gap-4 relative z-10 mt-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/40 shadow-xl shrink-0 grayscale hover:grayscale-0 transition-all">
                    <Image src="/images/ceo_avatar.webp" alt="Tanvir Ahmed" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Tanvir Ahmed</h4>
                    <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">Founder & Director</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[3.5rem] shadow-2xl group border border-white/10"
            >
              <Image
                src="/images/why_choose_us.webp"
                alt="TA Prime Haul Operations"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="p-6 rounded-3xl bg-dark/60 backdrop-blur-xl border border-white/10">
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Our Commitment</p>
                    <p className="text-lg font-bold text-white leading-tight">Every mile tracked. <br />Every shipment valued.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper className="bg-dark text-white relative overflow-hidden">
        {/* Background glow stuff */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <Badge variant="primary" className="mb-6 opacity-80">Our Core Principles</Badge>
          <h2 className="mb-10 text-4xl font-bold text-white font-syne sm:text-6xl tracking-tight leading-tight">
            What Drives Our Service
          </h2>
          <p className="mb-24 mx-auto max-w-2xl text-lg font-medium text-white/40 leading-relaxed">
            Our culture is built on values that guide our decisions and ensure we provide the best service to our partners and clients.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-6 rounded-[2.5rem] bg-white/5 p-10 border border-white/10 hover:bg-white/[0.08] transition-all group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold font-syne text-white group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-white/40">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
