import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon } from "@/components/ui/calendar";
import {
  Calendar,
  Clock,
  Users,
  Globe,
  Video,
  Mic,
  BookOpen,
  Star,
  MapPin,
  Plus,
  Filter,
  Search,
  Bell,
  Share2,
  Download,
  PlayCircle,
  MessageSquare,
  Award,
  TrendingUp,
  DollarSign,
  Zap,
} from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "YouTube Algorithm Deep Dive: What Changed in 2024",
    description:
      "Comprehensive analysis of the latest YouTube algorithm updates and how to optimize your content for maximum reach and engagement.",
    date: "2024-05-25",
    time: "3:00 PM UTC",
    duration: "90 minutes",
    type: "Webinar",
    instructor: "Dr. Sarah Ahmed",
    instructorAvatar: "SA",
    attendees: 1247,
    maxAttendees: 2000,
    price: "Free",
    language: "English",
    level: "Intermediate",
    tags: ["YouTube", "Algorithm", "SEO", "2024"],
    featured: true,
    category: "YouTube Marketing",
    timezone: "UTC",
    recording: true,
    materials: true,
    certificate: false,
  },
  {
    id: 2,
    title: "বাংলা কন্টেন্ট মার্কেটিং মাস্টারক্লাস",
    description:
      "বাংলা ভাষায় ডিজিটাল মার্কেটিং এর বিশেষ কৌশল এবং স্থানীয় বাজারে কীভাবে সফল হবেন তার সম্পূর্ণ গাইড।",
    date: "2024-05-28",
    time: "7:00 PM BDT",
    duration: "2 hours",
    type: "Workshop",
    instructor: "Ahmed Rahman",
    instructorAvatar: "AR",
    attendees: 456,
    maxAttendees: 500,
    price: "Free",
    language: "Bengali",
    level: "Beginner",
    tags: ["Bengali", "Content Marketing", "বাংলা", "Local SEO"],
    featured: true,
    category: "Bengali Marketing",
    timezone: "BDT",
    recording: true,
    materials: true,
    certificate: true,
  },
  {
    id: 3,
    title: "From Freelancer to Agency Owner: Scaling Your Business",
    description:
      "Learn the exact steps to scale from solo freelancer to successful agency owner, including hiring, systems, and scaling strategies.",
    date: "2024-06-02",
    time: "2:00 PM EST",
    duration: "2.5 hours",
    type: "Masterclass",
    instructor: "David Kim",
    instructorAvatar: "DK",
    attendees: 834,
    maxAttendees: 1000,
    price: "$29",
    language: "English",
    level: "Advanced",
    tags: ["Agency", "Scaling", "Business", "Freelancing"],
    featured: false,
    category: "Business Building",
    timezone: "EST",
    recording: true,
    materials: true,
    certificate: true,
  },
  {
    id: 4,
    title: "Website SEO Audit Live Session",
    description:
      "Watch live SEO audits of real websites, learn to identify issues, and discover optimization opportunities. Q&A included.",
    date: "2024-06-05",
    time: "11:00 AM GMT",
    duration: "60 minutes",
    type: "Live Session",
    instructor: "Michael Chen",
    instructorAvatar: "MC",
    attendees: 623,
    maxAttendees: 800,
    price: "Free",
    language: "English",
    level: "Intermediate",
    tags: ["SEO", "Audit", "Website", "Live"],
    featured: false,
    category: "Website SEO",
    timezone: "GMT",
    recording: false,
    materials: false,
    certificate: false,
  },
  {
    id: 5,
    title: "Income Optimization: Reaching $10K Monthly",
    description:
      "Advanced strategies for optimizing your income streams, increasing rates, and building multiple revenue sources to reach $10K monthly.",
    date: "2024-06-08",
    time: "4:00 PM PST",
    duration: "2 hours",
    type: "Premium Workshop",
    instructor: "Maria Rodriguez",
    instructorAvatar: "MR",
    attendees: 234,
    maxAttendees: 300,
    price: "$49",
    language: "English",
    level: "Advanced",
    tags: ["Income", "$10K", "Revenue", "Optimization"],
    featured: true,
    category: "Income Strategies",
    timezone: "PST",
    recording: true,
    materials: true,
    certificate: true,
  },
];

const pastEvents = [
  {
    id: 6,
    title: "Client Communication Mastery",
    date: "2024-05-15",
    attendees: 1560,
    rating: 4.9,
    recording: true,
    instructor: "Fatima Rahman",
  },
  {
    id: 7,
    title: "Technical SEO Workshop",
    date: "2024-05-10",
    attendees: 890,
    rating: 4.8,
    recording: true,
    instructor: "Michael Chen",
  },
  {
    id: 8,
    title: "YouTube Thumbnail Design Secrets",
    date: "2024-05-05",
    attendees: 2100,
    rating: 4.9,
    recording: true,
    instructor: "Dr. Sarah Ahmed",
  },
];

