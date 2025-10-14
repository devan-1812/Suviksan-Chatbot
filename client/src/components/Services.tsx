import { BarChart3, ShieldCheck, Database } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics solutions. Make informed decisions backed by powerful data visualization and predictive modeling.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description: "Protect your digital assets with enterprise-grade security solutions. Our comprehensive approach safeguards your business from evolving cyber threats.",
  },
  {
    icon: Database,
    title: "Data Security",
    description: "Ensure your sensitive information remains confidential and compliant. We implement robust encryption and access control systems to protect your data.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to elevate your business performance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
