import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  HelpCircle,
  Users,
  BookOpen,
  Send,
  Globe,
  Zap,
} from "lucide-react";

const contactMethods = [
  {
    title: "General Inquiries",
    description: "Questions about courses, enrollment, or platform features",
    icon: <Mail className="h-6 w-6" />,
    contact: "hello@digitalmaster.com",
    responseTime: "Within 24 hours",
  },
  {
    title: "Student Support",
    description: "Technical issues, course access, or learning assistance",
    icon: <HelpCircle className="h-6 w-6" />,
    contact: "support@digitalmaster.com",
    responseTime: "Within 12 hours",
  },
  {
    title: "Business Partnerships",
    description: "Corporate training, bulk enrollments, or collaboration",
    icon: <Users className="h-6 w-6" />,
    contact: "business@digitalmaster.com",
    responseTime: "Within 48 hours",
  },
  {
    title: "Career Guidance",
    description: "One-on-one mentorship and career advancement support",
    icon: <BookOpen className="h-6 w-6" />,
    contact: "mentors@digitalmaster.com",
    responseTime: "Within 24 hours",
  },
];

const faqs = [
  {
    question: "How quickly can I start earning after completing the courses?",
    answer:
      "Most students begin earning within 2-4 weeks of completing their first course. Our practical approach focuses on immediate implementation of skills.",
  },
  {
    question: "Do you provide support in Bengali language?",
    answer:
      "Yes! We offer comprehensive bilingual support in both English and Bengali, including course materials, communication templates, and customer service.",
  },
  {
    question: "What's the average income students achieve?",
    answer:
      "Our students typically achieve $2,000-$5,000 monthly within 3-6 months, with many reaching $10,000+ monthly within 8-12 months through consistent application of our strategies.",
  },
  {
    question: "Can I access courses on mobile devices?",
    answer:
      "Absolutely! Our platform is fully responsive and optimized for mobile learning. You can access all course content, tools, and resources from any device.",
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not completely satisfied with your learning experience, we'll provide a full refund.",
  },
  {
    question: "How do I get personalized career guidance?",
    answer:
      "Premium students receive one-on-one mentorship sessions with our experts. You can also book additional consultation sessions for personalized career planning.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You would typically send this to your backend
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-16">
          <div className="space-y-4">
            <Badge variant="secondary" className="mx-auto">
              <MessageSquare className="h-3 w-3 mr-1" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              We're Here to Help You Succeed
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about our courses, need technical support, or want
              personalized career guidance? Our expert team is ready to assist
              you on your digital marketing journey.
            </p>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Inquiry Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiries
                          </SelectItem>
                          <SelectItem value="support">
                            Student Support
                          </SelectItem>
                          <SelectItem value="technical">
                            Technical Issues
                          </SelectItem>
                          <SelectItem value="business">
                            Business Partnership
                          </SelectItem>
                          <SelectItem value="mentorship">
                            Career Guidance
                          </SelectItem>
                          <SelectItem value="billing">
                            Billing & Payment
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Brief subject line"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your question or concern in detail..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Methods</CardTitle>
                <p className="text-muted-foreground">
                  Choose the best way to reach us
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {method.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                      <div className="text-sm font-medium text-primary">
                        {method.contact}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {method.responseTime}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Office Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Global Headquarters</div>
                    <div className="text-sm text-muted-foreground">
                      Remote-first company serving students worldwide
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Support Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Monday - Friday: 9 AM - 6 PM (UTC)
                      <br />
                      Weekend: Limited support available
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Languages</div>
                    <div className="text-sm text-muted-foreground">
                      English & Bengali (বাংলা) support available
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help Center
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Join Community
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Zap className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our platform and
              courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="py-12 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Still Have Questions?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our dedicated support team is here to help you succeed. Don't
                  hesitate to reach out with any questions or concerns.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Live Chat Support
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
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

export default Contact;
