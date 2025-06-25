import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Clock,
  Users,
  Star,
  PlayCircle,
  BookOpen,
} from "lucide-react";

const YouTubeMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Course Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <TrendingUp className="h-10 w-10" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800"
                >
                  Intermediate
                </Badge>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
              <h1 className="text-4xl font-bold">YouTube Marketing Strategy</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn advanced marketing techniques, audience building, and
                monetization strategies to grow your channel and revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 justify-center">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">12 hours</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">12,830+ enrolled</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.9 rating</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">15 lessons</span>
              </div>
            </div>
          </div>

          {/* Coming Soon Content */}
          <Card className="text-center border-2 border-dashed border-primary/20 bg-primary/5">
            <CardContent className="py-12">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <PlayCircle className="h-8 w-8" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    Course Under Development
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Our expert team is creating comprehensive content for
                    YouTube marketing strategies. This course will be available
                    soon with advanced techniques for growing your channel and
                    maximizing revenue.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">What You'll Learn:</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">
                        Advanced audience targeting
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Monetization strategies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Brand partnerships</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Community building</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Content marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Performance analytics</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline">Get Notified When Available</Button>
                  <Button>Explore Other Courses</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YouTubeMarketing;
