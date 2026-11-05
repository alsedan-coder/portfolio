import type { ReactNode } from 'react';
import { SectionHead, Track } from './Case';

/** "A próxima obra": etapas tracejadas, porque ainda vão ser construídas. */
export function SectionNextSteps({ n, title, intro, items, label = 'A próxima obra' }: { n?: string; title: string; intro?: ReactNode; items: ReactNode[]; label?: string }) {
  return (
    <section className="ssec" aria-label={label}>
      <SectionHead n={n} label={label} title={title}>{intro && <p>{intro}</p>}</SectionHead>
      <Track dashed items={items.map((t) => ({ text: t }))} />
    </section>
  );
}
