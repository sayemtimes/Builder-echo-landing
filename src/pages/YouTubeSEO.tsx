import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  PlayCircle,
  Clock,
  CheckCircle,
  Search,
  Target,
  BarChart3,
  Users,
  FileText,
  Globe,
  Zap,
  BookOpen,
  Award,
  ArrowRight,
  Download,
  Star,
} from "lucide-react";

const courseProgress = 35;

const lessons = [
  {
    id: 1,
    title: "Introduction to YouTube SEO",
    duration: "15 min",
    completed: true,
    type: "video",
  },
  {
    id: 2,
    title: "Understanding YouTube Algorithm",
    duration: "25 min",
    completed: true,
    type: "video",
  },
  {
    id: 3,
    title: "Keyword Research Fundamentals",
    duration: "35 min",
    completed: true,
    type: "video",
  },
  {
    id: 4,
    title: "Title Optimization Strategies",
    duration: "20 min",
    completed: false,
    type: "video",
    current: true,
  },
  {
    id: 5,
    title: "Description & Tags Best Practices",
    duration: "30 min",
    completed: false,
    type: "video",
  },
  {
    id: 6,
    title: "Thumbnail Optimization",
    duration: "25 min",
    completed: false,
    type: "video",
  },
  {
    id: 7,
    title: "Analytics & Performance Tracking",
    duration: "40 min",
    completed: false,
    type: "video",
  },
  {
    id: 8,
    title: "Advanced SEO Techniques",
    duration: "45 min",
    completed: false,
    type: "video",
  },
];

const tools = [
  {
    name: "YouTube Keyword Research Template",
    description: "Comprehensive template for finding profitable keywords",
    type: "Spreadsheet",
    bengali: "ইউটিউব কীওয়ার্ড রিসার্চ টেমপ্লেট",
  },
  {
    name: "Video Title Optimization Checklist",
    description: "Step-by-step checklist for creating compelling titles",
    type: "PDF",
    bengali: "ভিডিও টাইটেল অপটিমাইজেশন চেকলিস্ট",
  },
  {
    name: "SEO Analytics Dashboard",
    description: "Track your video performance and SEO metrics",
    type: "Dashboard",
    bengali: "এসইও অ্যানালিটিক্স ড্যাশবোর্ড",
  },
];

const communicationPhrases = {
  english: [
    {
      situation: "Initial Client Contact",
      phrase:
        "Hello! I'm a certified YouTube SEO specialist with proven results in increasing video visibility and engagement.",
    },
    {
      situation: "Describing Services",
      phrase:
        "I offer comprehensive YouTube optimization including keyword research, title optimization, and analytics tracking.",
    },
    {
      situation: "Pricing Discussion",
      phrase:
        "My YouTube SEO packages start at $150 per video, with monthly retainer options available for ongoing optimization.",
    },
    {
      situation: "Results Guarantee",
      phrase:
        "I guarantee improved search rankings within 30 days, or we'll work together until you see results.",
    },
  ],
  bengali: [
    {
      situation: "প্রাথমিক ক্লায়েন্ট যোগাযোগ",
      phrase:
        "নমস্কার! আমি একজন সার্টিফাইড ইউটিউব এসইও বিশেষজ্ঞ যার ভিডিও দৃশ্যমানতা এবং এনগেজমেন্ট বৃদ্ধিতে প্রমাণিত ফলাফল রয়েছে।",
    },
    {
      situation: "সেবার বর্ণনা",
      phrase:
        "আমি কীওয়ার্ড রিসার্চ, টাইটেল অপটিমাইজেশন এবং অ্যানালিটিক্স ট্র্যাকিং সহ সম্পূর্ণ ইউটিউব অপটিমাইজেশন অফার করি।",
    },
    {
      situation: "মূল্য আলোচনা",
      phrase:
        "আমার ইউটিউব এসইও প্যাকেজ প্রতি ভিডিওতে $১৫০ থেকে শুরু হয়, চলমান অপটিমাইজেশনের জন্য মাসিক রিটেইনার অপশন উপলব্ধ।",
    },
    {
      situation: "ফলাফলের গ্যারান্টি",
      phrase:
        "আমি ৩০ দিনের মধ্যে উন্নত সার্চ র‍্যাঙ্কিংয়ের গ্যারান্টি দিই, অথবা আপনি ফলাফল না দেখা পর্যন্ত আমরা একসাথে কাজ করব।",
    },
  ],
};

const YouTubeSEO = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <PlayCircle className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Beginner
                </Badge>
                <Badge variant="destructive">New</Badge>
              </div>
              <h1 className="text-3xl font-bold">YouTube SEO Mastery</h1>
              <p className="text-muted-foreground">
                Master keyword research, optimization techniques, and ranking
                strategies to make your videos discoverable
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">8 hours total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">15,420+ students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.8 rating</span>
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
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="tools">Tools & Resources</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
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
                            Master YouTube Algorithm
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Understand how YouTube ranks videos and what factors
                            influence visibility
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            Advanced Keyword Research
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Find profitable keywords with low competition and
                            high search volume
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            Optimization Techniques
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Optimize titles, descriptions, tags, and thumbnails
                            for maximum reach
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Analytics & Tracking</h4>
                          <p className="text-sm text-muted-foreground">
                            Monitor performance and make data-driven
                            optimization decisions
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
                            300%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Average view increase
                          </div>
                        </div>
                        <div className="text-center p-4 bg-accent/5 rounded-lg">
                          <div className="text-2xl font-bold text-accent">
                            50%
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Higher search rankings
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-success/5 rounded-lg">
                          <div className="text-2xl font-bold text-success">
                            $2,500
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Monthly earning potential
                          </div>
                        </div>
                        <div className="text-center p-4 bg-warning/5 rounded-lg">
                          <div className="text-2xl font-bold text-warning">
                            90 days
                          </div>
                          <div className="text-sm text-muted-foreground">
                            To see significant results
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
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Average Study Time
                      </span>
                      <span className="font-medium">2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Success Rate
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
                      8 comprehensive lessons covering all aspects of YouTube
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
                        Title Optimization Strategies
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Learn advanced techniques for creating compelling,
                        SEO-optimized video titles
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
                  Tools & Resources
                </CardTitle>
                <p className="text-muted-foreground">
                  Downloadable templates, checklists, and tools to accelerate
                  your YouTube SEO success
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
                  Client Communication Phrases
                </CardTitle>
                <p className="text-muted-foreground">
                  Professional phrases for communicating with clients in both
                  English and Bengali
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
        </Tabs>
      </div>
    </div>
  );
};

export default YouTubeSEO;
