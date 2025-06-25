import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Quote,
  TrendingUp,
  DollarSign,
  PlayCircle,
  Globe,
  Users,
  Calendar,
  MapPin,
  Star,
  Search,
  Filter,
  Share2,
  Heart,
} from "lucide-react";

const successStories = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "Toronto, Canada",
    avatar: "SC",
    timeframe: "6 months",
    startIncome: "$0",
    currentIncome: "$8,500/month",
    course: "YouTube SEO Mastery",
    specialization: "Tech Review Channels",
    story:
      "I started as a complete beginner with zero knowledge about YouTube SEO. The course taught me everything from keyword research to advanced optimization techniques. Within 3 months, my tech review channel went from 200 to 45,000 subscribers. Now I'm earning $8,500 monthly through ad revenue, sponsorships, and affiliate marketing. The bilingual communication templates helped me secure international brand partnerships.",
    achievements: [
      "45K+ YouTube subscribers",
      "2.1M monthly views",
      "12 brand partnerships",
      "Featured in tech publications",
    ],
    image: "🎥",
    language: "English",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Rahman",
    location: "Dhaka, Bangladesh",
    avatar: "AR",
    timeframe: "8 months",
    startIncome: "$300/month",
    currentIncome: "$12,000/month",
    course: "Website SEO + Income Strategies",
    specialization: "Local Business SEO",
    story:
      "আমি একটি ছোট ওয়েব ডিজাইন কোম্পানি চালাতাম কিন্তু ভালো আয় হতো না। DigitalMaster এর কোর্স করার পর আমি Local SEO তে বিশেষজ্ঞ হয়ে উঠি। এখন আমার ৪৫+ ক্লায়েন্ট আছে এবং মাসে $১২,০০০ আয় ক���ি। বাংলা কমিউনিকেশন টুলস আমাকে স্থানীয় ক্লায়েন্টদের সাথে কাজ করতে সাহায্য করেছে।",
    achievements: [
      "45+ active SEO clients",
      "Local SEO agency owner",
      "Team of 6 employees",
      "Speaking at conferences",
    ],
    image: "🏢",
    language: "Bengali",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    location: "Mexico City, Mexico",
    avatar: "MR",
    timeframe: "4 months",
    startIncome: "$800/month",
    currentIncome: "$6,200/month",
    course: "Complete Bundle",
    specialization: "E-commerce SEO",
    story:
      "Working as a virtual assistant wasn't fulfilling my potential. After completing all 5 courses, I pivoted to e-commerce SEO consulting. The income strategies course was game-changing - it taught me how to package my services and price them properly. I went from charging $5/hour to $150/hour within 4 months. The YouTube marketing course helped me build personal brand authority.",
    achievements: [
      "20+ e-commerce clients",
      "150+ successful campaigns",
      "YouTube channel: 12K subs",
      "Speaking at SEO events",
    ],
    image: "🛍️",
    language: "English",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    location: "Seoul, South Korea",
    avatar: "DK",
    timeframe: "10 months",
    startIncome: "$2,000/month",
    currentIncome: "$15,500/month",
    course: "YouTube Marketing + Income Strategies",
    specialization: "Digital Marketing Agency",
    story:
      "I was freelancing but struggling to scale beyond my personal capacity. The income strategies course taught me how to build systems and hire team members. I now run a digital marketing agency with 8 employees, focusing on YouTube growth for businesses. We've helped 200+ companies increase their online presence, and I'm personally earning $15,500 monthly while working fewer hours.",
    achievements: [
      "Digital marketing agency owner",
      "8-person team",
      "200+ client success stories",
      "6-figure annual revenue",
    ],
    image: "🚀",
    language: "English",
    rating: 5,
  },
  {
    id: 5,
    name: "Fatima Al-Rashid",
    location: "Dubai, UAE",
    avatar: "FR",
    timeframe: "5 months",
    startIncome: "$1,200/month",
    currentIncome: "$7,800/month",
    course: "Communication Tools + Website SEO",
    specialization: "Arabic Market SEO",
    story:
      "The bilingual communication tools were perfect for my situation - I needed to work with both English and Arabic-speaking clients. The website SEO course taught me technical skills that were in high demand in the Middle East market. I specialized in helping Arabic businesses improve their English-language websites for international reach. Now I have a waiting list of clients!",
    achievements: [
      "30+ Arabic market clients",
      "Bilingual SEO specialist",
      "Featured in business magazines",
      "Mentoring other freelancers",
    ],
    image: "🌍",
    language: "English",
    rating: 5,
  },
  {
    id: 6,
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "PS",
    timeframe: "7 months",
    startIncome: "$500/month",
    currentIncome: "$9,200/month",
    course: "YouTube SEO + Communication Tools",
    specialization: "Educational Content",
    story:
      "मैं एक टीचर थी लेकिन YouTube पर educational content बनाकर extra income चाहती थी। YouTube SEO course से मुझे समझ आया कि कैसे educational videos को optimize करें। अब मेर��� 3 channels हैं - English, Hindi, और Bengali में। Communication tools ने मुझे international collaborations म��ं मदद की। अब मैं full-time content creator हूं!",
    achievements: [
      "3 educational YouTube channels",
      "Combined 180K+ subscribers",
      "Educational content partnerships",
      "Online course creator",
    ],
    image: "📚",
    language: "Bengali",
    rating: 5,
  },
];

