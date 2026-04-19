import React from "react";

const footerColumns = [
  {
    title: "Sobre izipay",
    links: ["Somos izipay", "Nuestro impacto", "Postula", "Intranet"],
  },
  {
    title: "Orientación",
    links: ["Preguntas frecuentes", "Códigos de transacciones denegadas"],
  },
  {
    title: "Documentación",
    links: [
      "Términos y condiciones",
      "Tarifario",
      "Política de privacidad",
      "Código de ética",
      "Otros documentos",
    ],
  },
  {
    title: "Contáctanos",
    contact: true,
  },
];

export function IzipayFooter() {
  return (
    <footer className="rounded-tl-[24px] rounded-tr-[24px] overflow-hidden">
      {/* Top part - light green */}
      <div className="bg-[#ccf5f4] py-12 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[#00413f] text-lg font-bold mb-3">{col.title}</h4>
                {col.links && (
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-[#00413f] text-sm font-semibold hover:underline block py-1">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {col.contact && (
                  <div className="space-y-3">
                    <p className="text-[#00413f] text-base font-semibold leading-relaxed">
                      De lunes a domingo
                      <br />
                      de 8 a.m a 8 p.m.
                    </p>
                    <a
                      href="tel:998222333"
                      className="flex items-center gap-2 border border-[#00413f] rounded-full px-3 py-1.5 w-fit hover:bg-[#00413f] hover:text-white transition-colors group"
                    >
                      <svg width="20" height="20" viewBox="0 0 19 19" fill="none" className="text-[#00413f] group-hover:text-white">
                        <path clipRule="evenodd" fillRule="evenodd" d="M9.5 18.5654C14.5294 18.5654 18.6275 14.4052 18.6275 9.31373C18.6275 4.16013 14.5915 0 9.5 0C4.47059 0 0.372553 4.16014 0.372553 9.25164C0.372553 10.9902 0.869279 12.6667 1.67647 14.0327L0 19L5.0915 17.3856C6.39542 18.1307 7.88562 18.5654 9.5 18.5654Z" fill="currentColor"/>
                      </svg>
                      <span className="text-[#00413f] text-base font-semibold group-hover:text-white">998 222 333</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom part - dark */}
      <div className="bg-[#263238] py-6 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center">
              <svg width="106" height="35" viewBox="0 0 106 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="26" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="white">izi</text>
                <text x="36" y="26" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="white">pay</text>
              </svg>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap items-center gap-6 justify-center">
              <div className="flex items-center gap-2 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5V4.5C4 3.4 4.9 2.5 6 2.5H20V19.5C20 20.6 19.1 21.5 18 21.5H6C4.9 21.5 4 20.6 4 19.5ZM18 21.5C19.1 21.5 20 20.6 20 19.5V17.5H6C4.9 17.5 4 18.4 4 19.5C4 20.6 4.9 21.5 6 21.5H18Z" fill="white"/>
                </svg>
                <span className="text-white text-base font-semibold">Libro de reclamaciones</span>
              </div>
              <div className="w-[1px] h-10 bg-white/40 hidden md:block" />
              <div>
                <p className="text-white text-base font-semibold">Canal ético</p>
                <p className="text-white/70 text-sm">Conoce cómo realizar una denuncia</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {["facebook", "instagram", "linkedin", "youtube"].map((social) => (
                <a key={social} href="#" className="w-6 h-6 flex items-center justify-center opacity-80 hover:opacity-100">
                  <div className="w-5 h-5 bg-white rounded-sm opacity-80" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
