
import { Phone, MapPin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: '#FF7947' }}>
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FF7947' }} />
                <div>
                  <p className="font-semibold">Phone/WhatsApp:</p>
                  <p className="text-sm">+234 813 122 6618</p>
                  <p className="text-sm">+234 903 218 8542</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: '#FF7947' }}>
              Location
            </h3>
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FF7947' }} />
              <div>
                <p className="text-sm">City Hall Olonkoro</p>
                <p className="text-sm">Osogbo, Osun State</p>
                <p className="text-sm">Nigeria</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: '#FF7947' }}>
              Email
            </h3>
            <div className="flex items-start space-x-2 mb-4">
              <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#FF7947' }} />
              <p className="text-sm">info@btexloopacademy.com.ng</p>
            </div>
            <img 
              src="https://btexloopacademy.com.ng/wp-content/uploads/2025/04/bl.png" 
              alt="Btexloop Academy" 
              className="h-10 md:h-12 w-auto"
            />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="font-semibold" style={{ color: '#F7AD92' }}>
            CATCH THEM YOUNG, EMPOWER THEM ALWAYS
          </p>
          <p className="mt-2 text-gray-400 text-sm">
            © 2025 Btexloop Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
