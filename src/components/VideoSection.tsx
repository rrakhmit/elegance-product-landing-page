
import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See How Our Facewash Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our demonstration video to see the gentle yet effective cleansing action 
            that removes impurities while keeping your skin moisturized and radiant.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl p-8 shadow-2xl">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
              
              {/* Play Button */}
              <Button
                size="lg"
                className="relative z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/50 rounded-full w-20 h-20 p-0"
              >
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </Button>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  <span className="text-sm">Sound On</span>
                </div>
                <div className="text-sm">2:30</div>
              </div>
            </div>
          </div>
          
          {/* Video Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧴</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gentle Formula</h3>
              <p className="text-gray-600 text-sm">See how our pH-balanced formula cleanses without stripping natural oils</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Deep Cleansing</h3>
              <p className="text-gray-600 text-sm">Watch impurities dissolve while maintaining skin's natural moisture</p>
            </div>
            
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hydrating Finish</h3>
              <p className="text-gray-600 text-sm">Notice how skin feels soft and hydrated, never tight or dry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
