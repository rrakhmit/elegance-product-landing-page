
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Leaf } from "lucide-react";

const ImageTextSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Science Behind Beautiful Skin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our carefully selected ingredients work together to give you 
            the healthiest, most radiant skin you've ever had.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl p-8 shadow-lg">
              <div className="aspect-square bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌸</div>
                  <p className="text-gray-600 font-medium">Natural Ingredients</p>
                  <p className="text-sm text-gray-500">Gentle on your skin</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Pure Ingredients, Proven Results
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our facewash is formulated with a blend of natural botanicals and scientifically-proven 
              ingredients that work synergistically to cleanse, nourish, and protect your skin. 
              Each ingredient is carefully selected for its specific benefits and gentle action.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full flex-shrink-0">
                  <Leaf className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Natural Botanical Extracts</h4>
                  <p className="text-gray-600">Chamomile and aloe vera soothe and calm irritated skin while providing natural moisture.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Cleansing Complex</h4>
                  <p className="text-gray-600">Gentle surfactants effectively remove impurities without disrupting your skin's natural barrier.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-full flex-shrink-0">
                  <Heart className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hydrating Ingredients</h4>
                  <p className="text-gray-600">Hyaluronic acid and glycerin help maintain optimal skin hydration levels throughout the day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🔬</div>
              <h4 className="font-semibold text-gray-900 mb-2">Clinically Tested</h4>
              <p className="text-gray-600 text-sm">Dermatologist tested and proven safe for sensitive skin</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🌿</div>
              <h4 className="font-semibold text-gray-900 mb-2">Cruelty-Free</h4>
              <p className="text-gray-600 text-sm">Never tested on animals and made with sustainable practices</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-0">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">✨</div>
              <h4 className="font-semibold text-gray-900 mb-2">Visible Results</h4>
              <p className="text-gray-600 text-sm">Notice clearer, smoother skin in just 7 days of use</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
