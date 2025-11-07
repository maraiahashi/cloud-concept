import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8C15.5817 8 12 11.5817 12 16C12 16.5523 12.4477 17 13 17H27C27.5523 17 28 16.5523 28 16C28 11.5817 24.4183 8 20 8Z" fill="#00B8D4"/>
              <path d="M28 20C28 19.4477 27.5523 19 27 19H13C12.4477 19 12 19.4477 12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20Z" fill="#00B8D4"/>
              <ellipse cx="20" cy="18" rx="6" ry="4" fill="#0097A7"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-cyan">Cloud</span>
              <span className="text-xl font-bold text-cyan">Concept</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-cyan transition-colors">HOME</a>
            <button className="text-sm font-medium hover:text-cyan transition-colors flex items-center gap-1">
              SOLUTIONS <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-sm font-medium hover:text-cyan transition-colors flex items-center gap-1">
              INDUSTRIES <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="text-sm font-medium hover:text-cyan transition-colors">CASE STUDIES</a>
            <a href="#" className="text-sm font-medium hover:text-cyan transition-colors">CONTACT</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex text-sm font-medium hover:text-cyan transition-colors items-center gap-1">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="hidden md:block text-sm font-medium hover:text-cyan transition-colors">About</a>
            <Button className="bg-cyan hover:bg-cyan/90 text-white rounded-full px-6">
              Book a Free Trial
            </Button>
            <button className="text-sm font-medium text-muted-foreground">العربية</button>
            <Mail className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-cyan transition-colors" />
            <Phone className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-cyan transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
