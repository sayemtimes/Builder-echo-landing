import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Users,
  MessageSquare,
  Heart,
  Share2,
  Search,
  Filter,
  Plus,
  TrendingUp,
  Award,
  Globe,
  Clock,
  Bookmark,
  Flag,
  MoreHorizontal,
  ThumbsUp,
  Reply,
  Send,
} from "lucide-react";

const communityPosts = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "SC",
    timestamp: "2 hours ago",
    category: "Success Story",
    title: "Just hit my first $3K month with YouTube SEO! 🎉",
    content:
      "I can't believe it! After 4 months of consistent work using the techniques from the YouTube SEO course, I finally crossed the $3,000 monthly mark. The keyword research strategies and optimization tips really work. To anyone just starting - keep going, it's worth it!",
    likes: 24,
    comments: 8,
    shares: 3,
    tags: ["YouTube SEO", "Success Story", "Income Milestone"],
  },
  {
    id: 2,
    author: "Ahmed Rahman",
    avatar: "AR",
    timestamp: "5 hours ago",
    category: "Question",
    title: "Best tools for keyword research in Bengali content?",
    content:
      "I'm focusing on Bengali YouTube content and wondering what tools work best for keyword research in Bengali. Has anyone had success with specific tools or strategies for non-English content? Any advice would be appreciated!",
    likes: 12,
    comments: 15,
    shares: 2,
    tags: ["Bengali Content", "Keyword Research", "Tools"],
  },
  {
    id: 3,
    author: "Maria Rodriguez",
    avatar: "MR",
    timestamp: "1 day ago",
    category: "Achievement",
    title: "Completed all 5 courses! Here's what I learned",
    content:
      "Just finished the Income Generation Strategies course, which was my last one. What an incredible journey! The bilingual communication tools have been game-changers for my international clients. Now focusing on scaling to $10K/month using the strategies learned.",
    likes: 45,
    comments: 12,
    shares: 8,
    tags: ["Course Completion", "Learning Journey", "Income Goals"],
  },
  {
    id: 4,
    author: "David Kim",
    avatar: "DK",
    timestamp: "2 days ago",
    category: "Tip",
    title: "My top 5 client communication templates that convert",
    content:
      "After 6 months of testing different approaches, here are the 5 email templates that have given me the highest response rates for new client outreach. These have helped me maintain a 40% response rate...",
    likes: 38,
    comments: 22,
    shares: 15,
    tags: ["Client Communication", "Templates", "Conversion"],
  },
];

const studyGroups = [
  {
    name: "YouTube SEO Masters",
    members: 234,
    description: "Advanced YouTube optimization strategies and case studies",
    category: "Study Group",
    activity: "Very Active",
  },
  {
    name: "Bengali Content Creators",
    members: 89,
    description: "বাংলা কন্টেন্ট ক্রিয়েটরদের জন্য বিশেষ গ্রুপ",
    category: "Language Group",
    activity: "Active",
  },
  {
    name: "$10K Club",
    members: 67,
    description: "Students working towards or who have achieved $10K monthly",
    category: "Goal Group",
    activity: "Active",
  },
  {
    name: "SEO Beginners",
    members: 456,
    description: "Starting your SEO journey? This group is for you!",
    category: "Study Group",
    activity: "Very Active",
  },
];

const mentors = [
  {
    name: "Dr. Sarah Ahmed",
    expertise: "YouTube SEO & Growth",
    students: 150,
    rating: 4.9,
    experience: "8+ years",
    languages: ["English", "Bengali"],
    status: "Available",
  },
  {
    name: "Michael Chen",
    expertise: "Technical SEO & Analytics",
    students: 120,
    rating: 4.8,
    experience: "6+ years",
    languages: ["English"],
    status: "Busy",
  },
  {
    name: "Fatima Rahman",
    expertise: "Cross-Cultural Communication",
    students: 89,
    rating: 4.9,
    experience: "5+ years",
    languages: ["English", "Bengali", "Hindi"],
    status: "Available",
  },
];

