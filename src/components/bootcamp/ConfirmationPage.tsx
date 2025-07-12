
import { Button } from "@/components/ui/button";

interface ConfirmationPageProps {
  onBackToHome: () => void;
}

export const ConfirmationPage = ({ onBackToHome }: ConfirmationPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(135deg, #FF7947 0%, #F7AD92 100%)' }}>
      <div className="bg-white rounded-lg p-8 md:p-12 text-center max-w-2xl mx-auto shadow-2xl">
        <div className="text-6xl mb-6">🎉</div>
        
        <h1 className="text-4xl font-bold mb-6" style={{ color: '#FF7947' }}>
          Registration Successful!
        </h1>
        
        <div className="space-y-4 text-lg text-gray-700 mb-8">
          <p>
            <strong>Thank you for registering your child for the Btexloop Summer Tech Bootcamp 2025.</strong>
          </p>
          <p>
            Our team will contact you within 24 hours to complete payment and onboarding.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-xl mb-4" style={{ color: '#FF7947' }}>
            Important Details:
          </h3>
          <div className="space-y-2">
            <p><strong>📅 Start Date:</strong> July 28th, 2025</p>
            <p><strong>🕙 Time:</strong> 10:00 AM – 12:00 PM</p>
            <p><strong>📍 Location:</strong> City Hall, Olonkoro, Osogbo, Osun State</p>
          </div>
        </div>

        <div className="text-2xl font-bold mb-8" style={{ color: '#FF7947' }}>
          💡 Let's build the future together!
        </div>

        <Button
          onClick={onBackToHome}
          className="px-8 py-3 text-lg font-semibold"
          style={{ backgroundColor: '#FF7947' }}
        >
          Back to Homepage
        </Button>
      </div>
    </div>
  );
};
