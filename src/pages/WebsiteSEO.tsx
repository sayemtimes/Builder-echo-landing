import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Globe,
  Clock,
  CheckCircle,
  Target,
  BarChart3,
  Users,
  FileText,
  Search,
  PlayCircle,
  BookOpen,
  Award,
  ArrowRight,
  Download,
  Star,
  Settings,
  Link,
  PenTool,
} from "lucide-react";

const courseProgress = 0;

const lessons = [
  {
    id: 1,
    title: "SEO Fundamentals & How Search Engines Work",
    duration: "25 min",
    completed: false,
    type: "video",
    current: true,
  },
  {
    id: 2,
    title: "Keyword Research & Strategy",
    duration: "35 min",
    completed: false,
    type: "video",
  },
  {
    id: 3,
    title: "On-Page SEO Optimization",
    duration: "40 min",
    completed: false,
    type: "video",
  },
  {
    id: 4,
    title: "Technical SEO Essentials",
    duration: "45 min",
    completed: false,
    type: "video",
  },
  {
    id: 5,
    title: "Content Optimization Strategies",
    duration: "30 min",
    completed: false,
    type: "video",
  },
  {
    id: 6,
    title: "Link Building Fundamentals",
    duration: "35 min",
    completed: false,
    type: "video",
  },
  {
    id: 7,
    title: "Local SEO for Businesses",
    duration: "28 min",
    completed: false,
    type: "video",
  },
  {
    id: 8,
    title: "SEO Analytics & Tracking",
    duration: "30 min",
    completed: false,
    type: "video",
  },
  {
    id: 9,
    title: "SEO Tools & Resources",
    duration: "25 min",
    completed: false,
    type: "video",
  },
  {
    id: 10,
    title: "Advanced SEO Strategies",
    duration: "40 min",
    completed: false,
    type: "video",
  },
];

const tools = [
  {
    name: "SEO Audit Checklist",
    description: "Comprehensive 50-point SEO audit template",
    type: "Checklist",
    bengali: "এসইও অডিট চেকলিস্ট",
  },
  {
    name: "Keyword Research Template",
    description: "Advanced keyword analysis and tracking spreadsheet",
    type: "Spreadsheet",
    bengali: "কীওয়ার্ড রিসার্চ টেমপ্লেট",
  },
  {
    name: "On-Page SEO Guide",
    description: "Step-by-step on-page optimization handbook",
    type: "Guide",
    bengali: "অন-পেজ এসইও গাইড",
  },
  {
    name: "Link Building Outreach Templates",
    description: "Email templates for successful link building campaigns",
    type: "Templates",
    bengali: "লিংক বিল্ডিং আউটরিচ টেমপ্লেট",
  },
  {
    name: "Technical SEO Audit Tool",
    description: "Automated tool to identify technical SEO issues",
    type: "Tool",
    bengali: "টেকনিক্যাল এসইও অডিট টুল",
  },
  {
    name: "Content Optimization Worksheet",
    description: "Framework for optimizing content for search engines",
    type: "Worksheet",
    bengali: "কন্টেন্ট অপটিমাইজেশন ওয়ার্কশিট",
  },
];

const communicationPhrases = {
  english: [
    {
      situation: "SEO Client Consultation",
      phrase:
        "I'll conduct a comprehensive SEO audit of your website to identify opportunities for improving your search engine rankings and organic traffic.",
    },
    {
      situation: "Pricing SEO Services",
      phrase:
        "My monthly SEO packages start at $800, which includes keyword optimization, content strategy, and monthly performance reports with guaranteed improvements.",
    },
    {
      situation: "Link Building Outreach",
      phrase:
        "I've written a comprehensive article on [topic] that would be valuable to your audience. Would you consider featuring it as a guest post on your website?",
    },
    {
      situation: "SEO Progress Report",
      phrase:
        "This month we achieved a 35% increase in organic traffic and improved rankings for 12 target keywords. Here's a detailed breakdown of our progress and next steps.",
    },
    {
      situation: "Technical SEO Issues",
      phrase:
        "I've identified several technical issues affecting your site's performance, including page speed and mobile optimization. I can resolve these to improve your search rankings.",
    },
    {
      situation: "Local SEO Services",
      phrase:
        "I specialize in local SEO and can help your business rank higher in local search results, increasing foot traffic and local customer inquiries.",
    },
  ],
  bengali: [
    {
      situation: "এসইও ক্লায়েন্ট পরামর্শ",
      phrase:
        "আমি আপনার ওয়েবসাইটের একটি বিস্তৃত এসইও অডিট পরিচালনা করব যাতে আপনার সার্চ ইঞ্জিন র‍্যাঙ্কিং এবং অর্গানিক ট্রাফিক উন্নতির সুযোগ চিহ্নিত করা যায়।",
    },
    {
      situation: "এসইও সেবার মূল্য নির্ধারণ",
      phrase:
        "আমার মাসিক এসইও প্যাকেজ $৮০০ থেকে শুরু হয়, যাতে কীওয়ার্ড অপটিমাইজেশন, কন্টেন্ট স্ট্র্যাটেজি এবং গ্যারান্টিড উন্নতিসহ মাসিক পারফরম্যান্স রিপোর্ট অন্তর্ভুক্ত।",
    },
    {
      situation: "লিংক বিল্ডিং আউটরিচ",
      phrase:
        "আমি [বিষয়ে] একটি বিস্তৃত নিবন্ধ লিখেছি যা আপনার অডিয়েন্সের জন্য মূল্যবান হবে। আপনি কি এটি আপনার ওয়েবসাইটে গেস্ট পোস্ট হিসেবে প্রকাশ করার বিষয়ে বিবেচনা করবেন?",
    },
    {
      situation: "এসইও প্রগ্রেস রিপোর্ট",
      phrase:
        "এই মাসে আমরা অর্গানিক ট্রাফিকে ৩৫% বৃদ্ধি এবং ১২টি টার্গেট কীওয়ার্ডের র‍্যাঙ্কিং উন্নতি অর্জন করেছি। এখানে আমাদের অগ্রগতি এবং পরবর্তী পদক্ষেপের বিস্তারিত বিবরণ রয়েছে।",
    },
    {
      situation: "টেকনিক্যাল এসইও সমস্যা",
      phrase:
        "আমি আপনার সাইটের পারফরম্যান্সে প্রভাব ফেলছে এমন কয়েকটি টেকনিক্যাল সমস্যা চিহ্নিত করেছি, যার মধ্যে পেজ স্পিড এবং মোবাইল অপটিমাইজেশন রয়েছে। আমি আপনার সার্চ র‍্যাঙ্কিং উন্নত করতে এগুলো সমাধান করতে পারি।",
    },
    {
      situation: "লোকাল এসইও সেবা",
      phrase:
        "আমি লোকাল এসইওতে বিশেষজ্ঞ এবং আপনার ব্যবসাকে স্থানীয় সার্চ ফলাফলে উচ্চতর র‍্যাঙ্ক করতে সাহায্য করতে পারি, যা ফুট ট্রাফিক এবং স্থানীয় গ্রাহকদের অনুসন্ধান ব��দ্ধি করবে।",
    },
  ],
};

