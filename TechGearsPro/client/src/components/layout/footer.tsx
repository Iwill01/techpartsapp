import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Shield,
  Truck,
  Award
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TechParts Pro</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium computer parts and professional IT services across India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="bg-primary hover:bg-blue-600 p-2 rounded-full">
                <Facebook className="h-4 w-4 text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-primary hover:bg-blue-600 p-2 rounded-full">
                <Twitter className="h-4 w-4 text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-primary hover:bg-blue-600 p-2 rounded-full">
                <Linkedin className="h-4 w-4 text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-primary hover:bg-blue-600 p-2 rounded-full">
                <Youtube className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/products?category=cpus-processors">
                  <a className="hover:text-white transition-colors">CPUs & Processors</a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=ram-memory">
                  <a className="hover:text-white transition-colors">RAM & Memory</a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=storage-ssds">
                  <a className="hover:text-white transition-colors">Storage & SSDs</a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=graphics-cards">
                  <a className="hover:text-white transition-colors">Graphics Cards</a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=motherboards">
                  <a className="hover:text-white transition-colors">Motherboards</a>
                </Link>
              </li>
              <li>
                <Link href="/products?category=power-supplies">
                  <a className="hover:text-white transition-colors">Power Supplies</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Server Setup</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Network Installation</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Repair Services</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Cloud Services</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Technical Support</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-white transition-colors">Consultation</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors">Contact</a>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Warranty</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">&copy; 2024 TechParts Pro. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-gray-300 text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="h-4 w-4 text-blue-400" />
              <span className="text-gray-300 text-sm">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-yellow-400" />
              <span className="text-gray-300 text-sm">Certified Products</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
