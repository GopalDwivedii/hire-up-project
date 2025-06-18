
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Building, Clock, Filter, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      logo: "🚀",
      description: "We're looking for a Senior Frontend Developer to join our dynamic team...",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      featured: true
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLab",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130k - $170k",
      posted: "1 day ago",
      logo: "🎯",
      description: "Drive product strategy and execution for our growing platform...",
      skills: ["Product Strategy", "Analytics", "Agile"],
      featured: false
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $120k",
      posted: "3 days ago",
      logo: "🎨",
      description: "Create beautiful and intuitive user experiences...",
      skills: ["Figma", "User Research", "Prototyping"],
      featured: false
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "DataFlow",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $150k",
      posted: "4 days ago",
      logo: "📊",
      description: "Build scalable backend systems and APIs...",
      skills: ["Node.js", "PostgreSQL", "AWS"],
      featured: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$125k - $165k",
      posted: "5 days ago",
      logo: "☁️",
      description: "Manage cloud infrastructure and deployment pipelines...",
      skills: ["Kubernetes", "Docker", "Terraform"],
      featured: true
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "AI Innovations",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$140k - $180k",
      posted: "1 week ago",
      logo: "🤖",
      description: "Analyze data and build machine learning models...",
      skills: ["Python", "TensorFlow", "SQL"],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-blue-600">💼</div>
                <span className="text-xl font-bold text-gray-900">JobBoard</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/jobs" className="text-blue-600 font-medium">Jobs</Link>
              <Link to="/companies" className="text-gray-700 hover:text-blue-600 transition-colors">Companies</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Job</h1>
            <p className="text-gray-600">Discover {jobs.length} opportunities from top companies</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    placeholder="Job title, keywords, or company" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    placeholder="Location" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button size="lg" className="px-8">
                <Search className="mr-2" size={20} />
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Available Positions</h2>
              <p className="text-gray-600">Showing {jobs.length} jobs</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="mr-2" size={16} />
                Filters
              </Button>
              <Select defaultValue="newest">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                  <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-3xl">{job.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center">
                              {job.title}
                              {job.featured && (
                                <Star className="ml-2 text-yellow-500 fill-current" size={16} />
                              )}
                            </h3>
                            <p className="text-gray-600 flex items-center">
                              <Building className="mr-1" size={16} />
                              {job.company}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-green-600 mb-1">{job.salary}</div>
                            <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
                              {job.type}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin size={16} className="mr-2" />
                          <span>{job.location}</span>
                          <Clock size={16} className="ml-4 mr-2" />
                          <span>{job.posted}</span>
                        </div>
                        
                        <p className="text-gray-700 mb-4">{job.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-3">
                            <Button variant="outline" size="sm">Save</Button>
                            <Button size="sm">Apply Now</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