const seoStrategies = [
  {
    title: "Local SEO Services",
    description: "Help businesses rank in local search results",
    potential: "$1,000-3,000/month",
    difficulty: "Medium",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "SEO Audits & Consulting",
    description: "Provide comprehensive SEO analysis and recommendations",
    potential: "$500-2,000/project",
    difficulty: "Easy",
    icon: <Search className="h-5 w-5" />,
  },
  {
    title: "Content SEO Writing",
    description: "Create SEO-optimized content for businesses",
    potential: "$300-1,500/month",
    difficulty: "Easy",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    title: "Technical SEO Services",
    description: "Fix technical issues and improve site performance",
    potential: "$1,500-4,000/project",
    difficulty: "Hard",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "Link Building Campaigns",
    description: "Build high-quality backlinks for client websites",
    potential: "$800-2,500/month",
    difficulty: "Medium",
    icon: <Link className="h-5 w-5" />,
  },
  {
    title: "SEO Training & Courses",
    description: "Teach SEO skills through online courses",
    potential: "$2,000-6,000/month",
    difficulty: "Medium",
    icon: <BookOpen className="h-5 w-5" />,
  },
];

const WebsiteSEO = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Globe className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Beginner
                </Badge>
                <Badge variant="outline">10 Lessons</Badge>
              </div>
              <h1 className="text-3xl font-bold">Website SEO Foundation</h1>
              <p className="text-muted-foreground">
                Build solid SEO foundations for websites, including technical
                SEO, content optimization, and link building strategies
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">10 hours total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">18,950+ students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.7 rating</span>
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
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
                            Search Engine Fundamentals
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Understand how search engines crawl, index, and rank
                            websites
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            Keyword Research Mastery
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Find profitable keywords and build comprehensive
                            content strategies
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            Technical SEO Implementation
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Optimize website structure, speed, and mobile
                            performance
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            Link Building Strategies
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Build high-quality backlinks to improve domain
                            authority and rankings
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
                      Expected Outcomes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary">
                            250%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Organic traffic increase
                          </div>
                        </div>
                        <div className="text-center p-4 bg-accent/5 rounded-lg">
                          <div className="text-2xl font-bold text-accent">
                            Top 10
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Search rankings achieved
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-success/5 rounded-lg">
                          <div className="text-2xl font-bold text-success">
                            $3,000
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Monthly earning potential
                          </div>
                        </div>
                        <div className="text-center p-4 bg-warning/5 rounded-lg">
                          <div className="text-2xl font-bold text-warning">
                            4-6 months
                          </div>
                          <div className="text-sm text-muted-foreground">
                            To see major results
                          </div>
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
                      <Download className="mr-2 h-4 w-4" />
                      Download Resources
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Course Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Completion Rate
                      </span>
                      <span className="font-medium">89%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Average Study Time
                      </span>
                      <span className="font-medium">2.5 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Success Rate
                      </span>
                      <span className="font-medium">92%</span>
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
                      10 comprehensive lessons covering all aspects of website
                      SEO
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
                        SEO Fundamentals & How Search Engines Work
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Learn how search engines discover, crawl, and rank
                        websites to build a solid SEO foundation
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

          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  SEO Tools & Resources
                </CardTitle>
                <p className="text-muted-foreground">
                  Professional SEO tools and templates to accelerate your
                  optimization efforts
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

          <TabsContent value="communication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  SEO Client Communication
                </CardTitle>
                <p className="text-muted-foreground">
                  Professional phrases for SEO consultations and client
                  presentations
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

          <TabsContent value="earnings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  SEO Income Opportunities
                </CardTitle>
                <p className="text-muted-foreground">
                  Multiple ways to monetize your SEO skills and build a
                  profitable business
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {seoStrategies.map((strategy, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {strategy.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{strategy.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {strategy.description}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Potential:
                            </span>
                            <span className="text-sm font-bold text-green-600">
                              {strategy.potential}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              Difficulty:
                            </span>
                            <Badge
                              variant={
                                strategy.difficulty === "Easy"
                                  ? "secondary"
                                  : strategy.difficulty === "Medium"
                                    ? "outline"
                                    : "destructive"
                              }
                              className="text-xs"
                            >
                              {strategy.difficulty}
                            </Badge>
                          </div>
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

export default WebsiteSEO;
