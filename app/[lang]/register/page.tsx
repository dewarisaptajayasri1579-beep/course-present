'use client';

import { useState } from 'react';
import { content, Lang } from '@/lib/content';
import { use } from 'react';

export default function RegisterPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params);
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'id') as Lang;
  const t = content[lang].register;

  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    experience: '',
    appIdea: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/participants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || t.errorGeneric);
      }

      setStatus('success');
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || t.errorGeneric);
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0B0F19] relative overflow-hidden">
        {/* Abstract Tech Background Elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/30 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-1000"></div>
        
        <div className="max-w-md w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-10 text-center relative z-10 animate-fade-in-up">
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-outfit font-bold text-white mb-3 tracking-tight">{t.successTitle}</h2>
          <p className="text-gray-300 text-lg">{t.successMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden flex items-center justify-center">
      {/* Abstract Tech Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-blue-600/20 rounded-full blur-[80px] mix-blend-screen"></div>

      <div className="max-w-xl w-full relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-outfit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 sm:text-5xl tracking-tight drop-shadow-sm">
            {t.title}
          </h1>
          <p className="mt-5 text-lg text-indigo-200/80 max-w-md mx-auto font-medium">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl py-10 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-3xl border border-white/10 sm:px-12 relative overflow-hidden group">
          
          {/* Subtle gradient border effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl pointer-events-none"></div>

          <form className="space-y-7 relative z-10" onSubmit={handleSubmit}>
            {[
              { id: 'name', label: t.nameLabel, placeholder: t.namePlaceholder, type: 'text', rows: null },
              { id: 'origin', label: t.originLabel, placeholder: t.originPlaceholder, type: 'text', rows: null },
              { id: 'experience', label: t.expLabel, placeholder: t.expPlaceholder, type: 'textarea', rows: 2 },
              { id: 'appIdea', label: t.ideaLabel, placeholder: t.ideaPlaceholder, type: 'textarea', rows: 3 },
            ].map((field) => (
              <div key={field.id} className="group/field">
                <label htmlFor={field.id} className="block text-sm font-semibold text-gray-300 mb-2 group-focus-within/field:text-indigo-300 transition-colors">
                  {field.label} <span className="text-pink-500">*</span>
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows={field.rows!}
                    required
                    value={(formData as any)[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300 sm:text-sm resize-none"
                  />
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type="text"
                    required
                    value={(formData as any)[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-white/10 transition-all duration-300 sm:text-sm"
                  />
                )}
              </div>
            ))}

            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl flex items-center animate-fade-in">
                <svg className="w-5 h-5 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-red-300 font-medium">{errorMessage}</p>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full relative group overflow-hidden flex justify-center py-4 px-4 rounded-xl text-sm font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Button Background with animated gradient */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] group-hover:bg-[position:right_center] transition-all duration-500"></span>
                <span className="relative z-10 flex items-center justify-center font-outfit tracking-wide text-lg">
                  {status === 'loading' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t.submitting}
                    </span>
                  ) : (
                    t.submit
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
