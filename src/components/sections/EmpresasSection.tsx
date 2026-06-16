const empresas = [
  "JBS",
  "Joinvale",
  "Joinville",
  "Lunasa",
  "TUPOL",
  "Cacique",
  "MACROS",
  "BAUAUER",
];

export default function EmpresasSection() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          style={{ color: "#1A1A1A" }}
        >
          A SEGT é escolhida por diversas empresas de Santa Catarina.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {empresas.map((empresa) => (
            <div
              key={empresa}
              className="flex items-center justify-center h-20 rounded-xl border border-gray-100 px-4"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              {/* Logo placeholder */}
              <span className="text-sm font-semibold" style={{ color: "#9ca3af" }}>
                {empresa}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
