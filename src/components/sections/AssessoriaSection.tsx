import Image from "next/image";

const features = [
  { icon: "/stars-icon.svg", texto: "Planos exclusivos",          bg: "#F8AD2D" },
  { icon: "/check-icon.svg", texto: "Atendimento personalizado",  bg: "#F8AD2D" },
];

export default function AssessoriaSection() {
  return (
    <section id="assessoria" style={{ paddingBlock: "clamp(40px, 4.2vw, 80px)" }}>
      <div className="container-segt">
        <div
          className="flex flex-col md:flex-row items-start"
          style={{ gap: "clamp(24px, 4.2vw, 80px)" }}
        >
          {/* Foto real */}
          <div
            className="w-full md:w-[45%] flex-shrink-0 rounded-2xl overflow-hidden relative"
            style={{ aspectRatio: "689/507" }}
          >
            <Image
              src="/assesoria-image.png"
              alt="Assessoria SEGT"
              fill
              className="object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-5 md:w-[55%]">
            {/* Tab label */}
            <div>
              <span
                className="font-bold"
                style={{ color: "#008743", fontSize: "clamp(16px, 1vw, 20px)" }}
              >
                Assessoria
              </span>
              <div
                className="mt-2 h-[4px] rounded-full"
                style={{ width: 161, backgroundColor: "#B3DBC7" }}
              />
            </div>

            {/* Headline */}
            <h2
              className="font-bold"
              style={{
                color: "#F8AD2D",
                fontSize: "clamp(24px, 1.9vw, 36px)",
                lineHeight: "1.2",
              }}
            >
              Planejada e adaptada as suas necessidades:
            </h2>

            {/* Parágrafo */}
            <p
              className="font-normal"
              style={{
                color: "#1A1A1A",
                fontSize: "clamp(14px, 0.94vw, 18px)",
                lineHeight: "1.6",
              }}
            >
              Nossa assessoria é cuidadosamente planejada e adaptada às suas necessidades. Oferecemos visitas e atendimento na empresa semanal, quinzenal ou mensal, com carga horária flexível. Nossos abrangentes planos incluem treinamentos e uma variedade de documentos para atender exatamente ao que você precisa.
            </p>

            {/* Features com ícone em círculo colorido */}
            <div className="flex flex-col gap-3 mt-2">
              {features.map((f) => (
                <div key={f.texto} className="flex items-center gap-3">
                  <div
                    className="flex-shrink-0 rounded-full flex items-center justify-center"
                    style={{ width: 40, height: 40, backgroundColor: f.bg }}
                  >
                    <Image src={f.icon} alt="" width={20} height={20} />
                  </div>
                  <span
                    className="font-normal"
                    style={{
                      color: "#1A1A1A",
                      fontSize: "clamp(14px, 0.94vw, 18px)",
                    }}
                  >
                    {f.texto}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
