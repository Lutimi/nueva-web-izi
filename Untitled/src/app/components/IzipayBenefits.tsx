import React from "react";
import imgImage185 from "figma:asset/5dcd8f5178c74081518cb06187325974d39809fd.png";
import imgImage186 from "figma:asset/7199d50d2d36e90a961a3e81e24d832c58713e8e.png";
import imgImage187 from "figma:asset/ef2b2314f337aa9997d7c6a9931d73140a14f679.png";

const benefits = [
  {
    image: imgImage185,
    title: "Seguridad y confianza",
    description:
      "Tus pagos y los de tus clientes están protegidos con los más altos estándares de seguridad",
  },
  {
    image: imgImage186,
    title: "Soluciones multicanal",
    description:
      "Acepta pagos en línea, de manera presencial y a través de canales de autoservicio de forma sencilla.",
  },
  {
    image: imgImage187,
    title: "Integración fácil",
    description:
      "Conecta izipay a tu sitio web o sistema de manera rápida y sin complicaciones.",
  },
];

export function IzipayBenefits() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left: text */}
          <div className="lg:w-[420px] shrink-0">
            <h2 className="text-[#0B201F] text-3xl md:text-[40px] leading-tight font-bold">
              <span className="font-normal block text-[30px] md:text-[36px]">Somos tu mejor aliado</span>
              <span className="text-[48px] md:text-[64px] leading-none">para crecer</span>
              <br />
              <span className="text-[48px] md:text-[64px] leading-none">sin límites</span>
            </h2>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-8 flex-1">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,131,128,0.1),0px_10px_10px_-5px_rgba(0,131,128,0.04)] flex flex-col md:flex-row"
              >
                <div className="md:w-[260px] h-[200px] md:h-auto shrink-0 overflow-hidden bg-[#f8f8f8]">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-[#263238] text-xl font-bold mb-2">{b.title}</h3>
                  <p className="text-[#6b7280] text-base">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
