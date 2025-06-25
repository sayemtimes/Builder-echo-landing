import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Check,
  X,
  Star,
  Crown,
  Zap,
  Users,
  BookOpen,
  MessageSquare,
  Award,
  Shield,
  Headphones,
  Video,
  Download,
  Calendar,
  Globe,
  TrendingUp,
} from "lucide-react";

const pricingPlans = {
  monthly: [
    {
      name: "Starter",
      price: "$19",
      originalPrice: null,
      description:
        "Perfect for beginners starting their digital marketing journey",
      badge: null,
      color: "border-gray-200",
      features: [
        { name: "Access to 2 core courses", included: true },
        { name: "Basic communication templates", included: true },
        { name: "Community forum access", included: true },
        { name: "Mobile app access", included: true },
        { name: "Progress tracking", included: true },
        { name: "Email support", included: true },
        { name: "Advanced courses", included: false },
        { name: "1-on-1 mentorship", included: false },
        { name: "Live workshops", included: false },
        { name: "Priority support", included: false },
        { name: "Downloadable resources", included: false },
        { name: "Certification", included: false },
      ],
      cta: "Start Learning",
      popular: false,
    },
    {
      name: "Professional",
      price: "$49",
      originalPrice: "$69",
      description:
        "Complete learning experience with mentorship and advanced tools",
      badge: "Most Popular",
      color: "border-primary",
      features: [
        { name: "Access to all 5 courses", included: true },
        { name: "Complete communication toolkit", included: true },
        { name: "Priority community access", included: true },
        { name: "Mobile app access", included: true },
        { name: "Advanced progress tracking", included: true },
        { name: "Priority email support", included: true },
        { name: "All downloadable resources", included: true },
        { name: "Monthly 1-on-1 mentorship", included: true },
        { name: "Live workshops access", included: true },
        { name: "Course completion certificates", included: true },
        { name: "Income tracking tools", included: true },
        { name: "Bengali language support", included: true },
      ],
      cta: "Get Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      originalPrice: null,
      description: "Advanced features for serious entrepreneurs and agencies",
      badge: "Best Value",
      color: "border-purple-500",
      features: [
        { name: "Everything in Professional", included: true },
        { name: "Weekly 1-on-1 mentorship", included: true },
        { name: "Private community access", included: true },
        { name: "Custom learning path", included: true },
        { name: "White-label resources", included: true },
        { name: "API access", included: true },
        { name: "Team collaboration tools", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Phone support", included: true },
        { name: "Guest expert sessions", included: true },
        { name: "Revenue optimization tools", included: true },
        { name: "Agency building resources", included: true },
      ],
      cta: "Go Enterprise",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$190",
      originalPrice: "$228",
      description:
        "Perfect for beginners starting their digital marketing journey",
      badge: "2 Months Free",
      color: "border-gray-200",
      features: [
        { name: "Access to 2 core courses", included: true },
        { name: "Basic communication templates", included: true },
        { name: "Community forum access", included: true },
        { name: "Mobile app access", included: true },
        { name: "Progress tracking", included: true },
        { name: "Email support", included: true },
        { name: "Advanced courses", included: false },
        { name: "1-on-1 mentorship", included: false },
        { name: "Live workshops", included: false },
        { name: "Priority support", included: false },
        { name: "Downloadable resources", included: false },
        { name: "Certification", included: false },
      ],
      cta: "Start Learning",
      popular: false,
    },
    {
      name: "Professional",
      price: "$490",
      originalPrice: "$588",
      description:
        "Complete learning experience with mentorship and advanced tools",
      badge: "Most Popular",
      color: "border-primary",
      features: [
        { name: "Access to all 5 courses", included: true },
        { name: "Complete communication toolkit", included: true },
        { name: "Priority community access", included: true },
        { name: "Mobile app access", included: true },
        { name: "Advanced progress tracking", included: true },
        { name: "Priority email support", included: true },
        { name: "All downloadable resources", included: true },
        { name: "Monthly 1-on-1 mentorship", included: true },
        { name: "Live workshops access", included: true },
        { name: "Course completion certificates", included: true },
        { name: "Income tracking tools", included: true },
        { name: "Bengali language support", included: true },
      ],
      cta: "Get Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$990",
      originalPrice: "$1,188",
      description: "Advanced features for serious entrepreneurs and agencies",
      badge: "Best Value",
      color: "border-purple-500",
      features: [
        { name: "Everything in Professional", included: true },
        { name: "Weekly 1-on-1 mentorship", included: true },
        { name: "Private community access", included: true },
        { name: "Custom learning path", included: true },
        { name: "White-label resources", included: true },
        { name: "API access", included: true },
        { name: "Team collaboration tools", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Phone support", included: true },
        { name: "Guest expert sessions", included: true },
        { name: "Revenue optimization tools", included: true },
        { name: "Agency building resources", included: true },
      ],
      cta: "Go Enterprise",
      popular: false,
    },
  ],
};

const additionalServices = [
  {
    name: "1-on-1 Intensive Mentorship",
    price: "$197",
    description: "2-hour deep dive session with our expert mentors",
    icon: <Users className="h-6 w-6" />,
    features: [
      "Personalized strategy development",
      "Goal setting and milestone planning",
      "Custom action plan creation",
      "Follow-up email summary",
    ],
  },
  {
    name: "Custom Template Creation",
    price: "$97",
    description: "Personalized communication templates for your niche",
    icon: <MessageSquare className="h-6 w-6" />,
    features: [
      "Industry-specific templates",
      "Bilingual versions included",
      "Customized for your brand voice",
      "Unlimited revisions",
    ],
  },
  {
    name: "Agency Setup Consultation",
    price: "$497",
    description: "Complete guidance for starting your digital marketing agency",
    icon: <TrendingUp className="h-6 w-6" />,
    features: [
      "Business structure planning",
      "Service packaging strategies",
      "Pricing and positioning guidance",
      "Systems and processes setup",
    ],
  },
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences in cost.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "We offer a 7-day free trial for the Professional plan, giving you full access to all features. No credit card required to start.",
  },
  {
    question: "What's included in the mentorship sessions?",
    answer:
      "Mentorship sessions are personalized 1-on-1 calls with our expert instructors. You can discuss your progress, get feedback on your work, and receive customized guidance for your specific goals.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your learning experience within the first 30 days, we'll provide a full refund.",
  },
  {
    question: "Are the materials available in Bengali?",
    answer:
      "Yes! All Professional and Enterprise plans include complete Bengali language support, including course materials, templates, and customer support.",
  },
  {
    question: "Can I use this for my team or agency?",
    answer:
      "Absolutely! Our Enterprise plan is designed for teams and agencies. It includes collaboration tools, white-label resources, and volume discounts for multiple users.",
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeTab, setActiveTab] = useState("plans");

  const currentPlans = isYearly ? pricingPlans.yearly : pricingPlans.monthly;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Choose Your Learning Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invest in your future with our comprehensive digital marketing
            education. All plans include lifetime access to course updates and
            our supportive community.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 p-4 bg-muted/30 rounded-lg max-w-xs mx-auto">
            <span
              className={`text-sm font-medium ${!isYearly ? "text-primary" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span
              className={`text-sm font-medium ${isYearly ? "text-primary" : "text-muted-foreground"}`}
            >
              Yearly
            </span>
            <Badge variant="secondary" className="ml-2">
              Save 20%
            </Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
            <TabsTrigger value="services">Additional Services</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-8">
            {/* Main Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {currentPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.color} ${plan.popular ? "scale-105 shadow-2xl" : "shadow-lg"} transition-all duration-300 hover:shadow-xl`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge
                        className={
                          plan.popular ? "bg-primary" : "bg-purple-500"
                        }
                      >
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div className="space-y-4">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-4xl font-bold">
                            {plan.price}
                          </span>
                          <span className="text-muted-foreground">
                            /{isYearly ? "year" : "month"}
                          </span>
                        </div>
                        {plan.originalPrice && (
                          <div className="text-sm text-muted-foreground">
                            <span className="line-through">
                              {plan.originalPrice}
                            </span>
                            <span className="ml-2 text-green-600 font-medium">
                              Save{" "}
                              {Math.round(
                                (1 -
                                  parseInt(plan.price.replace("$", "")) /
                                    parseInt(
                                      plan.originalPrice.replace("$", ""),
                                    )) *
                                  100,
                              )}
                              %
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {plan.description}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          {feature.included ? (
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          )}
                          <span
                            className={`text-sm ${feature.included ? "" : "text-muted-foreground"}`}
                          >
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>

                    <div className="text-center text-xs text-muted-foreground">
                      30-day money-back guarantee
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Feature Comparison Table */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">
                  Detailed Feature Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4">Features</th>
                        <th className="text-center py-4 px-4">Starter</th>
                        <th className="text-center py-4 px-4">Professional</th>
                        <th className="text-center py-4 px-4">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPlans[0].features.map((feature, index) => (
                        <tr key={index} className="border-b hover:bg-muted/30">
                          <td className="py-3 px-4 font-medium">
                            {feature.name}
                          </td>
                          {currentPlans.map((plan, planIndex) => (
                            <td
                              key={planIndex}
                              className="py-3 px-4 text-center"
                            >
                              {plan.features[index].included ? (
                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-muted-foreground mx-auto" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-8">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Additional Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Accelerate your success with our premium add-on services and
                personalized support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center space-y-4">
                        <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold">{service.name}</h3>
                        <div className="text-3xl font-bold text-primary">
                          {service.price}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full" variant="outline">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bundle Offer */}
            <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <Crown className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Complete Success Package
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Get all additional services bundled with Enterprise plan for
                    maximum value and accelerated results
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-2xl font-bold line-through text-muted-foreground">
                      $1,781
                    </span>
                    <span className="text-4xl font-bold text-primary">
                      $1,297
                    </span>
                    <Badge variant="destructive">Save $484</Badge>
                  </div>
                  <Button size="lg" className="text-lg px-8 py-6">
                    Get Complete Package
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-8">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Got questions? We've got answers. If you can't find what you're
                looking for, reach out to our support team.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Support CTA */}
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <Headphones className="h-12 w-12 mx-auto text-primary" />
                  <h3 className="text-xl font-bold">Still Have Questions?</h3>
                  <p className="text-muted-foreground">
                    Our support team is here to help you choose the perfect plan
                    for your goals
                  </p>
                  <Button>Contact Support</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Trust Signals */}
        <div className="mt-16 text-center space-y-8">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-green-500" />
              <div className="text-sm font-medium">30-Day Guarantee</div>
              <div className="text-xs text-muted-foreground">
                Risk-free trial
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="h-8 w-8 text-blue-500" />
              <div className="text-sm font-medium">50,000+ Students</div>
              <div className="text-xs text-muted-foreground">
                Worldwide community
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="h-8 w-8 text-yellow-500" />
              <div className="text-sm font-medium">4.9/5 Rating</div>
              <div className="text-xs text-muted-foreground">
                From verified reviews
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="h-8 w-8 text-purple-500" />
              <div className="text-sm font-medium">Industry Recognized</div>
              <div className="text-xs text-muted-foreground">
                Award-winning platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
