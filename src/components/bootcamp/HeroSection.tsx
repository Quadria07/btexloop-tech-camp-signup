
export const HeroSection = () => {
  return (
    <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #FF7947 0%, #F7AD92 100%)' }}>
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Btexloop Summer Tech Bootcamp 2025
        </h2>
        <p className="text-xl md:text-2xl font-semibold mb-4">
          CATCH THEM YOUNG, EMPOWER THEM ALWAYS
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Equip your child (ages 5–18) with 21st-century tech skills this summer.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="font-semibold">📅 Starts: July 28th</p>
              <p className="font-semibold">📅 Duration: Monday – Friday</p>
            </div>
            <div>
              <p className="font-semibold">🕙 Time: 10:00 AM – 12:00 PM</p>
              <p className="font-semibold">📍 Location: City Hall, Olonkoro, Osogbo</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">🎯 Choose from:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-lg">
              Artificial Intelligence
            </span>
            <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-lg">
              Robotics
            </span>
            <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-lg">
              Web Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
