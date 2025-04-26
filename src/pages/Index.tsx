import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from "@/components/ExperienceSection";
import "nes.css/css/nes.min.css";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans relative">
      {/* ✅ Horizontal Slanted DANs only on the homepage */}

      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
