import React from "react";

export function IzipayCTA() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #008280 0%, #008280 100%)",
        }}
      />
      {/* Decorative ellipse */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{ background: "white", filter: "blur(120px)", transform: "translate(-30%, 30%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[768px] mx-auto text-center">
        <p className="text-white text-base md:text-lg font-semibold leading-relaxed mb-4">
          ¡Cambiamos lo que no tiene sentido para que comprar y vender sea más fácil!
        </p>
        <h2 className="text-white text-3xl md:text-[40px] font-bold leading-tight mb-6">
          Empieza hoy a potenciar tu negocio
        </h2>
        <div className="inline-flex items-center bg-[#faef31] text-[#006462] font-semibold text-base md:text-lg px-6 py-2 rounded-xl mb-10">
          Con izipay, cobrar es fácil, rápido y seguro
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#008380] font-bold text-base px-8 py-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center">
            Comprar
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M2.5 2.5H4.17L7.5 12.5H15M7.5 15C7.5 15.5523 7.05228 16 6.5 16C5.94772 16 5.5 15.5523 5.5 15C5.5 14.4477 5.94772 14 6.5 14C7.05228 14 7.5 14.4477 7.5 15ZM15 15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15C13 14.4477 13.4477 14 14 14C14.5523 14 15 14.4477 15 15ZM5.5 9.5H15.5L17.5 4.5H4.5" stroke="#008380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="border border-white text-white font-bold text-base px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
