import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  Zap,
  CheckCircle,
  Server,
  Cloud,
  Shield,
  Headphones,
  MapPin,
  Building
} from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const stats = [
    { label: "Happy Customers", value: "500+", icon: Users },
    { label: "Projects Completed", value: "1000+", icon: CheckCircle },
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Team Members", value: "25+", icon: Building },
  ];

  const values = [
    {
      icon: Target,
      title: "Customer-Focused",
      description: "We prioritize our customers' needs and deliver solutions that exceed expectations."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product and service meets our rigorous quality standards and comes with full warranty."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for modern businesses."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is available round-the-clock to assist with any technical issues."
    }
  ];

  const services = [
    {
      icon: Server,
      title: "Infrastructure Services",
      description: "Complete server setup, network installation, and hardware solutions for businesses of all sizes."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Expert AWS, GCP, and Azure migration services with certified cloud architects and engineers."
    },
    {
      icon: Shield,
      title: "Security & Support",
      description: "Comprehensive cybersecurity solutions and ongoing technical support to keep your systems secure."
    }
  ];

  const team = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "15+ years in IT infrastructure and cloud computing"
    },
    {
      name: "Priya Patel",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=300&h=300&fit=crop&crop=face",
      description: "AWS & GCP certified architect with enterprise experience"
    },
    {
      name: "Vikram Singh",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in supply chain and customer service excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About TechParts Pro
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner in technology since 2014. We deliver premium computer components and professional IT services across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="accent-button text-lg px-8 py-4">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/services">
                <Button className="secondary-button text-lg px-8 py-4">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2014, TechParts Pro began as a small computer parts retailer in Bangalore with a simple mission: to provide high-quality technology components at competitive prices with exceptional customer service.
                </p>
                <p>
                  Over the years, we've expanded our offerings to include comprehensive IT services, becoming a one-stop solution for businesses and individuals seeking reliable technology partners. Our team of certified professionals has grown to serve customers across India.
                </p>
                <p>
                  Today, we're proud to be a leading provider of computer components and enterprise IT solutions, trusted by hundreds of businesses and thousands of individual customers who rely on our expertise and commitment to excellence.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="TechParts Pro team and office"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="py-16 bg-gray-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="bg-accent-orange rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="text-white h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services">
              <Button className="accent-button text-lg px-8 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind TechParts Pro's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Certifications & Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Certified by industry leaders and trusted partners
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-orange-500 text-white p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center text-xl font-bold">
                AWS
              </div>
              <div className="font-semibold">AWS Partner</div>
              <div className="text-sm text-gray-600">Certified Solutions</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-500 text-white p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center text-xl font-bold">
                GCP
              </div>
              <div className="font-semibold">Google Cloud</div>
              <div className="text-sm text-gray-600">Partner Network</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-blue-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center text-xl font-bold">
                AZ
              </div>
              <div className="font-semibold">Microsoft Azure</div>
              <div className="text-sm text-gray-600">Silver Partner</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-green-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <div className="font-semibold">ISO Certified</div>
              <div className="text-sm text-gray-600">Quality Management</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">Visit Our Store</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <MapPin className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Main Office & Showroom</h3>
                    <p className="text-gray-600">123 Tech Street, Koramangala<br />Bangalore, Karnataka 560001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <Building className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Center</h3>
                    <p className="text-gray-600">456 Service Road, Electronic City<br />Bangalore, Karnataka 560100</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="primary-button text-lg px-8 py-3">
                    Get Directions
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">123 Tech Street, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need premium computer components or professional IT services, we're here to help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="accent-button text-lg px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link href="/products">
              <Button className="secondary-button text-lg px-8 py-4">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
