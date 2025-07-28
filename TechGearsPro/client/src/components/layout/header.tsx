import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  ChevronDown,
  Server,
  Network,
  Bolt,
  Cloud,
  Headphones,
  Cpu,
  HardDrive,
  MemoryStick,
  Monitor,
  CircuitBoard,
  Zap
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/lib/cart-store";

export default function Header() {
  const [location] = useLocation();
  const { getTotalItems, toggleCart } = useCartStore();
  const [searchQuery, setSearchQuery] = useState("");

  const productCategories = [
    { name: "CPUs & Processors", href: "/products?category=cpus-processors", icon: Cpu },
    { name: "RAM & Memory", href: "/products?category=ram-memory", icon: MemoryStick },
    { name: "Storage & SSDs", href: "/products?category=storage-ssds", icon: HardDrive },
    { name: "Graphics Cards", href: "/products?category=graphics-cards", icon: Monitor },
    { name: "Motherboards", href: "/products?category=motherboards", icon: CircuitBoard },
    { name: "Power Supplies", href: "/products?category=power-supplies", icon: Zap },
  ];

  const serviceCategories = [
    { name: "Server Setup", href: "/services?category=infrastructure", icon: Server },
    { name: "Network Installation", href: "/services?category=infrastructure", icon: Network },
    { name: "Repair Services", href: "/services?category=support", icon: Bolt },
    { name: "Cloud Support", href: "/services?category=cloud", icon: Cloud },
    { name: "Technical Support", href: "/services?category=support", icon: Headphones },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary cursor-pointer">TechParts Pro</h1>
              </Link>
            </div>
            
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <Link href="/">
                <a className={`font-medium transition-colors ${
                  isActive("/") ? "text-primary" : "text-gray-800 hover:text-primary"
                }`}>
                  Home
                </a>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-800 hover:text-primary font-medium flex items-center">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  {productCategories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <DropdownMenuItem key={category.name} asChild>
                        <Link href={category.href}>
                          <a className="flex items-center space-x-2 w-full">
                            <IconComponent className="h-4 w-4" />
                            <span>{category.name}</span>
                          </a>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-800 hover:text-primary font-medium flex items-center">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  {serviceCategories.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link href={service.href}>
                          <a className="flex items-center space-x-2 w-full">
                            <IconComponent className="h-4 w-4" />
                            <span>{service.name}</span>
                          </a>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link href="/about">
                <a className={`font-medium transition-colors ${
                  isActive("/about") ? "text-primary" : "text-gray-800 hover:text-primary"
                }`}>
                  About
                </a>
              </Link>
              
              <Link href="/contact">
                <a className={`font-medium transition-colors ${
                  isActive("/contact") ? "text-primary" : "text-gray-800 hover:text-primary"
                }`}>
                  Contact
                </a>
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-64 pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-1 -right-1 bg-orange-500 text-white h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/">
                    <a className="text-lg font-medium">Home</a>
                  </Link>
                  <Link href="/products">
                    <a className="text-lg font-medium">Products</a>
                  </Link>
                  <Link href="/services">
                    <a className="text-lg font-medium">Services</a>
                  </Link>
                  <Link href="/about">
                    <a className="text-lg font-medium">About</a>
                  </Link>
                  <Link href="/contact">
                    <a className="text-lg font-medium">Contact</a>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
