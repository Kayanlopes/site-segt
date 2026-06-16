"use client";

import { useState } from "react";

const features = [
  "Elaboração e implantação de PPRA e PCMSO",
  "Gestão de EPIs e controle de validade",
  "Assessoria em CIPA e SIPAT",
  "Análise e investigação de acidentes de trabalho",
  "Adequação às Normas Regulamentadoras (NRs)",
  "Laudos técnicos e emissão de CAT",
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#F7AE2E" />
      <path
        d="M7 12.5l3.5 3.5 6.5-7"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const tabs = ["Assessoria", "Serviços / Treinamentos"] as const;

export default function AssessoriaSection() {
  const [abaAtiva, setAbaAtiva] = useState<(typeof tabs)[number]>("Assessoria");

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setAbaAtiva(tab)}
              className="px-6 py-3 font-semibold text-sm transition-colors relative"
              style={{
                color: abaAtiva === tab ? "#006B43" : "#9ca3af",
                borderBottom: abaAtiva === tab ? "3px solid #F7AE2E" : "3px solid transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Conteúdo Assessoria */}
        {abaAtiva === "Assessoria" && (
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                style={{ color: "#F7AE2E" }}
              >
                Assessoria completa em Segurança do Trabalho
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#1A1A1A" }}>
                Oferecemos suporte especializado para que sua empresa esteja sempre em conformidade com as legislações vigentes, prevenindo acidentes e promovendo a saúde dos colaboradores.
              </p>
              <ul className="flex flex-col gap-4">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#1A1A1A" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Imagem placeholder */}
            <div className="md:w-1/2">
              <div
                className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#e5e7eb" }}
              >
                <span className="text-gray-400 text-sm">Foto — assessoria</span>
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo Serviços */}
        {abaAtiva === "Serviços / Treinamentos" && (
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-10 leading-tight"
              style={{ color: "#F7AE2E" }}
            >
              Serviços e Treinamentos
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#1A1A1A" }}>
              Veja na seção abaixo todos os nossos treinamentos disponíveis.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
