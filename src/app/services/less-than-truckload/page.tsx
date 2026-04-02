import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Less Than Truckload (LTL) | Taul Prime Haul - taprimehaul.com",
  description: "Cost-effective LTL shipping from Taul Prime Haul on taprimehaul.com for smaller loads that do not require a full trailer.",
};

export default function LessThanTruckloadPage() {
  return (
    <ServiceDetailPage
      category="Freight Brokerage Services"
      title="Less Than Truckload (LTL)"
      intro="A flexible and cost-effective solution for smaller shipments that only need part of a trailer."
      heroImage="/images/services/road_freight.png"
      heroAlt="Less than truckload freight"
      stats={[
        { value: "Shared", label: "Trailer Space" },
        { value: "Flexible", label: "Scheduling" },
        { value: "Tracked", label: "Shipment Visibility" },
      ]}
      overviewTitle="Pay only for the space you need"
      overviewText="LTL shipping lets you move smaller freight efficiently without paying for a full trailer. It is ideal for businesses that ship frequently in smaller volumes and want a balance of cost and visibility."
      overviewBullets={[
        "Pay only for used space",
        "Consolidated shipping network",
        "Flexible pickup and delivery windows",
        "Tracking available across the trip",
      ]}
      bestForTitle="Best for"
      bestFor={[
        "Smaller business shipments",
        "E-commerce replenishment",
        "Multi-destination freight",
        "Regular partial loads",
      ]}
      featuresTitle="Why shippers use LTL"
      features={[
        { title: "Lower shipping cost", description: "Share trailer space and reduce transport spend." },
        { title: "Regular departures", description: "Move freight without waiting to fill a whole truck." },
        { title: "Scalable option", description: "Great for growing businesses with variable demand." },
        { title: "Shipment visibility", description: "Stay updated with tracking and milestone communication." },
      ]}
      processTitle="How the service works"
      process={[
        { step: "01", title: "Submit load details", description: "Tell us what you’re shipping and where it needs to go." },
        { step: "02", title: "Consolidation planning", description: "We place your freight into an efficient shared route." },
        { step: "03", title: "Move through network", description: "The shipment travels with optimized stops and handling." },
        { step: "04", title: "Delivered and confirmed", description: "Receive final status once freight arrives safely." },
      ]}
      ctaTitle="Looking for a smarter way to ship smaller loads?"
      ctaText="Request an LTL quote and keep freight moving without paying for unused trailer space."
    />
  );
}
