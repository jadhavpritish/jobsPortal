import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar } from "@/components/ui/avatar";
import { MapPin, Briefcase, DollarSign, Clock, Building } from "lucide-react";
import JobDetail from "./JobDetail";

interface JobListingProps {
  jobs?: JobListing[];
  onJobSelect?: (job: JobListing) => void;
}

interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  logo: string;
  postedDate: string;
  description: string;
}

const JobListings: React.FC<JobListingProps> = ({
  jobs = defaultJobs,
  onJobSelect = () => {},
}) => {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const handleJobClick = (job: JobListing) => {
    setSelectedJob(job);
    setIsDetailOpen(true);
    onJobSelect(job);
  };

  const closeJobDetail = () => {
    setIsDetailOpen(false);
  };

  // Calculate pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <div className="w-full bg-background">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Job Listings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job) => (
            <Card
              key={job.id}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleJobClick(job)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Avatar className="h-12 w-12 rounded-md">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="object-cover"
                    />
                  </Avatar>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary"
                  >
                    {job.type}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                  {job.title}
                </h3>

                <div className="flex items-center text-muted-foreground mb-2">
                  <Building className="h-4 w-4 mr-1" />
                  <span className="text-sm">{job.company}</span>
                </div>

                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{job.location}</span>
                </div>

                <div className="flex items-center text-muted-foreground mb-2">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span className="text-sm">{job.salary}</span>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span className="text-sm">{job.experience}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-xs">{job.postedDate}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleJobClick(job);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>

      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedJob && (
            <JobDetail job={selectedJob} onClose={closeJobDetail} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Default mock data
const defaultJobs: JobListing[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    experience: "5+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=techcorp",
    postedDate: "Posted 2 days ago",
    description:
      "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces using React and TypeScript.",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Remote",
    salary: "$90,000 - $110,000",
    type: "Full-time",
    experience: "3+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=designhub",
    postedDate: "Posted 1 week ago",
    description:
      "Join our creative team as a UX/UI Designer. You will be responsible for creating beautiful and functional user interfaces for our products.",
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "New York, NY",
    salary: "$130,000 - $160,000",
    type: "Full-time",
    experience: "4+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=datasystems",
    postedDate: "Posted 3 days ago",
    description:
      "We are seeking a Backend Engineer to develop and maintain our server infrastructure. Experience with Node.js and databases required.",
  },
  {
    id: "4",
    title: "Product Manager",
    company: "InnovateCo",
    location: "Austin, TX",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    experience: "4+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=innovateco",
    postedDate: "Posted 5 days ago",
    description:
      "Looking for an experienced Product Manager to lead our product development efforts. You will work closely with design and engineering teams.",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    salary: "$125,000 - $155,000",
    type: "Full-time",
    experience: "3+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=cloudtech",
    postedDate: "Posted 1 day ago",
    description:
      "Join our DevOps team to build and maintain our cloud infrastructure. Experience with AWS, Docker, and CI/CD pipelines required.",
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Chicago, IL",
    salary: "$115,000 - $145,000",
    type: "Full-time",
    experience: "2+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=analyticspro",
    postedDate: "Posted 4 days ago",
    description:
      "We are looking for a Data Scientist to analyze large datasets and build machine learning models. Experience with Python and statistical analysis required.",
  },
  {
    id: "7",
    title: "Mobile Developer (iOS)",
    company: "AppWorks",
    location: "Los Angeles, CA",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    experience: "3+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=appworks",
    postedDate: "Posted 6 days ago",
    description:
      "Join our mobile team to develop iOS applications. Experience with Swift and iOS SDK required.",
  },
  {
    id: "8",
    title: "QA Engineer",
    company: "QualitySoft",
    location: "Denver, CO",
    salary: "$85,000 - $110,000",
    type: "Full-time",
    experience: "2+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=qualitysoft",
    postedDate: "Posted 1 week ago",
    description:
      "We are seeking a QA Engineer to ensure the quality of our software products. Experience with test automation frameworks required.",
  },
  {
    id: "9",
    title: "Technical Writer",
    company: "DocuTech",
    location: "Remote",
    salary: "$70,000 - $90,000",
    type: "Contract",
    experience: "2+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=docutech",
    postedDate: "Posted 3 days ago",
    description:
      "Join our documentation team to create clear and concise technical documentation for our products. Experience with API documentation preferred.",
  },
  {
    id: "10",
    title: "Project Manager",
    company: "ManagePro",
    location: "Boston, MA",
    salary: "$95,000 - $120,000",
    type: "Full-time",
    experience: "4+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=managepro",
    postedDate: "Posted 2 days ago",
    description:
      "We are looking for a Project Manager to oversee our software development projects. Experience with Agile methodologies required.",
  },
  {
    id: "11",
    title: "Security Engineer",
    company: "SecureTech",
    location: "Washington, DC",
    salary: "$130,000 - $160,000",
    type: "Full-time",
    experience: "5+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=securetech",
    postedDate: "Posted 1 week ago",
    description:
      "Join our security team to protect our systems and data. Experience with security audits and penetration testing required.",
  },
  {
    id: "12",
    title: "Frontend Developer (React)",
    company: "WebSolutions",
    location: "Portland, OR",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    experience: "2+ years",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=websolutions",
    postedDate: "Posted 5 days ago",
    description:
      "We are seeking a Frontend Developer with React experience to join our team. You will be responsible for building responsive user interfaces.",
  },
];

export default JobListings;
