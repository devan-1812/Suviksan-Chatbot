import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70"
        style={{
          backgroundImage: `
            linear-gradient(to bottom right, hsl(203 100% 30% / 0.95), hsl(203 100% 30% / 0.85)),
            repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(203 100% 20% / 0.1) 10px, hsl(203 100% 20% / 0.1) 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, hsl(203 100% 25% / 0.1) 10px, hsl(203 100% 25% / 0.1) 20px)
          `,
        }}
      />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Empowering Businesses with
            <br />
            <span className="text-orange">Secure and Intelligent</span>
            <br />
            IT Solutions
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge Data Analytics, Cyber Security,
            and Data Security solutions from Suviksan Technologies.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={scrollToServices}
              className="bg-orange text-orange-foreground hover:bg-orange/90 border border-orange/80 gap-2"
              data-testid="button-learn-more"
            >
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
