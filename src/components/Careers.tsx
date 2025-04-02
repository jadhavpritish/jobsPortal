import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Building2,
  Users,
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
} from "lucide-react";

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Recruitment Specialist",
    department: "Talent Acquisition",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    salary: "$80,000 - $100,000",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA (On-site)",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Chicago, IL (Hybrid)",
    type: "Full-time",
    salary: "$60,000 - $75,000",
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Customer Success Manager",
    department: "Customer Support",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    posted: "2 weeks ago",
  },
  {
    id: 6,
    title: "Data Analyst Intern",
    department: "Data Science",
    location: "Boston, MA (On-site)",
    type: "Internship",
    salary: "$25 - $30/hour",
    posted: "3 days ago",
  },
];

const Careers = () => {
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
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </Link>
            <Link to="/careers" className="text-sm font-medium text-primary">
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
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Help us transform the recruitment industry and connect talent with
            opportunity worldwide.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <GraduationCap className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Growth & Learning
                </h3>
                <p className="text-muted-foreground">
                  We invest in your professional development with learning
                  stipends, mentorship programs, and clear career progression
                  paths.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Inclusive Culture
                </h3>
                <p className="text-muted-foreground">
                  Join a diverse team where every voice matters. We celebrate
                  different perspectives and create an environment where
                  everyone can thrive.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">
                  Meaningful Impact
                </h3>
                <p className="text-muted-foreground">
                  Your work directly helps thousands of people find fulfilling
                  careers and helps businesses build strong teams that drive
                  innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Benefits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Competitive Salary</h3>
              <p className="text-sm text-muted-foreground">
                Fair compensation with regular reviews
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Hours</h3>
              <p className="text-sm text-muted-foreground">
                Work-life balance is a priority
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Remote Options</h3>
              <p className="text-sm text-muted-foreground">
                Work from anywhere policies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Learning Budget</h3>
              <p className="text-sm text-muted-foreground">
                Annual stipend for courses and conferences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Open Positions
          </h2>
          <div className="grid gap-6">
            {jobPositions.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2 text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        Posted {job.posted}
                      </span>
                      <Button>Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See a Perfect Fit?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. Send
            us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg">Submit Your Resume</Button>
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

export default Careers;
