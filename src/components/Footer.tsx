import { Facebook, Linkedin, Instagram } from "lucide-react";
import footerDecoration from "@/assets/footer-decoration.png";

const Footer = () => {
  return (
    <footer className="bg-cyan-light/30 py-16 relative overflow-hidden">
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 opacity-50"
        style={{ 
          backgroundImage: `url(${footerDecoration})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 8C15.5817 8 12 11.5817 12 16C12 16.5523 12.4477 17 13 17H27C27.5523 17 28 16.5523 28 16C28 11.5817 24.4183 8 20 8Z" fill="#00B8D4"/>
                <path d="M28 20C28 19.4477 27.5523 19 27 19H13C12.4477 19 12 19.4477 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20Z" fill="#00B8D4"/>
                <ellipse cx="20" cy="18" rx="6" ry="4" fill="#0097A7"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-cyan">Cloud</span>
                <span className="text-lg font-bold text-cyan">Concept</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Certified partners of leading SaaS platforms tailored for enterprise needs in the GCC
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center hover:bg-navy-light transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center hover:bg-navy-light transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center hover:bg-navy-light transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>

            <div className="inline-flex items-center gap-3 bg-navy text-white px-4 py-2 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <rect width="20" height="20" rx="3" fill="#6C5DD3"/>
              </svg>
              <span className="text-sm font-semibold">Platinum Partner</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan transition-colors">Solutions</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan transition-colors">Industries</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan transition-colors">Resources</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-cyan transition-colors">About</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-foreground mb-4">CONTACT</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>S202, Jumeirah Business Centre 2,<br />Jumeirah Lake Towers<br />Dubai, United Arab Emirates</p>
              <p>+971 50 476 8221</p>
              <p>info@cloudconcept.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
