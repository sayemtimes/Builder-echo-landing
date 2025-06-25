import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MessageSquare,
  Clock,
  CheckCircle,
  Target,
  Users,
  FileText,
  Globe,
  PlayCircle,
  BookOpen,
  Award,
  ArrowRight,
  Download,
  Star,
  Search,
  Copy,
  Mail,
  Phone,
  Briefcase,
} from "lucide-react";

const courseProgress = 0;

const lessons = [
  {
    id: 1,
    title: "Professional Communication Fundamentals",
    duration: "15 min",
    completed: false,
    type: "video",
    current: true,
  },
  {
    id: 2,
    title: "Email Writing Best Practices",
    duration: "25 min",
    completed: false,
    type: "video",
  },
  {
    id: 3,
    title: "Client Consultation Techniques",
    duration: "30 min",
    completed: false,
    type: "video",
  },
  {
    id: 4,
    title: "Negotiation & Pricing Discussions",
    duration: "35 min",
    completed: false,
    type: "video",
  },
  {
    id: 5,
    title: "Cross-Cultural Communication",
    duration: "20 min",
    completed: false,
    type: "video",
  },
  {
    id: 6,
    title: "Handling Difficult Clients",
    duration: "25 min",
    completed: false,
    type: "video",
  },
  {
    id: 7,
    title: "Project Management Communication",
    duration: "30 min",
    completed: false,
    type: "video",
  },
  {
    id: 8,
    title: "Building Long-term Client Relationships",
    duration: "25 min",
    completed: false,
    type: "video",
  },
];

const tools = [
  {
    name: "Email Templates Collection",
    description: "50+ professional email templates for all situations",
    type: "Templates",
    bengali: "ইমেইল টেমপ্লেট সংগ্রহ",
  },
  {
    name: "Client Consultation Script",
    description: "Structured scripts for client discovery calls",
    type: "Script",
    bengali: "ক্লায়েন্ট কনসালটেশন স্ক্রিপ্ট",
  },
  {
    name: "Proposal Writing Guide",
    description: "Step-by-step guide to writing winning proposals",
    type: "Guide",
    bengali: "প্রোপোজাল রাইটিং গাইড",
  },
  {
    name: "Communication Phrases Dictionary",
    description: "Bilingual dictionary of professional phrases",
    type: "Dictionary",
    bengali: "কমিউনিকেশন ফ্রেজ ডিকশনারি",
  },
  {
    name: "Client Feedback Templates",
    description: "Templates for requesting and handling feedback",
    type: "Templates",
    bengali: "ক্লায়েন্ট ফিডব্যাক টেমপ্লেট",
  },
  {
    name: "Cultural Communication Guide",
    description: "Guidelines for communicating across cultures",
    type: "Guide",
    bengali: "সাংস্কৃতিক যোগাযোগ গাইড",
  },
];

