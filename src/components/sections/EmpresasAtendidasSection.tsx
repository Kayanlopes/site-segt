"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Ala",               src: "/logos%20empresa/Ala.svg" },
  { name: "Aye",               src: "/logos%20empresa/aye.svg" },
  { name: "Calcebem",          src: "/logos%20empresa/calcebem.svg" },
  { name: "CDL Canelinha",     src: "/logos%20empresa/cdlcanelinha.svg" },
  { name: "CT",                src: "/logos%20empresa/ct-logo.svg" },
  { name: "Divalentini",       src: "/logos%20empresa/Divalentitni.svg" },
  { name: "Embalatrento",      src: "/logos%20empresa/embalatrento.svg" },
  { name: "Improviso",         src: "/logos%20empresa/immproviso.svg" },
  { name: "Inpol",             src: "/logos%20empresa/Inpol.svg" },
  { name: "KS Solados",        src: "/logos%20empresa/Kssolados.svg" },
  { name: "Consulmed",         src: "/logos%20empresa/Logotipo-Consulmed-white.png" },
  { name: "WS Fibra",          src: "/logos%20empresa/logo-ws-fibra.svg" },
  { name: "Macris",            src: "/logos%20empresa/macris.svg" },
  { name: "Macris Atacadista", src: "/logos%20empresa/macrisatacadista.svg" },
  { name: "Mega Motos",        src: "/logos%20empresa/Megamotos.svg" },
  { name: "Paro",              src: "/logos%20empresa/paro.svg" },
  { name: "Passa Passo",       src: "/logos%20empresa/passapasso.png" },
  { name: "Santa Paulina",     src: "/logos%20empresa/Santapaulina.svg" },
  { name: "Teqbio",            src: "/logos%20empresa/teqbio.svg" },
  { name: "Trento",            src: "/logos%20empresa/trento.svg" },
  { name: "Tupi Guarani",      src: "/logos%20empresa/tupiguarani.svg" },
];

// Duplica para loop seamless
const duplicated = [...logos, ...logos];

export default function EmpresasAtendidasSection() {
  return (
    <section
      id="empresas"
      className="w-full overflow-hidden"
      style={{
        backgroundColor: "#008743",
        paddingBlock: "clamp(40px, 4.2vw, 80px)",
      }}
    >
      <div
        className="max-w-[1920px] mx-auto"
        style={{ paddingInline: "clamp(24px, 8.6vw, 165px)" }}
      >
        <h2
          className="font-normal text-white text-center"
          style={{ fontSize: "clamp(24px, 2.1vw, 40px)", lineHeight: "1.2" }}
        >
          A SEGT é escolhida por diversas empresas de Santa Catarina.
        </h2>

        <p
          className="font-normal text-white text-center mt-6"
          style={{ fontSize: "clamp(14px, 0.94vw, 18px)" }}
        >
          Algumas empresas atendidas:
        </p>
      </div>

      {/* Marquee — fora do container para ir full-width */}
      <div className="overflow-hidden mt-10">
        <motion.div
          className="flex"
          style={{ gap: 48, width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {duplicated.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: 64, width: 148 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                style={{ maxHeight: 44, maxWidth: 120, objectFit: "contain" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
