import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DollarSign,
  Clock,
  CheckCircle,
  Target,
  BarChart3,
  Users,
  FileText,
  TrendingUp,
  PlayCircle,
  BookOpen,
  Award,
  ArrowRight,
  Download,
  Star,
  Briefcase,
  Globe,
  Zap,
  Calculator,
} from "lucide-react";

const courseProgress = 0;

const lessons = [
  {
    id: 1,
    title: "Income Generation Mindset & Strategy",
    duration: "20 min",
    completed: false,
    type: "video",
    current: true,
  },
  {
    id: 2,
    title: "Freelancing Platforms & Opportunities",
    duration: "35 min",
    completed: false,
    type: "video",
  },
  {
    id: 3,
    title: "Building High-Value Service Packages",
    duration: "40 min",
    completed: false,
    type: "video",
  },
  {
    id: 4,
    title: "Client Acquisition & Lead Generation",
    duration: "45 min",
    completed: false,
    type: "video",
  },
  {
    id: 5,
    title: "Pricing Strategies for Maximum Profit",
    duration: "30 min",
    completed: false,
    type: "video",
  },
  {
    id: 6,
    title: "Scaling Your Digital Marketing Business",
    duration: "35 min",
    completed: false,
    type: "video",
  },
  {
    id: 7,
    title: "Passive Income Streams & Automation",
    duration: "40 min",
    completed: false,
    type: "video",
  },
  {
    id: 8,
    title: "Building a Digital Marketing Agency",
    duration: "50 min",
    completed: false,
    type: "video",
  },
  {
    id: 9,
    title: "Advanced Client Retention Strategies",
    duration: "25 min",
    completed: false,
    type: "video",
  },
  {
    id: 10,
    title: "Achieving $10K Monthly Income",
    duration: "30 min",
    completed: false,
    type: "video",
  },
];

const tools = [
  {
    name: "Income Goal Calculator",
    description: "Calculate your path to $10K monthly revenue",
    type: "Calculator",
    bengali: "আয়ের লক্ষ্য ক্যালকুলেটর",
  },
  {
    name: "Service Pricing Template",
    description: "Professional pricing calculator for all services",
    type: "Spreadsheet",
    bengali: "সেবা মূল্য নির্ধারণ টেমপ্লেট",
  },
  {
    name: "Client Acquisition Tracker",
    description: "Track leads, conversions, and revenue sources",
    type: "Dashboard",
    bengali: "ক্লায়েন্ট অধিগ্রহণ ট্র্যাকার",
  },
  {
    name: "Proposal Templates Collection",
    description: "High-converting proposal templates for different services",
    type: "Templates",
    bengali: "প্রোপোজাল টেমপ্লেট সংগ্রহ",
  },
  {
    name: "Revenue Optimization Guide",
    description: "Step-by-step guide to maximize your income",
    type: "Guide",
    bengali: "রেভিনিউ অপটিমাইজেশন গাইড",
  },
  {
    name: "Business Scaling Roadmap",
    description: "Strategic roadmap for scaling to $10K+/month",
    type: "Roadmap",
    bengali: "ব্যবসা স্কেলিং রোডম্যাপ",
  },
];

const incomeStreams = [
  {
    title: "YouTube SEO Services",
    description: "Optimize channels and videos for better rankings",
    monthlyPotential: "$1,500 - $4,000",
    difficulty: "Medium",
    timeToStart: "1-2 weeks",
    tools: ["TubeBuddy", "VidIQ", "Ahrefs"],
    icon: <PlayCircle className="h-6 w-6" />,
    color: "bg-red-500",
  },
  {
    title: "Website SEO Consulting",
    description: "Help businesses improve their search rankings",
    monthlyPotential: "$2,000 - $6,000",
    difficulty: "Hard",
    timeToStart: "2-4 weeks",
    tools: ["SEMrush", "Screaming Frog", "Google Analytics"],
    icon: <Globe className="h-6 w-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Social Media Management",
    description: "Manage and grow social media accounts",
    monthlyPotential: "$800 - $3,000",
    difficulty: "Easy",
    timeToStart: "1 week",
    tools: ["Hootsuite", "Buffer", "Canva"],
    icon: <Users className="h-6 w-6" />,
    color: "bg-purple-500",
  },
  {
    title: "Content Marketing Services",
    description: "Create content strategies and write for businesses",
    monthlyPotential: "$1,000 - $3,500",
    difficulty: "Medium",
    timeToStart: "1-2 weeks",
    tools: ["Grammarly", "CoSchedule", "BuzzSumo"],
    icon: <FileText className="h-6 w-6" />,
    color: "bg-green-500",
  },
  {
    title: "Digital Marketing Courses",
    description: "Create and sell online marketing courses",
    monthlyPotential: "$2,000 - $8,000",
    difficulty: "Hard",
    timeToStart: "4-8 weeks",
    tools: ["Teachable", "Kajabi", "Thinkific"],
    icon: <BookOpen className="h-6 w-6" />,
    color: "bg-orange-500",
  },
  {
    title: "Marketing Automation Setup",
    description: "Set up marketing funnels and automation",
    monthlyPotential: "$1,500 - $5,000",
    difficulty: "Hard",
    timeToStart: "3-4 weeks",
    tools: ["ClickFunnels", "ActiveCampaign", "Zapier"],
    icon: <Zap className="h-6 w-6" />,
    color: "bg-yellow-500",
  },
];

