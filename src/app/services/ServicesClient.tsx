"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/lib/animations";

const services = [
  {
    title: "Full Truckload (FTL)",
    description: "Dedicated truck capacity for large shipments that need direct movement and faster transit times.",
    href: "/services/full-truckload",
  },
  {
    title: "Less Than Truckload (LTL)",
    description: "Flexible shipping for smaller loads that only need part of a trailer and cost-efficient consolidation.",
    href: "/services/less-than-truckload",
  },
  {
    title: "Warehousing & Distribution",
    description: "Secure storage, inventory support, and reliable distribution services to keep your freight moving.",
    href: "/services/warehousing",
  },
  {
    title: "Hazmat Transport",
    description: "Safe and compliant transportation for regulated and hazardous freight with careful handling.",
    href: "/services/hazmat",
  },
  {
    title: "Customs Clearance",
    description: "Cross-border documentation support and customs coordination for international freight.",
    href: "/services/customs",
  },
  {
    title: "Drop Trailer Services",
    description: "Flexible drop-and-hook operations that improve loading efficiency and reduce wait times.",
    href: "/services/drop-trailer",
  },
];

export default function ServicesClient() {
  return (
    <main className="flex flex-col">
      <section className="relative overflow-hidden bg-dark pt-16 pb-10 lg:pt-32 lg:pb-20">
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <div className="mb-6 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md">
                Logistics Services
              </div>
            </motion.div>

            <motion.h1
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="mb-6 text-4xl font-bold leading-tight text-white font-syne sm:text-5xl lg:text-6xl lg:tracking-tight"
            >
              Comprehensive Freight &amp; Logistics Solutions
            </motion.h1>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="mb-12 max-w-3xl text-lg font-medium text-text-muted"
            >
              We provide end-to-end logistics services designed to meet the needs of businesses of all sizes. Whether you need fast delivery or specialized freight handling, we&apos;ve got you covered.
            </motion.p>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="grid w-full max-w-4xl grid-cols-1 divide-y divide-white/10 border-y border-white/10 py-8 md:grid-cols-3 md:divide-x md:divide-y-0"
            >
              {[
                { value: "6", label: "Service Paths" },
                { value: "24/7", label: "Support" },
                { value: "Nationwide", label: "Coverage" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-2 py-6 md:py-0">
                  <span className="text-2xl sm:text-3xl font-bold text-white font-syne">{stat.value}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute top-0 right-0 h-96 w-96 bg-primary/5 blur-[120px] -rotate-45" />
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-primary/5 blur-[100px] rotate-45" />
      </section>

      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              Core Services
            </div>
            <h2 className="mb-4 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight">
              Explore Our Logistics Solutions
            </h2>
            <p className="max-w-3xl text-lg font-medium text-gray-500">
              Browse the six service areas that power our freight brokerage and specialized logistics network.
            </p>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={fadeInUp}
                className="flex h-full flex-col justify-between rounded-[2.25rem] border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-dark font-syne leading-tight">
                    {service.title}
                  </h3>
                  <p className="mb-8 text-sm font-medium leading-relaxed text-gray-500 sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <Link href={service.href} className="text-sm font-bold text-primary transition-colors hover:text-primary/80">
                    Learn More
                  </Link>
                  <Link href={service.href}>
                    <Button size="sm" className="rounded-full px-5 h-11">
                      View Page
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      <section className="px-4 sm:px-6 lg:px-12 pb-24 lg:pb-32 bg-white pt-10">
        <div className="container mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeInLeft}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-gradient-to-br from-orange-400 via-primary to-orange-700 p-8 shadow-2xl sm:p-12 lg:p-16"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white font-syne sm:text-4xl lg:text-6xl tracking-tight leading-tight">
                  Need a custom logistics solution?
                </h2>
                <p className="max-w-2xl text-lg font-medium text-white/90 leading-relaxed">
                  Our team can help you match the right service to your shipment and build a plan around your business needs.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link href="/contact">
                  <Button size="lg" className="h-14 rounded-full bg-white px-10 text-primary hover:bg-orange-50 w-full sm:w-auto">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/shippers">
                  <Button size="lg" variant="outline" className="h-14 rounded-full border-white/40 px-10 text-white hover:bg-white/10 w-full sm:w-auto">
                    For Shippers
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
