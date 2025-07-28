import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/service/service-card";
import { Check, Server, Network, Bolt, Cloud, Headphones, Star } from "lucide-react";
import { Link } from "wouter";
import type { Service } from "@shared/schema";

export default function Services() {
  const { data: allServices = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const infrastructureServices = allServices.filter(service => service.category === "infrastructure");
  const cloudServices = allServices.filter(service => service.category === "cloud");
  const supportServices = allServices.filter(service => service.category === "support");

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(parseFloat(price));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions for businesses across India. From server setup to cloud migration.
            </p>
            <Link href="/contact">
              <Button className="accent-button text-lg px-8 py-4">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Our Service Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of IT services to meet all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Server className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Infrastructure Services</h3>
                <p className="text-gray-600 mb-4">Server setup, network installation, and hardware solutions</p>
                <Badge variant="secondary">{infrastructureServices.length} Services</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Cloud className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
                <p className="text-gray-600 mb-4">AWS, GCP, Azure migration and management services</p>
                <Badge variant="secondary">{cloudServices.length} Services</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Headphones className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Support Services</h3>
                <p className="text-gray-600 mb-4">Repair, maintenance, and technical support</p>
                <Badge variant="secondary">{supportServices.length} Services</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure Services */}
      <section className="py-16 bg-gray-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Complete infrastructure solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Cloud Computing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert cloud solutions with certified professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Cloud infrastructure" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Multi-Cloud Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="text-primary h-5 w-5" />
                  <span>AWS Certified Solutions Architects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-primary h-5 w-5" />
                  <span>Google Cloud Professional Certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-primary h-5 w-5" />
                  <span>Microsoft Azure Expert Certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-primary h-5 w-5" />
                  <span>DevOps and Kubernetes Expertise</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <Cloud className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(service.price)}
                    </span>
                    <Link href="/contact">
                      <Button size="sm" className="primary-button">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Support & Maintenance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep your systems running smoothly with our support services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-accent-orange rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                    <Bolt className="text-white h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  
                  {service.features && (
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      {JSON.parse(service.features).slice(0, 3).map((feature: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <Check className="text-accent-orange mr-2 h-3 w-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">
                      Starting {formatPrice(service.price)}
                    </span>
                    <Link href="/contact">
                      <Button size="sm" className="accent-button">
                        Book Service
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
              Why Choose TechParts Pro?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Certified Experts</h3>
              <p className="text-gray-600">Industry-certified professionals with years of experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Check className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all our services</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Headphones className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support when you need it</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Network className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Nationwide Service</h3>
              <p className="text-gray-600">Serving businesses across India with on-site support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts today for a free consultation and custom quote for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="accent-button text-lg px-8 py-4">
                Get Free Consultation
              </Button>
            </Link>
            <Button className="secondary-button text-lg px-8 py-4">
              Call: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
