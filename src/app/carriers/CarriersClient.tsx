"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Truck,
  Wallet,
  Clock,
  Smartphone,
  ShieldCheck,
  Headset,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import StatCard from "@/components/ui/StatCard";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const benefits = [
  {
    title: "Competitive Pay",
    description: "Top-of-market rates with multiple payment cycles. Get paid within 48 hours of delivery confirmation.",
    icon: Wallet
  },
  {
    title: "Flexible Schedule",
    description: "Choose loads that fit your schedule. Take control of your time and maximize your revenue.",
    icon: Clock
  },
  {
    title: "Easy-to-Use Platform",
    description: "Modern driver app for seamless load booking, navigation, and documentation management.",
    icon: Smartphone
  },
  {
    title: "Insurance Coverage",
    description: "Comprehensive cargo insurance and liability protection for peace of mind on every trip.",
    icon: ShieldCheck
  },
  {
    title: "Dedicated Support",
    description: "24/7 carrier support team to assist with any issues on the road, from dispatch to delivery.",
    icon: Headset
  },
  {
    title: "Growth Opportunities",
    description: "Expand your business with consistent freight volume and preferred partner status.",
    icon: TrendingUp
  }
];

export default function CarriersClient() {
  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/carrier_hero_bg.png"
            alt="Truck on highway"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/30 to-dark" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInLeft}
              className="flex flex-col items-start"
            >
              <Badge variant="primary" className="mb-6">
                For Carriers
              </Badge>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white font-syne sm:text-4xl lg:text-5xl">
                Drive Your Success <br />
                With Us
              </h1>
              <p className="mb-10 max-w-lg text-lg font-medium leading-relaxed text-text-muted">
                Join our network of 10,000+ carriers and access premium freight, competitive rates, and the support you need to grow your business.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-10 h-14">
                  Become a Carrier <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="ghost" className="rounded-full px-10 h-14 gap-2 border-white/20 text-white hover:bg-white/10 transition-colors">
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
            >
              {[
                { value: "10K+", label: "Active Carriers" },
                { value: "$5M+", label: "Weekly Payouts" },
                { value: "48hr", label: "Payment Speed" },
                { value: "4.9/5", label: "Carrier Rating" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <StatCard value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              Carrier Benefits
            </div>
            <h2 className="mb-4 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight">
              Why Carriers Choose SwiftLogix
            </h2>
            <p className="max-w-2xl text-lg font-medium text-gray-500">
              We&apos;re committed to your success. Here&apos;s what you get when you partner with us.
            </p>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-start gap-4 rounded-3xl bg-gray-50 p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/5 group"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform group-hover:scale-110">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-dark font-syne group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-gray-500">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white pt-0">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
                Requirements
              </div>
              <h2 className="mb-6 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight leading-tight">
                What You Need to Get Started
              </h2>
              <p className="mb-10 text-lg font-medium text-gray-500">
                Joining our carrier network is straightforward. Make sure you meet these basic requirements, and you&apos;ll be hauling loads in no time.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:gap-6 border-t border-gray-100 pt-8">
                {[
                  "Valid Commercial Driver's License (CDL)",
                  "Clean driving record (3+ years)",
                  "Proper operating authority (MC/USDOT)",
                  "Current cargo insurance ($100,000 minimum)",
                  "ELD compliant tracking device",
                  "Professional communication skills"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-dark text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-2xl"
            >
              <Image
                src="/images/carrier_requirements.png"
                alt="Logistics warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-60" />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <section className="px-4 sm:px-6 lg:px-12 pb-24 lg:pb-32 bg-white">
        <div className="container mx-auto">
          <SectionWrapper
            variant="fadeInUp"
            className="flex flex-col items-center justify-center gap-8 overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-blue-600 to-purple-600 p-8 sm:p-12 text-center shadow-2xl lg:p-24 relative"
          >
            <div className="absolute top-0 left-0 h-64 w-64 bg-white/10 blur-[100px] rotate-45" />
            <div className="absolute bottom-0 right-0 h-64 w-64 bg-white/10 blur-[100px] -rotate-45" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white font-syne sm:text-4xl lg:text-6xl tracking-tight leading-tight">
                Ready to Hit the Road?
              </h2>
              <p className="mb-10 max-w-xl text-lg font-medium text-white/90">
                Join thousands of carriers who trust SwiftLogix for consistent, well-paying loads. Start your journey with us today.
              </p>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-white bg-white text-blue-600 hover:bg-white/90 px-10 sm:px-12 h-14 sm:h-16 text-lg font-bold shadow-xl shadow-black/10">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </main>
  );
}
