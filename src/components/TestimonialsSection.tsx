
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    age: 29,
    location: "New York, NY",
    image: "👩🏽‍💼",
    rating: 5,
    text: "I've tried countless skincare products, but nothing compares to this routine. My skin has never looked better - so bright and smooth!",
    result: "Clearer skin in 2 weeks"
  },
  {
    name: "Emily Chen",
    age: 34,
    location: "Los Angeles, CA",
    image: "👩🏻‍💻",
    rating: 5,
    text: "As someone with sensitive skin, I was skeptical. But these products are so gentle yet effective. My dark spots have completely faded!",
    result: "Reduced dark spots by 90%"
  },
  {
    name: "Maria Rodriguez",
    age: 42,
    location: "Miami, FL",
    image: "👩🏻‍⚕️",
    rating: 5,
    text: "The anti-aging results are incredible! People keep asking if I've had work done. It's just my new skincare routine!",
    result: "Looks 10 years younger"
  },
  {
    name: "Jessica Williams",
    age: 26,
    location: "Chicago, IL",
    image: "👩🏾‍🎨",
    rating: 5,
    text: "My acne scars have faded so much in just one month. I finally feel confident going makeup-free!",
    result: "95% scar reduction"
  },
  {
    name: "Amanda Taylor",
    age: 38,
    location: "Seattle, WA",
    image: "👩🏼‍🏫",
    rating: 5,
    text: "This is the only skincare that actually works for my combination skin. Perfect balance of hydration without greasiness.",
    result: "Balanced skin texture"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of happy customers who have transformed their skin 
            with our clinically-proven skincare routine.
          </p>
        </div>
        
        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-rose-50 to-pink-50 border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <Quote className="h-12 w-12 text-rose-500 mx-auto mb-6" />
              
              <p className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">{testimonials[currentIndex].image}</div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    Age {testimonials[currentIndex].age} • {testimonials[currentIndex].location}
                  </p>
                  <p className="text-rose-500 font-medium text-sm">
                    {testimonials[currentIndex].result}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-rose-500 font-medium">{testimonial.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-rose-500 mb-2">50K+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-500 mb-2">4.9/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-rose-500 mb-2">98%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-500 mb-2">30</div>
            <p className="text-gray-600">Day Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
