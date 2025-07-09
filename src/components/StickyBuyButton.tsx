
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Timer } from "lucide-react";

interface StickyBuyButtonProps {
  onBuyClick: () => void;
}

const StickyBuyButton = ({ onBuyClick }: StickyBuyButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show sticky button after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-4 animate-slide-in-right">
      <div className="container mx-auto max-w-md">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-rose-500 font-medium mb-1">
              <Timer className="h-4 w-4" />
              Limited Time: 40% OFF
            </div>
            <div className="text-lg font-bold text-gray-900">
              Gentle Facewash - $29
              <span className="text-sm text-gray-400 line-through ml-2">$49</span>
            </div>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-6 py-3 transform hover:scale-105 transition-all duration-200"
            onClick={onBuyClick}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyButton;
