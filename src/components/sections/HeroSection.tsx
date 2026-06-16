import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Coluna esquerda */}
      <div className="flex flex-col justify-center gap-8 bg-white px-10 py-16 md:w-1/2 md:px-16 lg:px-24">
        <Image
          src="/logo/logo-segt.svg"
          alt="Logo SEGT"
          width={180}
          height={60}
          priority
        />

        <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "#F7AE2E" }}>
          Construindo Ambientes de Trabalho Seguros.
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-black max-w-md">
          Assessoria especializada para ajudar as empresas a desenvolver programas eficazes de prevenção de acidentes.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="flex items-center justify-center w-11 h-11 rounded-full"
            style={{ backgroundColor: "#F7AE2E" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex items-center justify-center w-11 h-11 rounded-full"
            style={{ backgroundColor: "#F7AE2E" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
            </svg>
          </a>
        </div>
      </div>

      {/* Coluna direita */}
      <div
        className="relative flex items-center justify-end overflow-hidden md:w-1/2 min-h-64 md:min-h-0"
        style={{ backgroundColor: "#006B43" }}
      >
        <Image
          src="/images/capacete.png"
          alt="Capacete de segurança"
          width={600}
          height={600}
          className="object-contain"
          style={{ mixBlendMode: "multiply" }}
          priority
        />
      </div>
    </section>
  );
}
