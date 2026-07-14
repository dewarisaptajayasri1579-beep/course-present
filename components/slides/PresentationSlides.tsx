'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface SlideItem {
  id: string;
  title: string;
  subtitle?: string;
  coach?: string;
  organization?: string;
  items?: string[];
  text?: string;
  quote?: string;
}

export default function PresentationSlides({ slidesData }: { slidesData: SlideItem[] }) {
  return (
    <div className="w-full h-full relative group bg-[#FAFAFA] text-black overflow-hidden font-sans">
      
      {/* V0-style minimalistic background dots/grid (optional subtle texture) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')]"></div>

      <Swiper
        modules={[Navigation, Pagination, Keyboard, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={{ enabled: true }}
        className="w-full h-full z-10"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full flex flex-col items-center justify-center p-8 sm:p-16 md:p-24 text-center">
              {index === 0 ? (
                // Cover Slide - V0 Clean Aesthetic
                <div className="max-w-5xl w-full relative z-10 space-y-8 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.08] text-black/60 font-medium tracking-widest text-xs uppercase">
                    <div className="w-2 h-2 rounded-full bg-black/40"></div>
                    {slide.organization}
                  </div>
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-black leading-[1.1]">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl sm:text-3xl text-black/50 max-w-3xl mx-auto font-light tracking-wide mt-6">
                    {slide.subtitle}
                  </h2>
                  <div className="mt-16 pt-12 border-t border-black/[0.06] max-w-lg mx-auto flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-black/[0.04] rounded-full flex items-center justify-center border border-black/[0.08]">
                      <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-black/40 uppercase tracking-widest font-semibold">Presented By</p>
                      <p className="text-lg text-black font-medium">{slide.coach}</p>
                    </div>
                  </div>
                </div>
              ) : (
                // Content Slides - V0 Minimalist Cards
                <div className="max-w-5xl w-full text-left relative z-10 flex flex-col h-full justify-center">
                  <div className="mb-12 pb-6 border-b border-black/[0.08]">
                    <span className="text-sm font-mono text-black/30 mb-3 block">0{index} / {String(slidesData.length - 1).padStart(2, '0')}</span>
                    <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black">
                      {slide.title}
                    </h2>
                  </div>
                  
                  {slide.text && (
                    <p className="text-xl sm:text-2xl text-black/60 mb-10 font-light leading-relaxed max-w-4xl">{slide.text}</p>
                  )}

                  {slide.items && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {slide.items.map((item, i) => (
                        <div key={i} className="flex items-start bg-white p-6 rounded-2xl border border-black/[0.06] hover:border-black/[0.15] hover:shadow-sm transition-all duration-300 group/card">
                          <div className="bg-black/[0.03] p-2 rounded-lg mr-4 mt-1 text-black/40 group-hover/card:bg-black group-hover/card:text-white transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-lg text-black/70 leading-relaxed font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.quote && (
                    <div className="mt-12 bg-black/[0.02] border border-black/[0.06] p-8 sm:p-10 rounded-3xl relative">
                      <div className="absolute top-8 left-8 text-black/10">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-2xl sm:text-3xl text-black/80 font-medium leading-relaxed z-10 relative px-12 italic">
                        {slide.quote}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Global overrides for Swiper controls - Minimalist styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-button-next, .swiper-button-prev {
          color: #000 !important;
          background: #fff;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 18px !important;
          font-weight: 500;
        }
        .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
          opacity: 0.8;
        }
        .group:hover .swiper-button-next:hover, .group:hover .swiper-button-prev:hover {
          opacity: 1;
          background: #000;
          color: #fff !important;
          border-color: #000;
          transform: scale(1.05);
        }
        .swiper-pagination-bullet {
          background: #000 !important;
          width: 8px !important;
          height: 8px !important;
          opacity: 0.15;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}} />
    </div>
  );
}
