import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cyan-light/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">TESTIMONIALS</p>
              <h2 className="text-4xl font-bold text-foreground">Clients Speak</h2>
            </div>

            <blockquote className="text-lg text-foreground leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">John Smith</p>
                <p className="text-sm text-muted-foreground">CEO | Universal Music</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-muted" />
              <div className="w-2 h-2 rounded-full bg-muted" />
              <div className="w-8 h-2 rounded-full bg-cyan" />
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm">
              <div className="flex items-start gap-4 mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="22" fill="#4285F4"/>
                  <path d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10Z" fill="white" fillOpacity="0.2"/>
                </svg>
                <div className="flex-1">
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-foreground">4.9</p>
                  <p className="text-sm text-muted-foreground">stars, 152 reviews</p>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
                Google Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
