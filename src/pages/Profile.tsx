import { useState, useEffect } from "react";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import {
  FadeInWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedWrapper";
import { GlowButton, MagneticButton } from "@/components/InteractiveButton";
import DataManagement from "@/components/DataManagement";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import {
  ProfileManager,
  SettingsManager,
  UserProfile,
  UserSettings,
  initializeDefaultData,
} from "@/lib/dataManager";
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
  Database,
  Edit,
  Check,
  X,
} from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Profile state
  const [profileData, setProfileData] = useState<UserProfile>(() => {
    const existing = ProfileManager.read();
    return (
      existing || {
        id: crypto.randomUUID(),
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        bio: "",
        website: "",
        joinDate: new Date().toISOString(),
      }
    );
  });

  // Settings state
  const [settings, setSettings] = useState<UserSettings>(() =>
    SettingsManager.read(),
  );

  // Initialize data on component mount
  useEffect(() => {
    initializeDefaultData();
    const profile = ProfileManager.read();
    const userSettings = SettingsManager.read();

    if (profile) {
      setProfileData(profile);
    }
    setSettings(userSettings);
  }, []);

  const handleProfileSave = async () => {
    setLoading(true);
    try {
      if (profileData.id && ProfileManager.read()) {
        ProfileManager.update(profileData);
      } else {
        ProfileManager.create(profileData);
      }
      setIsEditing(false);
      toast.success("Profile saved successfully!");
    } catch (error) {
      toast.error("Failed to save profile");
    } finally {
      setLoading(false);
    }
  };

  const handleSettingsSave = async () => {
    setLoading(true);
    try {
      SettingsManager.update(settings);
      toast.success("Settings saved successfully!");
    } catch (error) {
      toast.error("Failed to save settings");
    } finally {
      setLoading(false);
    }
  };

  const handleProfileReset = () => {
    const defaultProfile = ProfileManager.reset();
    setProfileData(defaultProfile);
    setIsEditing(false);
  };

  const handleDataRefresh = () => {
    const profile = ProfileManager.read();
    const userSettings = SettingsManager.read();

    if (profile) {
      setProfileData(profile);
    }
    setSettings(userSettings);
  };

  const timezones = [
    "UTC",
    "America/New_York",
    "America/Los_Angeles",
    "America/Chicago",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
    "Asia/Shanghai",
    "Asia/Dhaka",
    "Asia/Kolkata",
    "Australia/Sydney",
  ];

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "Japan",
    "China",
    "India",
    "Bangladesh",
    "Pakistan",
    "Brazil",
    "Mexico",
    "Other",
  ];

  return (
    <PageTransition className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <FadeInWrapper>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Avatar className="h-20 w-20 border-4 border-primary/20">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                    {profileData.firstName
                      ? profileData.firstName[0] +
                        (profileData.lastName?.[0] || "")
                      : "U"}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  {profileData.firstName || profileData.lastName
                    ? `${profileData.firstName} ${profileData.lastName}`
                    : "User Profile"}
                </h1>
                <p className="text-muted-foreground">
                  Member since{" "}
                  {new Date(profileData.joinDate).toLocaleDateString()}
                </p>
                <Badge variant="outline" className="mt-2">
                  <User className="h-3 w-3 mr-1" />
                  Digital Marketing Student
                </Badge>
              </div>
            </div>
            <div className="flex gap-2">
              {!isEditing ? (
                <MagneticButton
                  variant="outline"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </MagneticButton>
              ) : (
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <GlowButton onClick={handleProfileSave} disabled={loading}>
                    <Check className="h-4 w-4 mr-2" />
                    Save Changes
                  </GlowButton>
                </div>
              )}
            </div>
          </div>
        </FadeInWrapper>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <FadeInWrapper delay={0.2}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="data">Data Management</TabsTrigger>
            </TabsList>
          </FadeInWrapper>

          <TabsContent value="profile" className="space-y-6">
            <StaggerContainer staggerDelay={0.1}>
              <StaggerItem>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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
                          disabled={!isEditing}
                          className={!isEditing ? "bg-muted" : ""}
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
                          disabled={!isEditing}
                          className={!isEditing ? "bg-muted" : ""}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself and your goals..."
                        value={profileData.bio}
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            bio: e.target.value,
                          }))
                        }
                        disabled={!isEditing}
                        className={!isEditing ? "bg-muted" : ""}
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://your-website.com"
                        value={profileData.website}
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            website: e.target.value,
                          }))
                        }
                        disabled={!isEditing}
                        className={!isEditing ? "bg-muted" : ""}
                      />
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Location & Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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
                          disabled={!isEditing}
                          className={!isEditing ? "bg-muted" : ""}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) =>
                            setProfileData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          disabled={!isEditing}
                          className={!isEditing ? "bg-muted" : ""}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select
                          value={profileData.country}
                          onValueChange={(value) =>
                            setProfileData((prev) => ({
                              ...prev,
                              country: value,
                            }))
                          }
                          disabled={!isEditing}
                        >
                          <SelectTrigger
                            className={!isEditing ? "bg-muted" : ""}
                          >
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
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
                          disabled={!isEditing}
                          className={!isEditing ? "bg-muted" : ""}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select
                        value={profileData.timezone}
                        onValueChange={(value) =>
                          setProfileData((prev) => ({
                            ...prev,
                            timezone: value,
                          }))
                        }
                        disabled={!isEditing}
                      >
                        <SelectTrigger className={!isEditing ? "bg-muted" : ""}>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          {timezones.map((tz) => (
                            <SelectItem key={tz} value={tz}>
                              {tz}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>

              {isEditing && (
                <StaggerItem>
                  <Card className="border-red-200 dark:border-red-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-600">
                        <Trash2 className="h-5 w-5" />
                        Danger Zone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Reset Profile
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Reset Profile</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will reset your profile to default values.
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleProfileReset}>
                              Reset Profile
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </CardContent>
                  </Card>
                </StaggerItem>
              )}
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <StaggerContainer staggerDelay={0.1}>
              <StaggerItem>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Account Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Language</Label>
                        <Select
                          value={settings.preferences.language}
                          onValueChange={(value) =>
                            setSettings((prev) => ({
                              ...prev,
                              preferences: {
                                ...prev.preferences,
                                language: value,
                              },
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="de">Deutsch</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Theme</Label>
                        <Select
                          value={settings.preferences.theme}
                          onValueChange={(value: "light" | "dark" | "system") =>
                            setSettings((prev) => ({
                              ...prev,
                              preferences: {
                                ...prev.preferences,
                                theme: value,
                              },
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Currency</Label>
                        <Select
                          value={settings.preferences.currency}
                          onValueChange={(value) =>
                            setSettings((prev) => ({
                              ...prev,
                              preferences: {
                                ...prev.preferences,
                                currency: value,
                              },
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="EUR">EUR (€)</SelectItem>
                            <SelectItem value="GBP">GBP (£)</SelectItem>
                            <SelectItem value="BDT">BDT (৳)</SelectItem>
                            <SelectItem value="INR">INR (₹)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Date Format</Label>
                        <Select
                          value={settings.preferences.dateFormat}
                          onValueChange={(value) =>
                            setSettings((prev) => ({
                              ...prev,
                              preferences: {
                                ...prev.preferences,
                                dateFormat: value,
                              },
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="MM/DD/YYYY">
                              MM/DD/YYYY
                            </SelectItem>
                            <SelectItem value="DD/MM/YYYY">
                              DD/MM/YYYY
                            </SelectItem>
                            <SelectItem value="YYYY-MM-DD">
                              YYYY-MM-DD
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="pt-4">
                      <GlowButton
                        onClick={handleSettingsSave}
                        disabled={loading}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Account Settings
                      </GlowButton>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <StaggerContainer staggerDelay={0.1}>
              <StaggerItem>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-primary" />
                      Notification Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {[
                        {
                          key: "email",
                          label: "Email Notifications",
                          desc: "Receive notifications via email",
                        },
                        {
                          key: "push",
                          label: "Push Notifications",
                          desc: "Browser push notifications",
                        },
                        {
                          key: "sms",
                          label: "SMS Notifications",
                          desc: "Text message notifications",
                        },
                        {
                          key: "marketing",
                          label: "Marketing Updates",
                          desc: "Product updates and promotions",
                        },
                        {
                          key: "courseUpdates",
                          label: "Course Updates",
                          desc: "New lessons and course announcements",
                        },
                        {
                          key: "achievements",
                          label: "Achievement Alerts",
                          desc: "When you earn new achievements",
                        },
                      ].map((notification) => (
                        <div
                          key={notification.key}
                          className="flex items-center justify-between p-4 rounded-lg border"
                        >
                          <div>
                            <div className="font-medium">
                              {notification.label}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {notification.desc}
                            </div>
                          </div>
                          <Switch
                            checked={
                              settings.notifications[
                                notification.key as keyof typeof settings.notifications
                              ]
                            }
                            onCheckedChange={(checked) =>
                              setSettings((prev) => ({
                                ...prev,
                                notifications: {
                                  ...prev.notifications,
                                  [notification.key]: checked,
                                },
                              }))
                            }
                          />
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <GlowButton
                        onClick={handleSettingsSave}
                        disabled={loading}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Notification Settings
                      </GlowButton>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <StaggerContainer staggerDelay={0.1}>
              <StaggerItem>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Privacy Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Profile Visibility</Label>
                        <Select
                          value={settings.privacy.profileVisibility}
                          onValueChange={(
                            value: "public" | "private" | "connections",
                          ) =>
                            setSettings((prev) => ({
                              ...prev,
                              privacy: {
                                ...prev.privacy,
                                profileVisibility: value,
                              },
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">
                              Public - Anyone can see
                            </SelectItem>
                            <SelectItem value="connections">
                              Connections Only
                            </SelectItem>
                            <SelectItem value="private">
                              Private - Only me
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {[
                        {
                          key: "showProgress",
                          label: "Show Learning Progress",
                          desc: "Display your course progress publicly",
                        },
                        {
                          key: "showIncome",
                          label: "Show Income Stats",
                          desc: "Display your income achievements",
                        },
                        {
                          key: "allowMessages",
                          label: "Allow Messages",
                          desc: "Let other users send you messages",
                        },
                      ].map((privacy) => (
                        <div
                          key={privacy.key}
                          className="flex items-center justify-between p-4 rounded-lg border"
                        >
                          <div>
                            <div className="font-medium">{privacy.label}</div>
                            <div className="text-sm text-muted-foreground">
                              {privacy.desc}
                            </div>
                          </div>
                          <Switch
                            checked={
                              settings.privacy[
                                privacy.key as keyof typeof settings.privacy
                              ]
                            }
                            onCheckedChange={(checked) =>
                              setSettings((prev) => ({
                                ...prev,
                                privacy: {
                                  ...prev.privacy,
                                  [privacy.key]: checked,
                                },
                              }))
                            }
                          />
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <GlowButton
                        onClick={handleSettingsSave}
                        disabled={loading}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Privacy Settings
                      </GlowButton>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <DataManagement onDataChange={handleDataRefresh} />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Profile;
