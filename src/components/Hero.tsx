import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImage from "@/assets/dashboard.png";
import teamImage from "@/assets/team-meeting.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cyan-light/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Empowering Teams with AI-Powered Platforms for CRM, Service, Project and Automation Workflows
            </h1>
            <p className="text-lg text-muted-foreground">
              We help forward thinking companies unlock the full potential of the ServiceNow Platform to create customer loyalty, deliver growth and lead their industry.
            </p>
            <div className="flex gap-4">
              <Button className="bg-cyan hover:bg-cyan/90 text-white rounded-full px-8">
                Book a Free Trial
              </Button>
              <Button variant="outline" className="rounded-full px-8 border-cyan text-cyan hover:bg-cyan/10">
                Explore Products
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              src={dashboardImage} 
              alt="Portfolio Dashboard" 
              className="relative rounded-2xl shadow-2xl"
            />
            <motion.img 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              src={teamImage}
              alt="Team Collaboration"
              className="absolute -bottom-6 -right-6 w-64 h-48 object-cover rounded-xl shadow-xl border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
