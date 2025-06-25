import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LearningCard } from "@/components/LearningCard";
import { MotivationalQuotes } from "@/components/MotivationalQuotes";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FadeInWrapper,
  SlideInWrapper,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  FloatingAnimation,
  ScaleInWrapper,
} from "@/components/AnimatedWrapper";
import { PulseButton } from "@/components/LoadingComponents";
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
  Sparkles,
  TrendingDown,
  Calendar,
  Shield,
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
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeInWrapper className="space-y-4">
                <SlideInWrapper direction="down" delay={0.2}>
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className="w-fit bg-primary/10 text-primary border-primary/20"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="h-3 w-3 mr-1" />
                      </motion.div>
                      New Course Available
                    </Badge>
                  </motion.div>
                </SlideInWrapper>

                <SlideInWrapper direction="left" delay={0.4}>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Master{" "}
                    <motion.span
                      className="text-primary relative inline-block"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(255, 215, 0, 0)",
                          "0 0 20px rgba(255, 215, 0, 0.5)",
                          "0 0 0px rgba(255, 215, 0, 0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      Digital Marketing
                    </motion.span>{" "}
                    &{" "}
                    <motion.span
                      className="text-accent relative inline-block"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      Earn $10K
                    </motion.span>{" "}
                    Monthly
                  </h1>
                </SlideInWrapper>

                <SlideInWrapper direction="left" delay={0.6}>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Learn YouTube SEO, digital marketing, and website
                    optimization with bilingual support. Transform your skills
                    into a profitable career with our comprehensive learning
                    platform.
                  </p>
                </SlideInWrapper>
              </FadeInWrapper>

              <SlideInWrapper direction="up" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <PulseButton>
                    <HoverScale>
                      <Button
                        size="lg"
                        className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                      >
                        <motion.span className="flex items-center gap-2">
                          Start Learning Today
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="h-5 w-5" />
                          </motion.div>
                        </motion.span>
                      </Button>
                    </HoverScale>
                  </PulseButton>

                  <HoverScale>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <PlayCircle className="mr-2 h-5 w-5" />
                      </motion.div>
                      Watch Demo
                    </Button>
                  </HoverScale>
                </div>
              </SlideInWrapper>

              <StaggerContainer
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
                staggerDelay={0.15}
              >
                {stats.map((stat, index) => (
                  <StaggerItem key={index}>
                    <HoverScale>
                      <div className="text-center space-y-2 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                        <motion.div
                          className="flex items-center justify-center text-primary"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        >
                          {stat.icon}
                        </motion.div>
                        <motion.div
                          className="text-2xl font-bold"
                          animate={{
                            color: ["#000", "#FFD700", "#000"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <SlideInWrapper direction="right" delay={1}>
              <div className="relative">
                <FloatingAnimation>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                </FloatingAnimation>

                <ScaleInWrapper delay={1.2}>
                  <Card className="relative border-0 shadow-2xl bg-gradient-to-b from-card to-card/50 overflow-hidden">
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(255,215,0,0.05), transparent, rgba(255,215,0,0.02))",
                          "linear-gradient(90deg, rgba(255,215,0,0.02), transparent, rgba(255,215,0,0.05))",
                          "linear-gradient(135deg, rgba(255,215,0,0.05), transparent, rgba(255,215,0,0.02))",
                        ],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />

                    <CardHeader className="text-center space-y-4 relative z-10">
                      <motion.div
                        className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center"
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <BarChart3 className="h-8 w-8 text-primary" />
                      </motion.div>
                      <CardTitle className="text-2xl">
                        Your Success Dashboard
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6 relative z-10">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            Monthly Revenue Goal
                          </span>
                          <motion.span
                            className="text-2xl font-bold text-primary"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            $10,000
                          </motion.span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress to Goal</span>
                            <span>75%</span>
                          </div>
                          <div className="h-3 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "75%" }}
                              transition={{
                                duration: 2,
                                ease: "easeOut",
                                delay: 1.5,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          className="text-center p-4 bg-secondary rounded-lg"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                            className="text-lg font-bold text-primary"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: 2,
                            }}
                          >
                            142
                          </motion.div>
                          <div className="text-xs text-muted-foreground">
                            Clients Served
                          </div>
                        </motion.div>
                        <motion.div
                          className="text-center p-4 bg-secondary rounded-lg"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                            className="text-lg font-bold text-accent"
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: 2.5,
                            }}
                          >
                            98%
                          </motion.div>
                          <div className="text-xs text-muted-foreground">
                            Satisfaction Rate
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleInWrapper>
              </div>
            </SlideInWrapper>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/4 -left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInWrapper className="text-center space-y-4 mb-16">
            <motion.h2
              className="text-3xl lg:text-4xl font-bold"
              animate={{
                backgroundImage: [
                  "linear-gradient(45deg, #000, #FFD700, #000)",
                  "linear-gradient(90deg, #FFD700, #000, #FFD700)",
                  "linear-gradient(135deg, #000, #FFD700, #000)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Why Choose DigitalMaster?
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform is designed by experts to help you
              succeed in the digital marketing world.
            </p>
          </FadeInWrapper>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={0.2}
          >
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <HoverScale scale={1.05}>
                  <motion.div
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(255, 215, 0, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-b from-card to-card/80 group overflow-hidden relative">
                      {/* Card background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.5 }}
                      />

                      <CardContent className="pt-8 space-y-4 relative z-10">
                        <motion.div
                          className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: "easeInOut",
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 15,
                          }}
                        >
                          {feature.icon}
                        </motion.div>

                        <motion.h3
                          className="text-lg font-semibold group-hover:text-primary transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {feature.title}
                        </motion.h3>

                        <motion.p
                          className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {feature.description}
                        </motion.p>

                        {/* Floating particles effect */}
                        <motion.div
                          className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full"
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.7,
                          }}
                        />
                        <motion.div
                          className="absolute bottom-4 left-4 w-1 h-1 bg-accent/40 rounded-full"
                          animate={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.9,
                          }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Learning Modules Section */}
      <section className="py-24 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeInWrapper className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Complete Learning Modules
              </h2>
            </motion.div>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Master every aspect of digital marketing with our structured,
              goal-oriented learning paths.
            </motion.p>
          </FadeInWrapper>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {learningModules.map((module, index) => (
              <StaggerItem key={index}>
                <LearningCard {...module} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Call to action */}
          <FadeInWrapper delay={1} className="text-center mt-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8 text-center space-y-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Target className="h-12 w-12 text-primary mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-bold">
                    Ready to Start Your Journey?
                  </h3>
                  <p className="text-muted-foreground">
                    Join thousands of successful students who have transformed
                    their careers
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <PulseButton>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                      >
                        <BookOpen className="mr-2 h-5 w-5" />
                        Start Free Trial
                      </Button>
                    </PulseButton>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/20"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInWrapper>
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
