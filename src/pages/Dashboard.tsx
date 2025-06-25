import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  FadeInWrapper,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  SlideInWrapper,
  ScaleInWrapper,
} from "@/components/AnimatedWrapper";
import {
  GlowButton,
  MagneticButton,
  RippleButton,
} from "@/components/InteractiveButton";
import { PageTransition } from "@/components/PageTransition";
import Footer from "@/components/Footer";
import {
  BarChart3,
  Clock,
  CheckCircle,
  Target,
  Users,
  DollarSign,
  TrendingUp,
  PlayCircle,
  BookOpen,
  Award,
  Calendar,
  Globe,
  MessageSquare,
  Zap,
  Star,
  Download,
  Settings,
  Flame,
  Sparkles,
  TrendingDown,
  ArrowRight,
  Trophy,
} from "lucide-react";

const studentData = {
  name: "Ahmed Rahman",
  email: "ahmed.rahman@email.com",
  joinDate: "March 15, 2024",
  totalCourses: 5,
  completedCourses: 2,
  currentGoal: "$10,000/month",
  currentIncome: "$3,500/month",
  progressToGoal: 35,
};

const courseProgress = [
  {
    title: "YouTube SEO Mastery",
    progress: 85,
    status: "In Progress",
    timeSpent: "6.5 hours",
    nextLesson: "Analytics & Performance Tracking",
    badge: "primary",
    color: "#FFD700",
  },
  {
    title: "YouTube Marketing Strategy",
    progress: 45,
    status: "In Progress",
    timeSpent: "3.2 hours",
    nextLesson: "Brand Partnership Strategies",
    badge: "secondary",
    color: "#FFA500",
  },
  {
    title: "Website SEO Foundation",
    progress: 100,
    status: "Completed",
    timeSpent: "8.5 hours",
    nextLesson: "Course Completed!",
    badge: "success",
    color: "#22c55e",
  },
  {
    title: "Client Communication Tools",
    progress: 100,
    status: "Completed",
    timeSpent: "4.0 hours",
    nextLesson: "Course Completed!",
    badge: "success",
    color: "#22c55e",
  },
  {
    title: "Income Generation Strategies",
    progress: 20,
    status: "Started",
    timeSpent: "1.5 hours",
    nextLesson: "Freelancing Platforms Setup",
    badge: "outline",
    color: "#6b7280",
  },
];

const achievements = [
  {
    title: "First Course Completed",
    description: "Completed your first course",
    icon: Trophy,
    earned: true,
    date: "2024-04-15",
  },
  {
    title: "Fast Learner",
    description: "Completed a course in under 1 week",
    icon: Zap,
    earned: true,
    date: "2024-04-20",
  },
  {
    title: "Goal Setter",
    description: "Set your first income goal",
    icon: Target,
    earned: true,
    date: "2024-03-15",
  },
  {
    title: "Income Milestone",
    description: "Reached $1,000 monthly income",
    icon: DollarSign,
    earned: true,
    date: "2024-05-01",
  },
  {
    title: "Community Member",
    description: "Joined the DigitalMaster community",
    icon: Users,
    earned: false,
    date: null,
  },
  {
    title: "Master Student",
    description: "Complete all 5 courses",
    icon: Award,
    earned: false,
    date: null,
  },
];

