import React, { useState } from "react";
import img110625ImagenesPosP2Se1 from "figma:asset/9a993e1cc47f01e8e931d58be4b07fdac14809ca.png";
import imgP2LiteSeFrontalPorting3 from "figma:asset/3ab3f0cadbb96b7ca9e34750ccdf684fb1997b38.png";
import imgPos1 from "figma:asset/86b871545f243f18af00db14dee7a245f33a446b.png";
import imgAndroidP2MiniFrontal1 from "figma:asset/3e7b69498d8c681994c0fb497ac62ae83da550e9.png";

const devices = [
  {
    id: "p2se",
    name: "POS Android P2 SE",
    image: img110625ImagenesPosP2Se1,
    price: "S/ 699",
    commission: "Desde 2.29%",
    features: ["Pantalla táctil", "Impresora integrada", "Batería de larga duración"],
    tag: "Más vendido",
  },
  {
    id: "p2lite",
    name: "POS Android P2 Lite SE",
    image: imgP2LiteSeFrontalPorting3,
    price: "S/ 499",
    commission: "Desde 2.29%",
    features: ["Compacto y liviano", "Pantalla táctil", "Gran batería"],
    tag: null,
  },
  {
    id: "pos",
    name: "POS Android",
    image: imgPos1,
    price: "S/ 349",
    commission: "Desde 2.29%",
    features: ["Fácil de usar", "Conectividad 4G", "Diseño ergonómico"],
    tag: null,
  },
  {
    id: "p2mini",
    name: "POS Android P2 Mini",
    image: imgAndroidP2MiniFrontal1,
    price: "S/ 249",
    commission: "Desde 1.99%",
    features: ["Ultra compacto", "Portátil", "Para cobros rápidos"],
    tag: "Nuevo",
  },
];

export function IzipayDevices() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 px-4 md:px-10 bg-[#f9fafb]">
      <div className="max-w-[1280px] mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-[#0B201F] text-3xl md:text-[32px] leading-tight mb-2">
            <span className="font-normal">Un producto pensado</span>{" "}
            <span className="font-semibold">para cada negocio</span>
          </h2>
          <p className="text-[#636565] text-lg md:text-xl">Escoge el que más se adapte al tuyo</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="border-b border-[#efefef] flex">
            {["Ventas físicas", "Ventas digitales"].map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 text-base font-bold transition-all whitespace-nowrap ${
                  activeTab === i
                    ? "text-[#006462] border-b-2 border-[#006462]"
                    : "text-[#636565]/70"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Device cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device) => (
            <div
              key={device.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
            >
              {/* Tag */}
              {device.tag && (
                <div className="bg-[#FF4240] text-white text-xs font-bold px-3 py-1 text-center">
                  {device.tag}
                </div>
              )}
              {!device.tag && <div className="h-0" />}

              {/* Image */}
              <div className="bg-[#f8f8f8] flex items-center justify-center h-[200px] p-4">
                <img
                  src={device.image}
                  alt={device.name}
                  className="h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[#0B201F] text-base font-bold mb-1">{device.name}</h3>
                <p className="text-[#008380] text-sm font-semibold mb-3">{device.commission}</p>

                <ul className="space-y-1 mb-4">
                  {device.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#6b7280] text-sm">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M16.667 5L8.333 13.333L3.667 8.667" stroke="#00A09D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-[#0B201F] text-xl font-bold mb-3">{device.price}</div>
                  <button className="w-full bg-[#008380] text-white text-sm font-bold py-2.5 rounded-full hover:bg-[#006462] transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
