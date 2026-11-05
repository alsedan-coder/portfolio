import type { ReactNode } from 'react';
import { SectionHead, Track } from './Case';
import { ui, type Lang } from '@/lib/i18n';

/** "A próxima obra": etapas tracejadas, porque ainda vão ser construídas. */
export function SectionNextSteps({ lang, n, title, intro, items }: { lang: Lang; n?: string; title: string; intro?: ReactNode; items: ReactNode[] }) {
  const label = ui[lang].nextWorks;
  return (
    <section className="ssec" aria-label={label}>
      <SectionHead n={n} label={label} title={title}>{intro && <p>{intro}</p>}</SectionHead>
      <Track dashed items={items.map((t) => ({ text: t }))} />
    </section>
  );
}
