
import { Waves, Bot, Sprout, Zap, User, School, MessageSquare, BookOpen, Trash2, Bell } from "lucide-react";

export const ProjectShowcase = () => {
  const projects = [
    {
      title: "AI Flood Warning App",
      description: "Help local communities prepare for floods",
      icon: Waves
    },
    {
      title: "Smart Waste Sorting Robot",
      description: "Technology for cleaner streets",
      icon: Bot
    },
    {
      title: "Local Farmers Website",
      description: "Platform for farmers to sell produce online",
      icon: Sprout
    },
    {
      title: "Power Usage Tracker",
      description: "Monitor electricity usage for homes and businesses",
      icon: Zap
    },
    {
      title: "Missing Person Portal",
      description: "Facial recognition system for safety",
      icon: User
    },
    {
      title: "Emergency School App",
      description: "Quick response system for schools",
      icon: School
    },
    {
      title: "Smart Market Price Checker",
      description: "AI chatbot that tells users average prices of food items like garri, rice, yam across different markets",
      icon: MessageSquare
    },
    {
      title: "Smart Exam Prep Assistant",
      description: "AI quiz bot that helps students prepare for WAEC/NECO by asking and explaining past questions",
      icon: BookOpen
    },
    {
      title: "Smart Dustbin for Clean Cities",
      description: "A dustbin that opens automatically and beeps when full — helps with sanitation in Nigerian streets",
      icon: Trash2
    },
    {
      title: "Neighborhood Alert Board",
      description: "A noticeboard website where community members can report crime, missing items, or events",
      icon: Bell
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#FF7947' }}>
          See the Kind of Real-World Projects Your Child Will Build!
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg">
          (Simplified to match different age levels)
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="border-2 rounded-lg p-6 hover:border-[#FF7947] transition-colors">
                <IconComponent className="w-12 h-12 mb-4" style={{ color: '#FF7947' }} />
                <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#FF7947' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
