
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#FF7947' }}>
              Contact Information
            </h3>
            <div className="space-y-2">
              <p><strong>Phone/WhatsApp:</strong></p>
              <p>+234 813 122 6618</p>
              <p>+234 903 218 8542</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#FF7947' }}>
              Location
            </h3>
            <p>City Hall Olonkoro</p>
            <p>Osogbo, Osun State</p>
            <p>Nigeria</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#FF7947' }}>
              Email
            </h3>
            <p>info@btexloopacademy.com.ng</p>
            <div className="mt-4">
              <img 
                src="https://btexloopacademy.com.ng/wp-content/uploads/2025/04/bl.png" 
                alt="Btexloop Academy" 
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p style={{ color: '#F7AD92' }}>
            CATCH THEM YOUNG, EMPOWER THEM ALWAYS
          </p>
          <p className="mt-2 text-gray-400">
            © 2025 Btexloop Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
