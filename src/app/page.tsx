import HeroSection from "@/components/sections/HeroSection";
import TreinamentosDestaqueSection from "@/components/sections/TreinamentosDestaqueSection";
import SobreSection from "@/components/sections/SobreSection";
import MissaoVisaoSection from "@/components/sections/MissaoVisaoSection";
import AssessoriaSection from "@/components/sections/AssessoriaSection";
import TreinamentosGridSection from "@/components/sections/TreinamentosGridSection";
import EmpresasAtendidasSection from "@/components/sections/EmpresasAtendidasSection";
import AtendimentosSection from "@/components/sections/AtendimentosSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TreinamentosDestaqueSection />
      <SobreSection />
      <MissaoVisaoSection />
      <AssessoriaSection />
      <TreinamentosGridSection />
      <EmpresasAtendidasSection />
      <AtendimentosSection />
      <FooterSection />
    </main>
  );
}
