import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { useCartStore } from "@/lib/cart-store";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCartStore();
  const { toast } = useToast();

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(parseFloat(price));
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: parseFloat(product.price),
      image: product.image,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    
    setTimeout(() => {
      openCart();
    }, 500);
  };

  const renderStars = (rating: string) => {
    const stars = [];
    const ratingNum = parseFloat(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < ratingNum ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const hasDiscount = product.originalPrice && parseFloat(product.originalPrice) > parseFloat(product.price);
  const discountPercentage = hasDiscount 
    ? Math.round(((parseFloat(product.originalPrice!) - parseFloat(product.price)) / parseFloat(product.originalPrice!)) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <Link href={`/products/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        
        {hasDiscount && (
          <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
            {discountPercentage}% OFF
          </Badge>
        )}
        
        {!product.inStock && (
          <Badge variant="secondary" className="absolute top-4 left-4">
            Out of Stock
          </Badge>
        )}
        
        {product.inStock && (
          <Badge variant="secondary" className="absolute top-4 left-4 bg-green-500 text-white">
            In Stock
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
          </div>
          
          <div className="flex items-center">
            <div className="flex">
              {renderStars(product.rating || "5.0")}
            </div>
            <span className="text-gray-600 text-sm ml-1">({product.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            className="flex-1 primary-button"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
