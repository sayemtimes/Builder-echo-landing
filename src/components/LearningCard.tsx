import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Star, ArrowRight, Play, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HoverScale } from "@/components/AnimatedWrapper";

interface LearningCardProps {
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  progress?: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  href: string;
  icon: React.ReactNode;
  isNew?: boolean;
}

export function LearningCard({
  title,
  description,
  duration,
  students,
  rating,
  progress,
  level,
  href,
  icon,
  isNew = false,
}: LearningCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <HoverScale scale={1.02}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md hover:shadow-primary/10 bg-gradient-to-b from-card to-card/50 overflow-hidden relative">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardHeader className="pb-4 relative z-10">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {icon}
                </motion.div>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <Badge
                        variant="secondary"
                        className={getLevelColor(level)}
                      >
                        {level}
                      </Badge>
                    </motion.div>
                    {isNew && (
                      <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <Badge
                          variant="destructive"
                          className="text-xs animate-pulse"
                        >
                          🔥 New
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 relative z-10">
            <motion.div
              className="flex items-center justify-between text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="flex items-center gap-1 hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="h-4 w-4" />
                {duration}
              </motion.div>
              <motion.div
                className="flex items-center gap-1 hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-4 w-4" />
                {students.toLocaleString()}+ students
              </motion.div>
              <motion.div
                className="flex items-center gap-1 hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {rating}
              </motion.div>
            </motion.div>

            {progress !== undefined && (
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <motion.span
                    className="font-medium text-primary"
                    animate={{ color: progress > 50 ? "#22c55e" : "#f59e0b" }}
                  >
                    {progress}%
                  </motion.span>
                </div>
                <div className="relative">
                  <Progress value={progress} className="h-2" />
                  <motion.div
                    className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            )}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              >
                <Link to={href}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {progress !== undefined && progress > 0 ? (
                      <>
                        <Play className="h-4 w-4" />
                        Continue Learning
                      </>
                    ) : (
                      <>
                        <BookOpen className="h-4 w-4" />
                        Start Learning
                      </>
                    )}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </span>
                </Link>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </HoverScale>
  );
}