const communicationCategories = {
  initial_contact: {
    title: "Initial Client Contact",
    englishTitle: "Initial Client Contact",
    bengaliTitle: "প্রাথমিক ক্লায়েন্ট যোগাযোগ",
    phrases: {
      english: [
        "Hello [Client Name], I hope this message finds you well. I'm reaching out regarding your recent inquiry about digital marketing services.",
        "Thank you for considering our services. I'd love to discuss how we can help achieve your business goals.",
        "I specialize in [specific service] and have successfully helped [X number] of businesses improve their online presence.",
        "I'm excited about the opportunity to work with your team and would appreciate the chance to discuss your project in detail.",
        "Could we schedule a brief 15-minute call to discuss your requirements and how I can best assist you?",
      ],
      bengali: [
        "নমস্কার [ক্লায়েন্টের নাম], আশা করি আপনি ভালো আছেন। ডিজিটাল মার্কেটিং সেবা সম্পর্কে আপনার সাম্প্র���িক অনুসন্ধানের বিষয়ে যোগাযোগ করছি।",
        "আমাদের সেবা বিবেচনা করার জন্য ধন্যবাদ। আপনার ব্যবসায়িক লক্ষ্য অর্জনে আমরা কীভাবে সাহায্য করতে পারি তা নিয়ে আলোচনা করতে চাই।",
        "আমি [নির্দিষ্ট সেবায়] বিশেষজ্ঞ এবং সফলভাবে [X সংখ্যক] ব্যবসায়কে তাদের অনলাইন উপস্থিতি উন্নত করতে সাহায্য করেছি।",
        "আপনার টিমের সাথে কাজ করার সুযোগ নিয়ে আমি উত্সাহিত এবং আপনার প্রকল্প নিয়ে বিস্তারিত আলোচনার সুযোগ প্রার্থনা করছি।",
        "আপনার প্রয়োজনীয়তা এবং আমি কীভাবে সর্বোত্তম সহায়তা করতে পারি তা নিয়ে আলোচনার জন্য একটি সংক্ষিপ্�� ১৫ মিনিটের কল নির্ধারণ করতে পারি কি?",
      ],
    },
  },
  pricing_discussion: {
    title: "Pricing & Negotiations",
    englishTitle: "Pricing & Negotiations",
    bengaliTitle: "মূল্য নির্ধারণ ও আলোচনা",
    phrases: {
      english: [
        "Based on your project requirements, my recommended package would be $[X] which includes [list of services].",
        "I offer flexible payment terms including 50% upfront and 50% upon completion for your convenience.",
        "My rates are competitive and reflect the quality and results you can expect from our collaboration.",
        "I'd be happy to customize a package that fits within your budget while still delivering exceptional results.",
        "This investment will provide you with [specific benefits] and an estimated ROI of [X]% within [timeframe].",
        "I offer a satisfaction guarantee - if you're not completely happy with the results, we'll work together until you are.",
      ],
      bengali: [
        "আপনার প্রকল্পের প্রয়োজনীয়তার ভিত্তিতে, আমার প্রস্তাবিত পেকেজ $[X] হবে যাতে [সেবার ��ালিকা] অন্তর্ভুক্ত থাকবে।",
        "আপনার সুবিধার জন্য আমি নমনীয় পেমেন্ট শর্ত অফার করি যার মধ্যে ৫০% অগ্রিম এবং ৫০% সম্পূর্ণ হওয়ার পর রয়েছে।",
        "আমার রেট প্রতিযোগিতামূলক এবং আমাদের সহযোগিতা থেকে আপনি যে মান ও ফলাফল আশা করতে পারেন তা প্রতিফলিত করে।",
        "আপনার বাজেটের মধ্যে থেকে একটি কাস্টমাইজড পেকেজ তৈরি করতে খুশি হবো যা এখনও ব্যতিক্রমী ফলাফল প্রদান করবে।",
        "এই বিনিয়োগ আপনাকে [নির্দিষ্ট উপকারিতা] প্রদান করবে এবং [সময়সীমার] মধ্যে আনুমানিক [X]% ROI নিশ্চিত করবে।",
        "আমি সন্তুষ্টির গ্যারান্টি অফার করি - ফলাফলে আপনি সম্পূর্ণ সন্তুষ্ট না হলে, আপনি সন্তুষ্ট না হওয়া পর্যন্ত আমরা একসাথে কাজ করব।",
      ],
    },
  },
  project_delivery: {
    title: "Project Updates & Delivery",
    englishTitle: "Project Updates & Delivery",
    bengaliTitle: "প্রকল্প আপডেট ও সরবরাহ",
    phrases: {
      english: [
        "I'm pleased to provide you with an update on your project progress. We've completed [X]% of the work.",
        "Here's the completed work for your review. I've included detailed explanations of what was accomplished.",
        "The project is on track for completion by [date]. I'll keep you updated on our progress throughout.",
        "I've identified an opportunity to enhance the project beyond our original scope. Would you like to discuss this?",
        "Please review the deliverables and let me know if you have any questions or need any revisions.",
        "Thank you for your feedback. I'll implement the requested changes and have the revised version ready by [date].",
      ],
      bengali: [
        "আপনার প্রকল্পের অগ্রগতির আপডেট প্রদান করতে পেরে আনন্দ���ত। আমরা কাজের [X]% সম্পন্ন করেছি।",
        "আপনার পর্যালোচনার জন্য সম্পূর্ণ কাজ এখানে। কী সম্পন্ন হয়েছে তার বিস্তারিত ব্যাখ্যা অন্তর্ভুক্ত করেছি।",
        "প্রকল্পটি [তারিখের] মধ্যে সম্পূর্ণ হওয়ার পথে রয়েছে। পুরো প্রক্রিয়া জুড়ে আমি আপনাকে আমাদের অগ্রগতি সম্পর্কে অবগত রাখব।",
        "আমি আমাদের মূল পরিধির বাইরে প্রকল্পটি উন্নত করার একটি সুযোগ চিহ্নিত করেছি। আপনি কি এটি নিয়ে আলোচনা করতে চান?",
        "অনুগ্রহ করে ডেলিভারেবলগুলি পর্যালোচনা করুন এবং কোনো প্রশ্ন থাকলে বা কোনো সংশোধনের প্রয়োজন হলে জানান।",
        "আপনার ফিডব্যাকের জন্য ধন্যবাদ। আমি অনুরোধিত পরিবর্তনগুলি বাস্তবায়ন করব এবং [তারিখের] মধ্যে সংশোধিত সংস্করণ প্রস্তুত রাখব।",
      ],
    },
  },
  follow_up: {
    title: "Follow-up & Relationship Building",
    englishTitle: "Follow-up & Relationship Building",
    bengaliTitle: "ফলো-আপ ও সম্পর্ক গড়ে তোলা",
    phrases: {
      english: [
        "I wanted to follow up on our previous conversation and see if you have any questions about the proposal.",
        "It's been [time period] since we completed your project. How have the results been performing?",
        "I have some new insights that could benefit your business. Would you be interested in a brief discussion?",
        "I'm reaching out to my valued clients to share some exciting updates about new services we're offering.",
        "Your referral to [name/company] was greatly appreciated. Thank you for thinking of our services.",
        "I'd love to hear about your experience working with us. Would you consider providing a testimonial?",
      ],
      bengali: [
        "আমাদের পূর্ববর্তী ক���োপকথনের ফলো-আপ করতে চেয়েছিলাম এবং প্রস্তাব সম্পর্কে আপনার কোনো প্রশ্ন আছে কিনা দেখতে চেয়েছিলাম।",
        "আমরা আপনার প্রকল্প সম্পন্ন করার [সময়কাল] হয়ে গেছে। ফলাফলগুলি কেমন পারফর্ম করছে?",
        "আমার কাছে কিছু নতুন অন্তর্দৃষ্টি রয়েছে যা আপনার ব্যবসায়ের উপকার করতে পারে। আপনি কি একটি সংক্ষিপ্ত আলোচনায় আগ্রহী?",
        "আমরা যে নতুন সেবা অফার করছি সে সম্পর্কে কিছু উত্তেজনাপূর্ণ আপডেট শেয়ার করতে আমার মূল্যবান ক্লায়েন্টদের কাছে পৌঁছাচ্ছি।",
        "[নাম/কোম্পানির] কাছে আপনার রেফারেল অত্যন্ত প্রশংসিত হয়েছে। আমাদের সেবা�� কথা ভাবার জন্য ধন্যবাদ।",
        "আমাদের সাথে কাজ করার আপনার অভিজ্ঞতা সম্পর্কে শুনতে চাই। আপনি কি একটি প্রশংসাপত্র প্রদান করার বিষয়ে বিবেচনা করবেন?",
      ],
    },
  },
  problem_resolution: {
    title: "Problem Resolution",
    englishTitle: "Problem Resolution",
    bengaliTitle: "সমস্যা সমাধান",
    phrases: {
      english: [
        "I understand your concern and I'm committed to resolving this issue promptly and to your satisfaction.",
        "Thank you for bringing this to my attention. Let me investigate and provide you with a solution within 24 hours.",
        "I apologize for any inconvenience this may have caused. Here's how we'll address this situation.",
        "I take full responsibility for this oversight and will ensure it doesn't happen again in the future.",
        "Based on your feedback, I've implemented additional quality checks to prevent similar issues.",
        "Your satisfaction is my top priority. I'll personally oversee the resolution of this matter.",
      ],
      bengali: [
        "আমি আপনার উদ্বেগ বুঝতে পারছি এবং এই সমস্যাটি দ্রুত এবং আপনার সন্তুষ্টি অনুযায়ী সমাধান করতে প্রতিশ্রুতিবদ্ধ।",
        "এটি আমার নজরে আনার জন্য ধন্যবাদ। আমি তদন্ত করব এবং ২৪ ঘন্টার মধ্যে আপনাকে একটি সমাধান প্রদান করব।",
        "এর কারণে যে কোনো অসুবিধার জন্য আমি ক্ষমাপ্রার্থী। এই পরিস্থিতি আমরা কীভাবে মোকাবেলা করব তা এখানে।",
        "এই তদারকির জন্য আমি সম্পূর্ণ দায় নিচ্ছি এবং নিশ্চিত করব যে ভবিষ্যতে এটি আর ঘটবে না।",
        "আপনার ফিডব্যাকের ভিত্তিতে, আমি অনুরূপ সমস্যা প্রতিরোধের জন্য অতিরিক্ত মান নিয়ন্ত্রণ বাস্তবায়ন করেছি।",
        "আপনার সন্তুষ্টি আমার সর্বোচ্চ অগ্রাধিকার। এই বিষয়ের সমাধানের জন্য আমি ব্যক্তিগতভাবে তদারকি করব।",
      ],
    },
  },
};

