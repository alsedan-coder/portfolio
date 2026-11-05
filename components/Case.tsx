import type { CSSProperties, ReactNode } from 'react';

/* ---------- Zona do problema ---------- */

export function ProblemZone({ children }: { children: ReactNode }) {
  return (
    <main className="zone-problem">
      <div className="container">{children}</div>
    </main>
  );
}

export function Hero({ kicker, title, lead, children }: { kicker: string; title: string; lead: ReactNode; children?: ReactNode }) {
  return (
    <section className="hero" aria-label="O resultado">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      {children}
    </section>
  );
}

export type Note = { text: ReactNode; label?: string; kind?: 'paper' | 'yellow' | 'typed' | 'red'; style: CSSProperties };

export function BeforeAfter({ notes, after, afterLabel = 'Depois' }: { notes: Note[]; after: ReactNode; afterLabel?: string }) {
  return (
    <div className="ba">
      <figure className="before" aria-label="O cômodo antes">
        <figcaption>Antes</figcaption>
        <div className="notes">
          {notes.map((n, i) => (
            <p key={i} className={`note ${n.kind ?? 'paper'}`} style={n.style}>
              {n.label && <small>{n.label}</small>}
              {n.text}
            </p>
          ))}
        </div>
      </figure>
      <figure className="after" aria-label="O cômodo reformado">
        <figcaption>{afterLabel}</figcaption>
        {after}
      </figure>
    </div>
  );
}

export function Shots({ items, n }: { items: { src: string; alt: string; caption: string }[]; n?: number }) {
  return (
    <div className="shots" style={{ ['--n' as string]: n ?? items.length }}>
      {items.map((s) => (
        <div key={s.src} className="shot">
          <img src={s.src} alt={s.alt} loading="lazy" />
          <span>{s.caption}</span>
        </div>
      ))}
    </div>
  );
}

