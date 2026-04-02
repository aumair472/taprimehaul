import { Metadata } from "next";
import ShippersClient from "./ShippersClient";

export const metadata: Metadata = {
  title: "For Shippers | Taul Prime Haul - taprimehaul.com",
  description: "Ship smarter with Taul Prime Haul on taprimehaul.com through reliable capacity, real-time visibility, and efficient freight planning.",
};

export default function Shippers() {
  return <ShippersClient />;
}