const leaderboard = [
  { rank: 1, name: "Alex Thompson", points: 2450, badge: "🏆" },
  { rank: 2, name: "Priya Sharma", points: 2380, badge: "🥈" },
  { rank: 3, name: "Hassan Ali", points: 2290, badge: "🥉" },
  { rank: 4, name: "Lisa Wang", points: 2180, badge: "⭐" },
  { rank: 5, name: "Omar Ahmed", points: 2150, badge: "⭐" },
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [newPostContent, setNewPostContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCreatePost = () => {
    // Handle post creation
    console.log("Creating post:", newPostContent);
    setNewPostContent("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold">DigitalMaster Community</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow students, share your success stories, and learn
            from the best in digital marketing
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>12,500+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>850+ Discussions</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>$2.5M+ Earned Together</span>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="feed">Community Feed</TabsTrigger>
            <TabsTrigger value="groups">Study Groups</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 space-y-6">
                {/* Create Post */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="h-5 w-5" />
                      Share with the Community
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="Share your success story, ask questions, or help fellow students..."
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      rows={4}
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Badge variant="outline">Success Story</Badge>
                        <Badge variant="outline">Question</Badge>
                        <Badge variant="outline">Tip</Badge>
                      </div>
                      <Button onClick={handleCreatePost}>
                        <Send className="h-4 w-4 mr-2" />
                        Share Post
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Search & Filter */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search discussions..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts Feed */}
                <div className="space-y-6">
                  {communityPosts.map((post) => (
                    <Card key={post.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>{post.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold">{post.author}</h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {post.category}
                                  </Badge>
                                  <Clock className="h-3 w-3" />
                                  <span>{post.timestamp}</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>

                            <div>
                              <h3 className="text-lg font-medium mb-2">
                                {post.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                {post.content}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t">
                              <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm">
                                  <ThumbsUp className="h-4 w-4 mr-1" />
                                  {post.likes}
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Reply className="h-4 w-4 mr-1" />
                                  {post.comments}
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Share2 className="h-4 w-4 mr-1" />
                                  {post.shares}
                                </Button>
                              </div>
                              <Button variant="ghost" size="sm">
                                <Bookmark className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">156</div>
                      <div className="text-sm text-muted-foreground">
                        Community Points
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-2 bg-accent/5 rounded">
                        <div className="font-bold text-accent">12</div>
                        <div className="text-xs text-muted-foreground">
                          Posts
                        </div>
                      </div>
                      <div className="p-2 bg-success/5 rounded">
                        <div className="font-bold text-success">45</div>
                        <div className="text-xs text-muted-foreground">
                          Helpful
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trending Topics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Trending Topics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#YouTubeSEO</span>
                      <Badge variant="secondary" className="text-xs">
                        Hot
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#IncomeGoals</span>
                      <span className="text-xs text-muted-foreground">
                        24 posts
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#BengaliContent</span>
                      <span className="text-xs text-muted-foreground">
                        18 posts
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#ClientCommunication</span>
                      <span className="text-xs text-muted-foreground">
                        15 posts
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Featured Groups */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Suggested Groups</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {studyGroups.slice(0, 3).map((group, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <h4 className="font-medium text-sm">{group.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {group.members} members
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          Join Group
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="groups" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyGroups.map((group, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">{group.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {group.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{group.members} members</span>
                        </div>
                        <Badge
                          variant={
                            group.activity === "Very Active"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {group.activity}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">Join Group</Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentors" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="text-lg">
                            {mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold">{mentor.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {mentor.expertise}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(mentor.rating)
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                >
                                  ⭐
                                </div>
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {mentor.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Students:
                          </span>
                          <span>{mentor.students}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Experience:
                          </span>
                          <span>{mentor.experience}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Languages:
                          </span>
                          <div className="flex gap-1">
                            {mentor.languages.map((lang, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {lang}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            mentor.status === "Available"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            mentor.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : ""
                          }
                        >
                          {mentor.status}
                        </Badge>
                        <Button
                          className="flex-1"
                          disabled={mentor.status !== "Available"}
                        >
                          Book Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Leaderboard</CardTitle>
                <p className="text-muted-foreground">
                  Top contributors this month based on helpful posts,
                  engagement, and community support
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{member.badge}</div>
                        <div className="font-bold text-lg w-8">
                          #{member.rank}
                        </div>
                      </div>
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {member.points} community points
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Global SEO Workshop (Bengali)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          May 20, 2024 • 7:00 PM BDT
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      বাংলা ভাষায় বিশেষ এসইও ওয়ার্কশপ - নতুন কৌশল এবং ট্রেন্ড
                      নিয়ে আলোচনা
                    </p>
                    <Button size="sm" className="w-full">
                      Register Free
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          $10K Club Monthly Meetup
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          May 25, 2024 • 8:00 PM UTC
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Exclusive meetup for students targeting or achieving $10K
                      monthly income
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Join Waitlist
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Past Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg opacity-75">
                    <h4 className="font-medium">
                      YouTube Algorithm Update Discussion
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      April 30, 2024 • 156 attendees
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Watch Recording
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg opacity-75">
                    <h4 className="font-medium">
                      Client Communication Masterclass
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      April 15, 2024 • 203 attendees
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Watch Recording
                    </Button>
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

export default Community;
