import Link from 'next/link';
import { getFloor, neighbours, type FloorId } from '@/lib/floors';
import { ui, type Lang } from '@/lib/i18n';

export type RoomCard = {
  href: string;
  kicker: string;
  title: string;
  text: string;
  tags: string[];
  cover?: { src: string; alt: string };
};

export type WindowItem = {
  meta: string;
  title: string;
  body: React.ReactNode;
  learned?: React.ReactNode;
};

export function FloorPage({
  lang,
  id,
  intro,
  rooms = [],
  windows = [],
}: {
  lang: Lang;
  id: FloorId;
  intro: string;
  rooms?: RoomCard[];
  windows?: WindowItem[];
}) {
  const t = ui[lang];
  const f = getFloor(lang, id);
  const { up, down } = neighbours(lang, id);
  return (
    <main className="container wide floor">
      <div className="head">
        <span className="kicker">{t.floor} {f.button} · {f.years}</span>
        <h1>{f.name}</h1>
        <p>{intro}</p>
      </div>

      {rooms.length > 0 && (
        <section aria-label={t.rooms}>
          <span className="label">{t.rooms}</span>
          <div className="rooms">
            {rooms.map((r) => (
              <Link key={r.href} href={r.href} className="room">
                {r.cover && (
                  <span className="cover"><img src={r.cover.src} alt={r.cover.alt} loading="lazy" /></span>
                )}
                <span className="kicker">{r.kicker}</span>
                <h2>{r.title}</h2>
                <p>{r.text}</p>
                <span className="tags">{r.tags.map((t) => <span key={t}>{t}</span>)}</span>
                <span className="go">{t.enterRoom}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {windows.length > 0 && (
        <section aria-label={t.windows}>
          <span className="label">{t.windows}</span>
          <div className="windows">
            {windows.map((w) => (
              <article key={w.title} className="window">
                <span className="kicker">{w.meta}</span>
                <h3>{w.title}</h3>
                <div className="body">{w.body}</div>
                {w.learned && (
                  <p className="learned"><strong>{t.learned}</strong>{w.learned}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      <nav className="floor-nav" aria-label={t.floorsNav}>
        {up ? <Link href={up.href}>↑ {t.up} {up.button} · {up.name}</Link> : <span />}
        {down && <Link href={down.href}>{down.id === 'terreo' ? t.downGround : `${t.down} ${down.button} · ${down.name}`} ↓</Link>}
      </nav>
    </main>
  );
}
