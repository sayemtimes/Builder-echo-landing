import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
  Heart,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Get Weekly Digital Marketing Tips
            </h2>
            <p className="text-lg text-muted-foreground">
              Join 25,000+ marketers who receive actionable strategies, case
              studies, and income tips every Tuesday. Free forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="sm:w-auto">
                Subscribe Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No spam, ever. Unsubscribe with one click.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <span className="font-display text-2xl font-bold">
                DigitalMaster
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering individuals worldwide to build profitable digital
              marketing careers. Learn YouTube SEO, website optimization, and
              client communication skills with bilingual support in English and
              Bengali.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">hello@digitalmaster.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Serving 85+ countries worldwide</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Learning Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Learning</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/youtube-seo"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  YouTube SEO Mastery
                </Link>
              </li>
              <li>
                <Link
                  to="/youtube-marketing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  YouTube Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/website-seo"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Website SEO Foundation
                </Link>
              </li>
              <li>
                <Link
                  to="/communication-tools"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Communication Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/income-strategies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Income Strategies
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  View All Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Community</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/community"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Join Community
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Live Events
                </Link>
              </li>
              <li>
                <Link
                  to="/success-stories"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Free Resources
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Student Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/help"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 DigitalMaster. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>•</span>
              <span>50,000+ Students Worldwide</span>
              <span>•</span>
              <span>4.9/5 Average Rating</span>
              <span>•</span>
              <span>$24.8M+ Student Earnings</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>for digital marketers worldwide</span>
          </div>
        </div>
      </div>

      {/* Language Selection */}
      <div className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-4 text-sm">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Available in:</span>
            <Button variant="ghost" size="sm" className="h-auto p-1">
              English
            </Button>
            <span className="text-muted-foreground">•</span>
            <Button variant="ghost" size="sm" className="h-auto p-1">
              বাংলা (Bengali)
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
