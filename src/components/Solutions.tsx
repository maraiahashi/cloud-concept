import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Solutions = () => {
  const solutions = [
    {
      icon: "🔷",
      title: "Work & Project Management",
      description: "Certified partners of leading SaaS platforms tailored for enterprise needs in the GCC",
      color: "from-blue-500 to-purple-500",
      partner: "monday work management"
    },
    {
      icon: "🟢",
      title: "Enterprise ITSM",
      description: "Certified partners of leading SaaS platforms tailored for enterprise needs in the GCC",
      color: "from-teal-400 to-cyan-500",
      partner: "monday dev"
    },
    {
      icon: "🔵",
      title: "CRM & Sales",
      description: "Certified partners of leading SaaS platforms tailored for enterprise needs in the GCC",
      color: "from-cyan-400 to-blue-400",
      partner: "monday CRM"
    },
    {
      icon: "🔴",
      title: "Automation & Integration",
      description: "Certified partners of leading SaaS platforms tailored for enterprise needs in the GCC",
      color: "from-pink-500 to-rose-500",
      partner: "make"
    }
  ];

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold text-cyan">WHAT WE OFFER</p>
            <h2 className="text-4xl font-bold">Solutions</h2>
            <p className="text-lg text-white/80 max-w-2xl">
              Certified partners of leading SaaS platforms tailored for enterprise needs in the GCC
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-navy-light rounded-2xl p-8 border border-white/10 hover:border-cyan/50 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className={`text-5xl bg-gradient-to-br ${solution.color} p-4 rounded-xl`}>
                    {solution.icon}
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold text-cyan">{solution.title}</h3>
                    <p className="text-white/80">{solution.description}</p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <Button 
                        variant="ghost" 
                        className="text-cyan hover:bg-cyan/10 group/btn px-0"
                      >
                        Explore More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <span>{solution.partner}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
