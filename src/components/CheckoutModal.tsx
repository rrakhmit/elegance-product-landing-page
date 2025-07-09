import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, ShoppingBag, Lock, CreditCard, Truck, Gift, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: ""
  });
  
  const [selectedPackage, setSelectedPackage] = useState("complete");
  const { toast } = useToast();

  const packages = {
    starter: { name: "Starter Kit", price: 49, originalPrice: 89, savings: 40 },
    complete: { name: "Complete Bundle", price: 89, originalPrice: 169, savings: 80 },
    premium: { name: "Premium Collection", price: 129, originalPrice: 249, savings: 120 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order processing
    toast({
      title: "Order Confirmed! 🎉",
      description: "Thank you for your purchase! You'll receive a confirmation email shortly.",
    });
    
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <ShoppingBag className="h-6 w-6 text-rose-500" />
            Complete Your Order
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Package Selection */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Select Your Package</Label>
                <div className="space-y-3">
                  {Object.entries(packages).map(([key, pkg]) => (
                    <div 
                      key={key}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedPackage === key ? 'border-rose-500 bg-rose-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPackage(key)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{pkg.name}</h4>
                          <p className="text-sm text-gray-600">Save ${pkg.savings}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-rose-500">${pkg.price}</span>
                          <span className="text-sm text-gray-400 line-through ml-2">${pkg.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Contact Information</Label>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <Label className="text-lg font-semibold mb-4 block">Shipping Address</Label>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        placeholder="NY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <Label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Information
                </Label>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        placeholder="123"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input
                        id="nameOnCard"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-4 text-lg font-semibold"
              >
                <Lock className="mr-2 h-5 w-5" />
                Complete Secure Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-rose-500" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{packages[selectedPackage as keyof typeof packages].name}</span>
                  <span className="font-semibold">${packages[selectedPackage as keyof typeof packages].price}</span>
                </div>
                
                <div className="flex justify-between items-center text-green-600">
                  <span>Savings</span>
                  <span>-${packages[selectedPackage as keyof typeof packages].savings}</span>
                </div>
                
                <div className="flex justify-between items-center text-green-600">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total</span>
                  <span className="text-rose-500">${packages[selectedPackage as keyof typeof packages].price}</span>
                </div>
                
                <Badge className="w-full justify-center bg-green-100 text-green-700 py-2">
                  <Truck className="h-4 w-4 mr-2" />
                  FREE Express Shipping Included
                </Badge>
              </CardContent>
            </Card>
            
            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Lock className="h-4 w-4 text-green-500" />
                <span>Secure 256-bit SSL encryption</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Truck className="h-4 w-4 text-green-500" />
                <span>Free shipping on all orders</span>
              </div>
            </div>
            
            {/* Special Offer */}
            <Card className="bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
              <CardContent className="p-4">
                <div className="text-center">
                  <Gift className="h-8 w-8 text-rose-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-2">Limited Time Bonus!</h4>
                  <p className="text-sm text-gray-600">
                    Order now and receive a FREE luxury skincare guide ($29 value) 
                    with personalized tips for your skin type.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
