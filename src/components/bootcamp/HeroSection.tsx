
import { Calendar, Clock, MapPin, Target } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-12 md:py-16 px-4" style={{ background: 'linear-gradient(135deg, #FF7947 0%, #F7AD92 100%)' }}>
      <div className="container mx-auto text-center text-white max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          Btexloop Summer Tech Bootcamp 2025
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
          CATCH THEM YOUNG, EMPOWER THEM ALWAYS
        </p>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
          Equip your child (ages 5–18) with 21st-century tech skills this summer.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-4xl mx-auto mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 flex-shrink-0" />
              <p className="font-semibold text-sm md:text-base">Starts: July 28th</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <p className="font-semibold text-sm md:text-base">Time: 10:00 AM – 12:00 PM</p>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 flex-shrink-0" />
              <p className="font-semibold text-sm md:text-base">Duration: Monday – Friday</p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <p className="font-semibold text-sm md:text-base">Location: City Hall, Olonkoro, Osogbo</p>
            </div>
          </div>
        </div>

        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Target className="w-6 h-6 md:w-8 md:h-8" />
            <h3 className="text-xl md:text-2xl font-bold">Choose from:</h3>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
            <span className="bg-white text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-base md:text-lg">
              Artificial Intelligence
            </span>
            <span className="bg-white text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-base md:text-lg">
              Robotics
            </span>
            <span className="bg-white text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-base md:text-lg">
              Web Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
