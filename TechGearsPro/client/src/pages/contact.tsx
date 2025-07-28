import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Headphones,
  Building
} from "lucide-react";
import type { InsertContactInquiry } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via phone.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields (marked with *).",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Mon-Sat: 9:00 AM - 8:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@techpartspro.in",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: "123 Tech Street, Bangalore",
      description: "Karnataka 560001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 9:00 AM - 8:00 PM",
      description: "Sunday: Closed"
    }
  ];

  const services = [
    { value: "products", label: "Product Purchase" },
    { value: "server", label: "Server Setup" },
    { value: "network", label: "Network Installation" },
    { value: "repair", label: "Repair Services" },
    { value: "cloud", label: "Cloud Services" },
    { value: "support", label: "Technical Support" },
    { value: "consultation", label: "Consultation" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to upgrade your technology or need professional IT services? Our experts are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help with all your technology needs. Reach out to us through any of the following channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary rounded-full p-3 flex-shrink-0">
                        <IconComponent className="text-white h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-primary font-medium">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="primary-button flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Live Chat
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service Required
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your requirements..."
                        className="resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full primary-button"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our showroom to see our products in person or get hands-on support
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Store */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary rounded-full p-2 mr-3">
                    <Building className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Main Store & Showroom</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>123 Tech Street, Koramangala, Bangalore, Karnataka 560001</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Service Center */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-accent-orange rounded-full p-2 mr-3">
                    <Headphones className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Service Center</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>456 Service Road, Electronic City, Bangalore, Karnataka 560100</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span>+91 98765 43211</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>Mon-Sat: 10:00 AM - 7:00 PM</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What are your business hours?</h3>
                <p className="text-gray-600">We're open Monday to Saturday from 9:00 AM to 8:00 PM. We're closed on Sundays and public holidays.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you provide warranty on products?</h3>
                <p className="text-gray-600">Yes, all our products come with manufacturer warranty. We also provide extended warranty options for additional peace of mind.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer installation services?</h3>
                <p className="text-gray-600">Absolutely! We provide professional installation services for all computer components and IT infrastructure setup.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept cash, all major credit/debit cards, UPI, net banking, and EMI options for purchases above ₹10,000.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you provide technical support?</h3>
                <p className="text-gray-600">Yes, we offer 24/7 technical support for all our customers. Premium support packages are also available.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can you help with bulk orders?</h3>
                <p className="text-gray-600">Certainly! We offer special pricing and dedicated support for bulk orders and corporate clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for expert advice on your technology needs or to schedule a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="accent-button text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 98765 43210
            </Button>
            <Button className="secondary-button text-lg px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
