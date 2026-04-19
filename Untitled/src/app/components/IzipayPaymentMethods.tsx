import React from "react";
import imgPlin from "figma:asset/826b55fa0182583b0dd844ce6ca965fb51fc8875.png";
import imgImage182 from "figma:asset/1c0cc5cfd07a29418de5e9b837adaa726d8060e4.png";
import imgApplePayMarkRgb0416191 from "figma:asset/005cb7985aa7daff04cbe69e8d25a63c39319496.png";
import imgGPayAcceptanceMarkFullColor1 from "figma:asset/4c09b2a0ca93a761e4f6a99300f13255919fcf45.png";

export function IzipayPaymentMethods() {
  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #0D3837 0%, #008280 50%, #3DD2CE 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-center text-2xl md:text-[32px] font-semibold text-white mb-10">
          <span className="font-normal">Aceptamos todos</span>{" "}
          <span className="font-bold">los medios de pago</span>
        </h2>

        {/* Payment methods grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {/* Visa */}
          <div className="bg-white/20 rounded-[24px] w-[96px] h-[96px] flex items-center justify-center">
            <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="20" fontFamily="sans-serif" fontSize="26" fontWeight="900" fill="white" letterSpacing="-1">VISA</text>
            </svg>
          </div>

          {/* Mastercard */}
          <div className="bg-white/20 rounded-[24px] w-[96px] h-[96px] flex items-center justify-center">
            <div className="flex">
              <div className="w-9 h-9 rounded-full bg-[#E9001B]" />
              <div className="w-9 h-9 rounded-full bg-[#F79E1B] -ml-4" />
            </div>
          </div>

          {/* Amex */}
          <div className="bg-white/20 rounded-[24px] w-[96px] h-[96px] flex items-center justify-center">
            <div className="w-16 h-10 bg-[#0071CE] rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">AMEX</span>
            </div>
          </div>

          {/* Diners */}
          <div className="bg-white/20 rounded-[24px] w-[96px] h-[96px] flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-[#004C94] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>
              <span className="text-white text-[9px] font-bold mt-1">DINERS</span>
            </div>
          </div>

          {/* Plin */}
          <div className="bg-white/20 rounded-[24px] w-[96px] h-[96px] flex items-center justify-center">
            <img src={imgPlin} alt="Plin" className="w-12 h-12 object-contain" />
          </div>

          {/* Yape */}
          <div className="bg-white/20 rounded-[24px] w-[96px] h-[96px] flex items-center justify-center overflow-hidden">
            <img src={imgImage182} alt="Yape" className="w-16 h-16 object-contain mix-blend-multiply" />
          </div>

          {/* izipay ya */}
          <div className="bg-white/20 rounded-[24px] w-[96px] h-[96px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-[#E64442] font-black text-xs">izi</span>
              <span className="text-[#80D2CE] font-black text-xs">pay</span>
              <div className="text-white text-[8px] font-semibold">ya</div>
            </div>
          </div>

          {/* Apple Pay */}
          <div className="bg-white/20 rounded-[24px] w-[96px] h-[96px] flex items-center justify-center overflow-hidden">
            <img src={imgApplePayMarkRgb0416191} alt="Apple Pay" className="w-14 h-10 object-contain mix-blend-multiply" />
          </div>

          {/* Google Pay */}
          <div className="bg-white/20 rounded-[24px] w-[105px] h-[96px] flex items-center justify-center overflow-hidden">
            <img src={imgGPayAcceptanceMarkFullColor1} alt="Google Pay" className="w-20 h-9 object-contain mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
