import { ScrollProgress, FloatingActionButton } from "./components/ScrollComponents";
import { NavigationBar } from "./components/NavigationBar";
import { HeroSection } from "./components/HeroSection";
import { StatsStrip } from "./components/StatsStrip";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-sand text-brand-navy">
      <ScrollProgress />
      <NavigationBar />
      {/* Adjusted padding to properly account for header height */}
      <div >
        <HeroSection />
        <StatsStrip />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>
      <FloatingActionButton />
    </main>
  );
}

export default App;