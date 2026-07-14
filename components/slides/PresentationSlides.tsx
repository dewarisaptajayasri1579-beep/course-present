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
    <div className="w-full h-full relative group bg-[#0B0F19] overflow-hidden">
      {/* Universal Tech Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[80px]"></div>
        
        {/* Subtle Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MCAwSDBWMGg0MHY0MEgwdjQwaDQwdjQwSDBWMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50"></div>
      </div>

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
                // Cover Slide - Premium Glow Design
                <div className="max-w-5xl w-full relative z-10 space-y-8 animate-fade-in-up">
                  <div className="inline-block mb-4 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md text-indigo-300 font-semibold tracking-widest uppercase text-sm">
                    {slide.organization}
                  </div>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-outfit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-400 drop-shadow-[0_0_40px_rgba(99,102,241,0.5)] tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-medium text-indigo-100/80 max-w-3xl mx-auto">
                    {slide.subtitle}
                  </h2>
                  <div className="mt-16 pt-12">
                    <p className="text-2xl text-gray-400 font-inter">Presented by <span className="text-white font-bold block mt-2 text-3xl font-outfit">{slide.coach}</span></p>
                  </div>
                </div>
              ) : (
                // Content Slides - Glassmorphism Cards
                <div className="max-w-5xl w-full text-left relative z-10 flex flex-col h-full justify-center">
                  <h2 className="text-5xl sm:text-6xl font-outfit font-bold text-white mb-12 pb-6 border-b border-white/10 relative inline-block">
                    {slide.title}
                    {/* Glowing underline */}
                    <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
                  </h2>
                  
                  {slide.text && (
                    <p className="text-2xl sm:text-3xl text-indigo-100/90 mb-10 font-inter font-light">{slide.text}</p>
                  )}

                  {slide.items && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {slide.items.map((item, i) => (
                        <div key={i} className="flex items-start bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl group/card">
                          <div className="bg-indigo-500/20 p-3 rounded-xl mr-5 group-hover/card:bg-indigo-500/40 transition-colors">
                            <svg className="w-8 h-8 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-2xl text-gray-200 font-inter leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.quote && (
                    <div className="mt-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-xl"></div>
                      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl border-l-8 border-l-indigo-500 shadow-2xl">
                        <svg className="w-16 h-16 text-indigo-500/40 absolute top-4 left-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-3xl sm:text-4xl italic text-white font-outfit font-medium leading-relaxed z-10 relative px-10">
                          {slide.quote}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Global overrides for Swiper controls */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-button-next, .swiper-button-prev {
          color: #fff !important;
          background: rgba(255,255,255,0.05);
          width: 60px !important;
          height: 60px !important;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 24px !important;
          font-weight: bold;
        }
        .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
          opacity: 0.6;
        }
        .group:hover .swiper-button-next:hover, .group:hover .swiper-button-prev:hover {
          opacity: 1;
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.5);
          transform: scale(1.1);
        }
        .swiper-pagination-bullet {
          background: #fff !important;
          width: 12px !important;
          height: 12px !important;
          opacity: 0.2;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #818cf8 !important;
          width: 32px !important;
          border-radius: 6px !important;
          opacity: 1;
          box-shadow: 0 0 10px rgba(129, 140, 248, 0.8);
        }
      `}} />
    </div>
  );
}
