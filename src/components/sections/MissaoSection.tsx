const cards = [
  {
    label: "Missão",
    texto:
      "Promover a segurança e saúde no trabalho por meio de soluções eficazes de assessoria e treinamento, contribuindo para a redução de acidentes e doenças ocupacionais nas empresas.",
  },
  {
    label: "Visão",
    texto:
      "Ser reconhecida como referência em segurança do trabalho em Santa Catarina, destacando-nos pela qualidade dos serviços prestados e pelo compromisso com a excelência.",
  },
  {
    label: "Valores",
    texto:
      "Ética, comprometimento, respeito às pessoas, responsabilidade social, inovação contínua e excelência na prestação de serviços de segurança e saúde no trabalho.",
  },
];

export default function MissaoSection() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4"
          >
            <span
              className="inline-block self-start px-4 py-1 rounded-full text-sm font-bold"
              style={{ backgroundColor: "#F7AE2E", color: "#ffffff" }}
            >
              {card.label}
            </span>
            <p className="text-base leading-relaxed" style={{ color: "#006B43" }}>
              {card.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
