
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, Sparkles } from "lucide-react";

const products = [
  {
    name: "Vitamin C Brightening Serum",
    image: "🧴",
    price: "$49",
    originalPrice: "$89",
    rating: 4.9,
    reviews: 2847,
    benefits: ["Brightens skin", "Reduces dark spots", "Antioxidant protection"],
    badge: "Best Seller"
  },
  {
    name: "Hyaluronic Acid Moisturizer",
    image: "🫙",
    price: "$39",
    originalPrice: "$69",
    rating: 4.8,
    reviews: 1923,
    benefits: ["Deep hydration", "Plumps skin", "24-hour moisture"],
    badge: "Customer Favorite"
  },
  {
    name: "Retinol Night Renewal",
    image: "🧴",
    price: "$59",
    originalPrice: "$99",
    rating: 4.9,
    reviews: 1645,
    benefits: ["Anti-aging", "Smooths fine lines", "Improves texture"],
    badge: "Most Effective"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Complete Skincare Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each product is carefully formulated with premium ingredients to deliver 
            maximum results for every skin concern.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
                    {product.badge}
                  </Badge>
                  
                  <div className="text-6xl mb-4 text-center">{product.image}</div>
                  
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {product.name}
                </h3>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-rose-500">{product.price}</span>
                  <span className="text-lg text-gray-400 line-through ml-2">{product.originalPrice}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3">
                  Add to Bundle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Product Demo Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              See the Transformation
            </h3>
            <p className="text-lg text-gray-600">
              Real results from real customers using our complete skincare routine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Week 1</h4>
                  <p className="text-gray-600">Skin feels softer and looks brighter</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Week 2</h4>
                  <p className="text-gray-600">Dark spots begin to fade visibly</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Week 4</h4>
                  <p className="text-gray-600">Complete skin transformation achieved</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">📸</div>
              <p className="font-semibold text-gray-900 mb-2">Before & After Gallery</p>
              <p className="text-gray-600 text-sm">See dramatic transformations from our customers</p>
              <Button variant="outline" className="mt-4">View Gallery</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
