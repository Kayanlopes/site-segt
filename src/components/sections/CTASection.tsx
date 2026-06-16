export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-24 px-6 md:px-16 lg:px-24 flex items-center justify-center"
      style={{ backgroundColor: "#006B43" }}
    >
      {/* Linhas diagonais decorativas */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 22 }).map((_, i) => (
          <line
            key={i}
            x1={i * 80 - 200}
            y1="0"
            x2={i * 80 + 200}
            y2="320"
            stroke="#F7AE2E"
            strokeWidth="1"
            strokeOpacity="0.15"
          />
        ))}
      </svg>

      <div className="relative z-10 text-center flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
          Entre em contato hoje!
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl">
          Fale com nossa equipe e descubra como podemos tornar sua empresa mais segura.
        </p>
        <a
          href="#"
          className="inline-block px-10 py-4 rounded-full font-bold text-base transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#F7AE2E", color: "#ffffff" }}
        >
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
