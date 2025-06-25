import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Calendar,
  Clock,
  User,
  BookOpen,
  TrendingUp,
  Globe,
  MessageSquare,
  DollarSign,
  PlayCircle,
  FileText,
  ArrowRight,
  Eye,
  Heart,
  Share2,
  Filter,
  Tag,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 YouTube SEO Secrets That Guarantee More Views in 2024",
    excerpt:
      "Discover the latest YouTube algorithm changes and how to optimize your videos for maximum visibility. These proven strategies have helped our students increase views by 400%.",
    author: "Dr. Sarah Ahmed",
    authorAvatar: "SA",
    publishDate: "2024-05-15",
    readTime: "8 min read",
    category: "YouTube SEO",
    tags: ["SEO", "YouTube", "Algorithm", "Views"],
    image: "🎥",
    views: 2847,
    likes: 156,
    featured: true,
    content:
      "The YouTube landscape has evolved dramatically in 2024, with new algorithm updates favoring engagement retention over traditional metrics...",
  },
  {
    id: 2,
    title: "Complete Guide to Bengali Digital Marketing: বাংলা কন্টেন্টে SEO",
    excerpt:
      "বাংলা ভাষায় ডিজিটাল মার্কেটিং এর সম্পূর্ণ গাইড। কীভাবে বাংলা কন্টেন্ট দিয়ে আন্তর্জাতিক বাজারে পৌঁছাবেন এবং বেশি আয় করবেন।",
    author: "Ahmed Rahman",
    authorAvatar: "AR",
    publishDate: "2024-05-12",
    readTime: "12 min read",
    category: "Bengali Marketing",
    tags: ["Bengali", "বাংলা", "Local SEO", "Content"],
    image: "🌍",
    views: 1923,
    likes: 98,
    featured: false,
  },
  {
    id: 3,
    title: "From $0 to $10K: Real Income Strategies That Actually Work",
    excerpt:
      "A detailed breakdown of how 5 students went from complete beginners to earning $10,000+ monthly. Includes exact strategies, timelines, and revenue breakdowns.",
    author: "Maria Rodriguez",
    authorAvatar: "MR",
    publishDate: "2024-05-10",
    readTime: "15 min read",
    category: "Income Strategies",
    tags: ["Income", "Success Story", "Freelancing", "Revenue"],
    image: "💰",
    views: 3456,
    likes: 289,
    featured: true,
  },
  {
    id: 4,
    title: "The Art of Client Communication: Scripts That Convert",
    excerpt:
      "Master the psychology of client communication with proven scripts and templates. Learn how to position yourself as an expert and command premium rates.",
    author: "David Kim",
    authorAvatar: "DK",
    publishDate: "2024-05-08",
    readTime: "10 min read",
    category: "Client Communication",
    tags: ["Communication", "Scripts", "Pricing", "Psychology"],
    image: "💬",
    views: 1567,
    likes: 134,
    featured: false,
  },
  {
    id: 5,
    title: "Technical SEO Checklist: 50 Points to Rank Higher",
    excerpt:
      "A comprehensive technical SEO checklist that covers everything from Core Web Vitals to structured data. Download the PDF checklist for free.",
    author: "Michael Chen",
    authorAvatar: "MC",
    publishDate: "2024-05-05",
    readTime: "18 min read",
    category: "Website SEO",
    tags: ["Technical SEO", "Checklist", "Ranking", "Core Web Vitals"],
    image: "⚙️",
    views: 2134,
    likes: 187,
    featured: false,
  },
  {
    id: 6,
    title: "Building Your Digital Marketing Agency: A Step-by-Step Guide",
    excerpt:
      "Everything you need to know about starting and scaling a digital marketing agency. From finding your niche to hiring your first employee.",
    author: "Fatima Rahman",
    authorAvatar: "FR",
    publishDate: "2024-05-03",
    readTime: "22 min read",
    category: "Business Building",
    tags: ["Agency", "Business", "Scaling", "Team Building"],
    image: "🏢",
    views: 1789,
    likes: 145,
    featured: false,
  },
];

