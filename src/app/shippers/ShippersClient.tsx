"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Eye,
  BarChart3,
  Zap,
  ShieldCheck,
  PieChart,
  Headset,
  ShoppingBag,
  Factory,
  Utensils,
  Stethoscope,
  Car,
  Cpu,
  ArrowRight,
  Box
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/lib/animations";

const features = [
  {
    title: "Real-Time Visibility",
    description: "Track every shipment from pickup to delivery with 24/7 GPS precision and instant updates.",
    icon: Eye,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Cost Optimization",
    description: "Connect vs direct and smart routing algorithms to reduce your shipping costs up to 15%.",
    icon: BarChart3,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Fast Booking",
    description: "Book shipments in minutes, not hours. Instant quotes and capacity confirmation.",
    icon: Zap,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Cargo Protection",
    description: "Comprehensive insurance options and vetted carriers ensure your freight is always safe.",
    icon: ShieldCheck,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Analytics Dashboard",
    description: "Powerful reporting tools to analyze your performance and optimize operations.",
    icon: PieChart,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "24/7 Support",
    description: "Dedicated account managers and round-the-clock support for any situation.",
    icon: Headset,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50"
  }
];

const steps = [
  { number: "01", title: "Request Quote", desc: "Enter shipment details and get instant pricing." },
  { number: "02", title: "Book Carrier", desc: "Select your preferred carrier and confirm booking." },
  { number: "03", title: "Track Shipment", desc: "Monitor your freight in real-time." },
  { number: "04", title: "Delivery Complete", desc: "Receive confirmation and documentation." }
];

const industries = [
  { name: "Retail & E-commerce", icon: ShoppingBag, color: "text-pink-500", bg: "bg-pink-50" },
  { name: "Manufacturing", icon: Factory, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Food & Beverage", icon: Utensils, color: "text-green-500", bg: "bg-green-50" },
  { name: "Healthcare", icon: Stethoscope, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Automotive", icon: Car, color: "text-red-500", bg: "bg-red-50" },
  { name: "Technology", icon: Cpu, color: "text-purple-500", bg: "bg-purple-50" }
];

export default function ShippersClient() {
  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark pt-28 pb-10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/shipper_hero_bg.png"
            alt="Logistics Dashboard"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/30 to-dark/10" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Badge variant="primary" className="mb-6">
                For Shippers
              </Badge>
            </motion.div>

            <motion.h1
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="mb-6 max-w-4xl text-4xl font-bold leading-tight text-white font-syne sm:text-6xl lg:text-8xl tracking-tight"
            >
              Ship Smarter, <br />
              Not Harder
            </motion.h1>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-text-muted"
            >
              Streamline your shipping operations with our intelligent logistics platform. Get instant quotes, reliable carriers, and complete visibility.
            </motion.p>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="rounded-full px-12 h-14 sm:h-16 shadow-xl shadow-primary/20">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full px-10 h-14 sm:h-16 text-white border-white/20 hover:bg-white/10 transition-colors">
                View Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Badge variant="primary" className="mb-4">Shipper Solutions</Badge>
            <h2 className="mb-4 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight">
              Everything You Need to Ship
            </h2>
            <p className="mb-16 max-w-2xl text-lg font-medium text-gray-500">
              Powerful tools and services designed to simplify your logistics and reduce costs.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-start gap-4 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-600/5 group"
              >
                <div className={cn("mb-2 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 shadow-sm", feature.bgColor, feature.iconColor)}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-dark font-syne tracking-tight text-left group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-gray-500 text-left">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white overflow-hidden pt-0">
        <div className="container mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Badge variant="primary" className="mb-4">How It Works</Badge>
            <h2 className="mb-4 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight">
              Ship in 4 Simple Steps
            </h2>
            <p className="mb-20 max-w-2xl text-lg font-medium text-gray-500">
              Our streamlined process gets your freight moving quickly and efficiently.
            </p>
          </motion.div>

          <div className="relative grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="absolute top-1/4 left-0 hidden h-0.5 w-full border-t-2 border-dashed border-primary/20 lg:block lg:max-w-[75%] lg:left-[12.5%]" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-black text-white shadow-xl shadow-primary/30 ring-8 ring-white transition-transform"
                >
                  {step.number}
                </motion.div>
                <h3 className="mb-4 text-xl font-bold text-dark font-syne group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-gray-500 max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <Badge variant="primary" className="mb-4">Industries We Serve</Badge>
              <h2 className="mb-6 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight leading-tight">
                Logistics for Every Industry
              </h2>
              <p className="mb-10 text-lg font-medium text-gray-500 max-w-xl">
                From retail to healthcare, we understand the unique logistics challenges of your industry and deliver tailored solutions that work.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 border-t border-gray-100 pt-10">
                {industries.map((industry, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4 transition-all hover:bg-white hover:shadow-lg hover:shadow-black/5"
                  >
                    <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform", industry.bg, industry.color)}>
                      <industry.icon className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-dark text-sm sm:text-base">{industry.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative aspect-square w-full overflow-hidden rounded-[3rem] shadow-2xl"
            >
              <Image
                src="/images/shipper_industries.png"
                alt="Corporate Industries"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/30 to-transparent opacity-60" />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <section className="px-4 sm:px-6 lg:px-12 pb-24 lg:pb-32 bg-white">
        <div className="container mx-auto">
          <SectionWrapper
            variant="fadeInUp"
            className="flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-br from-emerald-500 via-green-600 to-green-800 p-8 sm:p-12 shadow-2xl lg:p-24 relative"
          >
            <div className="absolute top-0 right-0 h-96 w-96 bg-white/10 blur-[120px] -rotate-45" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-8 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <Box className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white font-syne sm:text-4xl lg:text-7xl tracking-tight leading-tight">
                Ready to Optimize <br /> Your Shipping?
              </h2>
              <p className="mb-12 max-w-2xl text-lg sm:text-xl font-medium text-white/90">
                Get a free consultation and see how SwiftLogix can transform your logistics operations into a competitive advantage.
              </p>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-white bg-white text-emerald-700 hover:bg-white/90 px-10 sm:px-14 h-14 sm:h-18 text-lg sm:text-xl font-black shadow-2xl shadow-black/20">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </main>
  );
}
