import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  TrendingUp,
  Clock,
  CheckCircle,
  Target,
  BarChart3,
  Users,
  FileText,
  Globe,
  PlayCircle,
  BookOpen,
  Award,
  ArrowRight,
  Download,
  Star,
  DollarSign,
  Heart,
  Share2,
} from "lucide-react";

const courseProgress = 0;

const lessons = [
  {
    id: 1,
    title: "YouTube Marketing Fundamentals",
    duration: "20 min",
    completed: false,
    type: "video",
    current: true,
  },
  {
    id: 2,
    title: "Understanding Your Target Audience",
    duration: "30 min",
    completed: false,
    type: "video",
  },
  {
    id: 3,
    title: "Content Strategy & Planning",
    duration: "35 min",
    completed: false,
    type: "video",
  },
  {
    id: 4,
    title: "Brand Building on YouTube",
    duration: "25 min",
    completed: false,
    type: "video",
  },
  {
    id: 5,
    title: "Community Engagement Strategies",
    duration: "30 min",
    completed: false,
    type: "video",
  },
  {
    id: 6,
    title: "Collaboration & Partnerships",
    duration: "28 min",
    completed: false,
    type: "video",
  },
  {
    id: 7,
    title: "YouTube Advertising & Promotion",
    duration: "40 min",
    completed: false,
    type: "video",
  },
  {
    id: 8,
    title: "Monetization Strategies",
    duration: "35 min",
    completed: false,
    type: "video",
  },
  {
    id: 9,
    title: "Analytics & Performance Tracking",
    duration: "30 min",
    completed: false,
    type: "video",
  },
  {
    id: 10,
    title: "Scaling Your YouTube Business",
    duration: "45 min",
    completed: false,
    type: "video",
  },
];

const tools = [
  {
    name: "Content Calendar Template",
    description: "Plan and schedule your YouTube content strategy",
    type: "Spreadsheet",
    bengali: "কন্টেন্ট ক্যালেন্ডার টেমপ্লেট",
  },
  {
    name: "Audience Research Toolkit",
    description: "Analyze and understand your target audience demographics",
    type: "Guide",
    bengali: "অডিয়েন্স রিসার্চ টুলকিট",
  },
  {
    name: "Brand Partnership Pitch Deck",
    description: "Professional template for brand collaboration proposals",
    type: "Presentation",
    bengali: "ব্র্যান্ড পার্টনারশিপ পিচ ডেক",
  },
  {
    name: "Engagement Strategy Checklist",
    description: "Daily tasks to boost community engagement",
    type: "Checklist",
    bengali: "এনগেজমেন্ট স্ট্র্যাটেজি চেকলিস্ট",
  },
  {
    name: "YouTube Analytics Dashboard",
    description: "Track and monitor your channel performance",
    type: "Dashboard",
    bengali: "ইউটিউব অ্যানালিটিক্স ড্যাশবোর্ড",
  },
  {
    name: "Monetization Calculator",
    description: "Calculate revenue potential and optimize income streams",
    type: "Calculator",
    bengali: "মনিটাইজেশন ক্যালকুলেটর",
  },
];

const communicationPhrases = {
  english: [
    {
      situation: "Brand Collaboration Inquiry",
      phrase:
        "I'm interested in exploring a mutually beneficial partnership for your brand. My channel reaches [X] engaged viewers in your target demographic.",
    },
    {
      situation: "Sponsorship Proposal",
      phrase:
        "I'd like to propose a sponsored content collaboration. I can offer authentic product integration that resonates with my audience while maintaining my content quality.",
    },
    {
      situation: "Rate Negotiation",
      phrase:
        "Based on my engagement metrics and audience demographics, my rate for a 60-second sponsored segment is $X, which includes social media promotion.",
    },
    {
      situation: "Content Collaboration",
      phrase:
        "I'm reaching out to discuss a potential collaboration that would benefit both our audiences. I believe our content styles complement each other perfectly.",
    },
    {
      situation: "Media Kit Presentation",
      phrase:
        "I've attached my media kit which includes detailed analytics, audience demographics, and previous successful brand partnerships for your review.",
    },
    {
      situation: "Follow-up Communication",
      phrase:
        "I wanted to follow up on our previous discussion regarding the collaboration opportunity. I'm excited about the potential to work together and create impactful content.",
    },
  ],
  bengali: [
    {
      situation: "ব্র্যান্ড কোলাবরেশন অনুসন্ধান",
      phrase:
        "আমি আপনার ব্র্যান্ডের জন্য একটি পারস্পরিক উপকারী অংশীদারিত্ব অন্বেষণে আগ্রহী। আমার চ্যানেল আপনার টার্গেট ডেমোগ্রাফিক [X] জন এনগেজড দর্শকদের কাছে পৌঁছায়।",
    },
    {
      situation: "স্পনসরশিপ প্রস্তাব",
      phrase:
        "আমি একটি স্পনসর্ড কন্টেন্ট কোলাবরেশন প্রস্তাব করতে চাই। আমি আমার কন্টেন্টের মান বজায় রেখে প্রামাণিক প্রোডাক্ট ইন্টিগ্রেশন অফার করতে পারি যা আমার অডিয়েন্সের সাথে সংযোগ স্থাপন করে।",
    },
    {
      situation: "রেট আলোচনা",
      phrase:
        "আমার এনগেজমেন্ট মেট্রিক্স এবং অডিয়েন্স ডেমোগ্রাফিক্সের ভিত্তিতে, ৬০-সেকেন্ডের স্পনসর্ড সেগমেন্টের জন্য আমার রেট $X, যাতে সোশ্যাল মিডিয়া প্রমোশন অন্তর্ভুক্ত।",
    },
    {
      situation: "কন্টেন্ট কোলাবরেশন",
      phrase:
        "আমি একটি সম্ভাব্য কোলাবরেশন নিয়ে আলোচনা করতে যোগাযোগ করছি যা আমাদের উভয়ের অডিয়েন্সের উপকার করবে। আমি বিশ্বাস করি আমাদের কন্টেন্ট স্টাইল একে অপরের সাথে নিখুঁতভাবে মানানসই।",
    },
    {
      situation: "মিডিয়া কিট উপস্থাপনা",
      phrase:
        "আমি আমার মিডিয়া কিট সংযুক্ত করেছি যাতে বিস্তারিত অ্যানালিটিক্স, অডিয়েন্স ডেমোগ্রাফিক্স এবং আপনার পর্যালোচনার জন্য পূর্ববর্তী সফল ব্র্যান্ড পার্টনারশিপ অন্তর্ভুক্ত রয়েছে।",
    },
    {
      situation: "ফলো-আপ যোগাযোগ",
      phrase:
        "কোলাবরেশনের সুযোগ সম্পর্কিত আমাদের পূর্ববর্তী আলোচনার ফলো-আপ করতে চেয়েছিলাম। আমি একসাথে কাজ করার এবং প্রভাবশালী কন্টেন্ট তৈরি করার সম্ভাবনা নিয়ে উত্সাহিত।",
    },
  ],
};

