import Image from "next/image";

const treinamentos = [
  { nome: "NR-01 - Disposições Gerais, Gerenciamento de Riscos Ocupacionais (GRO/PGR) e Fatores Psicossociais", cor: "#008743", img: "/NR-01.png" },
  { nome: "NR-05 - Comissão Interna de Prevenção de Acidentes e Assédio (CIPA) e Designado",                   cor: "#F8AD2D", img: "/NR-05.png" },
  { nome: "NR-06 - Equipamentos de Proteção Individual (EPI)",                                                  cor: "#008743", img: "/NR-06.png" },
  { nome: "NR-10 - Segurança em Instalações e Serviços com Eletricidade",                                       cor: "#F8AD2D", img: "/NR-10.png" },
  { nome: "NR-11 - Operação de Empilhadeiras, Pontes Rolantes, Muncks, Pás Carregadeiras entre outros",        cor: "#008743", img: "/NR-11.png" },
  { nome: "NR-12 - Segurança em Máquinas e Equipamentos",                                                       cor: "#F8AD2D", img: "/NR-12.png" },
  { nome: "NR-17 - Ergonomia",                                                                                  cor: "#008743", img: "/NR-17.png" },
  { nome: "NR-18 - Segurança na Construção Civil e Plataformas de Trabalho Elevatórias (PTA)",                 cor: "#F8AD2D", img: "/NR-18.png" },
  { nome: "NR-20 - Segurança com Inflamáveis e Combustíveis",                                                   cor: "#008743", img: "/NR-20.png" },
  { nome: "NR-22 - Segurança no Trabalho na Mineração",                                                         cor: "#F8AD2D", img: "/NR-22.png" },
  { nome: "NR-23 - Proteção e Combate a Incêndios",                                                             cor: "#008743", img: "/NR-23.png" },
  { nome: "NR-35 - Trabalho em Altura",                                                                         cor: "#F8AD2D", img: "/NR-35.png" },
];

export default function TreinamentosGridSection() {
  return (
    <section id="treinamentos" style={{ paddingBlock: "clamp(40px, 4.2vw, 80px)" }}>
      <div className="container-segt">
        {/* Tab header */}
        <div className="flex flex-col items-center">
          <span
            className="font-bold"
            style={{ color: "#008743", fontSize: "clamp(16px, 1vw, 20px)" }}
          >
            Treinamentos
          </span>
          <div
            className="mt-2 h-[4px] rounded-full"
            style={{ width: 208, backgroundColor: "#008743" }}
          />
        </div>

        {/* Grid 4×3 */}
        <div
          className="grid grid-cols-4 mt-10"
          style={{ gap: "24px" }}
        >
          {treinamentos.map((t, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden"
              style={{ borderRadius: 16, aspectRatio: "1/1.35" }}
            >
              {/* Foto — 78% da altura */}
              <div className="relative overflow-hidden" style={{ flex: 78 }}>
                <Image
                  src={t.img}
                  alt={t.nome}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Faixa colorida — 22% da altura */}
              <div
                className="flex items-center justify-center"
                style={{ flex: 22, backgroundColor: t.cor, padding: "12px" }}
              >
                <p
                  className="font-medium text-white text-center"
                  style={{ fontSize: "clamp(12px, 0.83vw, 16px)", lineHeight: "1.3" }}
                >
                  {t.nome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
