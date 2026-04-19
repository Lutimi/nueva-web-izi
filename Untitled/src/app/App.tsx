import React from "react";
import { IzipayNavbar } from "./components/IzipayNavbar";
import { IzipayHero } from "./components/IzipayHero";
import { IzipayProduct } from "./components/IzipayProduct";
import { IzipayPromo } from "./components/IzipayPromo";
import { IzipayPaymentMethods } from "./components/IzipayPaymentMethods";
import { IzipayBenefits } from "./components/IzipayBenefits";
import { IzipayDevices } from "./components/IzipayDevices";
import { IzipayCalculator } from "./components/IzipayCalculator";
import { IzipayTestimonials } from "./components/IzipayTestimonials";
import { IzipayBrands } from "./components/IzipayBrands";
import { IzipayCTA } from "./components/IzipayCTA";
import { IzipayFooter } from "./components/IzipayFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <IzipayNavbar />

      {/* Hero + Quick tools */}
      <IzipayHero />

      {/* Product section */}
      <IzipayProduct />

      {/* Promotional banners */}
      <IzipayPromo />

      {/* Payment methods */}
      <IzipayPaymentMethods />

      {/* Benefits section */}
      <IzipayBenefits />

      {/* Device products */}
      <IzipayDevices />

      {/* Calculator */}
      <IzipayCalculator />

      {/* Testimonials */}
      <IzipayTestimonials />

      {/* Brand logos */}
      <IzipayBrands />

      {/* CTA */}
      <IzipayCTA />

      {/* Footer */}
      <IzipayFooter />

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <div className="bg-white rounded-2xl shadow-lg p-3 max-w-[160px] text-xs text-[#373737] leading-tight hidden md:block">
          ¿Quieres una mejor oferta? Tengo una pensada para ti. Escríbeme 😉
        </div>
        <div className="relative">
          <a
            href="#"
            className="bg-white rounded-full shadow-xl flex items-center justify-center w-[74px] h-[74px] hover:scale-105 transition-transform"
            aria-label="Contactar por WhatsApp"
          >
            <svg width="38" height="38" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" fillRule="evenodd" d="M9.5 18.5654C14.5294 18.5654 18.6275 14.4052 18.6275 9.31373C18.6275 4.16013 14.5915 0 9.5 0C4.47059 0 0.372553 4.16014 0.372553 9.25164C0.372553 10.9902 0.869279 12.6667 1.67647 14.0327L0 19L5.0915 17.3856C6.39542 18.1307 7.88562 18.5654 9.5 18.5654Z" fill="#5ABC4B"/>
            </svg>
          </a>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#5ABC4B] rounded-full border-2 border-white" />
        </div>
      </div>
    </div>
  );
}
