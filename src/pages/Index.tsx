
import { useState } from "react";
import { Header } from "@/components/bootcamp/Header";
import { HeroSection } from "@/components/bootcamp/HeroSection";
import { WhyEnrollSection } from "@/components/bootcamp/WhyEnrollSection";
import { ProjectShowcase } from "@/components/bootcamp/ProjectShowcase";
import { RegistrationForm } from "@/components/bootcamp/RegistrationForm";
import { Footer } from "@/components/bootcamp/Footer";
import { ConfirmationPage } from "@/components/bootcamp/ConfirmationPage";

const Index = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [registrationData, setRegistrationData] = useState<any>(null);

  const handleRegistrationSuccess = (data: any) => {
    setRegistrationData(data);
    setShowConfirmation(true);
  };

  const handleBackToHome = () => {
    setShowConfirmation(false);
    setRegistrationData(null);
  };

  if (showConfirmation) {
    return <ConfirmationPage onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyEnrollSection />
      <ProjectShowcase />
      <RegistrationForm onSuccess={handleRegistrationSuccess} />
      <Footer />
    </div>
  );
};

export default Index;
