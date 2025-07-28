import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/product/product-card";
import ServiceCard from "@/components/service/service-card";
import { 
  Truck, 
  Shield, 
  Bolt, 
  IndianRupee,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import { Link } from "wouter";
import type { Product, Category, Service, Testimonial } from "@shared/schema";

export default function Home() {
  const { data: featuredProducts = [] } = useQuery<Product[]>({
    queryKey: ["/api/products?featured=true"],
  });

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ["/api/services?category=infrastructure"],
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(parseFloat(price));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-bg text-white py-20">
        <div 
          className="absolute inset-0 bg-black opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Computer Parts & Professional IT Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for high-quality computer components and enterprise IT solutions across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button className="accent-button text-lg px-8 py-4">
                  Browse Products
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

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery across India with express shipping options</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Genuine Products</h3>
              <p className="text-gray-600">100% authentic products with manufacturer warranty</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Bolt className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional installation and 24/7 technical support</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <IndianRupee className="text-white h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing with bulk discounts available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our extensive range of computer components and accessories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 tech-gradient relative overflow-hidden">
                  <img 
                    src={category.image || 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400'} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary opacity-20"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link href={`/products?category=${category.slug}`}>
                    <Button className="w-full primary-button">
                      View Products
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hand-picked products with the best performance and value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/products">
              <Button className="primary-button text-lg px-8 py-3">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional IT Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions for businesses across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
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

      {/* Cloud Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cloud Computing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert cloud solutions with certified professionals in AWS, GCP, and Azure
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Cloud data center infrastructure" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Multi-Cloud Expertise</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                    <span className="text-white text-xl">☁️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Amazon Web Services (AWS)</h4>
                    <p className="text-gray-600">Complete AWS cloud migration, deployment, and management services with certified architects.</p>
                    <div className="mt-2 text-sm text-gray-500">EC2, S3, RDS, Lambda, CloudFormation</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                    <span className="text-white text-xl">🔍</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Google Cloud Platform (GCP)</h4>
                    <p className="text-gray-600">GCP infrastructure setup, BigQuery analytics, and Kubernetes orchestration services.</p>
                    <div className="mt-2 text-sm text-gray-500">Compute Engine, Cloud SQL, Kubernetes, BigQuery</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                    <span className="text-white text-xl">🖥️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Microsoft Azure</h4>
                    <p className="text-gray-600">Azure cloud solutions, Office 365 integration, and enterprise application deployment.</p>
                    <div className="mt-2 text-sm text-gray-500">Virtual Machines, Azure SQL, Active Directory, Functions</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4">Cloud Migration Packages</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">₹25,000</div>
                    <div className="text-sm text-gray-600">Basic Migration</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">₹75,000</div>
                    <div className="text-sm text-gray-600">Enterprise Solution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by hundreds of businesses across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center text-yellow-400 text-xl mb-4">
                    {renderStars(testimonial.rating || 5)}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center space-x-3">
                    <img 
                      src={testimonial.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.title}
                        {testimonial.company && `, ${testimonial.company}`}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-blue-100 mb-8">
                Ready to upgrade your technology or need professional IT services? Contact our experts today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-blue-100">+91 98765 43210</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-blue-100">info@techpartspro.in</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Our Store</div>
                    <div className="text-blue-100">123 Tech Street, Bangalore, Karnataka 560001</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-blue-100">Mon-Sat: 9:00 AM - 8:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <p className="text-blue-100">
                  Have questions about our products or services? We're here to help!
                </p>
                <Link href="/contact">
                  <Button className="w-full accent-button text-lg py-3">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
