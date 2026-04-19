import React, { useState } from "react";

const COMMISSION_RATE = 0.0409; // 4.09%
const IGV_RATE = 0.18;

export function IzipayCalculator() {
  const [amount, setAmount] = useState("");
  const [cardOrigin, setCardOrigin] = useState("nacional");
  const [paymentType, setPaymentType] = useState("fisico");
  const [accepted, setAccepted] = useState(true);

  const numericAmount = parseFloat(amount.replace(",", ".")) || 0;
  const commission = numericAmount * COMMISSION_RATE * (1 + IGV_RATE);
  const deposit = numericAmount - commission;

  return (
    <section className="py-16 px-4 md:px-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f0fafa 0%, #e8f5f5 100%)" }}>
      {/* Decorative blobs */}
      <div className="absolute left-0 top-1/4 w-48 h-48 rounded-full opacity-30 pointer-events-none" style={{ background: "#3DD2CE", filter: "blur(80px)" }} />
      <div className="absolute right-0 bottom-1/4 w-48 h-48 rounded-full opacity-20 pointer-events-none" style={{ background: "#F12F32", filter: "blur(80px)" }} />

      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Info */}
          <div className="lg:w-[400px] shrink-0">
            <h2 className="text-[#0B201F] text-3xl md:text-[40px] font-bold leading-tight mb-3">
              Simulador izipay
            </h2>
            <p className="text-[#6b7280] text-base mb-8">
              Calcula tu ganancia en segundos y conoce cuánto te depositamos por cada venta
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-[#263238] text-xl font-bold mb-4">¿Cuándo recibirás el depósito?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                        <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" fill="#00A09D"/>
                        <path d="M6.66667 10L8.88889 12.2222L13.3333 7.77778" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#263238] text-sm font-bold">Retiro inmediato</p>
                      <p className="text-[#6b7280] text-sm">Si usas Interbank desde la APP izipay</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                        <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" fill="#00A09D"/>
                        <path d="M6.66667 10L8.88889 12.2222L13.3333 7.77778" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#263238] text-sm font-bold">En 24 horas</p>
                      <p className="text-[#6b7280] text-sm">Si transfieres a otro banco desde la APP.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Calculator card */}
          <div className="flex-1 bg-white/80 backdrop-blur rounded-[48px] border border-[#d8d8d8] p-6 md:p-8 shadow-sm">
            {/* Tab switcher */}
            <div className="bg-[#f9fafa] border border-[#d6dada] rounded-[56px] p-2 flex mb-8">
              {["Ventas físicas", "Ventas online"].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setPaymentType(i === 0 ? "fisico" : "online")}
                  className={`flex-1 py-3 rounded-full text-lg font-semibold transition-all ${
                    (i === 0 && paymentType === "fisico") || (i === 1 && paymentType === "online")
                      ? "bg-[#008380] text-white"
                      : "text-[#636565]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mb-6">
              {/* Amount input */}
              <div className="flex flex-col gap-3 min-w-[200px]">
                <label className="text-[#001b20] text-sm font-semibold">¿Cuánto vendiste?</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#636565] text-base opacity-60">S/</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full border border-[#006462] rounded-full px-10 py-3 text-base text-[#636565] focus:outline-none focus:ring-2 focus:ring-[#008380]"
                  />
                </div>
              </div>

              {/* Card origin */}
              <div className="flex flex-col gap-3">
                <label className="text-[#001b20] text-sm font-semibold">Origen de tarjeta</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div
                      onClick={() => setCardOrigin("nacional")}
                      className={`w-4 h-4 rounded-full ${cardOrigin === "nacional" ? "bg-[#008080]" : "border border-[#d6dada] bg-white"}`}
                    />
                    <span className="text-[#263238] text-sm">Nacional</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div
                      onClick={() => setCardOrigin("extranjera")}
                      className={`w-4 h-4 rounded-full ${cardOrigin === "extranjera" ? "bg-[#008080]" : "border border-[#d6dada] bg-white"}`}
                    />
                    <span className="text-[#263238] text-sm">Extranjera</span>
                  </label>
                </div>
              </div>

              {/* Commission */}
              <div className="flex flex-col gap-3 min-w-[200px]">
                <label className="text-[#001b20] text-sm font-medium">Comisión izipay*</label>
                <div className="bg-[#eee] rounded-full px-5 py-3 text-[#0b201f] text-base font-bold text-right">
                  {numericAmount > 0 ? `S/ ${commission.toFixed(2)}` : "S/ 0.00"}
                </div>
              </div>

              {/* Deposit */}
              <div className="flex flex-col gap-3 min-w-[200px]">
                <label className="text-[#001b20] text-sm font-medium">Te depositamos</label>
                <div className="bg-[#eee] rounded-full px-5 py-3 text-[#0b201f] text-base font-bold text-right">
                  {numericAmount > 0 ? `S/ ${deposit.toFixed(2)}` : "S/ 0.00"}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3 flex-1 min-w-[280px]">
                <label className="text-[#001b20] text-sm font-semibold">Correo electrónico:</label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="ejemplo@email.com"
                    className="flex-1 border border-[#d6dada] rounded-full px-6 py-3 text-base text-[#636565] focus:outline-none focus:ring-2 focus:ring-[#008380]"
                  />
                  <button className="bg-[#008380] text-white font-bold px-6 py-3 rounded-full hover:bg-[#006462] transition-colors whitespace-nowrap">
                    Enviar
                  </button>
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-2 cursor-pointer">
              <div
                onClick={() => setAccepted(!accepted)}
                className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 ${accepted ? "bg-[#00a09d]" : "border border-gray-300"}`}
              >
                {accepted && (
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                    <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="text-[#525252] text-sm">
                Acepto el uso de mis datos personales según la{" "}
                <span className="text-[#00a09d]">Política de Privacidad.</span>
              </span>
            </label>

            <p className="text-[#6b7280] text-xs mt-4">
              *La comisión izipay es del 4.09% del valor de la operación más el 18% de IGV. Recuerda que las tasas son referenciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
