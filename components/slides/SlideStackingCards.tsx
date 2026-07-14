"use client"

import { useEffect, useRef, useState } from "react"

export interface StackingCardItem {
  label: string;
  title: string;
  desc: string;
  stats?: { v: string; l: string }[];
  img?: string;
}

const STICKY_TOP   = 20   // top offset when sticky
const STICKY_STEP  = 16   // each card stacks 16px lower
const SCALE_STEP   = 0.04 // scale reduction per card stacked on top
const OFFSET_STEP  = 8    // px pushed down per card stacked on top

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/[0.04] mb-4">
      {children}
    </span>
  )
}

export function SlideStackingCards({ items }: { items: StackingCardItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  // depth[i] = 0..N how many cards are currently stacked on top of card i
  const [depth, setDepth] = useState<number[]>(items.map(() => 0))

  const onScroll = () => {
    if (!containerRef.current) return
    const containerTop = containerRef.current.getBoundingClientRect().top
    
    const nextDepth = items.map((_, i) => {
      let count = 0
      for (let j = i + 1; j < items.length; j++) {
        const el = cardRefs.current[j]
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const stickyTopJ = containerTop + STICKY_TOP + j * STICKY_STEP
        if (rect.top <= stickyTopJ + 2) count++
      }
      return count
    })
    setDepth(nextDepth)
  }

  // To prevent Swiper from sliding when we scroll inside this container
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation()
  }

  return (
    <div 
      ref={containerRef}
      onScroll={onScroll}
      onWheel={handleWheel}
      onTouchMove={(e) => e.stopPropagation()}
      className="flex flex-col overflow-y-auto h-[55vh] w-full px-4 sm:px-8 pb-32 hide-scrollbar" 
      style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}
    >
      {/* Spacer at the top to allow first card to scroll a bit before sticking if needed, or just start sticky */}
      <div className="h-4 flex-shrink-0"></div>

      {items.map((agent, i) => {
        const d         = depth[i]
        const scale     = 1 - d * SCALE_STEP
        const translateY = d * OFFSET_STEP

        return (
          <div
            key={agent.label}
            ref={el => { cardRefs.current[i] = el }}
            className="sticky mb-6"
            style={{ top: `${STICKY_TOP + i * STICKY_STEP}px`, zIndex: 10 + i }}
          >
            <div
              style={{
                transform:      `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition:     "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange:     "transform",
              }}
            >
              <div className="group relative bg-[#faf9f7] rounded-3xl border border-black/[0.07] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                  
                  {/* Left content */}
                  <div className="flex-1 text-left">
                    <Tag>{agent.label}</Tag>
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black mb-3" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                      {agent.title}
                    </h3>
                    <p className="text-lg text-black/60 font-light leading-relaxed mb-6">
                      {agent.desc}
                    </p>
                    
                    {agent.stats && (
                      <div className="flex gap-8">
                        {agent.stats.map((stat, idx) => (
                          <div key={idx}>
                            <div className="text-xl font-medium tracking-tight text-black">{stat.v}</div>
                            <div className="text-xs tracking-widest uppercase text-black/40 font-semibold">{stat.l}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right abstract visual */}
                  {agent.img && (
                    <div className="w-full sm:w-64 h-48 sm:h-64 rounded-2xl overflow-hidden bg-black/5 relative flex-shrink-0">
                      <img 
                        src={agent.img} 
                        alt={agent.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        )
      })}
      
      {/* Spacer at the bottom so the last card can scroll up all the way */}
      <div className="h-[40vh] flex-shrink-0"></div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  )
}