const incomeData = [
  { month: "Jan", income: 800, goal: 10000 },
  { month: "Feb", income: 1500, goal: 10000 },
  { month: "Mar", income: 2200, goal: 10000 },
  { month: "Apr", income: 2800, goal: 10000 },
  { month: "May", income: 3500, goal: 10000 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <PageTransition className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <SlideInWrapper direction="down">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Avatar className="h-16 w-16 border-4 border-primary/20">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                    {studentData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <motion.h1
                  className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
                  animate={{
                    backgroundImage: [
                      "linear-gradient(45deg, #000, #FFD700)",
                      "linear-gradient(90deg, #FFD700, #000)",
                      "linear-gradient(135deg, #000, #FFD700)",
                    ],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Welcome back, Ahmed!
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block ml-2"
                  >
                    👋
                  </motion.span>
                </motion.h1>
                <p className="text-muted-foreground">
                  You're making great progress towards your{" "}
                  <motion.span
                    className="text-primary font-semibold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {studentData.currentGoal}
                  </motion.span>{" "}
                  goal
                </p>
              </div>
            </div>
            <MagneticButton variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </MagneticButton>
          </div>
        </SlideInWrapper>

        <FadeInWrapper delay={0.3}>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TabsList className="grid w-full grid-cols-5 bg-muted/50">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="courses"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  My Courses
                </TabsTrigger>
                <TabsTrigger
                  value="progress"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Progress
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Achievements
                </TabsTrigger>
                <TabsTrigger
                  value="income"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Income Tracker
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="overview" className="space-y-8 mt-8">
              {/* Quick Stats */}
              <StaggerContainer
                className="grid md:grid-cols-4 gap-6"
                staggerDelay={0.1}
              >
                <StaggerItem>
                  <HoverScale scale={1.05}>
                    <Card className="relative overflow-hidden group">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center"
                            whileHover={{ rotate: 15, scale: 1.1 }}
                          >
                            <BookOpen className="h-6 w-6 text-primary" />
                          </motion.div>
                          <div>
                            <motion.div
                              className="text-2xl font-bold"
                              animate={{
                                color: ["#000", "#FFD700", "#000"],
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              {studentData.completedCourses}/
                              {studentData.totalCourses}
                            </motion.div>
                            <div className="text-sm text-muted-foreground">
                              Courses Completed
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </StaggerItem>

                <StaggerItem>
                  <HoverScale scale={1.05}>
                    <Card className="relative overflow-hidden group">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center"
                            whileHover={{ rotate: -15, scale: 1.1 }}
                          >
                            <DollarSign className="h-6 w-6 text-green-600" />
                          </motion.div>
                          <div>
                            <motion.div
                              className="text-2xl font-bold text-green-600"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {studentData.currentIncome}
                            </motion.div>
                            <div className="text-sm text-muted-foreground">
                              Current Income
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </StaggerItem>

                <StaggerItem>
                  <HoverScale scale={1.05}>
                    <Card className="relative overflow-hidden group">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Target className="h-6 w-6 text-blue-600" />
                          </motion.div>
                          <div>
                            <motion.div
                              className="text-2xl font-bold text-blue-600"
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              {studentData.progressToGoal}%
                            </motion.div>
                            <div className="text-sm text-muted-foreground">
                              Goal Progress
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </StaggerItem>

                <StaggerItem>
                  <HoverScale scale={1.05}>
                    <Card className="relative overflow-hidden group">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center"
                            whileHover={{ y: -5 }}
                          >
                            <Flame className="h-6 w-6 text-purple-600" />
                          </motion.div>
                          <div>
                            <motion.div
                              className="text-2xl font-bold text-purple-600"
                              animate={{
                                textShadow: [
                                  "0 0 0px rgba(147, 51, 234, 0)",
                                  "0 0 10px rgba(147, 51, 234, 0.5)",
                                  "0 0 0px rgba(147, 51, 234, 0)",
                                ],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              85%
                            </motion.div>
                            <div className="text-sm text-muted-foreground">
                              Streak Rate
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </StaggerItem>
              </StaggerContainer>

              {/* Recent Activity */}
              <SlideInWrapper direction="up" delay={0.6}>
                <Card className="bg-gradient-to-r from-card to-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </motion.div>
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          action: "Completed lesson",
                          course: "YouTube SEO",
                          time: "2 hours ago",
                        },
                        {
                          action: "Earned achievement",
                          course: "Fast Learner",
                          time: "1 day ago",
                        },
                        {
                          action: "Income milestone",
                          course: "$3,500 reached",
                          time: "3 days ago",
                        },
                      ].map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <motion.div
                            className="h-2 w-2 rounded-full bg-primary"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.5,
                            }}
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium">
                              {activity.action}: {activity.course}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {activity.time}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SlideInWrapper>
            </TabsContent>

            <TabsContent value="courses" className="space-y-6 mt-8">
              <StaggerContainer staggerDelay={0.15}>
                {courseProgress.map((course, index) => (
                  <StaggerItem key={index}>
                    <HoverScale scale={1.02}>
                      <Card className="overflow-hidden group">
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            background: `linear-gradient(45deg, ${course.color}10, transparent)`,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <CardContent className="p-6 relative z-10">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                {course.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Next: {course.nextLesson}
                              </p>
                            </div>
                            <Badge
                              variant={course.badge as any}
                              className={
                                course.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : ""
                              }
                            >
                              {course.status}
                            </Badge>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Progress</span>
                                <span className="font-medium">
                                  {course.progress}%
                                </span>
                              </div>
                              <div className="relative">
                                <Progress
                                  value={course.progress}
                                  className="h-2"
                                />
                                <motion.div
                                  className="absolute top-0 left-0 h-2 rounded-full"
                                  style={{ backgroundColor: course.color }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${course.progress}%` }}
                                  transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: index * 0.2,
                                  }}
                                />
                              </div>
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.timeSpent}
                              </span>
                              <RippleButton
                                size="sm"
                                className={
                                  course.progress === 100
                                    ? "bg-green-600 hover:bg-green-700"
                                    : ""
                                }
                              >
                                {course.progress === 100 ? (
                                  <>
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Review
                                  </>
                                ) : (
                                  <>
                                    <PlayCircle className="h-4 w-4 mr-2" />
                                    Continue
                                  </>
                                )}
                              </RippleButton>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6 mt-8">
              <StaggerContainer
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                staggerDelay={0.1}
              >
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <StaggerItem key={index}>
                      <HoverScale scale={1.05}>
                        <Card
                          className={`relative overflow-hidden ${achievement.earned ? "border-primary/50 bg-gradient-to-br from-primary/5 to-transparent" : "opacity-60"}`}
                        >
                          {achievement.earned && (
                            <motion.div
                              className="absolute top-2 right-2"
                              animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <Sparkles className="h-4 w-4 text-primary" />
                            </motion.div>
                          )}
                          <CardContent className="p-6 text-center">
                            <motion.div
                              className={`mx-auto h-16 w-16 rounded-full flex items-center justify-center mb-4 ${
                                achievement.earned
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                              whileHover={
                                achievement.earned
                                  ? { scale: 1.1, rotate: 5 }
                                  : {}
                              }
                            >
                              <Icon className="h-8 w-8" />
                            </motion.div>
                            <h3 className="font-semibold mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {achievement.description}
                            </p>
                            {achievement.earned && achievement.date && (
                              <Badge variant="secondary" className="text-xs">
                                Earned{" "}
                                {new Date(
                                  achievement.date,
                                ).toLocaleDateString()}
                              </Badge>
                            )}
                          </CardContent>
                        </Card>
                      </HoverScale>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </TabsContent>

            <TabsContent value="income" className="space-y-6 mt-8">
              <ScaleInWrapper>
                <Card className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl">
                      Income Goal Tracker
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center space-y-2">
                      <motion.div
                        className="text-4xl font-bold text-green-600"
                        animate={{
                          scale: [1, 1.05, 1],
                          color: ["#16a34a", "#22c55e", "#16a34a"],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {studentData.currentIncome}
                      </motion.div>
                      <p className="text-muted-foreground">
                        Current Monthly Income
                      </p>
                      <div className="flex justify-center items-center gap-2 text-sm text-green-600">
                        <TrendingUp className="h-4 w-4" />
                        <span>+25% from last month</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress to Goal</span>
                        <span className="font-medium">
                          {studentData.progressToGoal}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress
                          value={studentData.progressToGoal}
                          className="h-4"
                        />
                        <motion.div
                          className="absolute top-0 left-0 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${studentData.progressToGoal}%` }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <GlowButton className="w-full">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Set New Goal
                      </GlowButton>
                    </div>
                  </CardContent>
                </Card>
              </ScaleInWrapper>
            </TabsContent>
          </Tabs>
        </FadeInWrapper>
      </main>

      <Footer />
    </PageTransition>
  );
}
