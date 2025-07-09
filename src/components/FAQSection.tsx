
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will I see results?",
    answer: "Most customers notice brighter, softer skin within the first week. Significant improvements in skin texture, tone, and clarity typically appear within 2-4 weeks of consistent use. For anti-aging benefits, you'll see the most dramatic results after 6-8 weeks."
  },
  {
    question: "Is this suitable for sensitive skin?",
    answer: "Yes! Our products are dermatologist-tested and formulated to be gentle on all skin types, including sensitive skin. All ingredients are carefully selected for their efficacy and gentleness. We recommend patch testing new products and starting with every-other-day use for sensitive skin."
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day money-back guarantee on all purchases. If you're not completely satisfied with your results, simply return the products (even if used) within 30 days for a full refund. No questions asked!"
  },
  {
    question: "How do I use the products together?",
    answer: "Each order includes a detailed skincare guide with step-by-step instructions. Generally: cleanse, apply serums (Vitamin C in AM, Retinol in PM), moisturize, and use sunscreen during the day. We also provide personalized routine recommendations based on your skin type."
  },
  {
    question: "Are the ingredients natural and safe?",
    answer: "Yes, we use premium natural and clinically-proven ingredients. All products are free from harmful chemicals like parabens, sulfates, and artificial fragrances. Every ingredient is carefully sourced and tested for purity and effectiveness."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within the United States with free shipping on all orders. We're working on expanding to international markets soon. Subscribe to our newsletter to be notified when international shipping becomes available."
  },
  {
    question: "Can I use these products with my current skincare routine?",
    answer: "Our products are designed to work together as a complete system for maximum results. However, you can gradually introduce them into your existing routine. We recommend starting with the cleanser and moisturizer, then adding serums one at a time to allow your skin to adjust."
  },
  {
    question: "What makes your skincare different from drugstore brands?",
    answer: "Our formulations use clinically-proven active ingredients in optimal concentrations, premium natural botanicals, and advanced delivery systems that ensure ingredients penetrate effectively. Each product is third-party tested for purity and potency - something many drugstore brands don't offer."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our skincare products and how they work.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-gray-50 hover:bg-gray-100 rounded-lg px-6 border transition-colors duration-200"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-rose-500 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {/* Contact Support */}
        <div className="mt-12 text-center bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our skincare experts are here to help you choose the perfect routine for your skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-semibold border transition-colors duration-200">
              💬 Start Live Chat
            </button>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              📧 Email Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
