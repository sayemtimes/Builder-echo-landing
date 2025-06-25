import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Download,
  FileText,
  Video,
  Image,
  Headphones,
  Calculator,
  Star,
  Clock,
  Users,
  Filter,
  PlayCircle,
  BookOpen,
  Globe,
  MessageSquare,
  DollarSign,
  BarChart3,
  Zap,
  Award,
} from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Ultimate YouTube SEO Checklist",
    description:
      "50-point comprehensive checklist covering keyword research, optimization, thumbnails, and analytics. Used by 10,000+ creators.",
    category: "YouTube SEO",
    type: "PDF",
    icon: <FileText className="h-6 w-6" />,
    size: "2.4 MB",
    downloads: 15420,
    rating: 4.9,
    premium: false,
    tags: ["SEO", "YouTube", "Checklist", "Optimization"],
    language: "English & Bengali",
    lastUpdated: "2024-05-10",
  },
  {
    id: 2,
    title: "Client Communication Script Library",
    description:
      "200+ proven scripts and templates for client outreach, negotiations, project updates, and follow-ups in English and Bengali.",
    category: "Communication",
    type: "Word Document",
    icon: <MessageSquare className="h-6 w-6" />,
    size: "1.8 MB",
    downloads: 12830,
    rating: 4.8,
    premium: true,
    tags: ["Communication", "Scripts", "Templates", "Bengali"],
    language: "English & Bengali",
    lastUpdated: "2024-05-08",
  },
  {
    id: 3,
    title: "Income Tracker & Goal Calculator",
    description:
      "Comprehensive spreadsheet to track your income, set milestones, and calculate your path to $10K monthly revenue.",
    category: "Income Planning",
    type: "Excel Spreadsheet",
    icon: <Calculator className="h-6 w-6" />,
    size: "956 KB",
    downloads: 9870,
    rating: 4.9,
    premium: false,
    tags: ["Income", "Tracking", "Goals", "Planning"],
    language: "English",
    lastUpdated: "2024-05-12",
  },
  {
    id: 4,
    title: "Website SEO Audit Template",
    description:
      "Professional SEO audit template with 100+ checkpoints. Perfect for client presentations and comprehensive site analysis.",
    category: "Website SEO",
    type: "PDF + Spreadsheet",
    icon: <BarChart3 className="h-6 w-6" />,
    size: "3.2 MB",
    downloads: 8450,
    rating: 4.7,
    premium: true,
    tags: ["SEO", "Audit", "Website", "Analysis"],
    language: "English",
    lastUpdated: "2024-05-05",
  },
  {
    id: 5,
    title: "Keyword Research Masterclass Video",
    description:
      "45-minute deep dive into advanced keyword research techniques for YouTube and websites. Includes live demonstrations.",
    category: "Training Videos",
    type: "MP4 Video",
    icon: <Video className="h-6 w-6" />,
    size: "487 MB",
    downloads: 6730,
    rating: 4.9,
    premium: true,
    tags: ["Keywords", "Research", "Video", "Training"],
    language: "English",
    lastUpdated: "2024-05-01",
  },
  {
    id: 6,
    title: "Bengali Business Email Templates",
    description:
      "বাংলা ব্যবসায়িক ইমেইল টেমপ্লেট সংগ্রহ। প্রফেশনাল কমিউনিকেশনের জন্য ১০০+ টেমপ্লেট এবং উদাহরণ।",
    category: "Communication",
    type: "Word Document",
    icon: <Globe className="h-6 w-6" />,
    size: "1.2 MB",
    downloads: 5890,
    rating: 4.8,
    premium: false,
    tags: ["Bengali", "Email", "Business", "Templates"],
    language: "Bengali",
    lastUpdated: "2024-04-28",
  },
  {
    id: 7,
    title: "Freelancer Pricing Calculator",
    description:
      "Calculate your ideal hourly rates, project pricing, and proposal pricing based on your experience level and market demand.",
    category: "Business Tools",
    type: "Excel Calculator",
    icon: <DollarSign className="h-6 w-6" />,
    size: "678 KB",
    downloads: 7650,
    rating: 4.6,
    premium: false,
    tags: ["Pricing", "Freelancing", "Calculator", "Business"],
    language: "English",
    lastUpdated: "2024-04-25",
  },
  {
    id: 8,
    title: "Social Media Content Calendar Template",
    description:
      "12-month content calendar template with hashtag research, engagement tracking, and performance analytics built-in.",
    category: "Social Media",
    type: "Google Sheets",
    icon: <FileText className="h-6 w-6" />,
    size: "1.1 MB",
    downloads: 11200,
    rating: 4.7,
    premium: true,
    tags: ["Social Media", "Calendar", "Content", "Planning"],
    language: "English",
    lastUpdated: "2024-04-20",
  },
];

const categories = [
  "All Resources",
  "YouTube SEO",
  "Website SEO",
  "Communication",
  "Income Planning",
  "Business Tools",
  "Training Videos",
  "Social Media",
];

const resourceTypes = [
  "All Types",
  "PDF",
  "Word Document",
  "Excel Spreadsheet",
  "MP4 Video",
  "Google Sheets",
  "PowerPoint",
  "Template",
];

