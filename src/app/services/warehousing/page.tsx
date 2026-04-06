import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Warehousing & Distribution | Taul Prime Haul - taprimehaul.com",
  description: "Secure warehousing, storage, and distribution services from Taul Prime Haul on taprimehaul.com to support your supply chain.",
};

export default function WarehousingPage() {
  return (
    <ServiceDetailPage
      category="Specialized Services"
      title="Warehousing & Distribution"
      intro="Secure storage, inventory visibility, and distribution support for businesses that need dependable logistics space."
      heroImage="/images/services/warehousing.webp"
      heroAlt="Warehousing and distribution"
      stats={[
        { value: "Secure", label: "Storage" },
        { value: "Managed", label: "Inventory" },
        { value: "Fast", label: "Fulfillment" },
      ]}
      overviewTitle="Storage and distribution built for scale"
      overviewText="Our warehousing solutions help you store freight safely, manage inventory accurately, and move products out efficiently when orders come in."
      overviewBullets={[
        "Inventory tracking and reporting",
        "Pick-and-pack services",
        "Cross-docking support",
        "Long-term and short-term storage",
      ]}
      bestForTitle="Best for"
      bestFor={[
        "Seasonal inventory",
        "Retail fulfillment",
        "Import and export staging",
        "Overflow storage",
      ]}
      featuresTitle="Core warehousing capabilities"
      features={[
        { title: "Inventory control", description: "Know what is in storage and where it is located." },
        { title: "Distribution support", description: "Get freight out to customers, stores, or job sites quickly." },
        { title: "Flexible storage", description: "Use space on a schedule that matches your operation." },
        { title: "Operational efficiency", description: "Reduce delays with organized handling and dispatch." },
      ]}
      processTitle="How the service works"
      process={[
        { step: "01", title: "Receive freight", description: "Inbound freight is checked in and assigned storage." },
        { step: "02", title: "Store and track", description: "Inventory is organized and monitored for visibility." },
        { step: "03", title: "Pick and prepare", description: "Orders are picked, packed, and staged for departure." },
        { step: "04", title: "Dispatch distribution", description: "Products move to stores, customers, or final delivery points." },
      ]}
      ctaTitle="Need secure space for your freight?"
      ctaText="Get warehousing support that keeps inventory organized and distribution moving on schedule."
    />
  );
}