const earningStrategies = [
  {
    title: "YouTube Ad Revenue",
    description: "Monetize through YouTube Partner Program",
    potential: "$500-2,000/month",
    difficulty: "Easy",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    title: "Brand Sponsorships",
    description: "Partner with brands for sponsored content",
    potential: "$1,000-5,000/month",
    difficulty: "Medium",
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Affiliate Marketing",
    description: "Promote products and earn commissions",
    potential: "$300-1,500/month",
    difficulty: "Easy",
    icon: <Share2 className="h-5 w-5" />,
  },
  {
    title: "Course Sales",
    description: "Create and sell educational content",
    potential: "$2,000-8,000/month",
    difficulty: "Hard",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Consultation Services",
    description: "Offer one-on-one marketing consulting",
    potential: "$1,500-4,000/month",
    difficulty: "Medium",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Premium Memberships",
    description: "Exclusive content for paying subscribers",
    potential: "$800-3,000/month",
    difficulty: "Medium",
    icon: <Award className="h-5 w-5" />,
  },
];

const YouTubeMarketing = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800"
                >
                  Intermediate
                </Badge>
                <Badge variant="outline">10 Lessons</Badge>
              </div>
              <h1 className="text-3xl font-bold">YouTube Marketing Strategy</h1>
              <p className="text-muted-foreground">
                Learn advanced marketing techniques, audience building, and
                monetization strategies to grow your channel and revenue
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">12 hours total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">12,830+ students</span>
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
                          <h4 className="font-medium">Audience Development</h4>
                          <p className="text-sm text-muted-foreground">
                            Build and engage a loyal subscriber base through
                            strategic content planning
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Brand Partnerships</h4>
                          <p className="text-sm text-muted-foreground">
                            Secure profitable sponsorship deals and brand
                            collaborations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Content Marketing</h4>
                          <p className="text-sm text-muted-foreground">
                            Create compelling content that drives views,
                            engagement, and conversions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Monetization Mastery</h4>
                          <p className="text-sm text-muted-foreground">
                            Implement multiple revenue streams to maximize your
                            YouTube income
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
                            500%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Subscriber growth rate
                          </div>
                        </div>
                        <div className="text-center p-4 bg-accent/5 rounded-lg">
                          <div className="text-2xl font-bold text-accent">
                            85%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Higher engagement rate
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-success/5 rounded-lg">
                          <div className="text-2xl font-bold text-success">
                            $5,000
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Monthly earning potential
                          </div>
                        </div>
                        <div className="text-center p-4 bg-warning/5 rounded-lg">
                          <div className="text-2xl font-bold text-warning">
                            60 days
                          </div>
                          <div className="text-sm text-muted-foreground">
                            To see significant growth
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
                      <span className="font-medium">91%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Average Study Time
                      </span>
                      <span className="font-medium">3 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Success Rate
                      </span>
                      <span className="font-medium">96%</span>
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
                      10 comprehensive lessons covering all aspects of YouTube
                      marketing
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
                        YouTube Marketing Fundamentals
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Learn the core principles of successful YouTube
                        marketing and audience building strategies
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
                  Marketing Tools & Resources
                </CardTitle>
                <p className="text-muted-foreground">
                  Professional templates and tools to accelerate your YouTube
                  marketing success
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
                  Brand Partnership Communication
                </CardTitle>
                <p className="text-muted-foreground">
                  Professional phrases for brand collaborations and sponsorship
                  negotiations
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
                  <DollarSign className="h-5 w-5" />
                  YouTube Income Strategies
                </CardTitle>
                <p className="text-muted-foreground">
                  Multiple revenue streams to maximize your YouTube earnings
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {earningStrategies.map((strategy, index) => (
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

export default YouTubeMarketing;