const freelancingPlatforms = [
  {
    name: "Upwork",
    description: "Largest freelancing platform with diverse opportunities",
    commission: "5-20%",
    difficulty: "Medium",
    avgEarning: "$15-75/hour",
    bestFor: "All digital marketing services",
  },
  {
    name: "Fiverr",
    description: "Gig-based platform perfect for packaged services",
    commission: "20%",
    difficulty: "Easy",
    avgEarning: "$5-200/gig",
    bestFor: "SEO audits, content writing",
  },
  {
    name: "Freelancer.com",
    description: "Competitive platform with project-based work",
    commission: "10%",
    difficulty: "Medium",
    avgEarning: "$10-50/hour",
    bestFor: "Web development, SEO",
  },
  {
    name: "99designs",
    description: "Design-focused platform for creative work",
    commission: "5-15%",
    difficulty: "Hard",
    avgEarning: "$200-2000/project",
    bestFor: "Design, branding, creative",
  },
  {
    name: "Toptal",
    description: "Elite platform for top 3% of freelancers",
    commission: "0%",
    difficulty: "Very Hard",
    avgEarning: "$60-200/hour",
    bestFor: "High-end consulting, strategy",
  },
  {
    name: "PeoplePerHour",
    description: "UK-based platform with European clients",
    commission: "3.5-20%",
    difficulty: "Medium",
    avgEarning: "$20-80/hour",
    bestFor: "Marketing, consulting",
  },
];

