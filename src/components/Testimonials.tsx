import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Star, Quote, Users, Building2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    quote:
      "JobPortal helped me find my dream job in just two weeks! The personalized job recommendations were spot-on, and the application process was seamless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "BrandWave",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    quote:
      "After months of searching on other platforms, I found the perfect position through JobPortal. The company culture information helped me make an informed decision.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "DesignHub",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    quote:
      "The detailed company profiles on JobPortal gave me valuable insights that helped me prepare for interviews and find a workplace that aligns with my values.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Patel",
    role: "Financial Analyst",
    company: "GlobalFinance",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    quote:
      "JobPortal's filtering options made it easy to find positions that matched my salary expectations and experience level. I'm now at a company that values my expertise.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Kim",
    role: "HR Manager",
    company: "PeopleFirst",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
    quote:
      "As a recruiter, JobPortal has transformed how we find talent. The quality of candidates we connect with through this platform is consistently impressive.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Taylor",
    role: "Product Manager",
    company: "InnovateTech",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    quote:
      "The job matching algorithm is incredible. I received notifications for positions that perfectly matched my skills and career goals, leading to multiple offers.",
    rating: 4,
  },
];

const Testimonials = () => {
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
            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary"
            >
              About Us
            </Link>
            <Link
              to="/testimonials"
              className="text-sm font-medium text-primary"
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
            Success <span className="text-primary">Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Hear from candidates and employers who found their perfect match
            through JobPortal.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="h-10 w-10 text-primary/20" />
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, index) => (
                          <Star
                            key={index}
                            className="h-5 w-5 text-yellow-400 fill-yellow-400"
                          />
                        ),
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-primary/5">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10k+</div>
              <p className="text-muted-foreground">Successful Placements</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5k+</div>
              <p className="text-muted-foreground">Partner Companies</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to write your own success story? Create an account today and
            start your journey with JobPortal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Users className="h-4 w-4" />
              Sign Up as Candidate
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Building2 className="h-4 w-4" />
              Sign Up as Employer
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

export default Testimonials;
