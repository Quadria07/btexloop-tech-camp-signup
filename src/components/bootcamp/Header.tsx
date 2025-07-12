
export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <img 
            src="https://btexloopacademy.com.ng/wp-content/uploads/2025/04/bl.png" 
            alt="Btexloop Academy" 
            className="h-12 w-auto"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Btexloop Summer Tech Bootcamp 2025
            </h1>
            <p className="text-sm font-medium" style={{ color: '#FF7947' }}>
              CATCH THEM YOUNG, EMPOWER THEM ALWAYS
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
