
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles, ShoppingBag, Users } from "lucide-react";

interface HeroSectionProps {
  onBuyClick: () => void;
}

const HeroSection = ({ onBuyClick }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-pink-100/50 -z-10"></div>
      
      <div className="container mx-auto max-w-6xl">
        <Badge className="mb-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 text-sm font-medium">
          <Sparkles className="h-4 w-4 mr-2" />
          #1 Skincare Brand 2024
        </Badge>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
          Radiant Skin
          <br />
          <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            Starts Here
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your skin in just 30 days with our clinically-proven skincare routine. 
          Natural ingredients, visible results, guaranteed.
        </p>
        
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-gray-600 font-medium">4.9/5 from 12,847+ happy customers</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
            onClick={onBuyClick}
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shop Now - 40% OFF
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 hover:border-rose-500 hover:text-rose-500 px-8 py-4 text-lg font-semibold transition-all duration-200"
          >
            Watch Demo Video
          </Button>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl p-8 shadow-2xl">
            <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="h-16 w-16 text-rose-500 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Before & After Results</p>
                <p className="text-sm text-gray-500">30-Day Transformation</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>50K+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>Dermatologist Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Natural Ingredients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
