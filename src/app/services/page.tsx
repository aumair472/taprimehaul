import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Logistics Services | Taul Prime Haul - taprimehaul.com",
  description: "Explore Taul Prime Haul services on taprimehaul.com, including full truckload, LTL, warehousing, hazmat, customs, and drop trailer support.",
};

export default function Services() {
  return <ServicesClient />;
}
