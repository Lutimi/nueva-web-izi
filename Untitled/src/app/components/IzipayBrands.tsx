import React from "react";
import imgCencosudLogoSvg1 from "figma:asset/b616bdc2de737c3748b90a06930af9daedea3358.png";
import imgLogoIshopCo800V11 from "figma:asset/7f0d21fef22131e6086055e56cf88c8cfa4c6fa0.png";
import imgCentroComercialPlazaSanMiguel951 from "figma:asset/1475d74194a90ae4b99532552499d82e8f63e411.png";
import imgInterbankLogoSvg1 from "figma:asset/d38997c2e991625f8dda9b92ea7354a8e52ea342.png";
import imgSupermercadosWongLogoPngSeeklogo2342861 from "figma:asset/55f670887e6c31b834fd1355841950dbe8d95c29.png";

const brands = [
  { src: imgCencosudLogoSvg1, alt: "Cencosud", width: 124 },
  { src: imgInterbankLogoSvg1, alt: "Interbank", width: 168 },
  { src: imgLogoIshopCo800V11, alt: "iShop", width: 124 },
  { src: imgCentroComercialPlazaSanMiguel951, alt: "Plaza San Miguel", width: 100 },
  { src: imgSupermercadosWongLogoPngSeeklogo2342861, alt: "Wong", width: 86 },
  { src: imgCencosudLogoSvg1, alt: "Cencosud", width: 124 },
];

export function IzipayBrands() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#0B201F] text-2xl md:text-[32px] font-bold mb-2">
            Grandes marcas, un mismo aliado
          </h2>
          <p className="text-[#636565] text-lg md:text-xl">
            Únete a los más de 700,000 comercios que transformaron sus ventas con izipay.
          </p>
        </div>

        {/* Logos marquee */}
        <div className="overflow-hidden">
          <div className="flex items-center gap-16 px-8 animate-none">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-[88px] shrink-0"
                style={{ minWidth: brand.width }}
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  style={{ width: brand.width, maxHeight: 65 }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
