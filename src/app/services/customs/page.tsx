import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Customs Clearance | Taul Prime Haul - taprimehaul.com",
  description: "Expert customs and cross-border documentation support from Taul Prime Haul on taprimehaul.com.",
};

export default function CustomsPage() {
  return (
    <ServiceDetailPage
      category="Specialized Services"
      title="Customs Clearance"
      intro="Cross-border logistics support designed to simplify documentation, compliance, and international movement."
      heroImage="/images/services/ocean_freight.png"
      heroAlt="Customs clearance logistics"
      stats={[
        { value: "Cross-Border", label: "Support" },
        { value: "Document", label: "Coordination" },
        { value: "Faster", label: "Clearance" },
      ]}
      overviewTitle="Keep international freight moving"
      overviewText="Customs work can create delays if paperwork and process are not handled properly. We help coordinate the documents and steps required to move freight across borders with fewer surprises."
      overviewBullets={[
        "Documentation coordination",
        "Import/export support",
        "Clearance planning",
        "Cross-border shipment guidance",
      ]}
      bestForTitle="Best for"
      bestFor={[
        "Importers",
        "Exporters",
        "Ocean freight shipments",
        "Cross-border commerce",
      ]}
      featuresTitle="What customs support includes"
      features={[
        { title: "Trade documentation", description: "We help organize the paperwork your shipment needs." },
        { title: "Border coordination", description: "Move freight with less friction at handoff points." },
        { title: "Compliance support", description: "Reduce delays caused by missing or incomplete information." },
        { title: "Shipment guidance", description: "Our team helps keep your international move on track." },
      ]}
      processTitle="How the service works"
      process={[
        { step: "01", title: "Collect shipment data", description: "We review origin, destination, commodity, and documents." },
        { step: "02", title: "Prepare clearance steps", description: "Paperwork and requirements are organized before movement." },
        { step: "03", title: "Coordinate border flow", description: "We support the shipment through each handoff point." },
        { step: "04", title: "Confirm completion", description: "You receive updates through clearance and delivery." },
      ]}
      ctaTitle="Need help with cross-border freight?"
      ctaText="Get support for customs documentation and freight coordination on your next shipment."
    />
  );
}
