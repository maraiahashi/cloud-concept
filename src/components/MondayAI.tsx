import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const MondayAI = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-muted-foreground">MONDAY AI</p>
            
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="8" fill="#6C5DD3"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="24">M</text>
              </svg>
              <h2 className="text-4xl font-bold">
                <span className="text-foreground">monday</span>
                <span className="text-foreground"> magic</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground">
              Unlock smarter execution and faster decision-making with AI embedded across your workflows.
            </p>

            <Button className="bg-cyan hover:bg-cyan/90 text-white rounded-full px-8 group">
              Explore More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="bg-black rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
              <button className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all group">
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MondayAI;
