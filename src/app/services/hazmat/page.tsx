import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Hazmat Transport | Taul Prime Haul - taprimehaul.com",
  description: "Safe and compliant hazmat transport from Taul Prime Haul on taprimehaul.com with careful handling and route planning.",
};

export default function HazmatPage() {
  return (
    <ServiceDetailPage
      category="Specialized Services"
      title="Hazmat Transport"
      intro="Safe, compliant, and carefully managed hazardous material transport for sensitive freight categories."
      heroImage="/images/services/road_freight.webp"
      heroAlt="Hazardous materials transport"
      stats={[
        { value: "Compliant", label: "Handling" },
        { value: "Certified", label: "Transport" },
        { value: "Controlled", label: "Route Planning" },
      ]}
      overviewTitle="Move hazardous freight with confidence"
      overviewText="Hazmat transport requires careful coordination, documentation, and a safety-first operation. We handle shipments with the discipline and oversight needed for regulated materials."
      overviewBullets={[
        "Safety-first planning",
        "Regulatory coordination",
        "Special handling requirements",
        "Route planning for compliance",
      ]}
      bestForTitle="Best for"
      bestFor={[
        "Industrial chemicals",
        "Regulated goods",
        "Manufacturing inputs",
        "Sensitive cargo",
      ]}
      featuresTitle="Why this service matters"
      features={[
        { title: "Careful compliance", description: "Each shipment is handled with the right documentation and process." },
        { title: "Safety-focused handling", description: "Freight is moved with elevated attention to detail." },
        { title: "Route planning", description: "We plan around regulatory and operational constraints." },
        { title: "Dependable coordination", description: "You get a logistics team that understands the stakes." },
      ]}
      processTitle="How the service works"
      process={[
        { step: "01", title: "Review shipment data", description: "We assess commodity details, classification, and delivery needs." },
        { step: "02", title: "Confirm compliance", description: "Documentation and routing requirements are verified." },
        { step: "03", title: "Assign handling plan", description: "We choose suitable equipment and carrier support." },
        { step: "04", title: "Track to completion", description: "Shipment progress is monitored until delivery is complete." },
      ]}
      ctaTitle="Need regulated freight handled right?"
      ctaText="Speak with our team about a safe hazmat transport plan built around compliance and control."
    />
  );
}
