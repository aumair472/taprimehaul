import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Taul Prime Haul - taprimehaul.com",
  description: "Contact Taul Prime Haul at taprimehaul.com for freight quotes, service support, and logistics planning assistance.",
};

export default function Contact() {
  return <ContactClient />;
}
