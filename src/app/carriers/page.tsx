import { Metadata } from "next";
import CarriersClient from "./CarriersClient";

export const metadata: Metadata = {
  title: "For Carriers | Taul Prime Haul - taprimehaul.com",
  description: "Join the Taul Prime Haul carrier network on taprimehaul.com for consistent loads, reliable pay cycles, and dispatch support.",
};

export default function Carriers() {
  return <CarriersClient />;
}
