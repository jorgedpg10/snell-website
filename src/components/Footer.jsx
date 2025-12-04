export default function Footer() {
  return (
    <footer className="bg-[#353535] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Columna 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Snell Dev</h3>
          <p className="text-gray-300">
            Excelencia, profesionalismo y compromiso para ayudarte a resolver
            los retos más complejos.
          </p>
        </div>

        {/* Columna 2
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#FCA311]">Inicio</a></li>
            <li><a href="#" className="hover:text-[#FCA311]">Servicios</a></li>
            <li><a href="#" className="hover:text-[#FCA311]">Nosotros</a></li>
            <li><a href="#" className="hover:text-[#FCA311]">Contacto</a></li>
          </ul>
        </div> */}

        {/* Columna 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contacto</h3>
          <ul className="text-gray-300 space-y-2">
            <li>✉ contacto@snell.dev</li>
            <li>📞 +593 991 273 373</li>
            <li>📍 Guayaquil, Ecuador</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/20 mt-10 pt-5 text-center text-gray-400">
        © {new Date().getFullYear()} Snell Dev — Todos los derechos reservados.
      </div>
    </footer>
  );
}
