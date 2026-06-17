"use client";

import Image from "next/image";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Treinamentos", href: "#treinamentos" },
  { label: "Assessoria", href: "#assessoria" },
  { label: "Empresas", href: "#empresas" },
  { label: "Atendimentos", href: "#atendimentos" },
];

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.48 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.06 6.06l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function FooterSection() {
  return (
    <footer
      style={{
        backgroundColor: "#006A36",
        paddingTop: 80,
        paddingBottom: 32,
        paddingLeft: "clamp(24px, 8.6vw, 165px)",
        paddingRight: "clamp(24px, 8.6vw, 165px)",
      }}
    >
      {/* Grid de 3 colunas */}
      <div className="grid grid-cols-1 gap-12 md:gap-0 md:[grid-template-columns:40%_30%_30%]">

        {/* Coluna 1 — Logo + descrição */}
        <div>
          <Image
            src="/logo/logo-segt.svg"
            alt="Logo SEGT"
            width={240}
            height={80}
            className="block h-[80px] w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p
            className="font-normal"
            style={{
              marginTop: 24,
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 420,
            }}
          >
            Construindo ambientes de trabalho seguros através de assessoria
            especializada e treinamentos em segurança. Junte-se a nós e
            experimente a diferença que podemos fazer juntos.
          </p>
        </div>

        {/* Coluna 2 — Links rápidos */}
        <div className="md:pl-8">
          <h3 className="font-bold" style={{ fontSize: 18, color: "#ffffff" }}>
            Links rápidos
          </h3>
          <nav className="flex flex-col" style={{ marginTop: 24, gap: 16 }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-normal"
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.75)",
                  transition: "opacity 200ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "")}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Coluna 3 — Contato */}
        <div className="md:pl-8">
          <h3 className="font-bold" style={{ fontSize: 18, color: "#ffffff" }}>
            Contato
          </h3>
          <div className="flex flex-col" style={{ marginTop: 24, gap: 16 }}>
            {/* Email */}
            <a
              href="mailto:segt.assessoria@hotmail.com"
              className="flex items-center font-normal"
              style={{
                gap: 12,
                fontSize: 16,
                color: "rgba(255,255,255,0.75)",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              segt.assessoria@hotmail.com
            </a>

            {/* Telefone 1 */}
            <a
              href="https://wa.me/5548996094054"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-normal"
              style={{
                gap: 12,
                fontSize: 16,
                color: "rgba(255,255,255,0.75)",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "")}
            >
              <PhoneIcon />
              (48) 99609-4054
            </a>

            {/* Telefone 2 */}
            <a
              href="https://wa.me/5548988190033"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-normal"
              style={{
                gap: 12,
                fontSize: 16,
                color: "rgba(255,255,255,0.75)",
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "")}
            >
              <PhoneIcon />
              (48) 98819-0033
            </a>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <div style={{ marginTop: 64, borderTop: "1px solid rgba(255,255,255,0.15)" }} />

      {/* Rodapé inferior */}
      <div
        className="flex flex-col md:flex-row items-center gap-6 md:gap-0"
        style={{ paddingTop: 32, justifyContent: "space-between" }}
      >
        <p
          className="font-normal text-center md:text-left"
          style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}
        >
          © 2025 SEGT. Todos os direitos reservados.
        </p>

        <div className="flex items-center" style={{ gap: 16 }}>
          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            style={{ opacity: 1, transition: "opacity 200ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            style={{ opacity: 1, transition: "opacity 200ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