const categories = [
  "All Categories",
  "YouTube SEO",
  "Website SEO",
  "Income Strategies",
  "Client Communication",
  "Bengali Marketing",
  "Business Building",
  "Success Stories",
];

const featuredTopics = [
  {
    title: "YouTube Algorithm Updates",
    description: "Latest changes and optimization strategies",
    icon: <PlayCircle className="h-6 w-6" />,
    posts: 12,
  },
  {
    title: "Freelancing Success",
    description: "Building a profitable freelance career",
    icon: <DollarSign className="h-6 w-6" />,
    posts: 18,
  },
  {
    title: "Bengali Content Marketing",
    description: "Strategies for Bengali-speaking markets",
    icon: <Globe className="h-6 w-6" />,
    posts: 8,
  },
  {
    title: "Client Communication",
    description: "Scripts and templates that convert",
    icon: <MessageSquare className="h-6 w-6" />,
    posts: 15,
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeTab, setActiveTab] = useState("latest");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All Categories" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const latestPosts = filteredPosts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
  const popularPosts = filteredPosts.sort((a, b) => b.views - a.views);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Digital Marketing Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, proven strategies, and actionable tips to help you
            succeed in digital marketing and build a profitable online business.
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles, topics, and strategies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTopics.map((topic, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {topic.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {topic.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {topic.posts} articles
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="latest">Latest Posts</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
          </TabsList>

          <TabsContent value="latest" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {latestPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-start gap-6">
                          <div className="text-6xl">{post.image}</div>
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">{post.category}</Badge>
                              {post.featured && (
                                <Badge className="bg-primary text-primary-foreground">
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <h2 className="text-2xl font-bold leading-tight">
                              {post.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Author and Meta */}
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>
                                {post.authorAvatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{post.author}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(
                                    post.publishDate,
                                  ).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {post.readTime}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Eye className="h-3 w-3" />
                              {post.views}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Heart className="h-3 w-3" />
                              {post.likes}
                            </div>
                            <Button variant="outline" size="sm">
                              Read More
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              <Tag className="h-2 w-2 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Newsletter Signup */}
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Weekly Digital Marketing Tips
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Get actionable strategies delivered to your inbox every
                        Tuesday. Join 12,500+ marketers who read our newsletter.
                      </p>
                      <div className="space-y-3">
                        <Input placeholder="Enter your email" />
                        <Button className="w-full">Subscribe Free</Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        No spam. Unsubscribe anytime.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "YouTube SEO",
                        "Income",
                        "Bengali",
                        "Freelancing",
                        "Client Communication",
                        "Website SEO",
                        "Algorithm",
                        "Success Story",
                        "Revenue",
                        "Optimization",
                        "Strategy",
                        "Tutorial",
                      ].map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Comments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Comments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            JD
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">John Doe</span> on{" "}
                            <span className="text-primary">
                              YouTube SEO Secrets
                            </span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            "This strategy increased my views by 300%!"
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            LM
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-medium">Lisa Martinez</span>{" "}
                            on{" "}
                            <span className="text-primary">
                              $0 to $10K Guide
                            </span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            "Exactly what I needed to get started!"
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="featured" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                        <div className="text-4xl">{post.image}</div>
                      </div>
                      <h3 className="text-xl font-bold">{post.title}</h3>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {post.authorAvatar}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{post.author}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">#{index + 1} Popular</Badge>
                        <div className="text-3xl">{post.image}</div>
                      </div>
                      <h3 className="text-lg font-bold">{post.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {post.likes} likes
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Read Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-16 border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="py-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Ready to Implement These Strategies?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stop just reading about success - start creating it. Join our
                comprehensive courses and get hands-on training with these
                proven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Courses
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Join Community
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
