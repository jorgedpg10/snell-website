import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import SnellDevLogo from "../assets/snell-logo-completo-amarillo.png";
import SnellSmallLogo from "../assets/snell-logo-small.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#151515] text-white px-6 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Mobile Logo */}
        <img
          src={SnellSmallLogo}
          alt="logo pequeño"
          className="w-12 h-auto md:hidden"
        />

        {/* Desktop Logo */}
        <img 
          src={SnellDevLogo} 
          alt="logo" 
          className="hidden md:block md:w-32 lg:w-40 h-auto"
        />

        {/* Desktop button */}
        <a
          href="#contacto"
          className="hidden md:block bg-green-500 hover:bg-green-600 transition text-white py-1.5 px-4 rounded-lg text-sm"
        >
          Contáctanos
        </a>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 space-y-2 bg-gray-700 p-3 rounded-lg">
          <a
            href="#contacto"
            className="block bg-green-500 hover:bg-green-600 transition text-white py-2 px-4 rounded-lg text-center"
          >
            Contáctanos
          </a>
        </div>
      )}
    </nav>
  );
}
