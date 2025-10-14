import ServiceCard from "../ServiceCard";
import { BarChart3 } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <ServiceCard
        icon={BarChart3}
        title="Data Analytics"
        description="Transform raw data into actionable insights with our advanced analytics solutions."
      />
    </div>
  );
}
