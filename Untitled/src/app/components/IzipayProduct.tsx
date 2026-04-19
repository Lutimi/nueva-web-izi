import React, { useState } from "react";
import imgImg from "figma:asset/e009227ec471140f92bc8b078ac8aef88cedaacf.png";
import imgImage184 from "figma:asset/deecb82a5cbab78bf2cdca89b92bda378d42cc63.png";

const tabs = [
  {
    id: "restaurantes",
    label: "Restaurantes y bares",
    image: imgImg,
    title: "Restaurantes y Bares",
    subtitle: "Tecnología diseñada para todos los tipos de negocio de comida.",
    features: [
      { title: "Acepta todos los tipos de pago", desc: "Acepta pagos en línea, sin conexión, desde la mesa o con código QR. Además, respalda las fuentes de ingresos como el servicio de catering con nuestra función de facturación." },
      { title: "Administra tus pedidos en un solo lugar", desc: null },
      { title: "Impulsa tu negocio al siguiente nivel", desc: null },
    ],
  },
  {
    id: "tiendas",
    label: "Tiendas y ventas",
    image: imgImage184,
    title: "Tiendas y Ventas",
    subtitle: "Soluciones completas para potenciar tu tienda.",
    features: [
      { title: "Acepta todos los tipos de pago", desc: "Acepta pagos en línea y presenciales de forma sencilla y segura para tu tienda." },
      { title: "Control de inventario integrado", desc: null },
      { title: "Reportes de ventas en tiempo real", desc: null },
    ],
  },
  {
    id: "salud",
    label: "Salud, belleza y bienestar",
    image: imgImg,
    title: "Salud, Belleza y Bienestar",
    subtitle: "Tecnología adaptada para spas, clínicas y centros de bienestar.",
    features: [
      { title: "Agenda citas y pagos en un solo lugar", desc: "Simplifica tu gestión de clientes con pagos integrados." },
      { title: "Facturación electrónica", desc: null },
      { title: "Pagos sin contacto", desc: null },
    ],
  },
  {
    id: "educacion",
    label: "Educación viajes y entretenimiento",
    image: imgImage184,
    title: "Educación, Viajes y Entretenimiento",
    subtitle: "Cobra mensualidades, reservas y entradas fácilmente.",
    features: [
      { title: "Pagos recurrentes automatizados", desc: "Automatiza los cobros de mensualidades y suscripciones." },
      { title: "Venta de boletos en línea", desc: null },
      { title: "Reportes detallados", desc: null },
    ],
  },
  {
    id: "servicios",
    label: "Servicios profesionales",
    image: imgImg,
    title: "Servicios Profesionales",
    subtitle: "Para contadores, abogados, consultores y más.",
    features: [
      { title: "Facturación electrónica", desc: "Genera facturas y boletas de forma automática." },
      { title: "Cobro por link de pago", desc: null },
      { title: "Gestión de clientes", desc: null },
    ],
  },
];

export function IzipayProduct() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFeature, setOpenFeature] = useState(0);

  const currentTab = tabs[activeTab];

  return (
    <section className="bg-[#254d4a] py-16 px-4 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl md:text-[32px] leading-tight mb-2">
            <span className="font-normal">Haz que tu negocio</span>{" "}
            <span className="font-semibold">siga creciendo</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl">Productos diseñados para todos los sectores</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-2 flex flex-wrap gap-1 max-w-full justify-center">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === i
                    ? "bg-[#008380] text-white"
                    : "text-[#006462] hover:bg-[#f0faf9]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[32px] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left: details */}
            <div className="flex-1 p-8 md:p-12">
              <h3 className="text-[#0B201F] text-2xl font-semibold mb-2">{currentTab.title}</h3>
              <p className="text-black text-center text-base mb-6">{currentTab.subtitle}</p>

              {/* Feature accordion */}
              <div className="space-y-4">
                {currentTab.features.map((feature, i) => (
                  <div key={i} className="border-b border-[#d6dada] pb-4">
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() => setOpenFeature(openFeature === i ? -1 : i)}
                    >
                      <span className="text-[#636565] text-lg font-semibold">{feature.title}</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`shrink-0 transition-transform ${openFeature === i ? "rotate-180" : ""}`}
                      >
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#0B201F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {openFeature === i && feature.desc && (
                      <p className="text-black text-sm mt-2">{feature.desc}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Recommended products */}
              <div className="mt-6 bg-[#f4fdfb] rounded-2xl p-4">
                <p className="text-black text-base font-semibold mb-3 text-center">Te recomendamos:</p>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {["P2 SE", "P2 Lite SE", "P2 Mini", "POS App"].map((prod) => (
                    <div
                      key={prod}
                      className="bg-white rounded-lg border border-gray-100 px-3 py-2 shrink-0 text-xs font-semibold text-[#006462] text-center min-w-[70px]"
                    >
                      {prod}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex justify-between mt-4 px-2">
                <button
                  className="text-[#008380]"
                  onClick={() => setActiveTab((activeTab - 1 + tabs.length) % tabs.length)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="#008380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  className="text-[#008380]"
                  onClick={() => setActiveTab((activeTab + 1) % tabs.length)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#008380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right: image */}
            <div className="hidden md:block flex-1 relative overflow-hidden">
              <img
                src={currentTab.image}
                alt={currentTab.title}
                className="absolute inset-0 w-full h-full object-cover rounded-r-[32px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
