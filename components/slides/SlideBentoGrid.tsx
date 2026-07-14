"use client"

import React, { useRef, useState, useEffect } from "react"
import { LucideIcon, Target, TrendingUp, Sparkles, MonitorSmartphone, DollarSign } from 'lucide-react'

export interface BentoGridItem {
  icon?: string;
  title: string;
  details: string[];
}

function BentoCard({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number 
}) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple intersection observer to trigger the fade up animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl border border-black/[0.07] bg-[#fbfbf9] overflow-hidden transition-all duration-700 hover:border-black/[0.15] hover:bg-white shadow-sm hover:shadow-md ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease`,
      }}
    >
      {/* Hover glow spot simulated with radial gradient */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: "radial-gradient(circle at center, rgba(0,0,0,0.03) 0%, transparent 70%)" 
        }}
      />
      {children}
    </div>
  )
}

const iconMap: Record<string, LucideIcon> = {
  'Target': Target,
  'TrendingUp': TrendingUp,
  'Sparkles': Sparkles,
  'MonitorSmartphone': MonitorSmartphone,
  'DollarSign': DollarSign
};

export function SlideBentoGrid({ items }: { items: BentoGridItem[] }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const IconComponent = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Sparkles;
          
          return (
            <BentoCard 
              key={i} 
              delay={i * 100} 
              className="p-8 sm:p-10 flex flex-col min-h-[240px]"
            >
              <div className="w-12 h-12 rounded-2xl border border-black/10 bg-black/[0.02] flex items-center justify-center mb-6 text-black/60 group-hover:text-black/90 group-hover:bg-black/[0.04] transition-colors duration-300">
                <IconComponent className="w-6 h-6 stroke-[1.5]" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight mb-4 text-black/90" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                {item.title}
              </h3>
              
              <div className="flex-1 mt-2">
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-left">
                      <div className="w-4 h-4 rounded-full bg-black/5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-black/60 font-light leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </BentoCard>
          )
        })}
      </div>
    </div>
  )
}
