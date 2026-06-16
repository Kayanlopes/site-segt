const servicos = [
  {
    id: 1,
    titulo: "PPRA / PCMSO",
    descricao: "Elaboração e gerenciamento do Programa de Prevenção de Riscos Ambientais e do Programa de Controle Médico de Saúde Ocupacional.",
  },
  {
    id: 2,
    titulo: "Gestão de EPIs",
    descricao: "Controle de entrega, validade e adequação dos Equipamentos de Proteção Individual para cada função.",
  },
  {
    id: 3,
    titulo: "CIPA",
    descricao: "Assessoria completa para formação, eleição e funcionamento da Comissão Interna de Prevenção de Acidentes.",
  },
  {
    id: 4,
    titulo: "Laudos Técnicos",
    descricao: "Emissão de laudos de insalubridade, periculosidade e ergonômicos com validade legal.",
  },
  {
    id: 5,
    titulo: "Investigação de Acidentes",
    descricao: "Análise técnica de causas e recomendações preventivas após ocorrência de acidentes de trabalho.",
  },
  {
    id: 6,
    titulo: "Consultoria em NRs",
    descricao: "Adequação da empresa às Normas Regulamentadoras vigentes, com diagnóstico e plano de ação.",
  },
];

export default function ServicosSection() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          style={{ color: "#006B43" }}
        >
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
            >
              <div
                className="w-10 h-1 rounded-full"
                style={{ backgroundColor: "#F7AE2E" }}
              />
              <h3 className="text-lg font-bold" style={{ color: "#006B43" }}>
                {s.titulo}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#1A1A1A" }}>
                {s.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
