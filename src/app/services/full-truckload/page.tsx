import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Full Truckload (FTL) | Taul Prime Haul - taprimehaul.com",
  description: "Dedicated FTL freight services from Taul Prime Haul on taprimehaul.com for direct, fast, and secure large-shipment delivery.",
};

export default function FullTruckloadPage() {
  return (
    <ServiceDetailPage
      category="Freight Brokerage Services"
      title="Full Truckload (FTL)"
      intro="Best for large shipments requiring a dedicated truck and direct transit from pickup to delivery."
      heroImage="/images/services/road_freight.png"
      heroAlt="Full truckload freight"
      stats={[
        { value: "Direct", label: "No-Stop Transit" },
        { value: "Fast", label: "Transit Time" },
        { value: "Dedicated", label: "Truck Capacity" },
      ]}
      overviewTitle="Move large freight with dedicated capacity"
      overviewText="Full truckload service is the right fit when your shipment fills most or all of a trailer. You get a direct route, fewer touchpoints, and greater control over timing and handling."
      overviewBullets={[
        "Direct delivery with no stops",
        "Dry van, flatbed, and reefer options",
        "Ideal for high-volume freight",
        "Reduced handling and faster transit",
      ]}
      bestForTitle="Best for"
      bestFor={[
        "Retail replenishment",
        "Manufacturing freight",
        "Large palletized loads",
        "Time-sensitive bulk shipments",
      ]}
      featuresTitle="What you get"
      features={[
        { title: "Dedicated truck", description: "Your freight is not sharing space with other shipments." },
        { title: "Simplified planning", description: "One load, one route, one point of coordination." },
        { title: "Faster movement", description: "Direct shipping reduces delays and handling time." },
        { title: "Flexible equipment", description: "Choose the trailer type that fits your freight." },
      ]}
      processTitle="How the service works"
      process={[
        { step: "01", title: "Share shipment details", description: "Send origin, destination, commodity, and timing needs." },
        { step: "02", title: "We match equipment", description: "We select the right trailer and carrier for your load." },
        { step: "03", title: "Pickup and dispatch", description: "Freight is collected and moved directly to destination." },
        { step: "04", title: "Delivery confirmation", description: "You receive updates through arrival and completion." },
      ]}
      ctaTitle="Need dedicated capacity now?"
      ctaText="Get a quote for your next full truckload shipment and move freight with speed and confidence."
    />
  );
}
