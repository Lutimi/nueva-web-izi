import React, { useState } from "react";
import imgEllipse271 from "figma:asset/2d1c8e74517c2f941c19a4d539f825cb98841d2e.png";
import imgEllipse272 from "figma:asset/3a8770f2ffb25e4e9b5ad0320305252062e647f6.png";
import imgEllipse273 from "figma:asset/ca1aaff2ed3741f6ff37e613932e4bbfc920efeb.png";
import imgEllipse274 from "figma:asset/4d58ff3db98db84e8d0146e3ceeb49f1caed0af2.png";

const testimonials = [
  {
    id: 0,
    name: "Dr. Carla Manrique",
    role: "Médico independiente",
    avatar: imgEllipse271,
    quote: "Gracias a izipay pude modernizar mi consultorio. Ahora mis pacientes pagan con tarjeta o celular sin complicaciones. ¡Increíble!",
    color: "from-[#FFBFBC] via-[#F4422E] to-[#BA3025]",
  },
  {
    id: 1,
    name: "Carlos Manrique",
    role: "Product designer",
    avatar: imgEllipse272,
    quote: "El POS izipay transformó mi negocio. Los pagos son rápidos, seguros y el depósito llega al instante. No cambiaría nada.",
    color: "from-[#B9EBED] via-[#007F80] to-[#003634]",
  },
  {
    id: 2,
    name: "Claudia Manrique",
    role: "Arquitecta",
    avatar: imgEllipse274,
    quote: "Empezar a aceptar pagos digitales fue la mejor decisión. Mis clientes están más satisfechos y mis ventas aumentaron.",
    color: "from-[#FFBFBC] via-[#FF4240] to-[#C9302E]",
  },
  {
    id: 3,
    name: "Marcos Jimenez",
    role: "CEO tienda online",
    avatar: imgEllipse273,
    quote: "La integración con mi tienda online fue muy sencilla. El soporte del equipo izipay es excelente, siempre disponible.",
    color: "from-[#B9EBED] via-[#007F80] to-[#003634]",
  },
];

export function IzipayTestimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 3;

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + visible);

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-[#0B201F] text-3xl md:text-[32px] leading-tight">
              <span className="font-normal">Una nueva era</span>{" "}
              <span className="font-semibold">para</span>
              <br />
              <span className="font-semibold">los pagos digitales</span>
            </h2>
            <p className="text-[#636565] text-base mt-2">
              Miles de profesionales, fundadores y operadores confían en nosotros a diario.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
              disabled={startIndex === 0}
              className="w-14 h-14 rounded-full border-2 border-[#008280] flex items-center justify-center text-[#008280] disabled:opacity-30 hover:bg-[#008280] hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 56 56" fill="none">
                <path d="M32 18L22 28L32 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setStartIndex(Math.min(testimonials.length - visible, startIndex + 1))}
              disabled={startIndex >= testimonials.length - visible}
              className="w-14 h-14 rounded-full border-2 border-[#008280] flex items-center justify-center text-[#008280] disabled:opacity-30 hover:bg-[#008280] hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 56 56" fill="none">
                <path d="M24 18L34 28L24 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t) => (
            <div
              key={t.id}
              className={`rounded-[24px] p-8 bg-gradient-to-br ${t.color} relative overflow-hidden`}
              style={{ minHeight: 304 }}
            >
              {/* Quote mark */}
              <div className="text-white opacity-80 text-5xl font-serif leading-none mb-4">"</div>

              {/* Quote */}
              <p className="text-white text-base leading-relaxed mb-8">
                {t.quote}
              </p>

              {/* Person */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-white text-base font-semibold">{t.name}</p>
                  <p className="text-white/70 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="bg-[#008380] text-white font-bold text-base px-8 py-3 rounded-full hover:bg-[#006462] transition-colors flex items-center gap-2 mx-auto">
            Déjanos tu opinión
            <svg width="8" height="14" viewBox="0 0 9 16" fill="none">
              <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