const communicationPhrases = {
  english: [
    {
      situation: "High-Value Proposal Presentation",
      phrase:
        "Based on your business goals, I've designed a comprehensive digital marketing strategy that will generate an ROI of 300-500% within the first 6 months.",
    },
    {
      situation: "Premium Service Positioning",
      phrase:
        "My premium package includes dedicated account management, bi-weekly strategy calls, and a performance guarantee that ensures your investment pays off.",
    },
    {
      situation: "Retainer Agreement Discussion",
      phrase:
        "I recommend a monthly retainer starting at $3,000 which gives you access to my full suite of services and ensures consistent growth for your business.",
    },
    {
      situation: "Value-Based Pricing Justification",
      phrase:
        "The investment for this project is $5,000, which represents less than 10% of the additional revenue you'll generate from improved search rankings.",
    },
    {
      situation: "Scaling Discussion with Existing Clients",
      phrase:
        "Given the success we've achieved together, I'd like to propose expanding our partnership to include additional services that will accelerate your growth.",
    },
    {
      situation: "Authority Positioning",
      phrase:
        "I've helped over 200 businesses achieve similar results, and I'm confident in implementing the same proven strategies for your company.",
    },
  ],
  bengali: [
    {
      situation: "উচ্চ-মূল্যের প্রস্তাব উপস্থাপনা",
      phrase:
        "আপনার ব্যবসায়িক লক্ষ্যের ভিত্তিতে, আমি একটি বিস্তৃত ডিজিটাল মার্কেটিং কৌশল ডিজাইন করেছি যা প্রথম ৬ মাসের মধ্যে ৩০০-৫০০% ROI তৈরি করবে।",
    },
    {
      situation: "প্রিমিয়াম সেবা পজিশনিং",
      phrase:
        "আমার প্রিমিয়া��� প্যাকেজে ডেডিকেটেড অ্যাকাউন্ট ম্যানেজমেন্ট, দ্বি-সাপ্তাহিক কৌশল কল এবং একটি পারফরম্যান্স গ্যারান্টি অন্তর্ভুক্ত যা নিশ্চিত করে আপনার বিনিয়োগ ফলপ্রসূ হবে।",
    },
    {
      situation: "রিটেইনার চুক্তি আলোচনা",
      phrase:
        "আমি $৩,০০০ থেকে শুরু হওয়া একটি মাসিক রিটেইনারের সুপারিশ করি যা আপনাকে আমার সম্পূর্ণ সেবার স্যুট অ্যাক্সেস দেয় এবং আপনার ব্যবসার ধারাবাহিক বৃদ্ধি নিশ্চিত করে।",
    },
    {
      situation: "মূল্য-ভিত্তিক প্রাইসিং যুক্তি",
      phrase:
        "এই প্রকল্পের জন্য বিনিয়োগ $৫,০০০, যা উন্নত সার্চ র‍্যাঙ্কিং থেকে আপনি যে অতিরিক্ত রেভিনিউ তৈরি করবেন তার ১০% এরও কম প্রতিনিধিত্ব করে।",
    },
    {
      situation: "বিদ্যমান ক্লায়েন্টদের সাথে স্কেলিং আলোচনা",
      phrase:
        "আমরা একসাথে যে সাফল্য অর্জন করেছি তার পরিপ্রেক্ষিতে, আমি আমাদের অংশীদারিত্ব সম্প্রসারণ করে অতিরিক্ত সেবা অন্তর্ভুক্ত করার প্রস্তাব দিতে চাই যা আপনার বৃদ্ধি ত্বরান্বিত করবে।",
    },
    {
      situation: "কর্তৃত্ব পজিশনিং",
      phrase:
        "আমি ২০০+ ব্যবসায়কে অনুরূপ ফলাফল অর্জনে সাহায্য করেছি এবং আপনার কোম্পানির জন্য একই প্রমাণিত কৌশল বাস্তবায়নে আমি আত্মবিশ্বাসী।",
    },
  ],
};

