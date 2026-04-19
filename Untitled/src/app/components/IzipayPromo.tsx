import React, { useState } from "react";
import img1920X5924 from "figma:asset/a800d7abb5203db4f6d0959b5af3517fb29d48a3.png";

export function IzipayPromo() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1360px] mx-auto">
        <div className="relative bg-white/40 border-2 border-white rounded-[48px] overflow-hidden shadow-sm" style={{ minHeight: 480 }}>
          {/* Title */}
          <div className="text-center pt-10 pb-6 relative z-10">
            <h2 className="text-[#006462] text-2xl md:text-[30px] leading-tight">
              <span className="font-semibold">Promociones</span>{" "}
              <span className="font-normal">que tenemos para tí</span>
            </h2>
          </div>

          {/* Banner image */}
          <div className="relative mx-4 md:mx-10 rounded-[32px] overflow-hidden shadow-lg" style={{ height: 296 }}>
            <img
              src={img1920X5924}
              alt="Promoción izipay"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 pb-8">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-[10px] rounded-full transition-all ${
                  i === current ? "w-8 bg-[#008380]" : "w-[10px] border border-[#008380]"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button className="absolute left-4 top-[55%] -translate-y-1/2 w-12 h-12 rounded-full bg-[#008380] flex items-center justify-center shadow z-10">
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M22 14L16 20L22 26" stroke="#008380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="absolute right-4 top-[55%] -translate-y-1/2 w-12 h-12 rounded-full bg-[#008380] flex items-center justify-center shadow z-10">
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M18 14L24 20L18 26" stroke="#008380" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
