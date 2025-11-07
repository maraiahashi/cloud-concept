import { motion } from "framer-motion";

const ClientNetwork = () => {
  const clients = [
    "Dubai World Trade Centre",
    "Majid Al Futtaim",
    "Etihad",
    "DAMAC",
    "UAE Exchange",
    "Property Finder"
  ];

  return (
    <section className="py-16 bg-cyan-light/30">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-muted-foreground mb-2">CLIENTS</p>
            <h2 className="text-3xl font-bold text-foreground">Our Network</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex items-center justify-center h-24 px-4 grayscale hover:grayscale-0 transition-all opacity-60 cursor-pointer"
              >
                <span className="text-lg font-semibold text-center">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientNetwork;