const eventTypes = [
  {
    name: "Webinar",
    icon: <Video className="h-4 w-4" />,
    color: "bg-blue-500",
  },
  {
    name: "Workshop",
    icon: <BookOpen className="h-4 w-4" />,
    color: "bg-green-500",
  },
  {
    name: "Masterclass",
    icon: <Award className="h-4 w-4" />,
    color: "bg-purple-500",
  },
  {
    name: "Live Session",
    icon: <Mic className="h-4 w-4" />,
    color: "bg-red-500",
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getEventTypeColor = (type: string) => {
    const eventType = eventTypes.find((t) => t.name === type);
    return eventType?.color || "bg-gray-500";
  };

  const getEventTypeIcon = (type: string) => {
    const eventType = eventTypes.find((t) => t.name === type);
    return eventType?.icon || <Video className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Live Events</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join live workshops, masterclasses, and Q&A sessions with industry
            experts. Learn cutting-edge strategies and get your questions
            answered in real-time.
          </p>

          {/* Event Statistics */}
          <div className="grid md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">
                Monthly Events
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Free Access</div>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Event Types</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`h-12 w-12 rounded-lg ${type.color} flex items-center justify-center mx-auto mb-3 text-white`}
                  >
                    {type.icon}
                  </div>
                  <h3 className="font-semibold">{type.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="recordings">Recordings</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className={`border-0 shadow-lg hover:shadow-xl transition-shadow ${event.featured ? "border-l-4 border-l-primary" : ""}`}
                  >
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-8 w-8 rounded-lg ${getEventTypeColor(event.type)} flex items-center justify-center text-white text-sm`}
                              >
                                {getEventTypeIcon(event.type)}
                              </div>
                              <Badge variant="secondary">{event.type}</Badge>
                              {event.featured && (
                                <Badge className="bg-primary text-primary-foreground">
                                  Featured
                                </Badge>
                              )}
                              <Badge
                                variant={
                                  event.price === "Free"
                                    ? "secondary"
                                    : "outline"
                                }
                                className={
                                  event.price === "Free"
                                    ? "bg-green-100 text-green-800"
                                    : ""
                                }
                              >
                                {event.price}
                              </Badge>
                            </div>
                            <h2 className="text-2xl font-bold leading-tight">
                              {event.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>
                                {event.time} ({event.timezone}) •{" "}
                                {event.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span>
                                {event.attendees}/{event.maxAttendees} attendees
                              </span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Globe className="h-4 w-4 text-muted-foreground" />
                              <span>{event.language}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              <span>{event.level} Level</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                  {event.instructorAvatar}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">
                                {event.instructor}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {event.recording && (
                            <div className="flex items-center gap-1">
                              <Video className="h-3 w-3" />
                              <span>Recording Available</span>
                            </div>
                          )}
                          {event.materials && (
                            <div className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              <span>Materials Included</span>
                            </div>
                          )}
                          {event.certificate && (
                            <div className="flex items-center gap-1">
                              <Award className="h-3 w-3" />
                              <span>Certificate</span>
                            </div>
                          )}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-4 border-t">
                          <Button className="flex-1">
                            <Bell className="h-4 w-4 mr-2" />
                            {event.price === "Free"
                              ? "Register Free"
                              : `Register for ${event.price}`}
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                          <Button variant="outline" size="sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            Add to Calendar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Registration */}
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <Zap className="h-12 w-12 mx-auto text-primary" />
                      <h3 className="text-xl font-bold">
                        Never Miss an Event!
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Get notified about new events, workshops, and exclusive
                        masterclasses.
                      </p>
                      <Button className="w-full">
                        <Bell className="h-4 w-4 mr-2" />
                        Enable Notifications
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Featured Instructor */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Featured Instructor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-lg">SA</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Dr. Sarah Ahmed</h4>
                        <p className="text-sm text-muted-foreground">
                          YouTube SEO Expert
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">4.9 • 50K+ students</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Leading YouTube SEO specialist with 8+ years of experience
                      helping creators grow their channels.
                    </p>
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>

                {/* Event Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Event Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "YouTube Marketing",
                      "Website SEO",
                      "Bengali Marketing",
                      "Income Strategies",
                      "Business Building",
                      "Client Communication",
                    ].map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 rounded hover:bg-muted/50 cursor-pointer"
                      >
                        <span className="text-sm">{category}</span>
                        <Badge variant="outline" className="text-xs">
                          {Math.floor(Math.random() * 5) + 1}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CalendarIcon
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Today's Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      No events scheduled for today.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>This Week</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm">
                      <div className="font-medium">
                        YouTube Algorithm Deep Dive
                      </div>
                      <div className="text-muted-foreground">
                        May 25, 3:00 PM
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">
                        বাংলা কন্টেন্ট মাস্টারক্লাস
                      </div>
                      <div className="text-muted-foreground">
                        May 28, 7:00 PM
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3" />
                          {event.attendees} attendees
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {event.rating} rating
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3" />
                          {event.instructor}
                        </div>
                      </div>
                      {event.recording && (
                        <Button variant="outline" className="w-full">
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Watch Recording
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recordings" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Event Recordings</h2>
              <p className="text-muted-foreground">
                Access recordings of past events, workshops, and masterclasses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card
                  key={event.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{event.attendees} views</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {event.rating}
                        </div>
                      </div>
                      <Button className="w-full">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Watch Now
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
                Want to Host Your Own Event?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Share your expertise with our community. We're always looking
                for experienced marketers to lead workshops and masterclasses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Plus className="mr-2 h-5 w-5" />
                  Propose an Event
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Events;
