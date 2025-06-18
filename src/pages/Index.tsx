
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Building, Clock, Users, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      logo: "🚀"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateLab",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130k - $170k",
      posted: "1 day ago",
      logo: "🎯"
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $120k",
      posted: "3 days ago",
      logo: "🎨"
    }
  ];

  const companies = [
    { name: "TechCorp", logo: "🚀", jobs: 12 },
    { name: "InnovateLab", logo: "🎯", jobs: 8 },
    { name: "DesignStudio", logo: "🎨", jobs: 15 },
    { name: "DataFlow", logo: "📊", jobs: 6 }
  ];

  const stats = [
    { icon: Building, label: "Companies", value: "500+" },
    { icon: Users, label: "Active Jobs", value: "2,400+" },
    { icon: TrendingUp, label: "Placements", value: "15k+" },
    { icon: Star, label: "Success Rate", value: "94%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-blue-600">💼</div>
              <span className="text-xl font-bold text-gray-900">JobBoard</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">Jobs</Link>
              <Link to="/companies" className="text-gray-700 hover:text-blue-600 transition-colors">Companies</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm">
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your <span className="text-blue-600">Dream Job</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with top companies and discover opportunities that match your skills and ambitions. 
              Your next career move starts here.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-full shadow-lg p-2 flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center px-4">
                <Search className="text-gray-400 mr-3" size={20} />
                <Input 
                  placeholder="Job title, keywords, or company" 
                  className="border-0 focus:ring-0 text-lg"
                />
              </div>
              <div className="flex items-center px-4 sm:border-l">
                <MapPin className="text-gray-400 mr-3" size={20} />
                <Input 
                  placeholder="Location" 
                  className="border-0 focus:ring-0 text-lg"
                />
              </div>
              <Button size="lg" className="rounded-full px-8">
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Opportunities</h2>
            <p className="text-gray-600">Hand-picked jobs from top companies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{job.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription className="text-gray-600">{job.company}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-green-600">{job.salary}</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        {job.posted}
                      </div>
                    </div>
                    <Button className="w-full mt-4">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Link to="/jobs">View All Jobs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Companies</h2>
            <p className="text-gray-600">Join industry leaders and innovative startups</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{company.logo}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{company.name}</h3>
                  <p className="text-sm text-gray-600">{company.jobs} open positions</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for your next opportunity or seeking top talent, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link to="/register?type=candidate">Find Jobs</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="/register?type=employer">Post a Job</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">💼</div>
                <span className="text-xl font-bold">JobBoard</span>
              </div>
              <p className="text-gray-400">
                Connecting talent with opportunity. Your career journey starts here.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
                <li><Link to="/companies" className="hover:text-white transition-colors">Company Reviews</Link></li>
                <li><Link to="/salary-guide" className="hover:text-white transition-colors">Salary Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/post-job" className="hover:text-white transition-colors">Post a Job</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/employer-resources" className="hover:text-white transition-colors">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JobBoard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
