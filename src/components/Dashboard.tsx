import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ChevronRight,
  Briefcase,
  Building,
  Clock,
  MapPin,
  DollarSign,
  Star,
  CheckCircle,
  AlertCircle,
  Clock3,
} from "lucide-react";

interface DashboardProps {
  userType?: "candidate" | "employer";
}

const Dashboard = ({ userType = "candidate" }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    userType === "candidate" ? "recommendations" : "postings",
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 bg-background">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              {userType === "candidate"
                ? "Track your job applications and discover new opportunities"
                : "Manage your job postings and review applications"}
            </p>
          </div>

          {userType === "employer" && (
            <Button>
              <Briefcase className="mr-2 h-4 w-4" />
              Post New Job
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard
            title={
              userType === "candidate" ? "Applications" : "Active Postings"
            }
            value={userType === "candidate" ? "12" : "8"}
            description={
              userType === "candidate"
                ? "Total applications submitted"
                : "Currently active job postings"
            }
            icon={
              userType === "candidate" ? (
                <Briefcase className="h-4 w-4" />
              ) : (
                <Building className="h-4 w-4" />
              )
            }
          />
          <StatsCard
            title={
              userType === "candidate" ? "Interviews" : "Total Applications"
            }
            value={userType === "candidate" ? "3" : "145"}
            description={
              userType === "candidate"
                ? "Upcoming interviews"
                : "Applications received"
            }
            icon={<Clock className="h-4 w-4" />}
          />
          <StatsCard
            title={userType === "candidate" ? "Saved Jobs" : "Positions Filled"}
            value={userType === "candidate" ? "24" : "12"}
            description={
              userType === "candidate"
                ? "Jobs saved for later"
                : "Successfully filled positions"
            }
            icon={
              userType === "candidate" ? (
                <Star className="h-4 w-4" />
              ) : (
                <CheckCircle className="h-4 w-4" />
              )
            }
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3 mb-4">
            {userType === "candidate" ? (
              <>
                <TabsTrigger value="recommendations">
                  Recommendations
                </TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
              </>
            ) : (
              <>
                <TabsTrigger value="postings">Job Postings</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
              </>
            )}
          </TabsList>

          {userType === "candidate" ? (
            <>
              <TabsContent value="recommendations" className="space-y-4">
                <h2 className="text-xl font-semibold">Recommended for you</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {candidateRecommendations.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="applications" className="space-y-4">
                <h2 className="text-xl font-semibold">Your Applications</h2>
                <div className="space-y-4">
                  {candidateApplications.map((application) => (
                    <ApplicationCard
                      key={application.id}
                      application={application}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="saved" className="space-y-4">
                <h2 className="text-xl font-semibold">Saved Jobs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedJobs.map((job) => (
                    <JobCard key={job.id} job={job} saved />
                  ))}
                </div>
              </TabsContent>
            </>
          ) : (
            <>
              <TabsContent value="postings" className="space-y-4">
                <h2 className="text-xl font-semibold">Your Job Postings</h2>
                <div className="space-y-4">
                  {employerPostings.map((posting) => (
                    <PostingCard key={posting.id} posting={posting} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="applications" className="space-y-4">
                <h2 className="text-xl font-semibold">Recent Applications</h2>
                <div className="space-y-4">
                  {employerApplications.map((application) => (
                    <EmployerApplicationCard
                      key={application.id}
                      application={application}
                    />
                  ))}
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
};

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, description, icon }: StatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="p-2 bg-primary/10 rounded-full">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
}

interface JobCardProps {
  job: Job;
  saved?: boolean;
}

const JobCard = ({ job, saved = false }: JobCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={job.logo} alt={job.company} />
                <AvatarFallback>
                  {job.company.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
            </div>
            {saved && (
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
              {job.location}
            </div>
            <div className="flex items-center text-sm">
              <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
              {job.salary}
            </div>
            <div className="flex items-center text-sm">
              <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
              {job.type}
            </div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
              {job.posted}
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 flex justify-end">
          <Button variant="outline" size="sm">
            View Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface Application {
  id: string;
  job: Job;
  status: "applied" | "screening" | "interview" | "offer" | "rejected";
  date: string;
}

interface ApplicationCardProps {
  application: Application;
}

const ApplicationCard = ({ application }: ApplicationCardProps) => {
  const statusColors = {
    applied: "bg-blue-500",
    screening: "bg-purple-500",
    interview: "bg-amber-500",
    offer: "bg-green-500",
    rejected: "bg-red-500",
  };

  const statusProgress = {
    applied: 25,
    screening: 50,
    interview: 75,
    offer: 100,
    rejected: 100,
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={application.job.logo}
                alt={application.job.company}
              />
              <AvatarFallback>
                {application.job.company.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{application.job.title}</h3>
              <p className="text-sm text-muted-foreground">
                {application.job.company}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 w-full md:w-auto md:text-right">
            <Badge
              variant="outline"
              className={`w-fit md:ml-auto ${application.status === "rejected" ? "border-red-500 text-red-500" : ""}`}
            >
              {application.status.charAt(0).toUpperCase() +
                application.status.slice(1)}
            </Badge>
            <p className="text-xs text-muted-foreground">
              Applied on {application.date}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span>Application Progress</span>
            <span>{statusProgress[application.status]}%</span>
          </div>
          <Progress
            value={statusProgress[application.status]}
            className="h-2"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm">
            View Application
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface Posting {
  id: string;
  title: string;
  department: string;
  location: string;
  applicants: number;
  status: "active" | "paused" | "closed";
  posted: string;
}

interface PostingCardProps {
  posting: Posting;
}

const PostingCard = ({ posting }: PostingCardProps) => {
  const statusColor = {
    active: "bg-green-500",
    paused: "bg-amber-500",
    closed: "bg-slate-500",
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h3 className="font-semibold">{posting.title}</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
              <div className="flex items-center text-sm">
                <Building className="h-4 w-4 mr-1 text-muted-foreground" />
                {posting.department}
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                {posting.location}
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                Posted {posting.posted}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:text-right">
            <Badge
              variant="outline"
              className={`w-fit md:ml-auto ${posting.status === "active" ? "border-green-500 text-green-500" : posting.status === "paused" ? "border-amber-500 text-amber-500" : "border-slate-500 text-slate-500"}`}
            >
              {posting.status.charAt(0).toUpperCase() + posting.status.slice(1)}
            </Badge>
            <p className="text-sm font-medium">
              {posting.applicants} applicants
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-end">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="outline" size="sm">
            View Applicants
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface EmployerApplication {
  id: string;
  candidate: {
    name: string;
    avatar: string;
    title: string;
  };
  job: {
    title: string;
  };
  status: "new" | "reviewed" | "shortlisted" | "rejected";
  date: string;
}

interface EmployerApplicationCardProps {
  application: EmployerApplication;
}

const EmployerApplicationCard = ({
  application,
}: EmployerApplicationCardProps) => {
  const statusIcon = {
    new: <AlertCircle className="h-4 w-4 text-blue-500" />,
    reviewed: <Clock3 className="h-4 w-4 text-amber-500" />,
    shortlisted: <Star className="h-4 w-4 text-purple-500" />,
    rejected: <AlertCircle className="h-4 w-4 text-red-500" />,
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={application.candidate.avatar}
                alt={application.candidate.name}
              />
              <AvatarFallback>
                {application.candidate.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{application.candidate.name}</h3>
              <p className="text-sm text-muted-foreground">
                {application.candidate.title}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:text-right">
            <p className="text-sm font-medium">
              Applied for: {application.job.title}
            </p>
            <div className="flex items-center space-x-1 md:justify-end">
              {statusIcon[application.status]}
              <span className="text-sm">
                {application.status === "new"
                  ? "New application"
                  : application.status === "reviewed"
                    ? "Under review"
                    : application.status === "shortlisted"
                      ? "Shortlisted"
                      : "Rejected"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Received on {application.date}
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm">
            Review Application
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Mock data
const candidateRecommendations: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=TechCorp",
    location: "San Francisco, CA",
    salary: "$120k - $150k",
    type: "Full-time",
    posted: "2 days ago",
  },
  {
    id: "2",
    title: "UX Designer",
    company: "DesignHub",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=DesignHub",
    location: "Remote",
    salary: "$90k - $110k",
    type: "Full-time",
    posted: "1 week ago",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "InnovateCo",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=InnovateCo",
    location: "New York, NY",
    salary: "$130k - $160k",
    type: "Full-time",
    posted: "3 days ago",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudSystems",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=CloudSystems",
    location: "Austin, TX",
    salary: "$115k - $140k",
    type: "Full-time",
    posted: "5 days ago",
  },
];

const savedJobs: Job[] = [
  {
    id: "5",
    title: "Backend Developer",
    company: "ServerStack",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=ServerStack",
    location: "Seattle, WA",
    salary: "$110k - $135k",
    type: "Full-time",
    posted: "1 week ago",
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "AnalyticsPro",
    logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnalyticsPro",
    location: "Chicago, IL",
    salary: "$125k - $150k",
    type: "Full-time",
    posted: "3 days ago",
  },
];

const candidateApplications: Application[] = [
  {
    id: "1",
    job: {
      id: "7",
      title: "Full Stack Developer",
      company: "WebSolutions",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=WebSolutions",
      location: "Boston, MA",
      salary: "$100k - $130k",
      type: "Full-time",
      posted: "2 weeks ago",
    },
    status: "interview",
    date: "May 15, 2023",
  },
  {
    id: "2",
    job: {
      id: "8",
      title: "Mobile Developer",
      company: "AppWorks",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=AppWorks",
      location: "San Diego, CA",
      salary: "$95k - $120k",
      type: "Full-time",
      posted: "3 weeks ago",
    },
    status: "screening",
    date: "May 10, 2023",
  },
  {
    id: "3",
    job: {
      id: "9",
      title: "UI Designer",
      company: "CreativeMinds",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=CreativeMinds",
      location: "Portland, OR",
      salary: "$85k - $105k",
      type: "Full-time",
      posted: "1 month ago",
    },
    status: "rejected",
    date: "April 28, 2023",
  },
];

const employerPostings: Posting[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    applicants: 45,
    status: "active",
    posted: "2 weeks ago",
  },
  {
    id: "2",
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    applicants: 32,
    status: "active",
    posted: "1 week ago",
  },
  {
    id: "3",
    title: "Marketing Manager",
    department: "Marketing",
    location: "New York, NY",
    applicants: 18,
    status: "paused",
    posted: "3 weeks ago",
  },
  {
    id: "4",
    title: "Customer Support Specialist",
    department: "Support",
    location: "Chicago, IL",
    applicants: 27,
    status: "closed",
    posted: "1 month ago",
  },
];

const employerApplications: EmployerApplication[] = [
  {
    id: "1",
    candidate: {
      name: "Alex Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      title: "Senior Developer",
    },
    job: {
      title: "Senior Software Engineer",
    },
    status: "shortlisted",
    date: "June 2, 2023",
  },
  {
    id: "2",
    candidate: {
      name: "Sarah Miller",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      title: "UX/UI Designer",
    },
    job: {
      title: "Product Designer",
    },
    status: "new",
    date: "June 5, 2023",
  },
  {
    id: "3",
    candidate: {
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      title: "Marketing Specialist",
    },
    job: {
      title: "Marketing Manager",
    },
    status: "reviewed",
    date: "May 28, 2023",
  },
  {
    id: "4",
    candidate: {
      name: "Emily Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      title: "Customer Support Lead",
    },
    job: {
      title: "Customer Support Specialist",
    },
    status: "rejected",
    date: "May 25, 2023",
  },
];

export default Dashboard;
