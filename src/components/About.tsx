import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">WHO WE ARE</p>
              <h2 className="text-4xl font-bold text-foreground mb-6">About the Group</h2>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              Cloud concept is a regional leader in digital transformation-helping business work smarter through modern, scalable SaaS solutions.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Since 2017, we've partnered with mid-sized to enterprise clients across the Middle East and Africa, delivering customised platforms that streamline operations, enhance collaboration and accelerate growth. From CRM and automation to service and work management, we bring deep expertise and local insight to every engagement.
            </p>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-navy text-white px-6 py-3 rounded-xl"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#6C5DD3"/>
              </svg>
              <span className="font-semibold">monday.com</span>
              <span className="text-sm opacity-80">Platinum Partner</span>
            </motion.div>

            <Button variant="ghost" className="group px-0 hover:bg-transparent">
              <span className="font-semibold">Read More</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src={aboutImage}
              alt="Business Meeting"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
