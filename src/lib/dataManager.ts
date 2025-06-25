import { toast } from "sonner";

// Types for data structures
export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  timezone: string;
  bio: string;
  website: string;
  joinDate: string;
  avatar?: string;
}

export interface CourseProgress {
  id: string;
  courseId: string;
  courseName: string;
  progress: number;
  status: "not-started" | "in-progress" | "completed";
  timeSpent: number; // in minutes
  lastAccessed: string;
  completedLessons: string[];
  currentLesson?: string;
  certificates: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
  category: "learning" | "income" | "community" | "milestone";
}

export interface IncomeRecord {
  id: string;
  month: string;
  year: number;
  amount: number;
  goal: number;
  sources: Array<{
    source: string;
    amount: number;
    description?: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface UserSettings {
  id: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
    marketing: boolean;
    courseUpdates: boolean;
    achievements: boolean;
  };
  privacy: {
    profileVisibility: "public" | "private" | "connections";
    showProgress: boolean;
    showIncome: boolean;
    allowMessages: boolean;
  };
  preferences: {
    language: string;
    theme: "light" | "dark" | "system";
    timezone: string;
    currency: string;
    dateFormat: string;
  };
}

export interface BackupData {
  version: string;
  exportDate: string;
  userData: {
    profile: UserProfile;
    courseProgress: CourseProgress[];
    achievements: Achievement[];
    incomeRecords: IncomeRecord[];
    settings: UserSettings;
  };
}

// Local Storage Keys
const STORAGE_KEYS = {
  PROFILE: "digitalmaster_profile",
  COURSE_PROGRESS: "digitalmaster_course_progress",
  ACHIEVEMENTS: "digitalmaster_achievements",
  INCOME_RECORDS: "digitalmaster_income_records",
  SETTINGS: "digitalmaster_settings",
  BACKUP_HISTORY: "digitalmaster_backup_history",
} as const;

// Utility functions
const getStorageData = <T>(key: string, defaultValue: T): T => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage (${key}):`, error);
    return defaultValue;
  }
};

const setStorageData = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error writing to localStorage (${key}):`, error);
    toast.error("Failed to save data. Storage may be full.");
  }
};

// CRUD Operations for User Profile
export class ProfileManager {
  static create(profile: Omit<UserProfile, "id" | "joinDate">): UserProfile {
    const newProfile: UserProfile = {
      ...profile,
      id: crypto.randomUUID(),
      joinDate: new Date().toISOString(),
    };

    setStorageData(STORAGE_KEYS.PROFILE, newProfile);
    toast.success("Profile created successfully!");
    return newProfile;
  }

  static read(): UserProfile | null {
    return getStorageData<UserProfile | null>(STORAGE_KEYS.PROFILE, null);
  }

  static update(updates: Partial<UserProfile>): UserProfile | null {
    const currentProfile = this.read();
    if (!currentProfile) {
      toast.error("No profile found to update");
      return null;
    }

    const updatedProfile = { ...currentProfile, ...updates };
    setStorageData(STORAGE_KEYS.PROFILE, updatedProfile);
    toast.success("Profile updated successfully!");
    return updatedProfile;
  }

  static delete(): boolean {
    try {
      localStorage.removeItem(STORAGE_KEYS.PROFILE);
      toast.success("Profile deleted successfully!");
      return true;
    } catch (error) {
      toast.error("Failed to delete profile");
      return false;
    }
  }

  static reset(): UserProfile {
    const defaultProfile: UserProfile = {
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
    };

    setStorageData(STORAGE_KEYS.PROFILE, defaultProfile);
    toast.success("Profile reset to defaults!");
    return defaultProfile;
  }
}

// CRUD Operations for Course Progress
export class CourseProgressManager {
  static create(progress: Omit<CourseProgress, "id">): CourseProgress {
    const courses = this.readAll();
    const newProgress: CourseProgress = {
      ...progress,
      id: crypto.randomUUID(),
    };

    const updatedCourses = [...courses, newProgress];
    setStorageData(STORAGE_KEYS.COURSE_PROGRESS, updatedCourses);
    toast.success("Course progress created!");
    return newProgress;
  }

