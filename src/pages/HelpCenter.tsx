import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Video,
  Download,
  Globe,
  CreditCard,
  Settings,
  Users,
  Zap,
  ChevronRight,
  PlayCircle,
  FileText,
  Mail,
  Phone,
} from "lucide-react";

const helpCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics and set up your account",
    icon: <Zap className="h-6 w-6" />,
    articles: 12,
    color: "bg-blue-500",
  },
  {
    title: "Course Content",
    description: "Questions about lessons, videos, and materials",
    icon: <BookOpen className="h-6 w-6" />,
    articles: 28,
    color: "bg-green-500",
  },
  {
    title: "Technical Support",
    description: "Platform issues, login problems, and bugs",
    icon: <Settings className="h-6 w-6" />,
    articles: 15,
    color: "bg-purple-500",
  },
  {
    title: "Billing & Payments",
    description: "Subscription, refunds, and payment methods",
    icon: <CreditCard className="h-6 w-6" />,
    articles: 18,
    color: "bg-orange-500",
  },
  {
    title: "Community & Mentorship",
    description: "Interacting with peers and booking mentors",
    icon: <Users className="h-6 w-6" />,
    articles: 10,
    color: "bg-pink-500",
  },
  {
    title: "Income & Career",
    description: "Tips for earning and career development",
    icon: <Globe className="h-6 w-6" />,
    articles: 22,
    color: "bg-teal-500",
  },
];

const popularFAQs = [
  {
    question: "How quickly can I expect to see results?",
    answer:
      "Most students begin seeing results within 2-4 weeks of applying the strategies. However, reaching significant income milestones like $5K-$10K monthly typically takes 3-8 months with consistent effort and application of the techniques taught in our courses.",
    category: "Income & Career",
  },
  {
    question: "Are the courses available in Bengali?",
    answer:
      "Yes! We provide comprehensive bilingual support. All course materials, communication templates, and support are available in both English and Bengali. You can switch between languages in your profile settings.",
    category: "Course Content",
  },
  {
    question: "What's included in the Premium membership?",
    answer:
      "Premium membership includes: access to all 5 courses, downloadable resources and templates, 1-on-1 mentorship sessions, priority community support, certification upon completion, and lifetime access to course updates.",
    category: "Billing & Payments",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not completely satisfied with your learning experience within the first 30 days, contact our support team for a full refund.",
    category: "Billing & Payments",
  },
  {
    question: "How do I access the community and study groups?",
    answer:
      "The community is accessible through the 'Community' tab in your dashboard. You can join study groups, participate in discussions, and connect with mentors. Premium members get access to exclusive groups and priority mentor booking.",
    category: "Community & Mentorship",
  },
  {
    question: "Are there live sessions or webinars?",
    answer:
      "Yes! We host monthly live Q&A sessions, specialized workshops, and community meetups. Premium members get early access and can submit questions in advance. All sessions are recorded for later viewing.",
    category: "Course Content",
  },
  {
    question: "How do I track my progress towards income goals?",
    answer:
      "Your dashboard includes a comprehensive income tracker where you can log earnings, set monthly goals, and visualize your progress toward the $10K milestone. You'll also receive milestone notifications and achievement badges.",
    category: "Income & Career",
  },
  {
    question: "What if I need help with technical issues?",
    answer:
      "Our technical support team is available 24/7 through live chat, email, and phone support for Premium members. Most technical issues are resolved within 2-4 hours.",
    category: "Technical Support",
  },
];

const quickActions = [
  {
    title: "Contact Support",
    description: "Get help from our expert team",
    icon: <MessageSquare className="h-5 w-5" />,
    action: "Start Chat",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    icon: <Video className="h-5 w-5" />,
    action: "Watch Now",
  },
  {
    title: "Download Resources",
    description: "Templates, guides, and tools",
    icon: <Download className="h-5 w-5" />,
    action: "Download",
  },
  {
    title: "Community Forum",
    description: "Ask questions and share tips",
    icon: <Users className="h-5 w-5" />,
    action: "Join Discussion",
  },
];

