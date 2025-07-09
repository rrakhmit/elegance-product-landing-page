
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Timer, ShoppingBag } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import VideoSection from "@/components/VideoSection";
import ProductDisplay from "@/components/ProductDisplay";
import ImageTextSection from "@/components/ImageTextSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CheckoutModal from "@/components/CheckoutModal";
import TrustBadges from "@/components/TrustBadges";
import StickyBuyButton from "@/components/StickyBuyButton";

const Index = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Limited Time Banner */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 text-center animate-pulse">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Timer className="h-4 w-4" />
          LIMITED TIME: 40% OFF + FREE SHIPPING - Ends in 24:00:00
        </div>
      </div>

      <HeroSection onBuyClick={() => setIsCheckoutOpen(true)} />
      <ProductDisplay onBuyClick={() => setIsCheckoutOpen(true)} />
      <BenefitsSection />
      <VideoSection />
      <ImageTextSection />
      <TestimonialsSection />
      <FAQSection />
      <TrustBadges />
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've discovered their best skin yet. 
            30-day money-back guarantee included.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            onClick={() => setIsCheckoutOpen(true)}
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Get Your Facewash Now
          </Button>
        </div>
      </section>

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
      <StickyBuyButton onBuyClick={() => setIsCheckoutOpen(true)} />
    </div>
  );
};

export default Index;