  static readAll(): CourseProgress[] {
    return getStorageData<CourseProgress[]>(STORAGE_KEYS.COURSE_PROGRESS, []);
  }

  static readById(id: string): CourseProgress | null {
    const courses = this.readAll();
    return courses.find((course) => course.id === id) || null;
  }

  static readByCourseId(courseId: string): CourseProgress | null {
    const courses = this.readAll();
    return courses.find((course) => course.courseId === courseId) || null;
  }

  static update(
    id: string,
    updates: Partial<CourseProgress>,
  ): CourseProgress | null {
    const courses = this.readAll();
    const index = courses.findIndex((course) => course.id === id);

    if (index === -1) {
      toast.error("Course progress not found");
      return null;
    }

    courses[index] = { ...courses[index], ...updates };
    setStorageData(STORAGE_KEYS.COURSE_PROGRESS, courses);
    toast.success("Course progress updated!");
    return courses[index];
  }

  static delete(id: string): boolean {
    const courses = this.readAll();
    const filteredCourses = courses.filter((course) => course.id !== id);

    if (courses.length === filteredCourses.length) {
      toast.error("Course progress not found");
      return false;
    }

    setStorageData(STORAGE_KEYS.COURSE_PROGRESS, filteredCourses);
    toast.success("Course progress deleted!");
    return true;
  }

  static deleteAll(): boolean {
    try {
      setStorageData(STORAGE_KEYS.COURSE_PROGRESS, []);
      toast.success("All course progress reset!");
      return true;
    } catch (error) {
      toast.error("Failed to reset course progress");
      return false;
    }
  }

  static updateProgress(
    courseId: string,
    progress: number,
    completedLesson?: string,
  ): void {
    let courseProgress = this.readByCourseId(courseId);

    if (!courseProgress) {
      // Create new progress record
      courseProgress = this.create({
        courseId,
        courseName: courseId
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        progress,
        status:
          progress === 0
            ? "not-started"
            : progress === 100
              ? "completed"
              : "in-progress",
        timeSpent: 0,
        lastAccessed: new Date().toISOString(),
        completedLessons: completedLesson ? [completedLesson] : [],
        certificates: progress === 100 ? [crypto.randomUUID()] : [],
      });
    } else {
      const completedLessons = completedLesson
        ? [...new Set([...courseProgress.completedLessons, completedLesson])]
        : courseProgress.completedLessons;

      this.update(courseProgress.id, {
        progress,
        status:
          progress === 0
            ? "not-started"
            : progress === 100
              ? "completed"
              : "in-progress",
        lastAccessed: new Date().toISOString(),
        completedLessons,
        currentLesson: completedLesson,
        certificates:
          progress === 100 && courseProgress.certificates.length === 0
            ? [crypto.randomUUID()]
            : courseProgress.certificates,
      });
    }
  }
}

// CRUD Operations for Achievements
export class AchievementManager {
  static create(achievement: Omit<Achievement, "id">): Achievement {
    const achievements = this.readAll();
    const newAchievement: Achievement = {
      ...achievement,
      id: crypto.randomUUID(),
    };

    const updatedAchievements = [...achievements, newAchievement];
    setStorageData(STORAGE_KEYS.ACHIEVEMENTS, updatedAchievements);
    toast.success("Achievement unlocked! 🏆");
    return newAchievement;
  }

  static readAll(): Achievement[] {
    return getStorageData<Achievement[]>(STORAGE_KEYS.ACHIEVEMENTS, []);
  }

  static readById(id: string): Achievement | null {
    const achievements = this.readAll();
    return achievements.find((achievement) => achievement.id === id) || null;
  }

  static update(id: string, updates: Partial<Achievement>): Achievement | null {
    const achievements = this.readAll();
    const index = achievements.findIndex(
      (achievement) => achievement.id === id,
    );

    if (index === -1) {
      toast.error("Achievement not found");
      return null;
    }

    achievements[index] = { ...achievements[index], ...updates };
    setStorageData(STORAGE_KEYS.ACHIEVEMENTS, achievements);

    if (updates.earned === true && !achievements[index].earned) {
      toast.success(`Achievement earned: ${achievements[index].title}! 🎉`);
    }

    return achievements[index];
  }

