'use client';

import React, { useState, useEffect } from 'react';

export interface BrowserTabItem {
  id: string;
  label: string;
  url?: string;
  imageSrc?: string;
}

interface SlideVirtualBrowserProps {
  tabs: BrowserTabItem[];
}

export function SlideVirtualBrowser({ tabs }: SlideVirtualBrowserProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const [embedStatus, setEmbedStatus] = useState<Record<string, boolean | null>>({});

  useEffect(() => {
    // Check all URLs to see if they allow iframe embedding
    tabs.forEach(async (tab) => {
      if (tab.url && embedStatus[tab.id] === undefined) {
        try {
          const res = await fetch(`/api/check-iframe?url=${encodeURIComponent(tab.url)}`);
          const data = await res.json();
          setEmbedStatus(prev => ({ ...prev, [tab.id]: data.embeddable }));
        } catch {
          setEmbedStatus(prev => ({ ...prev, [tab.id]: false }));
        }
      }
    });
  }, [tabs]);

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];
  const isBlocked = activeTab?.url ? embedStatus[activeTab.id] === false : false;

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-1000 delay-300">
      {/* Browser Mockup Container */}
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-white flex flex-col transition-all duration-500">
        
        {/* Browser Top Bar */}
        <div className="h-12 bg-gray-100 border-b border-black/5 flex items-center px-4 shrink-0">
          {/* Traffic Lights */}
          <div className="flex space-x-2 mr-6 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 overflow-x-auto hide-scrollbar h-full items-end">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg border-t border-l border-r border-transparent transition-colors flex-shrink-0 ${
                  activeTabId === tab.id
                    ? 'bg-white text-black border-black/5 shadow-[0_-2px_4px_rgba(0,0,0,0.02)] relative z-10'
                    : 'bg-transparent text-gray-500 hover:bg-gray-200/50'
                }`}
                style={{ marginBottom: activeTabId === tab.id ? '-1px' : '0' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Address Bar Area (Optional, but adds to the realism) */}
        <div className="h-10 bg-white border-b border-black/5 flex items-center px-4 space-x-3 shrink-0">
          <div className="flex space-x-2 text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          </div>
          <div className="flex-1 bg-gray-100 rounded-md h-7 flex items-center px-3 text-xs text-gray-500 font-mono tracking-tight overflow-hidden text-ellipsis whitespace-nowrap">
            <svg className="w-3 h-3 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            {activeTab?.url || activeTab?.imageSrc || 'https://...'}
          </div>
          {embedStatus[activeTabId] === false && (
            <div className="ml-2 px-2 py-1 bg-amber-100 text-amber-700 text-[10px] sm:text-xs font-medium rounded border border-amber-200 whitespace-nowrap flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Auto Image Fallback
            </div>
          )}
        </div>

        {/* Browser Content */}
        <div className="relative w-full h-[55vh] sm:h-[65vh] bg-gray-50 overflow-hidden">
          {tabs.map((tab) => {
            const isTabBlocked = embedStatus[tab.id] === false;
            return (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  activeTabId === tab.id ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {!isTabBlocked && tab.url ? (
                  /* Scaled Iframe */
                <div className="w-full h-full relative overflow-hidden bg-white flex items-center justify-center">
                   {/* We scale the iframe by 1.5. Width/height needs to be 100% / 1.5 */}
                   <iframe 
                     src={tab.url} 
                     style={{
                        width: 'calc(100% / 1.5)',
                        height: 'calc(100% / 1.5)',
                        transform: 'scale(1.5)',
                        transformOrigin: 'top left',
                        border: 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0
                     }}
                     title={tab.label}
                     allowFullScreen
                     sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                   />
                </div>
              ) : (
                  /* Fallback Image */
                  <div className="w-full h-full flex items-center justify-center bg-gray-100/50 p-6">
                    {tab.imageSrc ? (
                       <img 
                         src={tab.imageSrc} 
                         alt={tab.label}
                         className="max-w-full max-h-full object-contain rounded-lg shadow-sm"
                       />
                    ) : (
                       <div className="text-gray-400 font-medium tracking-wide">Screenshot / URL belum tersedia</div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
