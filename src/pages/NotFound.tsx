import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-0 shadow-lg">
            <CardContent className="py-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-primary">404</div>
                  <h1 className="text-3xl font-bold">Page Not Found</h1>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist. It might
                    have been moved, deleted, or you entered the wrong URL.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">
                    What would you like to do?
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link to="/">
                        <Home className="mr-2 h-4 w-4" />
                        Go to Homepage
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/youtube-seo">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Start Learning
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">
                    Popular Learning Modules
                  </h3>
                  <div className="grid gap-2">
                    <Link
                      to="/youtube-seo"
                      className="text-primary hover:text-primary/80 hover:underline"
                    >
                      YouTube SEO Mastery
                    </Link>
                    <Link
                      to="/youtube-marketing"
                      className="text-primary hover:text-primary/80 hover:underline"
                    >
                      YouTube Marketing Strategy
                    </Link>
                    <Link
                      to="/website-seo"
                      className="text-primary hover:text-primary/80 hover:underline"
                    >
                      Website SEO Foundation
                    </Link>
                    <Link
                      to="/income-strategies"
                      className="text-primary hover:text-primary/80 hover:underline"
                    >
                      Income Generation Strategies
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
