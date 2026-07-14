import { content, Lang } from '@/lib/content';
import { use } from 'react';

export default function HandoutPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params);
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'id') as Lang;
  const t = content[lang].handout;

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-200 font-inter print:bg-white print:text-black relative overflow-hidden">
      
      {/* Background Glows (Hidden on print) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none print:hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[50%] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-8 sm:px-12 relative z-10 bg-white/5 backdrop-blur-xl my-12 rounded-3xl border border-white/10 shadow-2xl print:shadow-none print:border-none print:bg-transparent print:my-0 print:py-8">
        
        {/* Header */}
        <header className="border-b border-white/10 print:border-gray-300 pb-10 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-outfit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 print:text-black mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400 print:text-gray-600 font-medium">{t.subtitle}</p>
          <div className="mt-8 inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 print:bg-gray-100 print:border-gray-300 print:text-gray-800 px-6 py-2 rounded-full font-semibold text-sm tracking-wide">
            Coach: Ony Sapta Nugraha | Seven Smarts Indonesia
          </div>
        </header>

        {/* Rundown */}
        <section className="mb-14 page-break-inside-avoid">
          <h2 className="text-2xl font-outfit font-bold border-b-2 border-indigo-500/30 print:border-gray-300 pb-3 mb-6 text-white print:text-black flex items-center">
            <span className="bg-indigo-500 w-2 h-6 mr-3 rounded-full print:bg-black"></span>
            {t.rundown.title}
          </h2>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl print:bg-transparent print:border-gray-300">
            <ul className="space-y-4">
              {t.rundown.items.map((item, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 print:border-gray-200 pb-4 last:border-0 last:pb-0 group">
                  <span className="font-mono font-semibold text-indigo-400 print:text-gray-600 bg-indigo-950/50 print:bg-transparent px-3 py-1 rounded-md text-sm">{item.time}</span>
                  <span className="text-gray-200 print:text-black font-medium sm:text-right mt-2 sm:mt-0">{item.activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Worksheet Ide */}
        <section className="mb-14 page-break-inside-avoid">
          <h2 className="text-2xl font-outfit font-bold border-b-2 border-indigo-500/30 print:border-gray-300 pb-3 mb-6 text-white print:text-black flex items-center">
            <span className="bg-indigo-500 w-2 h-6 mr-3 rounded-full print:bg-black"></span>
            {t.worksheet.title}
          </h2>
          <div className="space-y-5">
            <div className="p-5 border-2 border-dashed border-white/20 print:border-gray-400 rounded-xl h-28 bg-white/5 print:bg-transparent flex items-start transition-colors hover:bg-white/10">
              <span className="text-gray-400 print:text-gray-600 font-medium text-lg">{t.worksheet.q1}</span>
            </div>
            <div className="p-5 border-2 border-dashed border-white/20 print:border-gray-400 rounded-xl h-28 bg-white/5 print:bg-transparent flex items-start transition-colors hover:bg-white/10">
              <span className="text-gray-400 print:text-gray-600 font-medium text-lg">{t.worksheet.q2}</span>
            </div>
            <div className="p-5 border-2 border-dashed border-white/20 print:border-gray-400 rounded-xl h-36 bg-white/5 print:bg-transparent flex items-start transition-colors hover:bg-white/10">
              <span className="text-gray-400 print:text-gray-600 font-medium text-lg">{t.worksheet.q3}</span>
            </div>
          </div>
        </section>

        {/* Prompts Template */}
        <section className="mb-14 page-break-before">
          <h2 className="text-2xl font-outfit font-bold border-b-2 border-indigo-500/30 print:border-gray-300 pb-3 mb-6 text-white print:text-black flex items-center">
            <span className="bg-indigo-500 w-2 h-6 mr-3 rounded-full print:bg-black"></span>
            {t.prompts.title}
          </h2>
          
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity print:hidden"></div>
            <div className="relative">
              <h3 className="text-lg font-bold text-gray-300 print:text-gray-800 mb-3 ml-1">{t.prompts.step1Title}</h3>
              <div className="bg-[#0D1117] print:bg-gray-100 text-green-400 print:text-black p-6 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto border border-green-500/20 print:border-gray-300 shadow-inner">
                {t.prompts.step1Prompt}
              </div>
            </div>
          </div>

          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity print:hidden"></div>
            <div className="relative">
              <h3 className="text-lg font-bold text-gray-300 print:text-gray-800 mb-3 ml-1">{t.prompts.step2Title}</h3>
              <div className="bg-[#0D1117] print:bg-gray-100 text-blue-400 print:text-black p-6 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto border border-blue-500/20 print:border-gray-300 shadow-inner">
                {t.prompts.step2Prompt}
              </div>
            </div>
          </div>

          <div className="relative group mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity print:hidden"></div>
            <div className="relative">
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 print:text-gray-800 mb-3 ml-1 flex items-center">
                <svg className="w-5 h-5 mr-2 text-pink-400 print:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t.prompts.cheatCodeTitle}
              </h3>
              <div className="bg-[#0D1117] print:bg-gray-100 text-purple-400 print:text-black p-6 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto border border-purple-500/20 print:border-gray-300 shadow-inner">
                <pre>{t.prompts.cheatCodeCommand}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Checklist */}
        <section className="mb-10 page-break-inside-avoid">
          <h2 className="text-2xl font-outfit font-bold border-b-2 border-indigo-500/30 print:border-gray-300 pb-3 mb-6 text-white print:text-black flex items-center">
            <span className="bg-indigo-500 w-2 h-6 mr-3 rounded-full print:bg-black"></span>
            {t.checklist.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.checklist.items.map((item, i) => (
              <div key={i} className="flex items-center space-x-4 bg-white/5 print:bg-transparent p-5 rounded-xl border border-white/10 print:border-gray-300 hover:border-indigo-500/50 hover:bg-white/10 transition-all">
                <div className="w-6 h-6 border-2 border-indigo-500/50 print:border-gray-400 rounded flex-shrink-0"></div>
                <span className="text-gray-300 print:text-black font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/10 print:border-gray-300 text-center text-gray-500 print:text-gray-400 text-sm font-outfit">
          <p>© {new Date().getFullYear()} Seven Smarts Indonesia. All rights reserved.</p>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          .page-break-inside-avoid { page-break-inside: avoid; }
          .page-break-before { page-break-before: always; }
          body { background-color: white !important; }
        }
      `}} />
    </div>
  );
}
