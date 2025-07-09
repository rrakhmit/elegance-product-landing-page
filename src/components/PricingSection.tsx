
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Crown, Gift, Timer } from "lucide-react";

interface PricingSectionProps {
  onBuyClick: () => void;
}

const packages = [
  {
    name: "Starter Kit",
    subtitle: "Perfect for beginners",
    price: "$49",
    originalPrice: "$89",
    savings: "Save $40",
    description: "Essential skincare basics",
    features: [
      "Vitamin C Serum (30ml)",
      "Daily Moisturizer (50ml)",
      "Gentle Cleanser (100ml)",
      "Free shipping",
      "30-day guarantee"
    ],
    popular: false,
    badge: null
  },
  {
    name: "Complete Bundle",
    subtitle: "Most popular choice",
    price: "$89",
    originalPrice: "$169",
    savings: "Save $80",
    description: "Full skincare transformation",
    features: [
      "Vitamin C Serum (30ml)",
      "Retinol Night Treatment (30ml)",
      "Hyaluronic Moisturizer (50ml)",
      "Gentle Cleanser (100ml)",
      "Eye Cream (15ml)",
      "Face Mask (3 pack)",
      "Free express shipping",
      "60-day guarantee",
      "Personal skincare guide"
    ],
    popular: true,
    badge: "Most Popular"
  },
  {
    name: "Premium Collection",
    subtitle: "Maximum results",
    price: "$129",
    originalPrice: "$249",
    savings: "Save $120",
    description: "Complete anti-aging system",
    features: [
      "Everything in Complete Bundle",
      "Advanced Peptide Serum (30ml)",
      "Luxury Night Cream (50ml)",
      "Exfoliating Toner (100ml)",
      "Premium Face Masks (6 pack)",
      "Jade facial roller",
      "Free priority shipping",
      "90-day guarantee",
      "1-on-1 skincare consultation"
    ],
    popular: false,
    badge: "Best Value"
  }
];

const PricingSection = ({ onBuyClick }: PricingSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2">
            <Timer className="h-4 w-4 mr-2" />
            Limited Time Offer - 40% OFF
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Skincare Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the perfect package for your skin transformation. All packages include 
            our money-back guarantee and free shipping.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-rose-500 bg-white' : 'bg-white'
              }`}
            >
              {pkg.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2">
                  {pkg.popular ? <Crown className="h-4 w-4 mr-1" /> : <Gift className="h-4 w-4 mr-1" />}
                  {pkg.badge}
                </Badge>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-rose-500">{pkg.price}</span>
                    <span className="text-xl text-gray-400 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  
                  <Badge variant="secondary" className="bg-green-100 text-green-700 mb-4">
                    {pkg.savings}
                  </Badge>
                  
                  <p className="text-gray-600 font-medium">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-4 font-semibold text-lg transition-all duration-200 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white transform hover:scale-105' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  onClick={onBuyClick}
                >
                  {pkg.popular ? 'Get Complete Bundle' : 'Select Package'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Money Back Guarantee */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-3xl">🛡️</div>
            <h3 className="text-2xl font-bold text-gray-900">30-Day Money-Back Guarantee</h3>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not completely satisfied? Return your products within 30 days for a full refund. 
            No questions asked. We're confident you'll love your new skin!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
