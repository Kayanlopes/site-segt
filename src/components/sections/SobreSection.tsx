"use client";

import { useState } from "react";

const textoCurto =
  "Com mais de uma década de experiência, a SEGT atua no desenvolvimento de programas eficazes de prevenção de acidentes, garantindo ambientes de trabalho mais seguros e produtivos para empresas de Santa Catarina.";

const textoCompleto =
  "Com mais de uma década de experiência, a SEGT atua no desenvolvimento de programas eficazes de prevenção de acidentes, garantindo ambientes de trabalho mais seguros e produtivos para empresas de Santa Catarina. Nossa equipe é formada por profissionais altamente capacitados e comprometidos com a excelência em segurança do trabalho. Oferecemos assessoria completa em NRs, treinamentos obrigatórios e consultoria personalizada para cada segmento de negócio, sempre alinhados às legislações vigentes e às melhores práticas do mercado.";

export default function SobreSection() {
  const [expandido, setExpandido] = useState(false);

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Foto placeholder */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div
            className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: "#e5e7eb" }}
          >
            <span className="text-gray-400 text-sm">Foto — public/images/sobre.jpg</span>
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#006B43" }}>
            Sobre a SEGT
          </h2>

          <p className="text-base leading-relaxed" style={{ color: "#1A1A1A" }}>
            {expandido ? textoCompleto : textoCurto}
          </p>

          <button
            onClick={() => setExpandido(!expandido)}
            className="self-start px-6 py-3 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#006B43" }}
          >
            {expandido ? "Ver menos" : "Ver mais"}
          </button>
        </div>
      </div>
    </section>
  );
}
