"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Globe
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { SITE_CONFIG } from "@/constants";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Message sent successfully!", {
      description: "Our team will get back to you within 24 hours.",
    });
    reset();
    setIsSubmitting(false);
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Available for immediate support during business hours.",
      details: [SITE_CONFIG.phone],
      link: `tel:${SITE_CONFIG.phoneRaw}`,
      ariaLabel: "Call Taprime Haul",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email for general inquiries or quotes.",
      details: [SITE_CONFIG.email.primary, SITE_CONFIG.email.secondary],
      link: `mailto:${SITE_CONFIG.email.primary}`,
      ariaLabel: "Email Taprime Haul",
      color: "from-emerald-500/20 to-emerald-600/20",
      iconColor: "text-emerald-400"
    },
    {
      icon: MapPin,
      title: "Our Office",
      description: "Visit our headquarters in Prosper, Texas.",
      details: [
        "16613 Amistad Ave suite# 100",
        "Prosper, TX 75078",
        "USA"
      ],
      link: "https://maps.google.com/?q=16613+Amistad+Ave+Prosper+TX+75078",
      ariaLabel: "View our location on Google Maps",
      color: "from-orange-500/20 to-orange-600/20",
      iconColor: "text-orange-400"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Our dedicated team is here to help you weekday.",
      details: ["Monday to Friday", "6:00 AM – 5:00 PM"],
      link: null,
      ariaLabel: null,
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <main className="flex flex-col bg-dark overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-30 blur-[100px]" />
          <Image
            src="/images/contact_hero_bg.webp"
            alt="Logistics background"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-dark/30" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <Badge variant="primary" className="mb-6 uppercase tracking-widest px-6 py-2">Get in Touch</Badge>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-8 mx-auto text-5xl font-bold leading-[1.1] text-white font-syne sm:text-7xl lg:text-8xl xl:text-9xl tracking-[-(0.05em)]"
          >
            Ready to <span className="text-primary italic">Connect.</span>
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-12 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl font-medium text-white/50 leading-relaxed"
          >
            Efficiency doesn&apos;t happen by accident. It starts with a conversation. Reach out and let&apos;s streamline your supply chain together.
          </motion.p>

          <motion.div initial="initial" animate="animate" variants={fadeInUp} className="flex justify-center gap-4">
            <Button size="lg" className="rounded-full h-16 px-10 text-lg group" asChild>
              <a href="#contact-form">
                Start Now <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="relative z-20 pb-32 mt-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative flex flex-col gap-6 rounded-[2.5rem] bg-white/5 border border-white/10 p-8 transition-all hover:bg-white/[0.08]"
              >
                <div className={cn("flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-xl", card.color)}>
                  <card.icon className={cn("h-8 w-8", card.iconColor)} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white font-syne mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-sm font-medium text-white/40 mb-6 leading-relaxed">{card.description}</p>
                </div>

                <div className="mt-auto space-y-3">
                  {card.title === "Our Office" ? (
                    <div className="space-y-1">
                      {card.details.map((line, lIdx) => (
                        <p key={lIdx} className="text-sm font-medium text-white/90 leading-relaxed whitespace-normal break-words">
                          {line}
                        </p>
                      ))}
                      <a
                        href={card.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors group/map"
                      >
                        View on Map <ArrowRight className="h-3 w-3 transition-transform group-hover/map:translate-x-1" />
                      </a>
                    </div>
                  ) : (
                    card.details.map((detail, dIdx) => (
                      card.link ? (
                        <a
                          key={dIdx}
                          href={card.link}
                          aria-label={card.ariaLabel || undefined}
                          className="flex items-start gap-2 text-base font-bold text-white hover:text-primary transition-colors group/link"
                        >
                          <span className="shrink-0">{detail}</span>
                          <ArrowRight className="h-4 w-4 mt-1 text-s -rotate-45 opacity-0 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-1" />
                        </a>
                      ) : (
                        <p key={dIdx} className="text-base font-bold text-white/90">{detail}</p>
                      )
                    ))
                  )}
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-white/10 group-hover:bg-primary/50 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content: Form & Map */}
      <section id="contact-form" className="relative pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">

            {/* Form Side */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 sm:p-12 lg:p-16"
            >
              <div className="max-w-2xl">
                <Badge variant="primary" className="mb-6 opacity-80">Message Us</Badge>
                <h2 className="mb-6 text-4xl font-bold text-white font-syne sm:text-6xl tracking-tight leading-tight">
                  Have a <span className="text-primary">Project</span> In Mind?
                </h2>
                <p className="mb-12 text-lg font-medium text-white/40 leading-relaxed">
                  Send us your details and shipping requirements. Our logistics specialized will provide a custom solution tailored to your needs.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-primary ml-1">Full Name</label>
                      <input
                        {...register("name", { required: true })}
                        id="name"
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder:text-white/20 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
                      />
                      {errors.name && <span className="text-[10px] uppercase font-bold text-red-500 ml-1">Required field</span>}
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-primary ml-1">Email Address</label>
                      <input
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        id="email"
                        type="email"
                        placeholder="jhon@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder:text-white/20 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
                      />
                      {errors.email && <span className="text-[10px] uppercase font-bold text-red-500 ml-1">Valid email required</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-primary ml-1">Phone Number</label>
                      <input
                        {...register("phone")}
                        id="phone"
                        placeholder="(469) 000-0000"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder:text-white/20 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="service" className="text-xs font-black uppercase tracking-widest text-primary ml-1">Interested Service</label>
                      <div className="relative">
                        <select
                          {...register("service")}
                          id="service"
                          className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all cursor-pointer"
                        >
                          <option value="" className="bg-dark text-white">Select a service</option>
                          <option value="freight" className="bg-dark text-white">Freight Forwarding</option>
                          <option value="warehousing" className="bg-dark text-white">Warehousing</option>
                          <option value="lastmile" className="bg-dark text-white">Last Mile Delivery</option>
                          <option value="customs" className="bg-dark text-white">Customs Brokerage</option>
                        </select>
                        <ChevronRight className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 rotate-90 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-primary ml-1">Your Message</label>
                    <textarea
                      {...register("message", { required: true })}
                      id="message"
                      rows={5}
                      placeholder="Tell us about your logistics needs..."
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white placeholder:text-white/20 outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all resize-none"
                    />
                    {errors.message && <span className="text-[10px] uppercase font-bold text-red-500 ml-1">Please enter your message</span>}
                  </div>

                  <Button
                    size="lg"
                    type="submit"
                    className={cn(
                      "w-full rounded-2xl h-20 text-xl font-bold font-syne tracking-widest uppercase transition-all shadow-2xl shadow-primary/20",
                      isSubmitting && "opacity-70 scale-[0.98]"
                    )}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Request a Quote"}
                    <Send className={cn("ml-3 h-6 w-6 transition-transform", !isSubmitting && "group-hover:translate-x-1 group-hover:-translate-y-1")} />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map & Social Side */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="lg:col-span-5 space-y-8"
            >
              <div id="map" className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] w-full overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <iframe
                  src={SITE_CONFIG.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TA Prime Haul Office Location"
                  className="rounded-[3rem]"
                />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-dark/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                    <p className="text-xs font-black text-primary uppercase tracking-tighter mb-1">Our Location</p>
                    <p className="text-sm font-bold text-white leading-tight">
                      16613 Amistad Ave, Suite 100 <br />
                      Prosper, TX 75078
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-5 w-5 text-primary" />
                    <h4 className="text-lg font-bold text-white font-syne">Global Network</h4>
                  </div>
                  <p className="text-sm font-medium text-white/40 leading-relaxed">Connecting businesses through our extensive logistics infrastructure.</p>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h4 className="text-lg font-bold text-white font-syne">Reliable Partner</h4>
                  </div>
                  <p className="text-sm font-medium text-white/40 leading-relaxed">Trusted by hundreds of companies for timely and secure deliveries.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-dark font-syne mb-10 tracking-tight">Need Urgent Support?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-4 bg-dark text-white px-10 py-6 rounded-full text-2xl font-bold group transition-all hover:scale-105 active:scale-95"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-dark">
                <Phone className="h-6 w-6" />
              </div>
              {SITE_CONFIG.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email.primary}`}
              className="flex items-center gap-4 border-4 border-dark text-dark px-10 py-6 rounded-full text-2xl font-bold hover:bg-dark hover:text-white transition-all active:scale-95"
            >
              Connect via Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