  static delete(id: string): boolean {
    const achievements = this.readAll();
    const filteredAchievements = achievements.filter(
      (achievement) => achievement.id !== id,
    );

    if (achievements.length === filteredAchievements.length) {
      toast.error("Achievement not found");
      return false;
    }

    setStorageData(STORAGE_KEYS.ACHIEVEMENTS, filteredAchievements);
    toast.success("Achievement deleted!");
    return true;
  }

  static reset(): boolean {
    try {
      setStorageData(STORAGE_KEYS.ACHIEVEMENTS, []);
      toast.success("All achievements reset!");
      return true;
    } catch (error) {
      toast.error("Failed to reset achievements");
      return false;
    }
  }

  static unlock(
    title: string,
    description: string,
    category: Achievement["category"] = "milestone",
  ): void {
    const achievements = this.readAll();
    const existing = achievements.find((a) => a.title === title);

    if (!existing) {
      this.create({
        title,
        description,
        icon: "trophy",
        earned: true,
        earnedDate: new Date().toISOString(),
        category,
      });
    } else if (!existing.earned) {
      this.update(existing.id, {
        earned: true,
        earnedDate: new Date().toISOString(),
      });
    }
  }
}

// CRUD Operations for Income Records
export class IncomeManager {
  static create(
    income: Omit<IncomeRecord, "id" | "createdAt" | "updatedAt">,
  ): IncomeRecord {
    const records = this.readAll();
    const newRecord: IncomeRecord = {
      ...income,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedRecords = [...records, newRecord];
    setStorageData(STORAGE_KEYS.INCOME_RECORDS, updatedRecords);
    toast.success("Income record added!");
    return newRecord;
  }

  static readAll(): IncomeRecord[] {
    return getStorageData<IncomeRecord[]>(STORAGE_KEYS.INCOME_RECORDS, []);
  }

  static readById(id: string): IncomeRecord | null {
    const records = this.readAll();
    return records.find((record) => record.id === id) || null;
  }

  static readByMonth(month: string, year: number): IncomeRecord | null {
    const records = this.readAll();
    return (
      records.find(
        (record) => record.month === month && record.year === year,
      ) || null
    );
  }

  static update(
    id: string,
    updates: Partial<IncomeRecord>,
  ): IncomeRecord | null {
    const records = this.readAll();
    const index = records.findIndex((record) => record.id === id);

    if (index === -1) {
      toast.error("Income record not found");
      return null;
    }

    records[index] = {
      ...records[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    setStorageData(STORAGE_KEYS.INCOME_RECORDS, records);
    toast.success("Income record updated!");
    return records[index];
  }

  static delete(id: string): boolean {
    const records = this.readAll();
    const filteredRecords = records.filter((record) => record.id !== id);

    if (records.length === filteredRecords.length) {
      toast.error("Income record not found");
      return false;
    }

    setStorageData(STORAGE_KEYS.INCOME_RECORDS, filteredRecords);
    toast.success("Income record deleted!");
    return true;
  }

  static deleteAll(): boolean {
    try {
      setStorageData(STORAGE_KEYS.INCOME_RECORDS, []);
      toast.success("All income records reset!");
      return true;
    } catch (error) {
      toast.error("Failed to reset income records");
      return false;
    }
  }
}

// Settings Manager
export class SettingsManager {
  static create(settings: Omit<UserSettings, "id">): UserSettings {
    const newSettings: UserSettings = {
      ...settings,
      id: crypto.randomUUID(),
    };

    setStorageData(STORAGE_KEYS.SETTINGS, newSettings);
    toast.success("Settings saved!");
    return newSettings;
  }

  static read(): UserSettings {
    return getStorageData<UserSettings>(STORAGE_KEYS.SETTINGS, {
      id: crypto.randomUUID(),
      notifications: {
        email: true,
        push: true,
        sms: false,
        marketing: false,
        courseUpdates: true,
        achievements: true,
      },
      privacy: {
        profileVisibility: "public",
        showProgress: true,
        showIncome: false,
        allowMessages: true,
      },
      preferences: {
        language: "en",
        theme: "system",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        currency: "USD",
        dateFormat: "MM/DD/YYYY",
      },
    });
  }

  static update(updates: Partial<UserSettings>): UserSettings {
    const currentSettings = this.read();
    const updatedSettings = { ...currentSettings, ...updates };
    setStorageData(STORAGE_KEYS.SETTINGS, updatedSettings);
    toast.success("Settings updated!");
    return updatedSettings;
  }

  static reset(): UserSettings {
    const defaultSettings = this.read(); // This will return defaults
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
    const newDefaults = this.read();
    toast.success("Settings reset to defaults!");
    return newDefaults;
  }
}

// Backup and Restore Manager
export class BackupManager {
  static export(): BackupData {
    const backupData: BackupData = {
      version: "1.0.0",
      exportDate: new Date().toISOString(),
      userData: {
        profile: ProfileManager.read() || ({} as UserProfile),
        courseProgress: CourseProgressManager.readAll(),
        achievements: AchievementManager.readAll(),
        incomeRecords: IncomeManager.readAll(),
        settings: SettingsManager.read(),
      },
    };

    // Save backup to history
    const backupHistory = getStorageData<BackupData[]>(
      STORAGE_KEYS.BACKUP_HISTORY,
      [],
    );
    backupHistory.unshift({
      ...backupData,
      userData: {
        ...backupData.userData,
        profile: {
          ...backupData.userData.profile,
          firstName: backupData.userData.profile.firstName || "Backup",
        },
      },
    });

    // Keep only last 10 backups
    if (backupHistory.length > 10) {
      backupHistory.splice(10);
    }

    setStorageData(STORAGE_KEYS.BACKUP_HISTORY, backupHistory);
    toast.success("Data exported successfully!");
    return backupData;
  }

  static downloadBackup(): void {
    const backupData = this.export();
    const dataStr = JSON.stringify(backupData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `digitalmaster-backup-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success("Backup file downloaded!");
  }

  static import(backupData: BackupData): boolean {
    try {
      // Validate backup data structure
      if (!backupData.userData || !backupData.version) {
        throw new Error("Invalid backup format");
      }

      // Create backup of current data before importing
      this.export();

      // Import data
      if (backupData.userData.profile) {
        setStorageData(STORAGE_KEYS.PROFILE, backupData.userData.profile);
      }

      if (backupData.userData.courseProgress) {
        setStorageData(
          STORAGE_KEYS.COURSE_PROGRESS,
          backupData.userData.courseProgress,
        );
      }

      if (backupData.userData.achievements) {
        setStorageData(
          STORAGE_KEYS.ACHIEVEMENTS,
          backupData.userData.achievements,
        );
      }

      if (backupData.userData.incomeRecords) {
        setStorageData(
          STORAGE_KEYS.INCOME_RECORDS,
          backupData.userData.incomeRecords,
        );
      }

      if (backupData.userData.settings) {
        setStorageData(STORAGE_KEYS.SETTINGS, backupData.userData.settings);
      }

      toast.success("Data imported successfully!");
      return true;
    } catch (error) {
      console.error("Import error:", error);
      toast.error("Failed to import data. Please check the file format.");
      return false;
    }
  }

  static restore(backupId?: string): boolean {
    try {
      const backupHistory = getStorageData<BackupData[]>(
        STORAGE_KEYS.BACKUP_HISTORY,
        [],
      );

      if (backupHistory.length === 0) {
        toast.error("No backup history found");
        return false;
      }

      const backup = backupId
        ? backupHistory.find((b) => b.exportDate === backupId)
        : backupHistory[0]; // Most recent

      if (!backup) {
        toast.error("Backup not found");
        return false;
      }

      return this.import(backup);
    } catch (error) {
      console.error("Restore error:", error);
      toast.error("Failed to restore data");
      return false;
    }
  }

  static getBackupHistory(): BackupData[] {
    return getStorageData<BackupData[]>(STORAGE_KEYS.BACKUP_HISTORY, []);
  }

  static clearBackupHistory(): boolean {
    try {
      localStorage.removeItem(STORAGE_KEYS.BACKUP_HISTORY);
      toast.success("Backup history cleared!");
      return true;
    } catch (error) {
      toast.error("Failed to clear backup history");
      return false;
    }
  }
}

// Master Reset Manager
export class ResetManager {
  static resetAll(): boolean {
    try {
      // Create final backup before reset
      BackupManager.export();

      // Clear all data
      Object.values(STORAGE_KEYS).forEach((key) => {
        localStorage.removeItem(key);
      });

      // Clear any other app-related localStorage items
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("digitalmaster_")) {
          localStorage.removeItem(key);
        }
      });

      toast.success(
        "All data has been reset! A backup was created before reset.",
      );

      // Reload page to reinitialize with defaults
      setTimeout(() => {
        window.location.reload();
      }, 2000);

      return true;
    } catch (error) {
      console.error("Reset error:", error);
      toast.error("Failed to reset data");
      return false;
    }
  }

  static resetSection(
    section: "profile" | "progress" | "achievements" | "income" | "settings",
  ): boolean {
    try {
      switch (section) {
        case "profile":
          ProfileManager.reset();
          break;
        case "progress":
          CourseProgressManager.deleteAll();
          break;
        case "achievements":
          AchievementManager.reset();
          break;
        case "income":
          IncomeManager.deleteAll();
          break;
        case "settings":
          SettingsManager.reset();
          break;
        default:
          throw new Error(`Unknown section: ${section}`);
      }
      return true;
    } catch (error) {
      console.error(`Reset ${section} error:`, error);
      toast.error(`Failed to reset ${section}`);
      return false;
    }
  }
}

// Initialize default data if needed
export const initializeDefaultData = (): void => {
  // Check if this is first time user
  const profile = ProfileManager.read();

  if (!profile) {
    // Create sample data for demo
    const sampleProfile = ProfileManager.create({
      firstName: "Ahmed",
      lastName: "Rahman",
      email: "ahmed.rahman@email.com",
      phone: "+880 1712 345678",
      country: "Bangladesh",
      city: "Dhaka",
      timezone: "Asia/Dhaka",
      bio: "Digital marketing enthusiast working towards $10K monthly income goal.",
      website: "https://ahmed-digital.com",
    });

    // Add some sample course progress
    CourseProgressManager.create({
      courseId: "youtube-seo",
      courseName: "YouTube SEO Mastery",
      progress: 85,
      status: "in-progress",
      timeSpent: 390,
      lastAccessed: new Date().toISOString(),
      completedLessons: ["intro", "keyword-research", "optimization"],
      currentLesson: "analytics-tracking",
      certificates: [],
    });

    CourseProgressManager.create({
      courseId: "website-seo",
      courseName: "Website SEO Foundation",
      progress: 100,
      status: "completed",
      timeSpent: 510,
      lastAccessed: new Date(Date.now() - 86400000).toISOString(),
      completedLessons: ["all"],
      certificates: [crypto.randomUUID()],
    });

    // Add some achievements
    AchievementManager.create({
      title: "First Course Completed",
      description: "Completed your first course",
      icon: "trophy",
      earned: true,
      earnedDate: new Date(Date.now() - 86400000).toISOString(),
      category: "learning",
    });

    // Add sample income record
    IncomeManager.create({
      month: "May",
      year: 2024,
      amount: 3500,
      goal: 10000,
      sources: [
        {
          source: "Freelance SEO",
          amount: 2000,
          description: "Client projects",
        },
        { source: "YouTube Ads", amount: 800, description: "Ad revenue" },
        { source: "Consulting", amount: 700, description: "Strategy sessions" },
      ],
    });

    toast.success(
      "Welcome to DigitalMaster! Sample data has been created for you.",
    );
  }
};