const videoTutorials = [
  {
    title: "Getting Started - Platform Overview",
    duration: "8:45",
    views: "12.5K",
    thumbnail: "🎯",
    description: "Complete walkthrough of the platform features and navigation",
  },
  {
    title: "Setting Up Your Income Goals",
    duration: "6:30",
    views: "8.9K",
    thumbnail: "💰",
    description: "How to configure your income tracking and goal milestones",
  },
  {
    title: "Using Communication Templates",
    duration: "12:15",
    views: "15.2K",
    thumbnail: "💬",
    description: "Mastering the bilingual communication tools and templates",
  },
  {
    title: "Connecting with Mentors",
    duration: "5:20",
    views: "6.7K",
    thumbnail: "👥",
    description: "How to book mentorship sessions and get the most value",
  },
];

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const filteredFAQs = popularFAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to your questions and get the support you need to
            succeed in your digital marketing journey
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for help articles, FAQs, and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                    {action.icon}
                  </div>
                  <h3 className="font-medium mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {action.description}
                  </p>
                  <Button size="sm" variant="outline">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Browse Topics</TabsTrigger>
            <TabsTrigger value="faqs">Popular FAQs</TabsTrigger>
            <TabsTrigger value="tutorials">Video Tutorials</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Help Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`h-12 w-12 rounded-lg ${category.color} flex items-center justify-center text-white`}
                      >
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        {category.articles} articles
                      </Badge>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured Articles */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Articles</CardTitle>
                <p className="text-muted-foreground">
                  Most helpful and frequently accessed guides
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium">
                          Complete Platform Setup Guide
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Step-by-step guide to get started with your account
                        </p>
                        <Badge variant="outline" className="text-xs mt-2">
                          Getting Started
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium">
                          Maximizing Your Course Experience
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Tips to get the most value from your learning
                        </p>
                        <Badge variant="outline" className="text-xs mt-2">
                          Course Content
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium">
                          Building Your First $1K Month
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Proven strategies for reaching your first milestone
                        </p>
                        <Badge variant="outline" className="text-xs mt-2">
                          Income & Career
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium">
                          Using Bengali Communication Tools
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Guide to bilingual client communication features
                        </p>
                        <Badge variant="outline" className="text-xs mt-2">
                          Course Content
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium">
                          Troubleshooting Common Issues
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Solutions for login, video, and platform problems
                        </p>
                        <Badge variant="outline" className="text-xs mt-2">
                          Technical Support
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <h4 className="font-medium">
                          Community Guidelines & Best Practices
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          How to engage effectively in our community
                        </p>
                        <Badge variant="outline" className="text-xs mt-2">
                          Community & Mentorship
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faqs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <p className="text-muted-foreground">
                  Find quick answers to the most common questions
                </p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-7">
                        <div className="space-y-3">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {faq.category}
                          </Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <p className="text-muted-foreground">
                  Step-by-step video guides to help you succeed
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {videoTutorials.map((video, index) => (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="aspect-video bg-muted flex items-center justify-center text-4xl">
                        {video.thumbnail}
                        <PlayCircle className="absolute h-12 w-12 text-white opacity-80" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2">{video.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {video.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{video.duration}</span>
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get Direct Support</CardTitle>
                  <p className="text-muted-foreground">
                    Choose the best way to reach our support team
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-medium">Live Chat</h4>
                        <p className="text-sm text-muted-foreground">
                          Instant help - average response time: 2 minutes
                        </p>
                      </div>
                    </div>
                    <Button className="w-full">Start Live Chat</Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-medium">Email Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed help - response within 24 hours
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Send Email
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-medium">Phone Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Premium members only - direct phone line
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Request Callback
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support Hours</CardTitle>
                  <p className="text-muted-foreground">
                    When our support team is available to help
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Live Chat</span>
                      <span className="text-green-600">24/7 Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Email Support</span>
                      <span className="text-green-600">24/7 Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Phone Support</span>
                      <span className="text-muted-foreground">
                        Mon-Fri 9AM-6PM UTC
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Languages Supported</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">English</Badge>
                      <Badge variant="secondary">Bengali (বাংলা)</Badge>
                      <Badge variant="outline">Hindi (हिंदी)</Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Response Times</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Live Chat</span>
                        <span className="text-green-600">~2 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email (General)</span>
                        <span>~24 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email (Premium)</span>
                        <span className="text-green-600">~4 hours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HelpCenter;
