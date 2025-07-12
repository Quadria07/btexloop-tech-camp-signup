
export const WhyEnrollSection = () => {
  const benefits = [
    {
      icon: "🛠️",
      title: "Hands-on Training",
      description: "Real tech skills through practical projects"
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentorship",
      description: "Guided projects with experienced instructors"
    },
    {
      icon: "🏆",
      title: "Showcase & Recognition",
      description: "Opportunity to present final projects"
    },
    {
      icon: "🎓",
      title: "Certification & ID Card",
      description: "Official certification and branded ID card"
    },
    {
      icon: "🤝",
      title: "Tech Community",
      description: "Connect with other young tech minds"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#FF7947' }}>
          🚀 Why Enroll?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FF7947' }}>
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
