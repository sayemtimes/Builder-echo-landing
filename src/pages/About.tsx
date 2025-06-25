import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Users,
  Award,
  Globe,
  BookOpen,
  TrendingUp,
  MessageSquare,
  DollarSign,
  CheckCircle,
  Star,
  Heart,
  Zap,
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Ahmed",
    role: "Chief Digital Strategist",
    expertise: "YouTube SEO & Growth Hacking",
    experience: "8+ years",
    achievements: "Scaled 500+ channels",
    image: "👩‍💼",
  },
  {
    name: "Michael Chen",
    role: "Senior SEO Consultant",
    expertise: "Technical SEO & Website Optimization",
    experience: "6+ years",
    achievements: "Improved 1000+ websites",
    image: "👨‍💻",
  },
  {
    name: "Fatima Rahman",
    role: "Communication Specialist",
    expertise: "Cross-Cultural Business Communication",
    experience: "5+ years",
    achievements: "Bilingual expert",
    image: "👩‍🎓",
  },
  {
    name: "David Rodriguez",
    role: "Business Development Expert",
    expertise: "Income Generation & Scaling",
    experience: "10+ years",
    achievements: "Built multiple $10M agencies",
    image: "👨‍💼",
  },
];

const achievements = [
  {
    number: "50,000+",
    label: "Students Trained",
    description: "Across 45+ countries worldwide",
    icon: <Users className="h-6 w-6" />,
  },
  {
    number: "94%",
    label: "Success Rate",
    description: "Students achieving income goals",
    icon: <Target className="h-6 w-6" />,
  },
  {
    number: "$2.5M+",
    label: "Student Earnings",
    description: "Generated in past 12 months",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    number: "4.9/5",
    label: "Average Rating",
    description: "From verified student reviews",
    icon: <Star className="h-6 w-6" />,
  },
];

const values = [
  {
    title: "Practical Education",
    description: "Real-world skills that generate immediate income",
    icon: <BookOpen className="h-8 w-8" />,
  },
  {
    title: "Inclusive Learning",
    description: "Bilingual support for Bengali and English speakers",
    icon: <Globe className="h-8 w-8" />,
  },
  {
    title: "Results-Driven",
    description: "Focus on measurable outcomes and income generation",
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    title: "Community Support",
    description: "Ongoing mentorship and peer collaboration",
    icon: <Heart className="h-8 w-8" />,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-16">
          <div className="space-y-4">
            <Badge variant="secondary" className="mx-auto">
              <Zap className="h-3 w-3 mr-1" />
              About DigitalMaster
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Empowering Digital Marketing Success
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a world-class team of digital marketing specialists
              dedicated to helping individuals build profitable careers in
              YouTube SEO, website optimization, and digital marketing
              consulting.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To democratize digital marketing education and provide
                    practical, income-generating skills to students worldwide.
                    We believe everyone deserves the opportunity to build a
                    sustainable, profitable career in the digital economy.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Practical, real-world curriculum</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Bilingual support (English & Bengali)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Income-focused learning outcomes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Ongoing mentorship and support</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                  <Card className="relative border-0 shadow-xl">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="text-4xl font-bold text-primary">
                        $10,000
                      </div>
                      <div className="text-lg font-medium">
                        Average Monthly Income Goal
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our students consistently achieve this milestone through
                        our proven methodologies
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our commitment to student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-8 space-y-4">
                  <div className="mx-auto h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold">
                      {achievement.label}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-8 space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Experts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class professionals with proven track records in digital
              marketing success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-8 space-y-4">
                  <div className="text-6xl">{member.image}</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <div className="text-sm text-primary font-medium">
                      {member.role}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        <strong>Expertise:</strong> {member.expertise}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Experience:</strong> {member.experience}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Achievement:</strong> {member.achievements}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="py-16 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of successful students who have built
                  profitable careers through our proven digital marketing
                  strategies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Learning Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Our Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
