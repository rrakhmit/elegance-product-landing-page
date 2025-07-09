
import { Shield, Truck, RotateCcw, Award, Heart, CheckCircle } from "lucide-react";

const trustFeatures = [
  {
    icon: <Shield className="h-8 w-8 text-green-500" />,
    title: "SSL Secured",
    description: "256-bit encryption"
  },
  {
    icon: <Truck className="h-8 w-8 text-blue-500" />,
    title: "Free Shipping",
    description: "On all orders"
  },
  {
    icon: <RotateCcw className="h-8 w-8 text-purple-500" />,
    title: "30-Day Returns",
    description: "Money-back guarantee"
  },
  {
    icon: <Award className="h-8 w-8 text-yellow-500" />,
    title: "Award Winning",
    description: "Beauty Innovation 2024"
  },
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "50K+ Happy Customers",
    description: "4.9/5 rating"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    title: "Dermatologist Approved",
    description: "Clinically tested"
  }
];

const TrustBadges = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Customers Trust Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your security and satisfaction are our top priorities. Here's what makes us different.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-full shadow-md">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Security Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="bg-white px-4 py-2 rounded border text-xs font-medium text-gray-600">
            🔒 SSL SECURED
          </div>
          <div className="bg-white px-4 py-2 rounded border text-xs font-medium text-gray-600">
            💳 SECURE PAYMENTS
          </div>
          <div className="bg-white px-4 py-2 rounded border text-xs font-medium text-gray-600">
            ✅ VERIFIED BUSINESS
          </div>
          <div className="bg-white px-4 py-2 rounded border text-xs font-medium text-gray-600">
            🏆 BBB ACCREDITED
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
