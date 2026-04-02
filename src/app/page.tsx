import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Home | Taul Prime Haul - taprimehaul.com",
  description: "Move freight smarter with Taul Prime Haul at taprimehaul.com. End-to-end logistics services built for speed, visibility, and reliability.",
};

export default function Home() {
  return <HomeClient />;
}
