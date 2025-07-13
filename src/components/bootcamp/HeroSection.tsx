
import { Calendar, Clock, MapPin, Target, Sparkles, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF7947 0%, #F7AD92 100%)' }}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 opacity-20">
          <Sparkles className="w-12 h-12 text-white animate-pulse" />
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <Zap className="w-16 h-16 text-white animate-bounce" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Target className="w-14 h-14 text-white animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Sparkles className="w-10 h-10 text-white animate-bounce" />
        </div>
      </div>

      <div className="container mx-auto text-center text-white max-w-6xl relative z-10">
        <div className="mb-8">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-white font-semibold">🚀 Summer 2025 Registration Open</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Build the <span className="text-yellow-300">Future</span><br />
            This Summer
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-orange-100">
            CATCH THEM YOUNG, EMPOWER THEM ALWAYS
          </p>
        </div>
        
        {/* Emotional Hook */}
        <div className="mb-12">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 max-w-5xl mx-auto border border-white/20">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
              🌟 "This summer, let your child build something meaningful — not just play. From robots to smart apps, watch them grow into tech creators."
            </p>
          </div>
        </div>
        
        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <Calendar className="w-8 h-8 mb-2 mx-auto" />
            <p className="font-bold text-lg">July 28th</p>
            <p className="text-sm text-orange-100">Start Date</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <Clock className="w-8 h-8 mb-2 mx-auto" />
            <p className="font-bold text-lg">10AM - 12PM</p>
            <p className="text-sm text-orange-100">Daily Schedule</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <Calendar className="w-8 h-8 mb-2 mx-auto" />
            <p className="font-bold text-lg">Mon - Fri</p>
            <p className="text-sm text-orange-100">Weekdays Only</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <MapPin className="w-8 h-8 mb-2 mx-auto" />
            <p className="font-bold text-lg">City Hall</p>
            <p className="text-sm text-orange-100">Olonkoro, Osogbo</p>
          </div>
        </div>

        {/* Course Selection */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Target className="w-8 h-8" />
            <h3 className="text-2xl md:text-3xl font-bold">Choose Your Path:</h3>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <div className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              🤖 Artificial Intelligence
            </div>
            <div className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              🦾 Robotics
            </div>
            <div className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              💻 Web Development
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
