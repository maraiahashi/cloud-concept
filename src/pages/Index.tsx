import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientNetwork from "@/components/ClientNetwork";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Solutions from "@/components/Solutions";
import MondayAI from "@/components/MondayAI";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientNetwork />
      <About />
      <Stats />
      <Solutions />
      <MondayAI />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