const featuredCollections = [
  {
    title: "Complete Beginner Kit",
    description: "Everything you need to start your digital marketing journey",
    resources: 8,
    icon: <BookOpen className="h-8 w-8" />,
    color: "bg-blue-500",
  },
  {
    title: "Bengali Marketing Pack",
    description: "Specialized resources for Bengali-speaking markets",
    resources: 5,
    icon: <Globe className="h-8 w-8" />,
    color: "bg-green-500",
  },
  {
    title: "Income Optimization Suite",
    description: "Tools and templates to maximize your earning potential",
    resources: 6,
    icon: <DollarSign className="h-8 w-8" />,
    color: "bg-yellow-500",
  },
  {
    title: "YouTube Growth Toolkit",
    description: "Complete collection for YouTube creators and marketers",
    resources: 12,
    icon: <PlayCircle className="h-8 w-8" />,
    color: "bg-red-500",
  },
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Resources");
  const [selectedType, setSelectedType] = useState("All Types");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All Resources" ||
      resource.category === selectedCategory;

    const matchesType =
      selectedType === "All Types" || resource.type === selectedType;

    const matchesPremium = !showPremiumOnly || resource.premium;

    return matchesSearch && matchesCategory && matchesType && matchesPremium;
  });

  const freeResources = filteredResources.filter((r) => !r.premium);
  const premiumResources = filteredResources.filter((r) => r.premium);
  const popularResources = filteredResources.sort(
    (a, b) => b.downloads - a.downloads,
  );

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-5 w-5" />;
      case "MP4 Video":
        return <Video className="h-5 w-5" />;
      case "Excel Spreadsheet":
      case "Excel Calculator":
        return <Calculator className="h-5 w-5" />;
      case "Word Document":
        return <MessageSquare className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">Resource Library</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Free and premium tools, templates, and resources to accelerate your
            digital marketing success. Everything you need to build a profitable
            online business.
          </p>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">89K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.8/5</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Free Tools</div>
            </div>
          </div>
        </div>

        {/* Featured Collections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections.map((collection, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`h-16 w-16 rounded-2xl ${collection.color} flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {collection.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{collection.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {collection.description}
                  </p>
                  <Badge variant="outline">
                    {collection.resources} resources
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search resources, tools, and templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {resourceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card
                  key={resource.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {resource.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg leading-tight">
                              {resource.title}
                            </h3>
                            <Badge
                              variant={
                                resource.premium ? "default" : "secondary"
                              }
                              className="mt-1"
                            >
                              {resource.premium ? "Premium" : "Free"}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {resource.description}
                      </p>

                      {/* Meta Information */}
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center justify-between">
                          <span>Type: {resource.type}</span>
                          <span>Size: {resource.size}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {resource.downloads.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {resource.rating}
                          </div>
                        </div>
                        <div className="text-xs">
                          Language: {resource.language}
                        </div>
                        <div className="text-xs">
                          Updated: {resource.lastUpdated}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {resource.tags.slice(0, 3).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Download Button */}
                      <Button
                        className="w-full"
                        variant={resource.premium ? "default" : "outline"}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {resource.premium
                          ? "Download Premium"
                          : "Download Free"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="free" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Free Resources</h2>
              <p className="text-muted-foreground">
                High-quality tools and templates at no cost. Perfect for getting
                started.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeResources.map((resource) => (
                <Card
                  key={resource.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-green-500"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                          {resource.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <Badge className="bg-green-100 text-green-800">
                            Free
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>
                          {resource.downloads.toLocaleString()} downloads
                        </span>
                      </div>
                      <Button className="w-full" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download Free
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="premium" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Premium Resources</h2>
              <p className="text-muted-foreground">
                Advanced tools and comprehensive templates for serious
                marketers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumResources.map((resource) => (
                <Card
                  key={resource.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          {resource.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <Badge className="bg-primary text-primary-foreground">
                            Premium
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{resource.type}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {resource.rating}
                        </div>
                      </div>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Access Premium
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Most Popular</h2>
              <p className="text-muted-foreground">
                Our most downloaded and highest-rated resources.
              </p>
            </div>
            <div className="space-y-6">
              {popularResources.slice(0, 5).map((resource, index) => (
                <Card
                  key={resource.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-primary">
                          #{index + 1}
                        </div>
                        <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          {resource.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">
                            {resource.title}
                          </h3>
                          <Badge
                            variant={resource.premium ? "default" : "secondary"}
                          >
                            {resource.premium ? "Premium" : "Free"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {resource.downloads.toLocaleString()} downloads
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {resource.rating} rating
                          </div>
                          <span>{resource.type}</span>
                        </div>
                      </div>
                      <Button>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-16 border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="py-12 text-center">
            <div className="space-y-6">
              <Award className="h-16 w-16 mx-auto text-primary" />
              <h2 className="text-3xl font-bold">Need Custom Resources?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Can't find what you're looking for? Our team can create custom
                tools, templates, and resources tailored to your specific needs
                and industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request Custom Resource
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join Premium
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
