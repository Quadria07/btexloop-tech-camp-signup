
export const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-4" style={{ borderBottomColor: '#FF7947' }}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur opacity-30"></div>
              <img 
                src="https://btexloopacademy.com.ng/wp-content/uploads/2025/04/bl.png" 
                alt="Btexloop Academy" 
                className="relative h-12 sm:h-16 w-auto"
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Btexloop Summer Tech Bootcamp 2025
              </h1>
              <p className="text-sm sm:text-base font-semibold mt-2" style={{ color: '#FF7947' }}>
                CATCH THEM YOUNG, EMPOWER THEM ALWAYS
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg border-2 border-orange-200">
              <span className="text-2xl font-bold" style={{ color: '#FF7947' }}>28</span>
              <span className="text-xs text-gray-600">JULY START</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg border-2 border-orange-200">
              <span className="text-2xl font-bold" style={{ color: '#FF7947' }}>5-18</span>
              <span className="text-xs text-gray-600">AGES</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
