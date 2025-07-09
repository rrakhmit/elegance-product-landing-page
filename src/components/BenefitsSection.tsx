
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Zap, Shield, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="h-8 w-8 text-rose-500" />,
    title: "Visible Results in 7 Days",
    description: "See clearer, brighter skin in just one week with our fast-acting formula."
  },
  {
    icon: <Heart className="h-8 w-8 text-pink-500" />,
    title: "100% Natural Ingredients",
    description: "Carefully selected botanicals and vitamins that love your skin as much as you do."
  },
  {
    icon: <Zap className="h-8 w-8 text-rose-500" />,
    title: "Anti-Aging Power",
    description: "Reduce fine lines and boost collagen production for youthful, radiant skin."
  },
  {
    icon: <Shield className="h-8 w-8 text-pink-500" />,
    title: "Dermatologist Tested",
    description: "Clinically proven safe for all skin types, including sensitive skin."
  },
  {
    icon: <Clock className="h-8 w-8 text-rose-500" />,
    title: "5-Minute Daily Routine",
    description: "Simple, effective skincare that fits perfectly into your busy lifestyle."
  },
  {
    icon: <Award className="h-8 w-8 text-pink-500" />,
    title: "Award-Winning Formula",
    description: "Winner of 'Best Skincare Innovation 2024' by Beauty Awards."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Skincare?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the key benefits that make our skincare routine the perfect choice 
            for achieving your dream skin.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-rose-50/30"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-white rounded-full shadow-md">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
