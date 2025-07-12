
export const ProjectShowcase = () => {
  const projects = [
    {
      title: "AI Flood Warning App",
      description: "Help local communities prepare for floods",
      icon: "🌊"
    },
    {
      title: "Smart Waste Sorting Robot",
      description: "Technology for cleaner streets",
      icon: "🤖"
    },
    {
      title: "Local Farmers Website",
      description: "Platform for farmers to sell produce online",
      icon: "🌱"
    },
    {
      title: "Power Usage Tracker",
      description: "Monitor electricity usage for homes and businesses",
      icon: "⚡"
    },
    {
      title: "Missing Person Portal",
      description: "Facial recognition system for safety",
      icon: "👤"
    },
    {
      title: "Emergency School App",
      description: "Quick response system for schools",
      icon: "🏫"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#FF7947' }}>
          💡 Sample Projects Solving Nigerian Problems
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          (Simplified to match different age levels)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border-2 rounded-lg p-6 hover:border-[#FF7947] transition-colors">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FF7947' }}>
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
