const cards = [
  {
    label: "Missão",
    texto: "Promover a Segurança no Trabalho e Preservar a vida.",
  },
  {
    label: "Visão",
    texto:
      "Ser uma empresa referência em Assessoria e Treinamentos na área de Segurança no Trabalho.",
  },
  {
    label: "Valores",
    texto:
      "Servir aos clientes com compromisso, transparência e ética, buscando sempre a excelência empresarial.",
  },
];

export default function MissaoVisaoSection() {
  return (
    <section style={{ paddingBlock: "clamp(40px, 4.2vw, 80px)" }}>
      <div className="container-segt">
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "clamp(16px, 1.35vw, 26px)" }}
        >
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-2xl flex flex-col gap-[15px]"
              style={{
                border: "2px solid #F8AD2D",
                padding: "clamp(24px, 2vw, 40px)",
              }}
            >
              <span
                className="font-bold"
                style={{
                  color: "#F8AD2D",
                  fontSize: "clamp(28px, 2.5vw, 48px)",
                  lineHeight: "1.15",
                }}
              >
                {card.label}
              </span>
              <p
                className="font-normal"
                style={{
                  color: "#000000",
                  fontSize: "clamp(14px, 0.94vw, 18px)",
                  lineHeight: "1.6",
                }}
              >
                {card.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
