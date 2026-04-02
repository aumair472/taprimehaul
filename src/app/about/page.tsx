import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Taul Prime Haul - taprimehaul.com",
  description: "Learn about Taul Prime Haul on taprimehaul.com, our mission, vision, and commitment to dependable logistics solutions.",
};

export default function About() {
  return <AboutClient />;
}
