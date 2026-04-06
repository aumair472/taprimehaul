import { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Drop Trailer Services | Taul Prime Haul - taprimehaul.com",
  description: "Flexible drop trailer services from Taul Prime Haul on taprimehaul.com to reduce dock wait times and improve efficiency.",
};

export default function DropTrailerPage() {
  return (
    <ServiceDetailPage
      category="Specialized Services"
      title="Drop Trailer Services"
      intro="Flexible drop-and-hook support that helps your team load and unload freight without wasting time at the dock."
      heroImage="/images/services/last_mile.webp"
      heroAlt="Drop trailer services"
      stats={[
        { value: "Flexible", label: "Trailer Use" },
        { value: "Less", label: "Wait Time" },
        { value: "Higher", label: "Efficiency" },
      ]}
      overviewTitle="A smarter way to load and unload"
      overviewText="Drop trailer service gives your team more control over loading windows while helping reduce bottlenecks at pickup and delivery points."
      overviewBullets={[
        "Flexible drop and hook flow",
        "Reduced dock congestion",
        "Better loading efficiency",
        "Useful for high-volume operations",
      ]}
      bestForTitle="Best for"
      bestFor={[
        "Busy warehouses",
        "Retail distribution",
        "Manufacturing sites",
        "Shipments with staged loading",
      ]}
      featuresTitle="Why businesses use drop trailer"
      features={[
        { title: "Fewer delays", description: "Keep freight moving by minimizing time spent waiting at dock doors." },
        { title: "Flexible loading", description: "Load on your schedule instead of waiting for a live pickup." },
        { title: "Better workflow", description: "A drop trailer can simplify high-volume shipping processes." },
        { title: "Improved efficiency", description: "More control over the dock often means smoother operations overall." },
      ]}
      processTitle="How the service works"
      process={[
        { step: "01", title: "Reserve equipment", description: "We coordinate the trailer needed for your location." },
        { step: "02", title: "Drop at your site", description: "The trailer is placed for loading or unloading." },
        { step: "03", title: "Load on your schedule", description: "Your team works without pressure from a live driver wait." },
        { step: "04", title: "Hook and move", description: "Once ready, the trailer is picked up and dispatched." },
      ]}
      ctaTitle="Need more flexible dock operations?"
      ctaText="Use drop trailer service to streamline loading and increase efficiency at your facility."
    />
  );
}
