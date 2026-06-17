import Image from "next/image";

const fotos = [
  "/images-atendimentos-01.png",
  "/images-atendimentos-02.png",
  "/images-atendimentos-03.png",
  "/images-atendimentos-04.png",
  "/images-atendimentos-05.png",
  "/images-atendimentos-06.png",
];

export default function AtendimentosSection() {
  return (
    <section id="atendimentos" style={{ paddingBlock: "clamp(40px, 4.2vw, 80px)" }}>
      <div className="container-segt">
        {/* Título e texto — primeiro */}
        <div className="flex flex-col items-center gap-6 text-center mb-10">
          <h2
            className="font-bold"
            style={{ color: "#F8AD2D", fontSize: "clamp(28px, 2.5vw, 48px)", lineHeight: "1.15" }}
          >
            Atendimentos presenciais
          </h2>
          <p
            className="font-normal max-w-[1102px]"
            style={{
              color: "#000000",
              fontSize: "clamp(14px, 0.94vw, 18px)",
              lineHeight: "1.6",
            }}
          >
            Experiência personalizada para fortalecer sua empresa. Conte conosco!
          </p>
        </div>

        {/* Grid 3×2 uniforme */}
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-3" style={{ gap: "16px" }}>
            {fotos.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden relative"
                style={{ borderRadius: 12, aspectRatio: "4/3" }}
              >
                <Image
                  src={src}
                  alt={`Atendimento ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
