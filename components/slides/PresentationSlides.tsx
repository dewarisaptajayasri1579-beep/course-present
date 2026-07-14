'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Copied from content.ts to type the props locally
export interface SlidePoint {
  title: string;
  details?: string[];
}

interface SlideItem {
  id: string;
  title: string;
  subtitle?: string;
  coach?: string;
  organization?: string;
  items?: (string | SlidePoint)[];
  text?: string;
  quote?: string;
}

export default function PresentationSlides({ slidesData }: { slidesData: SlideItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-full relative group bg-background text-foreground overflow-hidden font-sans">
      
      {/* V0-style minimalistic background dots (subtle texture) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')]"></div>

      {/* Global Animated Logo */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-50 pointer-events-none w-20 sm:w-28 opacity-80">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatLogo {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          .animate-float-logo {
            animation: floatLogo 4s ease-in-out infinite;
          }
        `}} />
        <img 
          src="/img/logo7smarts.png" 
          alt="7Smarts Logo" 
          className="w-full h-auto object-contain animate-float-logo"
        />
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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full z-10"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 sm:p-16 md:p-24 text-center">
                
                {index === 0 ? (
                  // Cover Slide
                  <div className="max-w-5xl w-full relative z-10 flex flex-col items-center space-y-6">
                    {isActive && (
                      <>
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black/60 font-medium tracking-widest text-xs uppercase">
                          <div className="w-2 h-2 rounded-full bg-black/40"></div>
                          {slide.organization}
                        </div>
                        <h1 className="animate-in fade-in slide-in-from-bottom-6 zoom-in-95 duration-700 delay-200 fill-mode-both text-5xl sm:text-7xl md:text-8xl font-medium tracking-tighter text-foreground leading-[1.1]">
                          {slide.title}
                        </h1>
                        <h2 className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both text-2xl sm:text-3xl text-muted-foreground max-w-3xl mx-auto font-light tracking-wide mt-4">
                          {slide.subtitle}
                        </h2>
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both mt-16 pt-12 border-t border-border max-w-lg mx-auto flex items-center justify-center gap-4">
                          <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
                            <svg className="w-5 h-5 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-0.5">Presented By</p>
                            <p className="text-base text-foreground font-medium">{slide.coach}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  // Content Slides
                  <div className="max-w-5xl w-full text-left relative z-10 flex flex-col h-full justify-center">
                    {isActive && (
                      <>
                        <div className="animate-in fade-in slide-in-from-left-8 duration-700 delay-100 fill-mode-both mb-10 pb-6 border-b border-border">
                          <span className="text-xs font-mono text-muted-foreground mb-3 block">0{index} / {String(slidesData.length - 1).padStart(2, '0')}</span>
                          <h2 className="text-4xl sm:text-6xl font-medium tracking-tighter text-foreground">
                            {slide.title}
                          </h2>
                          {slide.subtitle && (
                            <p className="text-xl text-muted-foreground mt-3 tracking-wide">{slide.subtitle}</p>
                          )}
                        </div>
                        
                        {slide.text && (
                          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both text-xl sm:text-2xl text-muted-foreground mb-8 font-light leading-relaxed max-w-4xl">{slide.text}</p>
                        )}

                        {slide.items && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            {slide.items.map((item, i) => {
                              const isString = typeof item === 'string';
                              const title = isString ? item : item.title;
                              const hasDetails = !isString && item.details && item.details.length > 0;
                              
                              const CardContent = (
                                <div className={`flex items-start bg-card p-5 rounded-2xl border border-border transition-all duration-300 group/card text-left h-full ${hasDetails ? 'hover:border-black/30 hover:shadow-md cursor-pointer hover:bg-black/5' : 'hover:border-black/20 hover:shadow-sm'}`}>
                                  <div className="bg-black/5 p-2 rounded-lg mr-4 mt-0.5 text-black/40 group-hover/card:bg-black group-hover/card:text-white transition-colors">
                                    {hasDetails ? (
                                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                      </svg>
                                    ) : (
                                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <span className="text-lg text-foreground/80 leading-relaxed font-medium tracking-tight block">{title}</span>
                                    {hasDetails && (
                                      <span className="text-xs text-muted-foreground mt-1.5 font-medium tracking-wide block uppercase">Klik untuk detail &rarr;</span>
                                    )}
                                  </div>
                                </div>
                              );

                              return (
                                <div key={i} className={`animate-in fade-in slide-in-from-bottom-4 zoom-in-[0.98] duration-500 fill-mode-both`} style={{ animationDelay: `${300 + (i * 100)}ms` }}>
                                  {hasDetails ? (
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        {CardContent}
                                      </DialogTrigger>
                                      <DialogContent className="sm:max-w-xl">
                                        <DialogHeader>
                                          <DialogTitle className="text-2xl font-medium tracking-tight">{title}</DialogTitle>
                                        </DialogHeader>
                                        <div className="mt-4 space-y-4">
                                          {(!isString && item.details) && (
                                            <ul className="space-y-3">
                                              {item.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start text-foreground/70">
                                                  <svg className="w-5 h-5 mr-3 text-black/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                  </svg>
                                                  <span className="text-lg leading-relaxed">{detail}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                  ) : (
                                    CardContent
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {slide.quote && (
                          <div className="animate-in fade-in slide-in-from-bottom-6 zoom-in-95 duration-700 delay-300 fill-mode-both mt-10 bg-black/5 border border-border p-8 sm:p-10 rounded-3xl relative">
                            <div className="absolute top-6 left-6 text-black/10">
                              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                            <p className="text-2xl sm:text-3xl text-foreground font-medium leading-relaxed z-10 relative px-10 italic tracking-tight">
                              {slide.quote}
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
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
          border: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 16px !important;
          font-weight: 600;
        }
        .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
          opacity: 0.7;
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
          width: 6px !important;
          height: 6px !important;
          opacity: 0.15;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px !important;
          border-radius: 3px !important;
        }
      `}} />
    </div>
  );
}
