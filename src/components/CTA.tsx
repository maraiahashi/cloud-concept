import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaBackground from "@/assets/cta-background.jpg";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Let's Build Smarter Workflows Together
          </h2>
          <Button className="bg-cyan hover:bg-cyan/90 text-white rounded-full px-8 group">
            Book a Free Trial
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
