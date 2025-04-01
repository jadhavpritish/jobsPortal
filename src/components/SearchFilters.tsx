import React, { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Building2,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SearchFiltersProps {
  onSearch?: (filters: FilterState) => void;
}

interface FilterState {
  keyword: string;
  location: string;
  industry: string;
  experienceLevel: string;
  jobTypes: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  onSearch = () => {},
}) => {
  const [filters, setFilters] = useState<FilterState>({
    keyword: "",
    location: "",
    industry: "",
    experienceLevel: "",
    jobTypes: [],
  });

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Retail",
    "Marketing",
    "Design",
  ];

  const experienceLevels = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Manager",
    "Director",
    "Executive",
  ];

  const jobTypeOptions = [
    { id: "full-time", label: "Full-time" },
    { id: "part-time", label: "Part-time" },
    { id: "contract", label: "Contract" },
    { id: "remote", label: "Remote" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleJobTypeChange = (id: string, checked: boolean) => {
    setFilters((prev) => {
      if (checked) {
        return { ...prev, jobTypes: [...prev.jobTypes, id] };
      } else {
        return {
          ...prev,
          jobTypes: prev.jobTypes.filter((type) => type !== id),
        };
      }
    });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Keyword Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <Search size={18} />
          </div>
          <Input
            type="text"
            name="keyword"
            placeholder="Job title or keyword"
            className="pl-10"
            value={filters.keyword}
            onChange={handleInputChange}
          />
        </div>

        {/* Location */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <MapPin size={18} />
          </div>
          <Input
            type="text"
            name="location"
            placeholder="Location"
            className="pl-10"
            value={filters.location}
            onChange={handleInputChange}
          />
        </div>

        {/* Industry */}
        <div>
          <Select
            value={filters.industry}
            onValueChange={(value) => handleSelectChange("industry", value)}
          >
            <SelectTrigger className="w-full">
              <div className="flex items-center">
                <Building2 size={18} className="mr-2 text-gray-400" />
                <SelectValue placeholder="Industry" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-industries">All Industries</SelectItem>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Experience Level */}
        <div>
          <Select
            value={filters.experienceLevel}
            onValueChange={(value) =>
              handleSelectChange("experienceLevel", value)
            }
          >
            <SelectTrigger className="w-full">
              <div className="flex items-center">
                <GraduationCap size={18} className="mr-2 text-gray-400" />
                <SelectValue placeholder="Experience Level" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-levels">All Levels</SelectItem>
              {experienceLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div>
          <Button className="w-full" onClick={handleSearch}>
            Search Jobs
          </Button>
        </div>
      </div>

      {/* Job Type Filters */}
      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex items-center mr-2">
          <Briefcase size={18} className="mr-2 text-gray-400" />
          <span className="text-sm font-medium">Job Type:</span>
        </div>
        {jobTypeOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox
              id={option.id}
              checked={filters.jobTypes.includes(option.id)}
              onCheckedChange={(checked) =>
                handleJobTypeChange(option.id, checked === true)
              }
            />
            <Label htmlFor={option.id} className="text-sm">
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;
