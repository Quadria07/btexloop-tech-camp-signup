
import { Wrench, Users, Trophy, GraduationCap, Network, BookOpen } from "lucide-react";

export const WhyEnrollSection = () => {
  const benefits = [
    {
      icon: Wrench,
      title: "Hands-on Training",
      description: "Real tech skills through practical projects"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Guided projects with experienced instructors"
    },
    {
      icon: Trophy,
      title: "Showcase & Recognition",
      description: "Opportunity to present final projects"
    },
    {
      icon: GraduationCap,
      title: "Certification & ID Card",
      description: "Official certification and branded ID card"
    },
    {
      icon: Network,
      title: "Tech Community",
      description: "Connect with other young tech minds"
    },
    {
      icon: BookOpen,
      title: "Problem-Solving Skills",
      description: "Learn to tackle real Nigerian challenges with technology"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12" style={{ color: '#FF7947' }}>
          Why Enroll?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <IconComponent className="w-12 h-12 mb-4" style={{ color: '#FF7947' }} />
                <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#FF7947' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
