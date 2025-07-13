
import { Phone, MapPin, Mail, Heart, Globe, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FF7947 2px, transparent 0)', backgroundSize: '60px 60px' }}>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#FF7947' }}>
                Contact Us
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#FF7947' }} />
                <div>
                  <p className="font-semibold text-gray-300">Phone/WhatsApp:</p>
                  <p className="text-white hover:text-orange-300 transition-colors cursor-pointer">+234 813 122 6618</p>
                  <p className="text-white hover:text-orange-300 transition-colors cursor-pointer">+234 903 218 8542</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#FF7947' }}>
                Location
              </h3>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#FF7947' }} />
              <div>
                <p className="text-white font-medium">City Hall Olonkoro</p>
                <p className="text-gray-300">Osogbo, Osun State</p>
                <p className="text-gray-300">Nigeria</p>
              </div>
            </div>
          </div>
          
          {/* Email & Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#FF7947' }}>
                Get In Touch
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#FF7947' }} />
                <p className="text-white hover:text-orange-300 transition-colors cursor-pointer">info@btexloopacademy.com.ng</p>
              </div>
              <div className="pt-4">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30"></div>
                  <img 
                    src="https://btexloopacademy.com.ng/wp-content/uploads/2025/04/bl.png" 
                    alt="Btexloop Academy" 
                    className="relative h-12 md:h-16 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Schedule & Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#FF7947' }}>
                Program Info
              </h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="font-semibold text-orange-300">Start Date:</p>
                <p className="text-white">July 28th, 2025</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="font-semibold text-orange-300">Schedule:</p>
                <p className="text-white">10:00 AM - 12:00 PM</p>
                <p className="text-gray-300">Monday - Friday</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="font-semibold text-orange-300">Ages:</p>
                <p className="text-white">5 - 18 years</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-12">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Heart className="w-6 h-6" style={{ color: '#FF7947' }} />
              <p className="text-2xl font-bold" style={{ color: '#F7AD92' }}>
                CATCH THEM YOUNG, EMPOWER THEM ALWAYS
              </p>
              <Heart className="w-6 h-6" style={{ color: '#FF7947' }} />
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Globe className="w-5 h-5 text-gray-400" />
              <p className="text-gray-400">
                © 2025 Btexloop Academy. All rights reserved. | Building Nigeria's next generation of tech innovators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