const IncomeStrategies = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <DollarSign className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Advanced
                </Badge>
                <Badge variant="destructive">New</Badge>
                <Badge variant="outline">10 Lessons</Badge>
              </div>
              <h1 className="text-3xl font-bold">
                Income Generation Strategies
              </h1>
              <p className="text-muted-foreground">
                Discover proven methods to earn up to $10,000 monthly through
                freelancing, consulting, and digital marketing services
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">6 hours total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">22,100+ students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.9 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Certificate included</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Course Progress</span>
              <span className="font-medium">{courseProgress}%</span>
            </div>
            <Progress value={courseProgress} className="h-2" />
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="income-streams">Income Streams</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Learning Objectives
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            High-Value Service Development
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Create premium service packages that command $3,000+
                            monthly retainers
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Client Acquisition</h4>
                          <p className="text-sm text-muted-foreground">
                            Build a systematic approach to finding and
                            converting high-paying clients
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            Multiple Revenue Streams
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Diversify income through services, courses, and
                            passive income strategies
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Business Scaling</h4>
                          <p className="text-sm text-muted-foreground">
                            Transform from freelancer to agency owner with
                            systematic growth strategies
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Income Milestones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary">
                            $1K
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Month 1-2
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            First freelance clients
                          </div>
                        </div>
                        <div className="text-center p-4 bg-accent/5 rounded-lg">
                          <div className="text-2xl font-bold text-accent">
                            $5K
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Month 3-6
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Retainer clients
                          </div>
                        </div>
                        <div className="text-center p-4 bg-success/5 rounded-lg">
                          <div className="text-2xl font-bold text-success">
                            $10K+
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Month 6-12
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Agency & passive income
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Progress to $10K Goal</span>
                          <span className="font-medium">
                            Track your journey
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span>$0</span>
                            <span>$2.5K</span>
                            <span>$5K</span>
                            <span>$7.5K</span>
                            <span>$10K+</span>
                          </div>
                          <Progress value={0} className="h-3" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Start</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Start First Lesson
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calculator className="mr-2 h-4 w-4" />
                      Income Calculator
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Roadmap
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Success Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Students Earning $5K+
                      </span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Average Time to $10K
                      </span>
                      <span className="font-medium">8 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Course Completion Rate
                      </span>
                      <span className="font-medium">94%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lessons">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <p className="text-muted-foreground">
                      10 advanced lessons on building a profitable digital
                      marketing business
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-96">
                      <div className="space-y-4">
                        {lessons.map((lesson, index) => (
                          <div
                            key={lesson.id}
                            className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                              lesson.current
                                ? "bg-primary/5 border-primary/20"
                                : "hover:bg-muted/50"
                            }`}
                          >
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                lesson.completed
                                  ? "bg-green-100 text-green-600"
                                  : lesson.current
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {lesson.completed ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <span className="text-sm font-medium">
                                  {lesson.id}
                                </span>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{lesson.title}</h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {lesson.duration}
                              </div>
                            </div>
                            {lesson.current && (
                              <Button size="sm">
                                Continue
                                <ArrowRight className="ml-2 h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Current Lesson</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <PlayCircle className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Income Generation Mindset & Strategy
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Develop the mindset and strategic thinking needed to
                        build a $10K+ monthly income business
                      </p>
                    </div>
                    <Button className="w-full">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Watch Lesson
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="income-streams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Digital Marketing Income Streams
                </CardTitle>
                <p className="text-muted-foreground">
                  Multiple ways to monetize your digital marketing skills and
                  reach $10K monthly
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {incomeStreams.map((stream, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${stream.color}`}
                          >
                            {stream.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{stream.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {stream.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Monthly Potential:
                            </span>
                            <span className="text-sm font-bold text-green-600">
                              {stream.monthlyPotential}
                            </span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Difficulty:
                            </span>
                            <Badge
                              variant={
                                stream.difficulty === "Easy"
                                  ? "secondary"
                                  : stream.difficulty === "Medium"
                                    ? "outline"
                                    : "destructive"
                              }
                              className="text-xs"
                            >
                              {stream.difficulty}
                            </Badge>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Time to Start:
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {stream.timeToStart}
                            </span>
                          </div>

                          <div className="space-y-2">
                            <span className="text-sm font-medium">Tools:</span>
                            <div className="flex flex-wrap gap-1">
                              {stream.tools.map((tool, toolIndex) => (
                                <Badge
                                  key={toolIndex}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tool}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Freelancing Platforms
                </CardTitle>
                <p className="text-muted-foreground">
                  Best platforms to find high-paying digital marketing clients
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {freelancingPlatforms.map((platform, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-lg">
                            {platform.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {platform.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Commission:
                            </span>
                            <span className="text-sm font-medium">
                              {platform.commission}
                            </span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Difficulty:
                            </span>
                            <Badge
                              variant={
                                platform.difficulty === "Easy"
                                  ? "secondary"
                                  : platform.difficulty === "Medium"
                                    ? "outline"
                                    : "destructive"
                              }
                              className="text-xs"
                            >
                              {platform.difficulty}
                            </Badge>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Avg Earning:
                            </span>
                            <span className="text-sm font-bold text-green-600">
                              {platform.avgEarning}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <span className="text-sm font-medium">
                              Best For:
                            </span>
                            <p className="text-xs text-muted-foreground">
                              {platform.bestFor}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  High-Value Client Communication
                </CardTitle>
                <p className="text-muted-foreground">
                  Professional phrases for premium pricing and high-value client
                  discussions
                </p>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="english" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="english">English</TabsTrigger>
                    <TabsTrigger value="bengali">Bengali</TabsTrigger>
                  </TabsList>

                  <TabsContent value="english" className="space-y-4">
                    {communicationPhrases.english.map((item, index) => (
                      <Card key={index} className="border-0 shadow-sm">
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <Badge variant="outline">{item.situation}</Badge>
                            <p className="text-sm leading-relaxed">
                              "{item.phrase}"
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="bengali" className="space-y-4">
                    {communicationPhrases.bengali.map((item, index) => (
                      <Card key={index} className="border-0 shadow-sm">
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <Badge variant="outline">{item.situation}</Badge>
                            <p className="text-sm leading-relaxed">
                              "{item.phrase}"
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Business Building Tools
                </CardTitle>
                <p className="text-muted-foreground">
                  Essential tools and templates to build your $10K monthly
                  business
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tools.map((tool, index) => (
                    <Card key={index} className="border-0 shadow-sm">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-medium">{tool.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {tool.description}
                          </p>
                          <Badge variant="secondary">{tool.type}</Badge>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground">
                            Bengali: {tool.bengali}
                          </p>
                          <Button size="sm" className="w-full">
                            <Download className="mr-2 h-3 w-3" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IncomeStrategies;
