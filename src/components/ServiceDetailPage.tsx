"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/lib/animations";

type ServiceDetailPageProps = {
  category: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  stats: Array<{ value: string; label: string }>;
  overviewTitle: string;
  overviewText: string;
  overviewBullets: string[];
  bestForTitle: string;
  bestFor: string[];
  featuresTitle: string;
  features: Array<{ title: string; description: string }>;
  processTitle: string;
  process: Array<{ step: string; title: string; description: string }>;
  ctaTitle: string;
  ctaText: string;
};

export default function ServiceDetailPage({
  category,
  title,
  intro,
  heroImage,
  heroAlt,
  stats,
  overviewTitle,
  overviewText,
  overviewBullets,
  bestForTitle,
  bestFor,
  featuresTitle,
  features,
  processTitle,
  process,
  ctaTitle,
  ctaText,
}: ServiceDetailPageProps) {
  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/30 to-dark" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <div className="mb-6 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md">
                {category}
              </div>
            </motion.div>

            <motion.h1
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="mb-6 max-w-5xl text-4xl font-bold leading-tight text-white font-syne sm:text-6xl lg:text-8xl tracking-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="mb-12 max-w-3xl text-lg font-medium leading-relaxed text-text-muted"
            >
              {intro}
            </motion.p>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="grid w-full max-w-4xl grid-cols-1 divide-y divide-white/10 border-y border-white/10 py-8 md:grid-cols-3 md:divide-x md:divide-y-0"
            >
              {stats.map((stat) => (
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
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInLeft}>
              <div className="mb-4 inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Overview
              </div>
              <h2 className="mb-6 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight leading-tight">
                {overviewTitle}
              </h2>
              <p className="mb-8 text-lg font-medium leading-relaxed text-gray-500">
                {overviewText}
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {overviewBullets.map((item) => (
                  <div key={item} className="rounded-2xl border border-gray-100 bg-white p-5 text-sm font-bold text-dark shadow-sm">
                    {item}
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
                src={heroImage}
                alt={heroAlt}
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
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight leading-tight">
                {featuresTitle}
              </h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={scaleIn}
                    className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
                  >
                    <h3 className="mb-3 text-xl font-bold text-dark font-syne">{feature.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-gray-500">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-dark font-syne">{bestForTitle}</h3>
              <div className="rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-sm">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {bestFor.map((item) => (
                    <div key={item} className="rounded-2xl bg-gray-50 px-5 py-4 text-sm font-bold text-dark">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight">
            {processTitle}
          </h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-7 text-left shadow-sm"
              >
                <div className="mb-4 text-xs font-black tracking-[0.3em] text-primary">{step.step}</div>
                <h3 className="mb-3 text-xl font-bold text-dark font-syne">{step.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      <section className="px-4 sm:px-6 lg:px-12 pb-24 lg:pb-32 bg-white">
        <div className="container mx-auto">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-orange-400 via-primary to-orange-700 p-8 shadow-2xl sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <h2 className="mb-5 text-3xl font-bold text-white font-syne sm:text-4xl lg:text-6xl tracking-tight leading-tight">
                  {ctaTitle}
                </h2>
                <p className="max-w-2xl text-lg font-medium text-white/90 leading-relaxed">
                  {ctaText}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link href="/contact">
                  <Button size="lg" className="h-14 rounded-full bg-white px-10 text-primary hover:bg-orange-50 w-full sm:w-auto">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="h-14 rounded-full border-white/40 px-10 text-white hover:bg-white/10 w-full sm:w-auto">
                    Back to Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