export function Results({ items }: { items: { title: string; text: ReactNode }[]; prefix?: string }) {
  return (
    <div className="results">
      {items.map((r) => (
        <div key={r.title}>
          <h2>{r.title}</h2>
          <p>{r.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Ficha({ items }: { items: [string, ReactNode][] }) {
  return (
    <dl className="ficha">
      {items.map(([k, v]) => (
        <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
      ))}
    </dl>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  return <blockquote className="quote">“{children}”</blockquote>;
}

export function SectionHead({ n, label, title, children }: { n?: string; label: string; title: string; children?: ReactNode }) {
  return (
    <div className="shead">
      <span className="kicker">{n ? `${n} · ` : ''}{label}</span>
      <h2>{title}</h2>
      {children && <div className="prose">{children}</div>}
    </div>
  );
}

/** Seção do problema: título à esquerda, texto num "papel" levemente torto à direita. */
export function ProblemSection({ n, label, title, alt, children, aside }: { n: string; label: string; title: string; alt?: boolean; children: ReactNode; aside?: ReactNode }) {
  return (
    <section className="psec" aria-label={label}>
      <div className="shead">
        <span className="kicker">{n} · {label}</span>
        <h2>{title}</h2>
        {aside}
      </div>
      <div className={`paper${alt ? ' alt' : ''}`}>{children}</div>
    </section>
  );
}

/* ---------- Zona da solução ---------- */

export function SolutionZone({ lead, children }: { lead: string; children: ReactNode }) {
  return (
    <>
      <section className="reform" aria-label="O cômodo reformado">
        <div className="container">
          <h2>O cômodo reformado</h2>
          <p>{lead}</p>
        </div>
      </section>
      <div className="zone-solution">
        <div className="container">{children}</div>
      </div>
    </>
  );
}

export function Section({ label, children }: { label: string; children: ReactNode }) {
  return <section className="ssec" aria-label={label}>{children}</section>;
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose">{children}</div>;
}

export function Track({ items, dashed }: { items: { place?: string; title?: string; text: ReactNode }[]; dashed?: boolean }) {
  return (
    <div className={`track${dashed ? ' dashed' : ''}`} style={{ ['--n' as string]: items.length }}>
      <ol>
        {items.map((s, i) => (
          <li key={i}>
            <span className="dot" aria-hidden="true">{i + 1}</span>
            {s.place && <span className="place">{s.place}</span>}
            {s.title && <strong>{s.title}</strong>}
            <span className="t">{s.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Fig({ src, alt, caption, link = true }: { src: string; alt: string; caption?: ReactNode; link?: boolean }) {
  const img = <img src={src} alt={alt} loading="lazy" />;
  return (
    <figure className="fig">
      {link ? <a href={src} target="_blank" rel="noopener">{img}</a> : img}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Gallery({ min, children }: { min?: number; children: ReactNode }) {
  return <div className="gallery" style={min ? { ['--min' as string]: `${min}px` } : undefined}>{children}</div>;
}

export function Board({ children }: { children: ReactNode }) {
  return <div className="board">{children}</div>;
}

export function Feature({ src, alt, title, children, flip, dark, wide }: { src: string; alt: string; title: string; children: ReactNode; flip?: boolean; dark?: boolean; wide?: boolean }) {
  return (
    <figure className={`feature${flip ? ' flip' : ''}${dark ? ' dark' : ''}${wide ? ' wide' : ''}`}>
      <div className="vis"><img src={src} alt={alt} loading="lazy" /></div>
      <figcaption>
        <strong>{title}</strong>
        <span>{children}</span>
      </figcaption>
    </figure>
  );
}

export function Tiles({ items }: { items: { tag: string; title: string; text: ReactNode }[] }) {
  return (
    <ul className="tiles">
      {items.map((t) => (
        <li key={t.title}>
          <span className="tag">{t.tag}</span>
          <span><strong>{t.title}</strong><p>{t.text}</p></span>
        </li>
      ))}
    </ul>
  );
}

export function Stats({ items }: { items: { value: string; label: ReactNode }[] }) {
  return (
    <div className="stats">
      {items.map((s) => (
        <div key={s.value + String(s.label)}><b>{s.value}</b><span>{s.label}</span></div>
      ))}
    </div>
  );
}

export function Cards({ items }: { items: { title: ReactNode; text?: ReactNode; list?: ReactNode[]; big?: string }[] }) {
  return (
    <div className="cards3">
      {items.map((c, i) => (
        <div key={i}>
          {c.big && <span className="big">{c.big}</span>}
          <b>{c.title}</b>
          {c.text && <span>{c.text}</span>}
          {c.list && <ul>{c.list.map((l, j) => <li key={j}>{l}</li>)}</ul>}
        </div>
      ))}
    </div>
  );
}

/* ---------- Faixa escura e fim do cômodo ---------- */

export function Band({ kicker, title, cols, text, textCols }: { kicker: string; title: string; cols?: { small?: string; big: string; span?: ReactNode }[]; text?: ReactNode; textCols?: boolean }) {
  return (
    <>
      <section className="band" aria-label={kicker}>
        <div>
          <span className="kicker">{kicker}</span>
          <h2>{title}</h2>
          {cols && (
            <div className={`cols${textCols ? ' text' : ''}`}>
              {cols.map((c) => (
                <div key={c.big}>
                  {c.small && <small>{c.small}</small>}
                  <b>{c.big}</b>
                  {c.span && <span>{c.span}</span>}
                </div>
              ))}
            </div>
          )}
          {text && <p>{text}</p>}
        </div>
      </section>
      <div className="stripe" aria-hidden="true" />
    </>
  );
}

export function AfterZone({ children }: { children: ReactNode }) {
  return (
    <div className="zone-after">
      <div className="container">{children}</div>
    </div>
  );
}

export function Learned({ items, note }: { items: ReactNode[]; note?: ReactNode }) {
  return (
    <section className="ssec" aria-label="O que eu aprendi" style={{ gap: 32 }}>
      <span className="kicker">O que eu aprendi</span>
      <ul className="learned">{items.map((l, i) => <li key={i}>{l}</li>)}</ul>
      {note && <p className="backstage">{note}</p>}
    </section>
  );
}
