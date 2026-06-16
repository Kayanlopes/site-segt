import Image from "next/image";

export default function BannerSection() {
  return (
    <section
      className="relative w-full min-h-56 md:min-h-72 flex items-center justify-end overflow-hidden"
      style={{ backgroundColor: "#006B43" }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 288"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={i}
            x1={i * 90 - 150}
            y1="0"
            x2={i * 90 + 180}
            y2="288"
            stroke="#F7AE2E"
            strokeWidth="1"
            strokeOpacity="0.18"
          />
        ))}
      </svg>

      <div className="relative z-10 w-1/2 flex justify-end">
        <Image
          src="/images/capacete.png"
          alt="Capacete de segurança"
          width={480}
          height={480}
          className="object-contain"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
    </section>
  );
}
