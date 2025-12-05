import { useState } from "react";
import { Menu, X } from "lucide-react";

import SnellSmallLogo from "../assets/snell-logo-small.png";
import Snell from "../assets/snell-logo.png";

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#353535] text-white px-6 py-0 md:py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Mobile Logo */}
        <img
          src={SnellSmallLogo}
          alt="logo pequeño"
          className="w-16 h-auto md:hidden"
        />

        {/* Desktop Logo */}
        <img
          src={Snell}
          alt="logo"
          className="hidden md:block md:w-32 lg:w-40 h-auto"
        />

        {/* Desktop button */}
        <button
          onClick={onContactClick}
          className="hidden md:block bg-[#FCA311] hover:bg-amber-400 transition text-[#353535] py-1.5 px-4 rounded-lg text-sm"
        >
          Contáctanos
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 space-y-2 bg-gray-700 p-3 rounded-lg">
          <button
            onClick={() => {
              setOpen(false);
              onContactClick();
            }}
            className="block w-full bg-[#FCA311] hover:bg-amber-400 transition text-white py-2 px-4 rounded-lg text-center"
          >
            Contáctanos
          </button>
        </div>
      )}
    </nav>
  );
}
