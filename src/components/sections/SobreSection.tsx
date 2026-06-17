import Image from "next/image";

export default function SobreSection() {
  return (
    <section id="sobre" style={{ paddingBlock: "clamp(40px, 4.2vw, 80px)" }}>
      <div className="container-segt">
        <div
          className="flex flex-col md:flex-row items-start"
          style={{ gap: "clamp(24px, 4.2vw, 80px)" }}
        >
          {/* Foto real */}
          <div
            className="w-full md:w-1/2 flex-shrink-0 rounded-2xl overflow-hidden relative"
            style={{ aspectRatio: "705/632" }}
          >
            <Image
              src="/sobre-image.png"
              alt="Sobre a SEGT"
              fill
              className="object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col gap-[45px] md:w-1/2">
            <h2
              className="font-bold"
              style={{
                color: "#F8AD2D",
                fontSize: "clamp(28px, 2.5vw, 48px)",
                lineHeight: "1.15",
              }}
            >
              Sobre a empresa:
            </h2>

            <p
              className="font-normal"
              style={{
                color: "#1A1A1A",
                fontSize: "clamp(14px, 0.94vw, 18px)",
                lineHeight: "1.6",
                textAlign: "justify",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              Com mais de uma década de experiência, estamos comprometidos em fornecer soluções de vanguarda para atender às necessidades em constante evolução de nossos clientes. Nosso time de especialistas altamente qualificados trabalha incansavelmente para entregar resultados excepcionais, impulsionando o sucesso dos nossos parceiros de negócios. Com uma abordagem centrada no cliente e uma paixão inabalável pela qualidade, construímos uma reputação sólida e duradoura no mercado. Junte-se a nós e experimente a diferença que podemos fazer juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
