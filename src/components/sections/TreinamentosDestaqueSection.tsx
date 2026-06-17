import Image from "next/image";

const cards = [
  {
    bg: "#F8AD2D",
    icon: "/Cipa-Icon.svg",
    texto: "CIPA – Comissão Interna de Prevenção de Acidente - NR05",
  },
  {
    bg: "#F8AD2D",
    icon: "/Fire-icon.svg",
    texto: "Brigada de Incêndio - NR23",
  },
  {
    bg: "#008743",
    icon: "/empilhadeira-icon.svg",
    texto: "Operador de Empilhadeira - NR11",
  },
  {
    bg: "#008743",
    icon: "/security-icon.svg",
    texto: "Lei Lucas, segurança nas escolas",
  },
];

export default function TreinamentosDestaqueSection() {
  return (
    <section style={{ paddingBlock: "clamp(40px, 4.2vw, 80px)" }}>
      <div className="container-segt">
        <h2
          className="font-bold text-center"
          style={{ color: "#008743", fontSize: "clamp(20px, 1.7vw, 32px)" }}
        >
          Principais Treinamentos:
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10"
          style={{ gap: "clamp(16px, 1.35vw, 26px)" }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-row items-center rounded-lg"
              style={{ gap: "25px", padding: "24px", backgroundColor: card.bg }}
            >
              <div className="flex-shrink-0">
                <Image
                  src={card.icon}
                  alt=""
                  width={48}
                  height={48}
                />
              </div>
              <p
                className="font-bold text-white"
                style={{ fontSize: "clamp(13px, 0.83vw, 16px)", lineHeight: "1.22" }}
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
