import HeroSection from "@/components/sections/HeroSection";
import BannerSection from "@/components/sections/BannerSection";
import TreinamentosSection from "@/components/sections/TreinamentosSection";
import SobreSection from "@/components/sections/SobreSection";
import MissaoSection from "@/components/sections/MissaoSection";
import AssessoriaSection from "@/components/sections/AssessoriaSection";
import ServicosSection from "@/components/sections/ServicosSection";
import EmpresasSection from "@/components/sections/EmpresasSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BannerSection />
      <TreinamentosSection />
      <SobreSection />
      <MissaoSection />
      <AssessoriaSection />
      <ServicosSection />
      <EmpresasSection />
      <CTASection />
    </main>
  );
}
