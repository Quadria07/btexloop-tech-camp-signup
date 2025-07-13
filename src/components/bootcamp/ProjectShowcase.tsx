
import { Waves, Bot, Sprout, Zap, User, School, MessageSquare, BookOpen, Trash2, Bell } from "lucide-react";

export const ProjectShowcase = () => {
  const projects = [
    {
      title: "AI Flood Warning App",
      description: "Help local communities prepare for floods",
      icon: Waves,
      category: "AI"
    },
    {
      title: "Smart Waste Sorting Robot",
      description: "Technology for cleaner streets",
      icon: Bot,
      category: "Robotics"
    },
    {
      title: "Local Farmers Website",
      description: "Platform for farmers to sell produce online",
      icon: Sprout,
      category: "Web Dev"
    },
    {
      title: "Power Usage Tracker",
      description: "Monitor electricity usage for homes and businesses",
      icon: Zap,
      category: "AI"
    },
    {
      title: "Missing Person Portal",
      description: "Facial recognition system for safety",
      icon: User,
      category: "AI"
    },
    {
      title: "Emergency School App",
      description: "Quick response system for schools",
      icon: School,
      category: "Web Dev"
    },
    {
      title: "Smart Market Price Checker",
      description: "AI chatbot that tells users average prices of food items like garri, rice, yam across different markets",
      icon: MessageSquare,
      category: "AI"
    },
    {
      title: "Smart Exam Prep Assistant",
      description: "AI quiz bot that helps students prepare for WAEC/NECO by asking and explaining past questions",
      icon: BookOpen,
      category: "AI"
    },
    {
      title: "Smart Dustbin for Clean Cities",
      description: "A dustbin that opens automatically and beeps when full — helps with sanitation in Nigerian streets",
      icon: Trash2,
      category: "Robotics"
    },
    {
      title: "Neighborhood Alert Board",
      description: "A noticeboard website where community members can report crime, missing items, or events",
      icon: Bell,
      category: "Web Dev"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI": return "from-blue-500 to-purple-600";
      case "Robotics": return "from-green-500 to-teal-600";
      case "Web Dev": return "from-orange-500 to-red-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #FF7947 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Real Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FF7947' }}>
            See What Your Child Will Build!
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
            Real-world projects that solve actual problems in Nigeria
          </p>
          <p className="text-lg text-gray-500">
            (Simplified to match different age levels)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl opacity-30 group-hover:opacity-60 transition duration-300 blur-sm"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(project.category)} flex items-center justify-center shadow-md`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: '#FF7947' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  <div className="absolute bottom-4 right-4 opacity-20">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
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