const statisticsData = [
  {
    title: "Average Income Increase",
    value: "680%",
    description: "Within first 6 months",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Students Earning $5K+",
    value: "2,840",
    description: "Monthly active earners",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    title: "Total Student Earnings",
    value: "$24.8M",
    description: "Generated in past year",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Success Rate",
    value: "94%",
    description: "Students reach income goals",
    icon: <Star className="h-6 w-6" />,
  },
];

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState("stories");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialization, setFilterSpecialization] = useState("all");
  const [filterLanguage, setFilterLanguage] = useState("all");

  const filteredStories = successStories.filter((story) => {
    const matchesSearch =
      story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.story.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      filterSpecialization === "all" ||
      story.specialization
        .toLowerCase()
        .includes(filterSpecialization.toLowerCase());

    const matchesLanguage =
      filterLanguage === "all" || story.language === filterLanguage;

    return matchesSearch && matchesSpecialization && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real students, real results. Discover how our community members have
            transformed their careers and achieved financial freedom through
            digital marketing.
          </p>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {statisticsData.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="mx-auto h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="font-medium mb-1">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
            <TabsTrigger value="testimonials">Video Testimonials</TabsTrigger>
            <TabsTrigger value="community">Community Highlights</TabsTrigger>
          </TabsList>

          <TabsContent value="stories" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search success stories..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select
                    value={filterSpecialization}
                    onValueChange={setFilterSpecialization}
                  >
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specializations</SelectItem>
                      <SelectItem value="youtube">YouTube SEO</SelectItem>
                      <SelectItem value="website">Website SEO</SelectItem>
                      <SelectItem value="agency">Agency Building</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="local">Local SEO</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={filterLanguage}
                    onValueChange={setFilterLanguage}
                  >
                    <SelectTrigger className="w-full md:w-32">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Languages</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Bengali">Bengali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredStories.map((story) => (
                <Card key={story.id} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="text-lg font-semibold">
                            {story.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{story.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <MapPin className="h-3 w-3" />
                            {story.location}
                            <Badge variant="outline" className="ml-2">
                              {story.language}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-4xl">{story.image}</div>
                      </div>

                      {/* Income Progress */}
                      <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Started
                            </div>
                            <div className="font-bold">{story.startIncome}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Timeframe
                            </div>
                            <div className="font-bold">{story.timeframe}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">
                              Current
                            </div>
                            <div className="font-bold text-green-600">
                              {story.currentIncome}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Course & Specialization */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{story.course}</Badge>
                        <Badge variant="outline">{story.specialization}</Badge>
                      </div>

                      {/* Story */}
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                        <p className="text-muted-foreground leading-relaxed pl-6">
                          {story.story}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3">
                          Key Achievements:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {story.achievements.map((achievement, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t">
                        <Button variant="outline" size="sm">
                          <Heart className="h-3 w-3 mr-1" />
                          Inspire Others
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-3 w-3 mr-1" />
                          Share Story
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      <div className="text-4xl">🎥</div>
                      <PlayCircle className="absolute h-12 w-12 text-white opacity-80" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      From $0 to $5K in 4 Months
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Watch how Sarah built her YouTube channel from scratch and
                      now earns consistent monthly income.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>3 minutes</span>
                      <span>•</span>
                      <span>2.1K views</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community Impact</CardTitle>
                  <p className="text-muted-foreground">
                    See how our students are making a difference in their
                    communities and helping others succeed
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-primary/5 rounded-lg">
                      <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                      <div className="text-2xl font-bold">1,200+</div>
                      <div className="text-sm text-muted-foreground">
                        Students Mentoring Others
                      </div>
                    </div>
                    <div className="text-center p-6 bg-accent/5 rounded-lg">
                      <Globe className="h-12 w-12 mx-auto text-accent mb-4" />
                      <div className="text-2xl font-bold">85</div>
                      <div className="text-sm text-muted-foreground">
                        Countries Represented
                      </div>
                    </div>
                    <div className="text-center p-6 bg-success/5 rounded-lg">
                      <TrendingUp className="h-12 w-12 mx-auto text-success mb-4" />
                      <div className="text-2xl font-bold">340</div>
                      <div className="text-sm text-muted-foreground">
                        New Businesses Started
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <h4 className="font-semibold mb-4">Recent Highlights</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Avatar>
                          <AvatarFallback>MR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">
                            Maria Rodriguez launched a free SEO course for
                            Spanish-speaking entrepreneurs
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Reached 500+ students in first week
                          </p>
                        </div>
                        <Badge variant="secondary">Community Leader</Badge>
                      </div>

                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Avatar>
                          <AvatarFallback>AR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">
                            Ahmed Rahman organized the first Bangladesh
                            DigitalMaster meetup
                          </p>
                          <p className="text-sm text-muted-foreground">
                            100+ local students attended in Dhaka
                          </p>
                        </div>
                        <Badge variant="secondary">Event Organizer</Badge>
                      </div>

                      <div className="flex items-center gap-4 p-4 border rounded-lg">
                        <Avatar>
                          <AvatarFallback>DK</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">
                            David Kim's agency donated pro-bono SEO services to
                            10 nonprofits
                          </p>
                          <p className="text-sm text-muted-foreground">
                            $25,000 worth of services donated
                          </p>
                        </div>
                        <Badge variant="secondary">Social Impact</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-12 border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers and
              achieved financial freedom. Your success story could be next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Journey Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View All Courses
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuccessStories;
