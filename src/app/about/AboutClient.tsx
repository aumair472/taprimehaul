"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Star,
  Heart,
  Users,
  TrendingUp,
  Quote,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "@/lib/animations";

const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "150+", label: "Countries Served" },
  { value: "15M+", label: "Shipments Delivered" }
];

const values = [
  { title: "Excellence", icon: Star, desc: "We strive for perfection in every delivery and logistics solution we provide." },
  { title: "Integrity", icon: Heart, desc: "Honesty and transparency are at the core of our relationships with partners and clients." },
  { title: "Collaboration", icon: Users, desc: "We believe in the power of partnership to solve the world's complex logistics challenges." },
  { title: "Innovation", icon: TrendingUp, desc: "Constantly pushing boundaries with new technologies to lead the industry forward." }
];

const timeline = [
  { year: "2010", title: "Company Founded", desc: "SwiftLogix started as a small local courier with 3 trucks and a vision." },
  { year: "2014", title: "National Expansion", desc: "Expanded operations to cover all major cities and coastal ports." },
  { year: "2016", title: "Tech Platform Launch", desc: "Introduced our proprietary real-time tracking and routing platform." },
  { year: "2019", title: "International Growth", desc: "Opened international offices and established global shipping networks." },
  { year: "2022", title: "10K Carriers", desc: "Reached the milestone of 10,000 active partner carriers in our network." }
];

export default function AboutClient() {
  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-dark pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_hero_bg.png"
            alt="Logistics Center"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/50 to-dark" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <Badge variant="primary" className="mb-6">About Us</Badge>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-6 max-w-4xl mx-auto text-4xl font-bold leading-tight text-white font-syne sm:text-5xl lg:text-6xl tracking-tight"
          >
            Moving the World Forward, <br /> One Shipment at a Time
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-8 max-w-2xl mx-auto text-lg sm:text-xl font-medium text-text-muted"
          >
            Since 2010, we&apos;ve been transforming the logistics industry through technology, reliability, and an unwavering commitment to our clients&apos; success.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-3xl font-bold text-primary font-syne sm:text-4xl lg:text-5xl">{stat.value}</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInLeft}>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="mb-6 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight leading-tight">
                From Humble Beginnings to Industry Leader
              </h2>
              <div className="space-y-6 text-lg font-medium text-gray-500 leading-relaxed">
                <p>
                  Founded in 2010, SwiftLogix began with a simple goal: to make shipping easier for small businesses. What started as local delivery service with just three trucks has grown into a global logistics powerhouse serving over 150 countries.
                </p>
                <p>
                  Throughout our journey, we&apos;ve remained true to our core principles of transparency and efficiency. By investing heavily in proprietary technology early on, we revolutionized how freight is tracked and managed, setting new standards for the entire industry.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-6 rounded-3xl bg-gray-50 p-8 border-l-4 border-primary shadow-sm">
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary opacity-20" />
                <p className="text-lg sm:text-xl font-bold italic text-dark">
                  &ldquo;Our mission isn&apos;t just to move boxes; it&apos;s to empower businesses to reach their full potential through seamless global connectivity.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full ring-2 ring-primary/20 shadow-lg shrink-0">
                    <Image src="/images/ceo_avatar.png" alt="Saiki Mitchell" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm sm:text-base">Saiki Mitchell</h4>
                    <p className="text-[10px] sm:text-sm font-bold text-primary uppercase tracking-widest">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl"
            >
              <Image
                src="/images/why_choose_us.png"
                alt="SwiftLogix Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-60" />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-start gap-6 rounded-[2.5rem] sm:rounded-[3rem] bg-white p-8 sm:p-10 shadow-xl shadow-black/5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm shadow-primary/20">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark font-syne">Our Mission</h3>
              <p className="text-lg font-medium leading-relaxed text-gray-500">
                To revolutionize logistics by providing seamless, technology-driven solutions that empower businesses of all sizes to thrive in a global marketplace.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-start gap-6 rounded-[2.5rem] sm:rounded-[3rem] bg-white p-8 sm:p-10 shadow-xl shadow-black/5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm shadow-blue-600/20">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark font-syne">Our Vision</h3>
              <p className="text-lg font-medium leading-relaxed text-gray-500">
                To be the world&apos;s most trusted logistics partner, connecting every corner of the globe through innovation and a service-first heart.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-dark text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Badge variant="primary" className="mb-6">Our Values</Badge>
          <h2 className="mb-6 text-3xl font-bold text-white font-syne sm:text-4xl lg:text-7xl tracking-tight">
            What Drives Us Every Day
          </h2>
          <p className="mb-20 mx-auto max-w-2xl text-lg font-medium text-text-muted">
            Our culture is built on values that guide our decisions and ensure we provide the best service to our partners and clients.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 rounded-3xl bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform group-hover:scale-110">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold font-syne group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-text-muted">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-dark pt-0 pb-32 overflow-visible">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <Badge variant="primary" className="mb-6">Our Journey</Badge>
            <h2 className="mb-6 text-3xl font-bold text-white font-syne sm:text-4xl lg:text-7xl tracking-tight">
              Milestones That Define Us
            </h2>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 sm:translate-x-0 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                className={cn(
                  "relative mb-16 flex w-full items-center justify-between",
                  i % 2 !== 0 ? "sm:flex-row-reverse" : "flex-row",
                  "flex-col sm:flex-row items-center sm:items-center"
                )}
              >
                <div className="w-full sm:w-[45%] flex flex-col gap-2 pl-12 sm:pl-0 sm:items-baseline">
                  <div className={cn("flex flex-col", (i % 2 === 0 ? "sm:items-end sm:text-right text-left" : "sm:items-start sm:text-left text-left"))}>
                    <span className="text-2xl font-black text-primary font-syne">{item.year}</span>
                    <h4 className="text-xl font-bold text-white font-syne">{item.title}</h4>
                    <p className="text-sm font-medium text-text-muted max-w-sm mt-2">{item.desc}</p>
                  </div>
                </div>

                <div className="absolute left-4 sm:left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-dark ring-4 ring-primary shadow-lg shadow-primary/40 sm:translate-x-0">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>

                <div className="hidden sm:block sm:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
