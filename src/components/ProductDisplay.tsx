
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingBag, CheckCircle } from "lucide-react";

interface ProductDisplayProps {
  onBuyClick: () => void;
}

const ProductDisplay = ({ onBuyClick }: ProductDisplayProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Introducing Our Premium Facewash
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect balance of deep cleansing and gentle care with our 
            dermatologist-approved formula.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto bg-white shadow-2xl hover:shadow-3xl transition-all duration-300">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Images */}
              <div className="relative bg-gradient-to-br from-rose-100 to-pink-100 p-8 lg:p-12">
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
                  Best Seller
                </Badge>
                
                {/* Main Product Image */}
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">🧴</div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">4.9 (2,847 reviews)</span>
                  </div>
                </div>
                
                {/* Product Gallery */}
                <div className="flex justify-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl shadow-md">
                    🧴
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl shadow-md">
                    📦
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl shadow-md">
                    ✨
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Gentle Deep Cleansing Facewash
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our premium facewash combines natural ingredients with advanced skincare science 
                  to deliver a deep cleanse that removes impurities, excess oil, and makeup while 
                  maintaining your skin's natural moisture barrier. Suitable for all skin types.
                </p>
                
                {/* Key Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Removes dirt, oil, and makeup effectively</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">pH-balanced formula for all skin types</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Infused with natural botanical extracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dermatologist tested and approved</span>
                  </li>
                </ul>
                
                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl font-bold text-rose-500">$29</span>
                    <span className="text-xl text-gray-400 line-through">$49</span>
                    <Badge className="bg-green-100 text-green-700">Save 40%</Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    150ml bottle • Free shipping • 30-day money-back guarantee
                  </p>
                </div>
                
                {/* Buy Button */}
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                  onClick={onBuyClick}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Buy Now - Limited Time Offer
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  🔒 Secure checkout • 💳 Pay with card or PayPal
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductDisplay;
