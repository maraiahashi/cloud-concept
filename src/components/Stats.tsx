import { Users, CheckCircle, Target } from "lucide-react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { motion } from "framer-motion";

const StatItem = ({ icon: Icon, number, label }: { icon: any; number: number; label: string }) => {
  const { count, elementRef } = useCountAnimation(number, 2500);

  return (
    <motion.div 
      ref={elementRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center space-y-4"
    >
      <Icon className="w-12 h-12 text-foreground" strokeWidth={1.5} />
      <h3 className="text-4xl font-bold text-foreground">
        {count}+
      </h3>
      <p className="text-sm font-semibold text-muted-foreground tracking-wide">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { icon: Users, number: 2750, label: "USERS ONBOARDED" },
    { icon: CheckCircle, number: 300, label: "SATISFIED COMPANIES" },
    { icon: Target, number: 12, label: "INDUSTRIES SERVED" }
  ];

  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
