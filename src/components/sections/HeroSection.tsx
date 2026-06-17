import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row w-full min-h-screen">

      {/* ── Coluna esquerda (conteúdo) ───────────────────────── */}
      <div
        className="relative flex flex-col justify-center items-start overflow-hidden
          w-full md:w-[68.4%]
          px-6 py-16
          md:pl-[165px] md:pr-[80px] md:py-[80px]"
      >
        {/* Bloco de conteúdo — 32px gap entre itens */}
        <div className="flex flex-col gap-8 items-start">
          {/* Logo com margem extra abaixo para separar do título */}
          <Image
            src="/logo/logo-segt.svg"
            alt="Logo SEGT"
            width={240}
            height={80}
            className="block h-[80px] w-auto mb-2"
            priority
          />

          {/* Headline bicolor */}
          <h1
            className="font-bold"
            style={{
              fontSize: "clamp(32px, 3.7vw, 72px)",
              lineHeight: "1.05",
            }}
          >
            <span style={{ color: "#008743", display: "block" }}>
              Construindo Ambientes de
            </span>
            <span style={{ color: "#F8AD2D", display: "block" }}>
              Trabalho Seguros.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            className="font-normal max-w-[824px]"
            style={{
              color: "#1A1A1A",
              fontSize: "clamp(15px, 1vw, 18px)",
              lineHeight: "1.5",
            }}
          >
            Assessoria especializada para ajudar as empresas a desenvolver
            programas eficazes de prevenção de acidentes.
          </p>

          {/* Ícones sociais */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 48, height: 48, backgroundColor: "#F8AD2D" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 48, height: 48, backgroundColor: "#F8AD2D" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Coluna direita (capacete) ────────────────────────── */}
      {/* background-image evita o problema de height:100% não herdar de min-height */}
      <div
        className="flex-shrink-0 overflow-hidden
          w-full h-[50vw]
          md:w-[31.6%] md:h-auto md:self-stretch"
        style={{
          backgroundColor: "#008743",
          backgroundImage: "url('/Construction%20Helmet.B04%201.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />

    </section>
  );
}