const CommunicationTools = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeCategory, setActiveCategory] = useState("initial_contact");
  const [searchTerm, setSearchTerm] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const filteredPhrases = (phrases: string[]) => {
    return phrases.filter((phrase) =>
      phrase.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MessageSquare className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Beginner
                </Badge>
                <Badge variant="outline">8 Lessons</Badge>
              </div>
              <h1 className="text-3xl font-bold">Client Communication Tools</h1>
              <p className="text-muted-foreground">
                Master bilingual communication with clients using professional
                phrases and templates in both Bengali and English
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">4 hours total</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">8,740+ students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.6 rating</span>
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
            <TabsTrigger value="phrases">Phrase Library</TabsTrigger>
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
                            Professional Email Writing
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Master the art of professional email communication
                            for business success
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            Bilingual Communication
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Communicate effectively with clients in both Bengali
                            and English markets
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            Client Relationship Building
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Build lasting relationships that lead to repeat
                            business and referrals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium">
                            Negotiation & Problem Solving
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Handle difficult situations and negotiate
                            successfully with confidence
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Communication Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(communicationCategories).map(
                        ([key, category]) => (
                          <Card key={key} className="border-0 shadow-sm">
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">
                                {category.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {category.englishTitle} /{" "}
                                {category.bengaliTitle}
                              </p>
                              <Badge variant="outline" className="text-xs">
                                {category.phrases.english.length} phrases
                              </Badge>
                            </CardContent>
                          </Card>
                        ),
                      )}
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
                      Download Templates
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Language Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-primary"></div>
                      <span className="text-sm">English (Primary)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-accent"></div>
                      <span className="text-sm">Bengali (বাংলা)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      All communication templates and phrases are provided in
                      both languages for maximum reach.
                    </p>
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
                      8 focused lessons on professional communication skills
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
                        Professional Communication Fundamentals
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Learn the foundations of professional communication and
                        cultural sensitivity in business interactions
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

          <TabsContent value="phrases" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Professional Phrase Library
                </CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Label htmlFor="search">Search phrases</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="Search communication phrases..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Category Selection */}
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(communicationCategories).map(
                      ([key, category]) => (
                        <Button
                          key={key}
                          variant={
                            activeCategory === key ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setActiveCategory(key)}
                        >
                          {category.title}
                        </Button>
                      ),
                    )}
                  </div>

                  {/* Phrases Display */}
                  <Tabs defaultValue="english" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="english">English</TabsTrigger>
                      <TabsTrigger value="bengali">Bengali (বাংলা)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="english" className="space-y-4">
                      {filteredPhrases(
                        communicationCategories[
                          activeCategory as keyof typeof communicationCategories
                        ].phrases.english,
                      ).map((phrase, index) => (
                        <Card key={index} className="border-0 shadow-sm">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start gap-4">
                              <p className="text-sm leading-relaxed flex-1">
                                "{phrase}"
                              </p>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyToClipboard(phrase)}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="bengali" className="space-y-4">
                      {filteredPhrases(
                        communicationCategories[
                          activeCategory as keyof typeof communicationCategories
                        ].phrases.bengali,
                      ).map((phrase, index) => (
                        <Card key={index} className="border-0 shadow-sm">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start gap-4">
                              <p className="text-sm leading-relaxed flex-1">
                                "{phrase}"
                              </p>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyToClipboard(phrase)}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Communication Tools & Templates
                </CardTitle>
                <p className="text-muted-foreground">
                  Professional templates and tools to streamline your client
                  communication
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

export default CommunicationTools;
