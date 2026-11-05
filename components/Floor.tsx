import Link from 'next/link';
import { getFloor, neighbours, type FloorId } from '@/lib/floors';

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
  id,
  intro,
  rooms = [],
  windows = [],
}: {
  id: FloorId;
  intro: string;
  rooms?: RoomCard[];
  windows?: WindowItem[];
}) {
  const f = getFloor(id);
  const { up, down } = neighbours(id);
  return (
    <main className="container wide floor">
      <div className="head">
        <span className="kicker">Andar {f.button} · {f.years}</span>
        <h1>{f.name}</h1>
        <p>{intro}</p>
      </div>

      {rooms.length > 0 && (
        <section aria-label="Cômodos">
          <span className="label">Cômodos</span>
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
                <span className="go">Entrar no cômodo</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {windows.length > 0 && (
        <section aria-label="Janelas">
          <span className="label">Janelas</span>
          <div className="windows">
            {windows.map((w) => (
              <article key={w.title} className="window">
                <span className="kicker">{w.meta}</span>
                <h3>{w.title}</h3>
                <div className="body">{w.body}</div>
                {w.learned && (
                  <p className="learned"><strong>O que eu aprendi</strong>{w.learned}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      <nav className="floor-nav" aria-label="Navegação entre andares">
        {up ? <Link href={up.href}>↑ Subir para o {up.button} · {up.name}</Link> : <span />}
        {down && <Link href={down.href}>Descer para {down.button === 'T' ? 'o Térreo' : `o ${down.button} · ${down.name}`} ↓</Link>}
      </nav>
    </main>
  );
}
