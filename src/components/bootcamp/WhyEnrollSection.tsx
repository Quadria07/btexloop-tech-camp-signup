
import { Wrench, Users, Trophy, GraduationCap, Network, BookOpen } from "lucide-react";

export const WhyEnrollSection = () => {
  const benefits = [
    {
      icon: Wrench,
      title: "Hands-on Training",
      description: "Real tech skills through practical projects",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Guided projects with experienced instructors",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Trophy,
      title: "Showcase & Recognition",
      description: "Opportunity to present final projects",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: GraduationCap,
      title: "Certification & ID Card",
      description: "Official certification and branded ID card",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Network,
      title: "Tech Community",
      description: "Connect with other young tech minds",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: BookOpen,
      title: "Problem-Solving Skills",
      description: "Learn to tackle real Nigerian challenges with technology",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FF7947' }}>
            Why Enroll Your Child?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Give your child the competitive edge with skills that matter in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#FF7947' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  <div className="absolute top-4 right-4 opacity-20">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
