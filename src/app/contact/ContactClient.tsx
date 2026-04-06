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
  Truck,
  Box,
  MessageSquare,
  ArrowRight
} from "lucide-react";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { CONTACT_EMAILS } from "@/constants";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const offices = [
  { city: "New York", address: "232 5th Avenue, Suite 4500", phone: "+1 (212) 555-0100" },
  { city: "Los Angeles", address: "8440 Santa Monica Blvd", phone: "+1 (310) 555-0200" },
  { city: "Chicago", address: "222 S Wacker Drive", phone: "+1 (312) 555-0300" },
  { city: "London", address: "22-24 Marylebone High St", phone: "+44 20 7123 4567" }
];

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Message sent successfully!", {
      description: "Our team will get back to you within 24 hours.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <main className="flex flex-col">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-dark pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact_hero_bg.webp"
            alt="Contact Us"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/30 to-dark/10" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="initial" animate="animate" variants={fadeInUp}>
            <Badge variant="primary" className="mb-6">Contact Us</Badge>
          </motion.div>

          <motion.h1
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-6 mx-auto text-4xl font-bold leading-tight text-white font-syne sm:text-6xl lg:text-8xl tracking-tight"
          >
            Let&apos;s Start a <br /> Conversation
          </motion.h1>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-8 max-w-2xl mx-auto text-lg sm:text-xl font-medium text-text-muted"
          >
            Have questions? Need a quote? Our team is here to help you with all your logistics needs.
          </motion.p>
        </div>
      </section>

      <section className="-mt-16 sm:-mt-20 relative z-20 pb-16 transition-all">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: Phone, title: "Phone", details: ["+1 (555) 123-4567", "+1 (555) 987-6543"], bgColor: "bg-blue-50", iconColor: "text-blue-600" },
              { icon: Mail, title: "Email", details: [CONTACT_EMAILS.primary, CONTACT_EMAILS.secondary], bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
              { icon: MapPin, title: "Headquarters", details: ["123 Logistics Way", "Transport City, TC 10001"], bgColor: "bg-orange-50", iconColor: "text-orange-600" },
              { icon: Clock, title: "Business Hours", details: ["Mon - Fri: 8AM - 6PM", "Sat: 9AM - 2PM"], bgColor: "bg-purple-50", iconColor: "text-purple-600" }
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col gap-4 rounded-[2.5rem] bg-white p-6 sm:p-8 shadow-xl shadow-black/5 border border-gray-100 hover:-translate-y-1 transition-transform"
              >
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", card.bgColor, card.iconColor)}>
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-dark font-syne">{card.title}</h3>
                <div className="space-y-1">
                  {card.details.map((detail, dIdx) => (
                    card.title === "Email" ? (
                      <a key={dIdx} href={`mailto:${detail}`} className="block text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                        {detail}
                      </a>
                    ) : (
                      <p key={dIdx} className="text-sm font-medium text-gray-500">{detail}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInLeft}>
              <div className="mb-4 inline-flex items-center rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Get in Touch
              </div>
              <h2 className="mb-6 text-3xl font-bold text-dark font-syne sm:text-4xl lg:text-6xl tracking-tight leading-tight">
                Send Us a Message
              </h2>
              <p className="mb-10 text-lg font-medium text-gray-500">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark ml-2">First Name</label>
                    <input
                      {...register("firstName", { required: true })}
                      placeholder="John"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 text-dark outline-none focus:border-primary transition-all text-sm @sm:text-base"
                    />
                    {errors.firstName && <span className="text-xs text-red-500 ml-2">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark ml-2">Last Name</label>
                    <input
                      {...register("lastName", { required: true })}
                      placeholder="Doe"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 text-dark outline-none focus:border-primary transition-all text-sm @sm:text-base"
                    />
                    {errors.lastName && <span className="text-xs text-red-500 ml-2">Required</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark ml-2">Email</label>
                    <input
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      type="email"
                      placeholder="operations@taprimehaul.com"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 text-dark outline-none focus:border-primary transition-all text-sm @sm:text-base"
                    />
                    {errors.email && <span className="text-xs text-red-500 ml-2">Valid email required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark ml-2">Phone</label>
                    <input
                      {...register("phone")}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 text-dark outline-none focus:border-primary transition-all text-sm @sm:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark ml-2">Company</label>
                    <input
                      {...register("company")}
                      placeholder="Your Company"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 text-dark outline-none focus:border-primary transition-all text-sm @sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark ml-2">Service Interested In</label>
                    <div className="relative">
                      <select
                        {...register("service")}
                        className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 text-dark outline-none focus:border-primary transition-all text-sm @sm:text-base"
                      >
                        <option value="">Select a service</option>
                        <option value="road">Road Freight</option>
                        <option value="ocean">Ocean Freight</option>
                        <option value="air">Air Freight</option>
                        <option value="warehouse">Warehousing</option>
                        <option value="lastmile">Last Mile Delivery</option>
                        <option value="supply">Supply Chain</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center">
                        <ArrowRight className="h-4 w-4 rotate-90 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark ml-2">Message</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    placeholder="Tell us about your logistics needs..."
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 text-dark outline-none focus:border-primary transition-all resize-none text-sm @sm:text-base"
                  />
                  {errors.message && <span className="text-xs text-red-500 ml-2">Required</span>}
                </div>

                <Button
                  size="lg"
                  type="submit"
                  className={cn("w-full rounded-2xl h-16 text-lg shadow-xl shadow-primary/20 transition-all", isSubmitting && "opacity-70 scale-[0.98]")}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-5 w-5 transition-transform" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="flex flex-col gap-10"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-2xl group border border-gray-100">
                <Image
                  src="/images/world_map_placeholder.webp"
                  alt="Office Locations Map"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark/20 to-transparent" />
                <div className="absolute top-[40%] left-[25%] flex flex-col items-center">
                  <div className="relative h-10 w-10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    <MapPin className="h-8 w-8 text-primary relative z-10" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold text-dark font-syne">Our Global Offices</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {offices.map((office, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="rounded-3xl border border-gray-100 bg-gray-50/50 p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-black/5"
                    >
                      <h4 className="flex items-center gap-2 font-bold text-dark font-syne mb-2">
                        <MapPin className="h-4 w-4 text-primary" /> {office.city}
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-gray-500 mb-2">{office.address}</p>
                      <p className="text-sm font-bold text-primary">{office.phone}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-white pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionWrapper variant="staggerContainer" className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 py-0 lg:py-0">
            {[
              { title: "For Carriers", icon: Truck, bg: "bg-blue-50", text: "text-blue-600", desc: "Join our network and access premium freight and reliable payouts." },
              { title: "For Shippers", icon: Box, bg: "bg-emerald-50", text: "text-emerald-600", desc: "Streamline your shipping operations with our intelligent platform." },
              { title: "Support", icon: MessageSquare, bg: "bg-orange-50", text: "text-primary", desc: "24/7 customer service available for all your urgent logistics needs." }
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100 bg-white p-8 sm:p-10 text-center shadow-xl shadow-black/5 transition-all"
              >
                <div className={cn("mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform", card.bg, card.text)}>
                  <card.icon className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold text-dark font-syne mb-4">{card.title}</h4>
                <p className="text-sm font-medium text-gray-500 mb-6 flex-grow">{card.desc}</p>
                <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 rounded-full px-8 group transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </SectionWrapper>
        </div>
      </section>
    </main>
  );
}
