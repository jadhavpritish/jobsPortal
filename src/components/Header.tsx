import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">JobPortal</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-primary">
            Home
          </Link>
          <Link to="/jobs" className="text-sm font-medium hover:text-primary">
            Browse Jobs
          </Link>
          <Link
            to="/companies"
            className="text-sm font-medium hover:text-primary"
          >
            Companies
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
          <Link
            to="/testimonials"
            className="text-sm font-medium hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            to="/careers"
            className="text-sm font-medium hover:text-primary"
          >
            Careers
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
          >
            <Link to="/login">Log In</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700"
          >
            <Link to="/login?tab=signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
