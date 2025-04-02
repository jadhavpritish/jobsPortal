import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Users,
  Building2,
  Award,
  Target,
  Heart,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header - Same as Home for consistency */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">JobPortal</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/jobs" className="text-sm font-medium hover:text-primary">
              Browse Jobs
            </Link>
            <Link to="/about" className="text-sm font-medium text-primary">
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
              className="bg-pink-500 hover:bg-pink-600 text-white border-pink-500 hover:border-pink-600"
            >
              <Link to="/login">Log In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/login?tab=signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            About <span className="text-primary">JobPortal</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Connecting the right talent with the right opportunities through
            innovative recruitment solutions.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-6">
                Founded in 2020, JobPortal was created with a simple mission: to
                transform how companies and candidates connect in the digital
                age. We recognized the challenges both employers and job seekers
                face in the recruitment process and set out to build a platform
                that makes finding the perfect match easier and more efficient.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to have connected thousands of talented
                professionals with companies that value their skills and
                contributions. Our team of recruitment experts and technology
                innovators continues to enhance our platform, ensuring we remain
                at the forefront of the recruitment industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2">10,000+</h4>
                  <p className="text-sm text-muted-foreground">
                    Candidates Placed
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Building2 className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2">5,000+</h4>
                  <p className="text-sm text-muted-foreground">
                    Partner Companies
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Briefcase className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2">20,000+</h4>
                  <p className="text-sm text-muted-foreground">Job Listings</p>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2">98%</h4>
                  <p className="text-sm text-muted-foreground">
                    Satisfaction Rate
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Precision Matching
                </h3>
                <p className="text-muted-foreground">
                  Our advanced algorithms analyze skills, experience, and
                  company culture to create perfect matches between candidates
                  and employers, saving time and reducing hiring mistakes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Candidate Experience
                </h3>
                <p className="text-muted-foreground">
                  We prioritize creating a seamless, transparent job search
                  experience. From personalized job recommendations to
                  application tracking, we empower candidates throughout their
                  career journey.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Employer Solutions
                </h3>
                <p className="text-muted-foreground">
                  We provide companies with powerful tools to showcase their
                  brand, streamline recruitment processes, and connect with
                  qualified candidates who align with their values and
                  requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Do It Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why We Do It</h2>
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-8" />
            <p className="text-xl mb-8">
              We believe that finding the right job or the right talent
              shouldn't be a matter of luck or endless searching. It should be
              an efficient, transparent process that respects everyone's time
              and potential.
            </p>
            <p className="text-xl mb-8">
              Our passion lies in creating meaningful connections that help
              businesses grow and individuals thrive in their careers. When the
              right talent meets the right opportunity, innovation flourishes
              and communities prosper.
            </p>
            <p className="text-xl">
              Every successful placement we facilitate represents a positive
              change in someone's life and a step forward for a business. That's
              what drives us every day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're looking for your next career move or searching for
            talent to grow your team, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Users className="h-4 w-4" />
              For Job Seekers
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Building2 className="h-4 w-4" />
              For Employers
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Same as Home for consistency */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-6 w-6" />
                <span className="text-xl font-bold">JobPortal</span>
              </div>
              <p className="text-gray-400">
                Connecting talent with opportunity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Candidates</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Career Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Recruitment Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-400 hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
