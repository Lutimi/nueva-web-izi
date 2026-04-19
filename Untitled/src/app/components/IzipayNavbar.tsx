import React, { useState } from "react";

export function IzipayNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <svg width="106" height="35" viewBox="0 0 106 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="26" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="#E64442">izi</text>
            <text x="36" y="26" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="#008380">pay</text>
          </svg>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {["Negocios", "Productos", "Servicios", "Desarrolladores", "Nosotros", "Ayuda"].map((item) => (
            <a key={item} href="#" className="text-[#263238] text-sm font-semibold hover:text-[#008380] transition-colors whitespace-nowrap">
              {item}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#" className="text-[#008380] text-sm font-semibold px-4 py-2 rounded-full border border-[#008380] hover:bg-[#008380] hover:text-white transition-colors whitespace-nowrap">
            Iniciar sesión
          </a>
          <a href="#" className="bg-[#008380] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#006462] transition-colors whitespace-nowrap">
            Afíliate gratis
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-[#263238]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4">
          {["Negocios", "Productos", "Servicios", "Desarrolladores", "Nosotros", "Ayuda"].map((item) => (
            <a key={item} href="#" className="block text-[#263238] text-sm font-semibold py-1 hover:text-[#008380]">
              {item}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="#" className="text-[#008380] text-sm font-semibold px-4 py-2 rounded-full border border-[#008380]">
              Iniciar sesión
            </a>
            <a href="#" className="bg-[#008380] text-white text-sm font-semibold px-4 py-2 rounded-full">
              Afíliate gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
