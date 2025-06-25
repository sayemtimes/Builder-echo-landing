import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
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
  const location = useLocation();

  const NavigationContent = () => (
    <>
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;

        return (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => setIsOpen(false)}
            className={cn(
              "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground",
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="h-5 w-5" />
            </div>
            <span className="font-display text-xl font-bold">
              DigitalMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavigationContent />
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              <BookOpen className="h-4 w-4 mr-2" />
              Start Learning
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
                </nav>
                <div className="pt-4 border-t space-y-2">
                  <Button className="w-full">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <Link to="/about">About</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
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
