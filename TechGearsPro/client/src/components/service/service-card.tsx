import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";
import type { Service } from "@shared/schema";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(parseFloat(price));
  };

  const features = service.features ? JSON.parse(service.features) : [];

  return (
    <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
      <CardContent className="p-8">
        <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
          <div className="text-white text-2xl">
            {service.icon === "server" && "🖥️"}
            {service.icon === "network-wired" && "🔗"}
            {service.icon === "tools" && "🔧"}
            {service.icon === "cloud" && "☁️"}
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 text-white">{service.name}</h3>
        
        <p className="text-gray-300 mb-6">
          {service.shortDescription || service.description}
        </p>
        
        <ul className="text-gray-300 mb-6 space-y-2">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center">
              <Check className="text-orange-500 mr-2 h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-300">Starting from</span>
          <span className="text-2xl font-bold text-orange-500">
            {formatPrice(service.price)}
          </span>
        </div>
        
        <Link href="/contact">
          <Button className="w-full accent-button">
            Get Quote
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
