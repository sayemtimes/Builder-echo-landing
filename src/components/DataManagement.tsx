import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  FadeInWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedWrapper";
import { GlowButton, MagneticButton } from "@/components/InteractiveButton";
import { toast } from "sonner";
import {
  BackupManager,
  ResetManager,
  BackupData,
  ProfileManager,
  CourseProgressManager,
  AchievementManager,
  IncomeManager,
  SettingsManager,
} from "@/lib/dataManager";
import {
  Download,
  Upload,
  RotateCcw,
  Trash2,
  Database,
  Shield,
  History,
  AlertTriangle,
  CheckCircle,
  FileJson,
  Clock,
  User,
  BookOpen,
  Trophy,
  DollarSign,
  Settings,
  Eye,
  RefreshCw,
} from "lucide-react";

interface DataManagementProps {
  onDataChange?: () => void;
}

export function DataManagement({ onDataChange }: DataManagementProps) {
  const [backupHistory, setBackupHistory] = useState<BackupData[]>(
    BackupManager.getBackupHistory(),
  );
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBackup = async () => {
    setIsLoading(true);
    try {
      BackupManager.downloadBackup();
      setBackupHistory(BackupManager.getBackupHistory());
      onDataChange?.();
    } catch (error) {
      toast.error("Failed to create backup");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/json") {
      toast.error("Please select a valid JSON backup file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const backupData = JSON.parse(e.target?.result as string);
        const success = BackupManager.import(backupData);
        if (success) {
          setBackupHistory(BackupManager.getBackupHistory());
          onDataChange?.();
        }
      } catch (error) {
        toast.error("Invalid backup file format");
      }
    };
    reader.readAsText(file);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRestore = (backupId: string) => {
    const success = BackupManager.restore(backupId);
    if (success) {
      onDataChange?.();
      setTimeout(() => window.location.reload(), 1000);
    }
  };

  const handleSectionReset = (
    section: "profile" | "progress" | "achievements" | "income" | "settings",
  ) => {
    const success = ResetManager.resetSection(section);
    if (success) {
      onDataChange?.();
    }
  };

  const handleFullReset = () => {
    ResetManager.resetAll();
  };

  const getDataSummary = () => {
    const profile = ProfileManager.read();
    const courseProgress = CourseProgressManager.readAll();
    const achievements = AchievementManager.readAll();
    const incomeRecords = IncomeManager.readAll();
    const settings = SettingsManager.read();

    return {
      profile: profile ? 1 : 0,
      courseProgress: courseProgress.length,
      achievements: achievements.length,
      incomeRecords: incomeRecords.length,
      settings: 1,
      lastUpdate: Math.max(
        ...courseProgress.map((c) => new Date(c.lastAccessed).getTime()),
        ...incomeRecords.map((r) => new Date(r.updatedAt).getTime()),
        Date.now(),
      ),
    };
  };

  const dataSummary = getDataSummary();

  return (
    <div className="space-y-6">
      {/* Data Overview */}
      <FadeInWrapper>
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Data Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <StaggerContainer
              className="grid grid-cols-2 md:grid-cols-5 gap-4"
              staggerDelay={0.1}
            >
              <StaggerItem>
                <div className="text-center p-4 rounded-lg bg-card/50">
                  <User className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold">
                    {dataSummary.profile}
                  </div>
                  <div className="text-sm text-muted-foreground">Profile</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-4 rounded-lg bg-card/50">
                  <BookOpen className="h-6 w-6 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">
                    {dataSummary.courseProgress}
                  </div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-4 rounded-lg bg-card/50">
                  <Trophy className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                  <div className="text-2xl font-bold">
                    {dataSummary.achievements}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Achievements
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-4 rounded-lg bg-card/50">
                  <DollarSign className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold">
                    {dataSummary.incomeRecords}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Income Records
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center p-4 rounded-lg bg-card/50">
                  <Settings className="h-6 w-6 mx-auto mb-2 text-gray-500" />
                  <div className="text-2xl font-bold">
                    {dataSummary.settings}
                  </div>
                  <div className="text-sm text-muted-foreground">Settings</div>
                </div>
              </StaggerItem>
            </StaggerContainer>
            <div className="mt-4 pt-4 border-t text-center text-sm text-muted-foreground">
              Last Updated: {new Date(dataSummary.lastUpdate).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </FadeInWrapper>

      <Tabs defaultValue="backup" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="backup">Backup & Restore</TabsTrigger>
          <TabsTrigger value="reset">Reset & Clear</TabsTrigger>
          <TabsTrigger value="manage">Data Management</TabsTrigger>
        </TabsList>

        <TabsContent value="backup" className="space-y-6">
          {/* Backup & Restore */}
          <FadeInWrapper delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Backup & Restore
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Protect your data by creating backups and restore from
                  previous versions
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Backup Actions */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto">
                          <Download className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-800 dark:text-green-200">
                            Create Backup
                          </h3>
                          <p className="text-sm text-green-600 dark:text-green-300">
                            Download all your data as a JSON file
                          </p>
                        </div>
                        <GlowButton
                          onClick={handleBackup}
                          disabled={isLoading}
                          className="w-full bg-green-600 hover:bg-green-700"
                        >
                          {isLoading ? (
                            <>
                              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                              Creating...
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4 mr-2" />
                              Download Backup
                            </>
                          )}
                        </GlowButton>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto">
                          <Upload className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-blue-800 dark:text-blue-200">
                            Restore Backup
                          </h3>
                          <p className="text-sm text-blue-600 dark:text-blue-300">
                            Upload and restore from a backup file
                          </p>
                        </div>
                        <div className="space-y-2">
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".json"
                            onChange={handleFileImport}
                            className="hidden"
                          />
                          <Button
                            onClick={() => fileInputRef.current?.click()}
                            variant="outline"
                            className="w-full border-blue-200 hover:bg-blue-50"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Select Backup File
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Backup History */}
                {backupHistory.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <History className="h-5 w-5" />
                      Backup History
                    </h3>
                    <ScrollArea className="h-64 w-full border rounded-lg">
                      <div className="p-4 space-y-3">
                        {backupHistory.map((backup, index) => (
                          <motion.div
                            key={backup.exportDate}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <FileJson className="h-5 w-5 text-blue-500" />
                              <div>
                                <div className="font-medium">
                                  {backup.userData.profile?.firstName ||
                                    "Unknown"}
                                  's Data
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {new Date(backup.exportDate).toLocaleString()}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">
                                v{backup.version}
                              </Badge>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button size="sm" variant="outline">
                                    <RotateCcw className="h-4 w-4 mr-1" />
                                    Restore
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>
                                      Restore Backup
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will replace all current data with
                                      the backup from{" "}
                                      {new Date(
                                        backup.exportDate,
                                      ).toLocaleString()}
                                      . Current data will be backed up
                                      automatically before restore.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() =>
                                        handleRestore(backup.exportDate)
                                      }
                                      className="bg-blue-600 hover:bg-blue-700"
                                    >
                                      Restore Data
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                )}
              </CardContent>
            </Card>
          </FadeInWrapper>
        </TabsContent>

        <TabsContent value="reset" className="space-y-6">
          {/* Reset & Clear */}
          <FadeInWrapper delay={0.2}>
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="h-5 w-5" />
                  Reset & Clear Data
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  ⚠️ Warning: These actions cannot be undone. A backup will be
                  created automatically.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Section Resets */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Reset Individual Sections
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        key: "profile",
                        label: "Profile",
                        icon: User,
                        color: "blue",
                      },
                      {
                        key: "progress",
                        label: "Course Progress",
                        icon: BookOpen,
                        color: "green",
                      },
                      {
                        key: "achievements",
                        label: "Achievements",
                        icon: Trophy,
                        color: "yellow",
                      },
                      {
                        key: "income",
                        label: "Income Records",
                        icon: DollarSign,
                        color: "emerald",
                      },
                      {
                        key: "settings",
                        label: "Settings",
                        icon: Settings,
                        color: "gray",
                      },
                    ].map((section) => {
                      const Icon = section.icon;
                      return (
                        <motion.div
                          key={section.key}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800">
                            <CardContent className="p-4 text-center space-y-3">
                              <div
                                className={`h-10 w-10 rounded-full bg-${section.color}-500 text-white flex items-center justify-center mx-auto`}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="font-medium">{section.label}</h4>
                              </div>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-red-200 text-red-600 hover:bg-red-50"
                                  >
                                    <RotateCcw className="h-4 w-4 mr-1" />
                                    Reset
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>
                                      Reset {section.label}
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will permanently delete all{" "}
                                      {section.label.toLowerCase()} data. A
                                      backup will be created automatically
                                      before reset.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() =>
                                        handleSectionReset(section.key as any)
                                      }
                                      className="bg-red-600 hover:bg-red-700"
                                    >
                                      Reset {section.label}
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <Separator />

                {/* Full Reset */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">
                    Complete Reset
                  </h3>
                  <Card className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-950 border-red-300 dark:border-red-700">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="h-16 w-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto">
                        <Trash2 className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-red-800 dark:text-red-200">
                          Reset Everything
                        </h4>
                        <p className="text-sm text-red-600 dark:text-red-300">
                          This will delete ALL your data and reset the
                          application to its initial state. A final backup will
                          be created before reset.
                        </p>
                      </div>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            className="bg-red-600 hover:bg-red-700"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Reset Everything
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-red-600">
                              ⚠️ Complete Data Reset
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              <strong>This action cannot be undone!</strong>
                              <br />
                              <br />
                              This will:
                              <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Delete your entire profile</li>
                                <li>Remove all course progress</li>
                                <li>Clear all achievements</li>
                                <li>Delete all income records</li>
                                <li>Reset all settings</li>
                                <li>Clear backup history</li>
                              </ul>
                              <br />A final backup will be created and
                              downloaded before reset.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={handleFullReset}
                              className="bg-red-600 hover:bg-red-700"
                            >
                              I understand, Reset Everything
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </FadeInWrapper>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          {/* Data Management */}
          <FadeInWrapper delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Advanced Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Storage Info */}
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Database className="h-5 w-5 text-blue-500" />
                        Storage Information
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Storage Used:</span>
                          <span className="font-medium">
                            {Math.round(
                              JSON.stringify(localStorage).length / 1024,
                            )}{" "}
                            KB
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Items Stored:</span>
                          <span className="font-medium">
                            {localStorage.length}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Backup:</span>
                          <span className="font-medium">
                            {backupHistory[0]
                              ? new Date(
                                  backupHistory[0].exportDate,
                                ).toLocaleDateString()
                              : "Never"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Quick Actions
                      </h3>
                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => {
                            const data = {
                              courses: CourseProgressManager.readAll().length,
                              achievements: AchievementManager.readAll().filter(
                                (a) => a.earned,
                              ).length,
                              totalIncome: IncomeManager.readAll().reduce(
                                (sum, r) => sum + r.amount,
                                0,
                              ),
                            };
                            toast.success(
                              `Stats: ${data.courses} courses, ${data.achievements} achievements, $${data.totalIncome} earned`,
                            );
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Quick Stats
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => {
                            const history = BackupManager.getBackupHistory();
                            BackupManager.clearBackupHistory();
                            setBackupHistory([]);
                            toast.success(
                              `Cleared ${history.length} backup entries`,
                            );
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Clear Backup History
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => {
                            onDataChange?.();
                            toast.success("Data refreshed!");
                          }}
                        >
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Refresh Data
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </FadeInWrapper>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default DataManagement;
