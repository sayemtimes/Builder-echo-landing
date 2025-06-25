import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LearningCard } from "@/components/LearningCard";
import { MotivationalQuotes } from "@/components/MotivationalQuotes";
import { Link } from "react-router-dom";
import {
  PlayCircle,
  TrendingUp,
  Globe,
  MessageSquare,
  DollarSign,
  Star,
  Users,
  BookOpen,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Lightbulb,
  Award,
} from "lucide-react";

const learningModules = [
  {
    title: "YouTube SEO Mastery",
    description:
      "Master keyword research, optimization techniques, and ranking strategies to make your videos discoverable and drive organic traffic.",
    duration: "8 hours",
    students: 15420,
    rating: 4.8,
    level: "Beginner" as const,
    href: "/youtube-seo",
    icon: <PlayCircle className="h-6 w-6" />,
    isNew: true,
  },
  {
    title: "YouTube Marketing Strategy",
    description:
      "Learn advanced marketing techniques, audience building, and monetization strategies to grow your channel and revenue.",
    duration: "12 hours",
    students: 12830,
    rating: 4.9,
    level: "Intermediate" as const,
    href: "/youtube-marketing",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Website SEO Foundation",
    description:
      "Build solid SEO foundations for websites, including technical SEO, content optimization, and link building strategies.",
    duration: "10 hours",
    students: 18950,
    rating: 4.7,
    level: "Beginner" as const,
    href: "/website-seo",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Client Communication Tools",
    description:
      "Master bilingual communication with clients using professional phrases and templates in both Bengali and English.",
    duration: "4 hours",
    students: 8740,
    rating: 4.6,
    level: "Beginner" as const,
    href: "/communication-tools",
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    title: "Income Generation Strategies",
    description:
      "Discover proven methods to earn up to $10,000 monthly through freelancing, consulting, and digital marketing services.",
    duration: "6 hours",
    students: 22100,
    rating: 4.9,
    level: "Advanced" as const,
    href: "/income-strategies",
    icon: <DollarSign className="h-6 w-6" />,
    isNew: true,
  },
];

const features = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Goal-Oriented Learning",
    description:
      "Structured learning paths designed to achieve $10K monthly income goals.",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Bilingual Support",
    description:
      "Complete communication guides in both Bengali and English for global reach.",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Real Results",
    description:
      "Proven strategies with measurable outcomes and success tracking.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Expert Guidance",
    description:
      "Learn from world-class digital marketing specialists and industry experts.",
  },
];

const stats = [
  {
    label: "Active Students",
    value: "50,000+",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Course Modules",
    value: "100+",
    icon: <BookOpen className="h-5 w-5" />,
  },
  { label: "Success Rate", value: "94%", icon: <Award className="h-5 w-5" /> },
  {
    label: "Avg. Monthly Income",
    value: "$8,500",
    icon: <DollarSign className="h-5 w-5" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Zap className="h-3 w-3 mr-1" />
                  New Course Available
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Master <span className="text-primary">Digital Marketing</span>{" "}
                  & <span className="text-accent">Earn $10K</span> Monthly
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Learn YouTube SEO, digital marketing, and website optimization
                  with bilingual support. Transform your skills into a
                  profitable career with our comprehensive learning platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="flex items-center justify-center text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <Card className="relative border-0 shadow-2xl">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">
                    Your Success Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Monthly Revenue Goal
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        $10,000
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress to Goal</span>
                        <span>75%</span>
                      </div>
                      <div className="h-3 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-lg font-bold text-primary">142</div>
                      <div className="text-xs text-muted-foreground">
                        Clients Served
                      </div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-lg font-bold text-accent">98%</div>
                      <div className="text-xs text-muted-foreground">
                        Satisfaction Rate
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose DigitalMaster?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform is designed by experts to help you
              succeed in the digital marketing world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-8 space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modules Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Complete Learning Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master every aspect of digital marketing with our structured,
              goal-oriented learning paths.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningModules.map((module, index) => (
              <LearningCard key={index} {...module} />
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Daily Motivation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay inspired with powerful insights about money, success, and
              financial freedom.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <MotivationalQuotes />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of successful students who have achieved their
              financial goals through our proven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
