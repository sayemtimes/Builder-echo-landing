import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  },
  {
    title: "YouTube Marketing Strategy",
    progress: 100,
    status: "Completed",
    timeSpent: "12 hours",
    completedDate: "April 10, 2024",
    badge: "success",
  },
  {
    title: "Website SEO Foundation",
    progress: 45,
    status: "In Progress",
    timeSpent: "4.5 hours",
    nextLesson: "Technical SEO Essentials",
    badge: "primary",
  },
  {
    title: "Client Communication Tools",
    progress: 100,
    status: "Completed",
    timeSpent: "4 hours",
    completedDate: "March 28, 2024",
    badge: "success",
  },
  {
    title: "Income Generation Strategies",
    progress: 15,
    status: "Started",
    timeSpent: "1.2 hours",
    nextLesson: "Freelancing Platforms & Opportunities",
    badge: "outline",
  },
];

const achievements = [
  {
    title: "First Course Completed",
    description: "Completed Client Communication Tools",
    date: "March 28, 2024",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "YouTube Expert",
    description: "Completed YouTube Marketing Strategy",
    date: "April 10, 2024",
    icon: <PlayCircle className="h-5 w-5" />,
  },
  {
    title: "First Client Acquired",
    description: "Landed your first paying client",
    date: "April 15, 2024",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Income Milestone",
    description: "Reached $1,000 monthly income",
    date: "April 22, 2024",
    icon: <DollarSign className="h-5 w-5" />,
  },
];

const incomeTracker = [
  { month: "March", income: 850, clients: 3 },
  { month: "April", income: 2200, clients: 5 },
  { month: "May", income: 3500, clients: 8 },
];

const upcomingTasks = [
  {
    title: "Complete Technical SEO Lesson",
    course: "Website SEO Foundation",
    dueDate: "Tomorrow",
    priority: "High",
  },
  {
    title: "Submit Week 3 Assignment",
    course: "YouTube SEO Mastery",
    dueDate: "In 3 days",
    priority: "Medium",
  },
  {
    title: "Schedule Mentorship Call",
    course: "General",
    dueDate: "This week",
    priority: "Low",
  },
];

const recentActivity = [
  {
    action: "Completed lesson",
    details: "Link Building Fundamentals",
    course: "Website SEO Foundation",
    time: "2 hours ago",
  },
  {
    action: "Downloaded resource",
    details: "SEO Audit Checklist",
    course: "Website SEO Foundation",
    time: "1 day ago",
  },
  {
    action: "Started new course",
    details: "Income Generation Strategies",
    course: "Income Generation Strategies",
    time: "3 days ago",
  },
  {
    action: "Earned achievement",
    details: "YouTube Expert Badge",
    course: "YouTube Marketing Strategy",
    time: "1 week ago",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg font-semibold">
                {studentData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Ahmed!</h1>
              <p className="text-muted-foreground">
                You're making great progress towards your{" "}
                {studentData.currentGoal} goal
              </p>
            </div>
          </div>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="income">Income Tracker</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {studentData.completedCourses}/
                        {studentData.totalCourses}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Courses Completed
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {studentData.currentIncome}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Current Income
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-warning/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-warning" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                        {studentData.progressToGoal}%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Goal Progress
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">28h</div>
                      <div className="text-sm text-muted-foreground">
                        Total Study Time
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress to Goal */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Progress to {studentData.currentGoal} Goal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Current: {studentData.currentIncome}</span>
                  <span>Goal: {studentData.currentGoal}</span>
                </div>
                <Progress value={studentData.progressToGoal} className="h-3" />
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-primary/5">
                    <div className="text-lg font-bold text-primary">$6,500</div>
                    <div className="text-sm text-muted-foreground">
                      Remaining to Goal
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-success/5">
                    <div className="text-lg font-bold text-success">
                      5 months
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Estimated Time
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5">
                    <div className="text-lg font-bold text-accent">
                      8 clients
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Current Active
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upcoming Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingTasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg border"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{task.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {task.course} • {task.dueDate}
                        </p>
                      </div>
                      <Badge
                        variant={
                          task.priority === "High"
                            ? "destructive"
                            : task.priority === "Medium"
                              ? "outline"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.action}</span>{" "}
                          {activity.details}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.course} • {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              {courseProgress.map((course, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {course.status === "Completed"
                            ? `Completed on ${course.completedDate}`
                            : `Next: ${course.nextLesson}`}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            course.badge === "success"
                              ? "secondary"
                              : course.badge === "primary"
                                ? "default"
                                : "outline"
                          }
                          className={
                            course.badge === "success"
                              ? "bg-green-100 text-green-800"
                              : ""
                          }
                        >
                          {course.status}
                        </Badge>
                        <div className="text-right">
                          <div className="text-lg font-bold">
                            {course.progress}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {course.timeSpent}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Progress value={course.progress} className="mb-4" />
                    <div className="flex gap-2">
                      {course.status !== "Completed" && (
                        <Button size="sm">Continue Learning</Button>
                      )}
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Resources
                      </Button>
                      {course.status === "Completed" && (
                        <Button size="sm" variant="outline">
                          <Award className="h-3 w-3 mr-1" />
                          Certificate
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Overall Completion</span>
                      <span className="text-sm font-medium">58%</span>
                    </div>
                    <Progress value={58} />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Study Streak</span>
                      <span className="text-sm font-medium">12 days</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Weekly Goal</span>
                      <span className="text-sm font-medium">6/8 hours</span>
                    </div>
                    <Progress value={75} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Study Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 rounded-lg bg-primary/5">
                      <div className="text-xl font-bold text-primary">28</div>
                      <div className="text-xs text-muted-foreground">
                        Total Hours
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/5">
                      <div className="text-xl font-bold text-accent">45</div>
                      <div className="text-xs text-muted-foreground">
                        Lessons Completed
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-success/5">
                      <div className="text-xl font-bold text-success">4</div>
                      <div className="text-xs text-muted-foreground">
                        Achievements
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-warning/5">
                      <div className="text-xl font-bold text-warning">92%</div>
                      <div className="text-xs text-muted-foreground">
                        Avg Score
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Earned on {achievement.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="income" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Monthly Income Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {incomeTracker.map((month, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-20 text-sm font-medium">
                        {month.month}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">
                            Income: ${month.income}
                          </span>
                          <span className="text-sm">
                            Clients: {month.clients}
                          </span>
                        </div>
                        <Progress
                          value={(month.income / 10000) * 100}
                          className="h-3"
                        />
                      </div>
                    </div>
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

export default Dashboard;
