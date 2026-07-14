"use client"

import { useState, useEffect } from "react"

export interface DevExItem {
  num: string;
  title: string;
  desc?: string;
  details: string[];
}

export function SlideDevEx({ items }: { items: DevExItem[] }) {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  function selectStep(i: number) {
    if (i === active) return
    setVisible(false)
    setTimeout(() => {
      setActive(i)
      setVisible(true)
    }, 180)
  }

  const step = items[active]

  return (
    <div className="w-full h-full flex items-center justify-center -mt-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch px-4">
        {/* Left — tabs */}
        <div className="flex flex-col gap-4">
          {items.map((s, i) => (
            <button
              key={s.num}
              onClick={() => selectStep(i)}
              className="flex-1 text-left rounded-3xl border transition-all duration-300 p-6 sm:p-8 group flex flex-col justify-center"
              style={{
                background: active === i ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.8)",
                borderColor: active === i ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.06)",
                boxShadow: active === i
                  ? "0 4px 12px rgba(0,0,0,0.03)"
                  : "0 2px 4px rgba(0,0,0,0.01)",
              }}
            >
              <div className="flex gap-4 sm:gap-6 items-start">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-sm font-medium shrink-0 transition-colors duration-300"
                  style={{
                    background: active === i ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.04)",
                    color: active === i ? "#fff" : "rgba(0,0,0,0.4)",
                  }}
                >
                  {s.num}
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <p
                    className="text-lg sm:text-xl font-medium tracking-tight transition-colors duration-300"
                    style={{ 
                      color: active === i ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.5)",
                      fontFamily: '"IBM Plex Sans", sans-serif'
                    }}
                  >
                    {s.title}
                  </p>
                  {s.desc && (
                    <p className="text-sm mt-1.5 font-light" style={{ color: "rgba(0,0,0,0.4)" }}>{s.desc}</p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right — Details panel */}
        <div
          className="lg:col-span-2 rounded-3xl border border-black/[0.08] p-10 sm:p-14 flex flex-col relative overflow-hidden shadow-sm"
          style={{
            background: "linear-gradient(135deg, #fdfbf7 0%, #f4f3f0 100%)",
            minHeight: "450px"
          }}
        >
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

          {/* Header area */}
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-black/[0.06] relative z-10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-black/10"></div>
              <div className="w-3 h-3 rounded-full bg-black/10"></div>
              <div className="w-3 h-3 rounded-full bg-black/10"></div>
            </div>
            <div className="ml-4 text-xs font-mono text-black/40 uppercase tracking-widest">{step.title}</div>
          </div>

          {/* Content transition wrapper */}
          <div
            className="flex-1 flex flex-col justify-center relative z-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <ul className="space-y-6">
              {step.details.map((detail, idx) => (
                <li key={idx} className="flex items-start text-left">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xl sm:text-2xl text-black/80 font-light leading-relaxed tracking-tight" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
