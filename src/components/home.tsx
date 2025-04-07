import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Briefcase, Building2, Users } from "lucide-react";
import JobListings from "./JobListings";
import SearchFilters from "./SearchFilters";
import Header from "./Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Find Your <span className="text-primary">Dream Job</span> Today
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Connect with top employers and discover opportunities that match
            your skills and career goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="gap-2 bg-pink-500 hover:bg-pink-400 text-white"
            >
              <Search className="h-4 w-4" />
              Find Jobs
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Building2 className="h-4 w-4" />
              For Employers
            </Button>
          </div>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>10k+ Candidates</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <span>5k+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>20k+ Job Listings</span>
            </div>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            I am looking for...
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">I'm a Candidate</h3>
                <p className="text-muted-foreground mb-6">
                  Find your dream job, track applications, and connect with
                  employers.
                </p>
                <Button className="bg-pink-500 hover:bg-pink-400 text-white">
                  Browse Jobs
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">I'm an Employer</h3>
                <p className="text-muted-foreground mb-6">
                  Post job listings, find qualified candidates, and manage
                  applications.
                </p>
                <Button variant="outline">Post a Job</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Jobs</h2>
            <Link
              to="/jobs"
              className="text-primary hover:underline mt-4 md:mt-0"
            >
              View all jobs →
            </Link>
          </div>

          <SearchFilters />

          <div className="mt-8">
            <JobListings />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Powerful Tools for Your Job Search
          </h2>

          <Tabs defaultValue="candidate" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="candidate">For Candidates</TabsTrigger>
              <TabsTrigger value="employer">For Employers</TabsTrigger>
            </TabsList>
            <TabsContent value="candidate" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Track Your Applications
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Monitor the status of all your job applications in one
                    place.
                  </p>
                  <h3 className="text-lg font-semibold mb-2">
                    Personalized Job Recommendations
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get job suggestions based on your skills and preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Company Profiles
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Research potential employers with detailed company
                    information.
                  </p>
                  <h3 className="text-lg font-semibold mb-2">
                    Career Resources
                  </h3>
                  <p className="text-muted-foreground">
                    Access guides, tips, and tools to help advance your career.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="employer" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Manage Job Listings
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Create, edit, and remove job postings with ease.
                  </p>
                  <h3 className="text-lg font-semibold mb-2">
                    Applicant Tracking
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Review and manage candidate applications efficiently.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Company Profile Customization
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Showcase your company culture and benefits to attract
                    talent.
                  </p>
                  <h3 className="text-lg font-semibold mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-muted-foreground">
                    Track performance metrics for your job listings and
                    recruitment efforts.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
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

export default Home;
