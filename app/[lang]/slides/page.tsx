import { content, Lang } from '@/lib/content';
import { use } from 'react';
import PresentationSlides from '@/components/slides/PresentationSlides';

export default function SlidesPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params);
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'id') as Lang;
  const t = content[lang].slides;

  return (
    <div className="w-full h-screen bg-slate-900 text-white overflow-hidden">
      <PresentationSlides slidesData={t} />
    </div>
  );
}
