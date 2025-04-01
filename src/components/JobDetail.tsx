import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  MapPin,
  Building,
  DollarSign,
  Briefcase,
  Calendar,
  Users,
} from "lucide-react";

interface JobDetailProps {
  isOpen?: boolean;
  onClose?: () => void;
  job?: {
    id: string;
    title: string;
    company: string;
    logo: string;
    location: string;
    salary: string;
    type: string;
    experience: string;
    postedDate: string;
    description: string;
    requirements: string[];
    benefits: string[];
    applicants: number;
  };
}

const JobDetail = ({
  isOpen = true,
  onClose = () => {},
  job,
}: JobDetailProps) => {
  // Default job data if none is provided
  const defaultJob = {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=TechCorp",
    location: "San Francisco, CA (Remote)",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    experience: "3-5 years",
    postedDate: "2 days ago",
    description:
      "We are looking for a skilled Senior Frontend Developer to join our growing team. You will be responsible for building user interfaces for our web applications, collaborating with designers and backend developers, and ensuring high-quality code standards.",
    requirements: [
      "Proficient in React, TypeScript, and modern JavaScript",
      "Experience with state management libraries (Redux, Context API)",
      "Strong understanding of responsive design principles",
      "Knowledge of testing frameworks (Jest, React Testing Library)",
      "Excellent problem-solving and communication skills",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible remote work policy",
      "401(k) matching",
      "Professional development budget",
      "Unlimited PTO",
    ],
    applicants: 42,
  };

  const jobData = job || defaultJob;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border">
              <AvatarImage src={jobData.logo} alt={jobData.company} />
              <AvatarFallback>{jobData.company.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl font-bold">
                {jobData.title}
              </DialogTitle>
              <DialogDescription className="text-base">
                <span className="font-medium">{jobData.company}</span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <Card>
            <CardContent className="flex items-center gap-2 p-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>{jobData.location}</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-2 p-4">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
              <span>{jobData.salary}</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-2 p-4">
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              <span>{jobData.type}</span>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5 text-muted-foreground" />
            <span>
              <strong>Experience:</strong> {jobData.experience}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <span>
              <strong>Posted:</strong> {jobData.postedDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span>
              <strong>Applicants:</strong> {jobData.applicants}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>
              <strong>Apply by:</strong> 30 days from posting
            </span>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Job Description</h3>
            <p className="text-muted-foreground">{jobData.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Requirements</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {jobData.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
            <div className="flex flex-wrap gap-2">
              {jobData.benefits.map((benefit, index) => (
                <Badge key={index} variant="secondary" className="text-xs py-1">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button>Apply Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetail;
