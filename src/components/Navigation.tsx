import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Home,
  PlayCircle,
  TrendingUp,
  Globe,
  MessageSquare,
  DollarSign,
  BookOpen,
  Zap,
  User,
  Users,
  HelpCircle,
  Award,
  ChevronDown,
  BarChart3,
  Download,
  Calendar,
  Sparkles,
} from "lucide-react";

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/youtube-seo", label: "YouTube SEO", icon: PlayCircle },
  { href: "/youtube-marketing", label: "YouTube Marketing", icon: TrendingUp },
  { href: "/website-seo", label: "Website SEO", icon: Globe },
  {
    href: "/communication-tools",
    label: "Communication Tools",
    icon: MessageSquare,
  },
  { href: "/income-strategies", label: "Income Strategies", icon: DollarSign },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavigationContent = () => (
    <>
      {navigationItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;

        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-accent hover:text-accent-foreground group relative overflow-hidden",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-primary",
              )}
            >
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                animate={isActive ? { rotate: [0, 360] } : {}}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-4 w-4 relative z-10" />
              </motion.div>
              <span className="relative z-10">{item.label}</span>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  layoutId="activeIndicator"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </>
  );

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 180,
                }}
              >
                <Sparkles className="h-5 w-5" />
              </motion.div>
              <motion.span
                className="font-display text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
                whileHover={{
                  backgroundImage: "linear-gradient(45deg, #FFD700, #000, #FFD700)",
                }}
              >
                DigitalMaster
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavigationContent />

            {/* More dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  More <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/community" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Community
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/success-stories" className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Success Stories
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/pricing" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Pricing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/resources" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Resources
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Live Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/help" className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4" />
                    Help Center
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/pricing">
                <BookOpen className="h-4 w-4 mr-2" />
                Start Learning
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 pb-4 border-b">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Zap className="h-5 w-5" />
                  </div>
                  <span className="font-display text-xl font-bold">
                    DigitalMaster
                  </span>
                </div>
                <nav className="flex flex-col gap-2">
                  <NavigationContent />

                  {/* Additional mobile navigation items */}
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <BarChart3 className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    to="/community"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <Users className="h-4 w-4" />
                    Community
                  </Link>
                  <Link
                    to="/success-stories"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <Award className="h-4 w-4" />
                    Success Stories
                  </Link>
                  <Link
                    to="/help"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <HelpCircle className="h-4 w-4" />
                    Help Center
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <BookOpen className="h-4 w-4" />
                    Blog
                  </Link>
                  <Link
                    to="/resources"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <Download className="h-4 w-4" />
                    Resources
                  </Link>
                  <Link
                    to="/events"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <Calendar className="h-4 w-4" />
                    Events
                  </Link>
                  <Link
                    to="/pricing"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <DollarSign className="h-4 w-4" />
                    Pricing
                  </Link>
                  <Link
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </Link>
                </nav>
                <div className="pt-4 border-t space-y-2">
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to="/about">About</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <Link to="/contact">Contact</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}