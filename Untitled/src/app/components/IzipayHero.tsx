import React, { useState, useEffect } from "react";
import imgFondoBaner2B1 from "figma:asset/954f5f5eed645386297dc0d9576958f59fc2578e.png";
import imgImagenBaner21 from "figma:asset/f2edaad2d18bca6e878d5493792f8a2eb521d432.png";
import imgPpaSlide27Home1 from "figma:asset/ca622b496afadbf358993851deee0022fb06b53b.png";
import imgFondoBanner31 from "figma:asset/2e772d797178d7e8ceef0f6b6c3de4a552360b05.png";
import imgImagenBanner31 from "figma:asset/2c739e520354e2729bb1ee7b164d6963d6735085.png";

const slides = [
  {
    id: 0,
    bg: imgFondoBaner2B1,
    phone: imgImagenBaner21,
    title1: "¿Qué esperas",
    title2: "a cobrar desde",
    title2Highlight: true,
    title3: "tu celular?",
    title3Highlight: true,
    price: null,
    badge: null,
  },
  {
    id: 1,
    bg: imgPpaSlide27Home1,
    phone: null,
    title1: "Consigue tu",
    title2: "POS izipay",
    title2Highlight: true,
    title3: "y multiplica",
    title4: "tus ventas",
    price: null,
    badge: null,
  },
  {
    id: 2,
    bg: imgFondoBanner31,
    phone: imgImagenBanner31,
    title1: "Solo con tu POS izipay",
    title1Highlight: true,
    title2: "Retira tu dinero al instante",
    title3: "incluso domingos y feriados",
    price: null,
    badge: null,
  },
];

export function IzipayHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-[#1a4a47]">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="relative h-[580px] md:h-[664px] overflow-hidden rounded-b-[48px]">
          {/* Background */}
          <img
            src={slide.bg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="pl-16 md:pl-32 lg:pl-32 pr-8 max-w-[500px]">
              <div className="flex flex-col gap-1 mb-8">
                {slide.title1 && (
                  <div className={`text-[32px] md:text-[40px] font-bold leading-[1.2] ${slide.title1Highlight ? "bg-[#ff4240] text-[#f9fafa] px-2 rounded-lg inline-block" : "text-[#f9fafa]"}`}>
                    {slide.title1}
                  </div>
                )}
                {slide.title2 && (
                  <div className={`text-[32px] md:text-[40px] font-bold leading-[1.2] ${slide.title2Highlight ? "bg-[#ff4240] text-[#f9fafa] px-2 rounded-lg inline-block" : "text-[#f9fafa]"}`}>
                    {slide.title2}
                  </div>
                )}
                {slide.title3 && (
                  <div className={`text-[32px] md:text-[40px] font-bold leading-[1.2] ${slide.title3Highlight ? "bg-[#ff4240] text-[#f9fafa] px-2 rounded-lg inline-block" : "text-[#f9fafa]"}`}>
                    {slide.title3}
                  </div>
                )}
                {slide.title4 && (
                  <div className="text-[32px] md:text-[40px] font-bold leading-[1.2] text-[#f9fafa]">
                    {slide.title4}
                  </div>
                )}
              </div>

              <button className="bg-white text-[#006462] font-bold text-base px-6 py-3 rounded-full hover:bg-[#f0f0f0] transition-colors">
                Ver más
              </button>
            </div>

            {/* Phone image */}
            {slide.phone && (
              <div className="hidden md:block absolute right-16 lg:right-24 top-8 bottom-8">
                <img
                  src={slide.phone}
                  alt=""
                  className="h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Dots */}
          <div className="absolute bottom-10 left-16 md:left-32 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-[10px] rounded-full transition-all ${
                  i === current ? "w-8 bg-white" : "w-[10px] border border-white"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center text-white opacity-70 hover:opacity-100"
            onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M10 18L2 10L10 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center text-white opacity-70 hover:opacity-100"
            onClick={() => setCurrent((current + 1) % slides.length)}
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M2 2L10 10L2 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Quick tools bar */}
        <div className="bg-[#f9fafa] border-b px-8 py-4 flex items-center gap-6 flex-wrap">
          <span className="text-black text-sm font-semibold whitespace-nowrap">Herramientas frecuentes:</span>
          {["Cobro QR", "App en celular", "QR Parlante", "Interbank negocios"].map((tool) => (
            <button
              key={tool}
              className="flex items-center gap-1 border border-[#008380] text-[#006462] text-sm font-bold px-4 py-1.5 rounded-full hover:bg-[#008380] hover:text-white transition-colors whitespace-nowrap"
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
