
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Clock, MapPin, Phone, Mail, Sparkles } from "lucide-react";

interface ConfirmationPageProps {
  onBackToHome: () => void;
}

export const ConfirmationPage = ({ onBackToHome }: ConfirmationPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF7947 0%, #F7AD92 100%)' }}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <Sparkles className="absolute top-20 left-20 w-12 h-12 text-white animate-pulse" />
        <CheckCircle className="absolute top-40 right-20 w-16 h-16 text-white animate-bounce" />
        <Sparkles className="absolute bottom-40 left-10 w-8 h-8 text-white animate-pulse" />
        <CheckCircle className="absolute bottom-20 right-40 w-10 h-10 text-white animate-bounce" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-white/10 rounded-3xl blur"></div>
          <div className="relative bg-white rounded-3xl p-8 md:p-16 text-center shadow-2xl">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-50"></div>
                <div className="relative w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6 mb-12">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FF7947' }}>
                Registration Successful!
              </h1>
              
              <div className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
                <p className="text-xl font-semibold">
                  <strong>Congratulations! Your child's tech journey begins soon.</strong>
                </p>
                <p className="text-lg">
                  Our team will contact you within 24 hours to complete payment and onboarding process.
                </p>
              </div>
            </div>

            {/* Important Details Card */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-10 text-left border-2 border-orange-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-2xl" style={{ color: '#FF7947' }}>
                  Important Program Details
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm">
                  <Calendar className="w-6 h-6" style={{ color: '#FF7947' }} />
                  <div>
                    <p className="font-semibold text-gray-800">Start Date</p>
                    <p className="text-gray-600">July 28th, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm">
                  <Clock className="w-6 h-6" style={{ color: '#FF7947' }} />
                  <div>
                    <p className="font-semibold text-gray-800">Schedule</p>
                    <p className="text-gray-600">10:00 AM – 12:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm md:col-span-2">
                  <MapPin className="w-6 h-6" style={{ color: '#FF7947' }} />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">City Hall, Olonkoro, Osogbo, Osun State</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-10">
              <h4 className="font-bold text-xl mb-4" style={{ color: '#FF7947' }}>
                Questions? Contact Us:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" style={{ color: '#FF7947' }} />
                  <span>+234 813 122 6618</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" style={{ color: '#FF7947' }} />
                  <span>+234 903 218 8542</span>
                </div>
                <div className="flex items-center space-x-2 md:col-span-2">
                  <Mail className="w-4 h-4" style={{ color: '#FF7947' }} />
                  <span>info@btexloopacademy.com.ng</span>
                </div>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Sparkles className="w-8 h-8" />
                <h3 className="text-2xl font-bold">The Future Starts Here!</h3>
                <Sparkles className="w-8 h-8" />
              </div>
              <p className="text-xl font-medium">
                Your child is about to embark on an incredible journey of discovery, creativity, and innovation.
              </p>
            </div>

            <Button
              onClick={onBackToHome}
              className="px-12 py-4 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ backgroundColor: '#FF7947' }}
            >
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6" />
                <span>Back to Homepage</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
