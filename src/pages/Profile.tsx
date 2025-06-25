import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Bell,
  Shield,
  CreditCard,
  Download,
  Settings,
  Camera,
  Save,
  Eye,
  EyeOff,
  Trash2,
} from "lucide-react";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    firstName: "Ahmed",
    lastName: "Rahman",
    email: "ahmed.rahman@email.com",
    phone: "+880 1712 345678",
    country: "Bangladesh",
    city: "Dhaka",
    timezone: "Asia/Dhaka",
    bio: "Digital marketing enthusiast working towards building a $10K monthly income through YouTube SEO and website optimization.",
    language: "english",
    currency: "USD",
    incomeGoal: "10000",
  });

  const [notifications, setNotifications] = useState({
    emailCourseUpdates: true,
    emailPromotions: false,
    emailWeeklyProgress: true,
    pushCourseReminders: true,
    pushAchievements: true,
    pushIncomeAlerts: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "private",
    progressSharing: false,
    achievementSharing: true,
    incomeSharing: false,
  });

  const subscriptions = [
    {
      name: "Premium Learning Plan",
      status: "Active",
      nextBilling: "May 15, 2024",
      amount: "$49.99/month",
      features: ["All Courses", "1-on-1 Mentorship", "Priority Support"],
    },
  ];

  const downloadableData = [
    {
      name: "Course Progress Report",
      description: "Detailed report of your learning progress",
      size: "2.3 MB",
      format: "PDF",
    },
    {
      name: "Income Tracking Data",
      description: "All your income tracking and goal data",
      size: "1.1 MB",
      format: "CSV",
    },
    {
      name: "Communication Templates",
      description: "Your saved communication phrases and templates",
      size: "856 KB",
      format: "DOCX",
    },
    {
      name: "Certificates & Achievements",
      description: "All earned certificates and achievement badges",
      size: "5.2 MB",
      format: "ZIP",
    },
  ];

  const handleProfileUpdate = () => {
    // Handle profile update
    console.log("Profile updated:", profileData);
  };

  const handleNotificationUpdate = () => {
    // Handle notification settings update
    console.log("Notifications updated:", notifications);
  };

  const handlePrivacyUpdate = () => {
    // Handle privacy settings update
    console.log("Privacy updated:", privacy);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl font-semibold">
                {profileData.firstName[0]}
                {profileData.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              variant="outline"
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
            >
              <Camera className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">
              {profileData.firstName} {profileData.lastName}
            </h1>
            <p className="text-muted-foreground">{profileData.email}</p>
            <div className="flex items-center gap-4 mt-2">
              <Badge variant="secondary">Premium Member</Badge>
              <Badge variant="outline">
                Goal: ${profileData.incomeGoal}/month
              </Badge>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="data">Data & Downloads</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <p className="text-muted-foreground">
                  Update your personal details and preferences
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select
                      value={profileData.country}
                      onValueChange={(value) =>
                        setProfileData((prev) => ({ ...prev, country: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="Pakistan">Pakistan</SelectItem>
                        <SelectItem value="United States">
                          United States
                        </SelectItem>
                        <SelectItem value="United Kingdom">
                          United Kingdom
                        </SelectItem>
                        <SelectItem value="Canada">Canada</SelectItem>
                        <SelectItem value="Australia">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={profileData.city}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          city: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    placeholder="Tell us about your goals and background..."
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        bio: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Preferred Language</Label>
                    <Select
                      value={profileData.language}
                      onValueChange={(value) =>
                        setProfileData((prev) => ({ ...prev, language: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="bengali">Bengali (বাংলা)</SelectItem>
                        <SelectItem value="both">Both Languages</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select
                      value={profileData.currency}
                      onValueChange={(value) =>
                        setProfileData((prev) => ({ ...prev, currency: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="BDT">BDT (৳)</SelectItem>
                        <SelectItem value="INR">INR (₹)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="incomeGoal">Monthly Income Goal</Label>
                    <Input
                      id="incomeGoal"
                      type="number"
                      value={profileData.incomeGoal}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          incomeGoal: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <Button
                  onClick={handleProfileUpdate}
                  className="w-full md:w-auto"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <p className="text-muted-foreground">
                  Manage your password and security settings
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter current password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Enable 2FA</p>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Login Sessions</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="text-sm font-medium">Current Device</p>
                        <p className="text-sm text-muted-foreground">
                          Chrome on Windows • Active now
                        </p>
                      </div>
                      <Badge variant="secondary">Current</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="text-sm font-medium">Mobile App</p>
                        <p className="text-sm text-muted-foreground">
                          iPhone • Last active 2 hours ago
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>Update Password</Button>
                  <Button variant="outline">Revoke All Sessions</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <p className="text-muted-foreground">
                  Choose what notifications you want to receive
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Email Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Course Updates</p>
                        <p className="text-sm text-muted-foreground">
                          New lessons, course announcements, and updates
                        </p>
                      </div>
                      <Switch
                        checked={notifications.emailCourseUpdates}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({
                            ...prev,
                            emailCourseUpdates: checked,
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">
                          Promotions & Offers
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Special offers, discounts, and promotional content
                        </p>
                      </div>
                      <Switch
                        checked={notifications.emailPromotions}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({
                            ...prev,
                            emailPromotions: checked,
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Weekly Progress</p>
                        <p className="text-sm text-muted-foreground">
                          Weekly summary of your learning progress
                        </p>
                      </div>
                      <Switch
                        checked={notifications.emailWeeklyProgress}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({
                            ...prev,
                            emailWeeklyProgress: checked,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Push Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Course Reminders</p>
                        <p className="text-sm text-muted-foreground">
                          Reminders to complete lessons and assignments
                        </p>
                      </div>
                      <Switch
                        checked={notifications.pushCourseReminders}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({
                            ...prev,
                            pushCourseReminders: checked,
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Achievements</p>
                        <p className="text-sm text-muted-foreground">
                          Notifications when you earn new badges or complete
                          goals
                        </p>
                      </div>
                      <Switch
                        checked={notifications.pushAchievements}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({
                            ...prev,
                            pushAchievements: checked,
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Income Alerts</p>
                        <p className="text-sm text-muted-foreground">
                          Notifications about income milestones and goal
                          progress
                        </p>
                      </div>
                      <Switch
                        checked={notifications.pushIncomeAlerts}
                        onCheckedChange={(checked) =>
                          setNotifications((prev) => ({
                            ...prev,
                            pushIncomeAlerts: checked,
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <Button onClick={handleNotificationUpdate}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <p className="text-muted-foreground">
                  Control your privacy and data sharing preferences
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profileVisibility">
                      Profile Visibility
                    </Label>
                    <Select
                      value={privacy.profileVisibility}
                      onValueChange={(value) =>
                        setPrivacy((prev) => ({
                          ...prev,
                          profileVisibility: value,
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                        <SelectItem value="students-only">
                          Students Only
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Share Progress</p>
                      <p className="text-sm text-muted-foreground">
                        Allow others to see your course progress and
                        achievements
                      </p>
                    </div>
                    <Switch
                      checked={privacy.progressSharing}
                      onCheckedChange={(checked) =>
                        setPrivacy((prev) => ({
                          ...prev,
                          progressSharing: checked,
                        }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Share Achievements</p>
                      <p className="text-sm text-muted-foreground">
                        Show your badges and certificates to other students
                      </p>
                    </div>
                    <Switch
                      checked={privacy.achievementSharing}
                      onCheckedChange={(checked) =>
                        setPrivacy((prev) => ({
                          ...prev,
                          achievementSharing: checked,
                        }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Share Income Data</p>
                      <p className="text-sm text-muted-foreground">
                        Allow income milestones to be shared for motivation
                      </p>
                    </div>
                    <Switch
                      checked={privacy.incomeSharing}
                      onCheckedChange={(checked) =>
                        setPrivacy((prev) => ({
                          ...prev,
                          incomeSharing: checked,
                        }))
                      }
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Data Usage</h4>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">
                        Analytics & Improvement
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        We use anonymized data to improve our platform and
                        course content. This helps us create better learning
                        experiences for all students.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">
                        Personalized Recommendations
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Your learning patterns help us recommend relevant
                        courses and resources tailored to your goals and
                        interests.
                      </p>
                    </div>
                  </div>
                </div>

                <Button onClick={handlePrivacyUpdate}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Privacy Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription & Billing</CardTitle>
                <p className="text-muted-foreground">
                  Manage your subscription and payment methods
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Current Subscription</h4>
                  {subscriptions.map((sub, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-medium">{sub.name}</h5>
                        <Badge
                          variant={
                            sub.status === "Active" ? "secondary" : "outline"
                          }
                          className={
                            sub.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : ""
                          }
                        >
                          {sub.status}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Next Billing</p>
                          <p className="font-medium">{sub.nextBilling}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Amount</p>
                          <p className="font-medium">{sub.amount}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-muted-foreground mb-2">
                          Included Features:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sub.features.map((feature, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Payment Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-sm text-muted-foreground">
                            Expires 12/25 • Default
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Billing History</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-3 border rounded">
                      <span>April 2024 - Premium Plan</span>
                      <span className="font-medium">$49.99</span>
                    </div>
                    <div className="flex justify-between p-3 border rounded">
                      <span>March 2024 - Premium Plan</span>
                      <span className="font-medium">$49.99</span>
                    </div>
                    <div className="flex justify-between p-3 border rounded">
                      <span>February 2024 - Premium Plan</span>
                      <span className="font-medium">$49.99</span>
                    </div>
                  </div>
                  <Button variant="outline">View All Invoices</Button>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="destructive">Cancel Subscription</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data & Downloads</CardTitle>
                <p className="text-muted-foreground">
                  Download your data and manage your information
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Available Downloads</h4>
                  <div className="space-y-3">
                    {downloadableData.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex-1">
                          <h5 className="font-medium">{item.name}</h5>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {item.size} • {item.format}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Data Export</h4>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2">Complete Data Export</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download a complete copy of all your data including
                      profile information, course progress, income tracking, and
                      more.
                    </p>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Request Full Data Export
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-red-600">Danger Zone</h4>
                  <div className="p-4 border border-red-200 rounded-lg">
                    <h5 className="font-medium mb-2">Delete Account</h5>
                    <p className="text-sm text-muted-foreground mb-4">
                      Permanently delete your account and all associated data.
                      This action cannot be undone.
                    </p>
                    <Button variant="destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
