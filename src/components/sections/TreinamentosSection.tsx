const treinamentos = [
  { id: 1, nome: "CIPA NR05" },
  { id: 2, nome: "Brigada de Incêndio NR23" },
  { id: 3, nome: "Operador de Empilhadeira NR11" },
  { id: 4, nome: "Lei Lucas" },
  { id: 5, nome: "Trabalho em Altura NR35" },
  { id: 6, nome: "Espaço Confinado NR33" },
  { id: 7, nome: "Segurança em Eletricidade NR10" },
  { id: 8, nome: "Equipamentos de Proteção NR06" },
];

function IconPlaceholder() {
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
      style={{ backgroundColor: "#006B43" }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="#F7AE2E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function TreinamentosSection() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        style={{ color: "#006B43" }}
      >
        Treinamentos
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {treinamentos.map((t) => (
          <div
            key={t.id}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <IconPlaceholder />
            <span
              className="text-sm font-semibold leading-snug"
              style={{ color: "#1A1A1A" }}
            >
              {t.nome}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
