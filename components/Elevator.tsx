import Link from 'next/link';
import { floors, type FloorId } from '@/lib/floors';
import { L, langs, ui, type Lang } from '@/lib/i18n';

/** Painel fixo do elevador, presente em todas as páginas internas. */
export function ElevatorPanel({ lang, current }: { lang: Lang; current: FloorId }) {
  const list = floors(lang);
  const here = list.find((f) => f.id === current)!;
  return (
    <nav className="elev" aria-label={ui[lang].panel}>
      <span className="scr" aria-label={`${ui[lang].youAreOn}: ${here.name}`}>{here.button}</span>
      <span className="sep" aria-hidden="true" />
      {list.map((f) => (
        <Link key={f.id} href={f.href} aria-current={f.id === current ? 'page' : undefined}>
          <span className="lbl">
            {f.name}
            <small>{f.desc}</small>
          </span>
          <span className={`b${f.id === current ? ' on' : ''}`} aria-hidden="true">{f.button}</span>
        </Link>
      ))}
    </nav>
  );
}

/** Botões de idioma: levam para a mesma página nos outros idiomas. */
export function Langs({ lang, path }: { lang: Lang; path: string }) {
  return (
    <div className="langs" role="group" aria-label={ui[lang].language}>
      {langs.map((l) =>
        l === lang ? (
          <span key={l} className="on" aria-current="true">{l.toUpperCase()}</span>
        ) : (
          <a key={l} href={L(l, path)} hrefLang={l}>{l.toUpperCase()}</a>
        ),
      )}
    </div>
  );
}

export type Back = { href: string; label: string };

export function TopBar({ lang, path, back }: { lang: Lang; path: string; back: Back }) {
  return (
    <header className="topbar">
      <Link href={back.href}>← {back.label}</Link>
      <Langs lang={lang} path={path} />
    </header>
  );
}

/** Fim da página: um botão grande para voltar de onde a pessoa veio. */
export function EndBack({ lang, back }: { lang: Lang; back: Back }) {
  return (
    <footer className="site-foot">
      <Link href={back.href} className="end-back">← {ui[lang].backTo} {back.label}</Link>
    </footer>
  );
}

/** Esqueleto de uma página interna: cabeçalho com idiomas, painel do elevador, conteúdo e botão de voltar. */
export function InnerPage({
  lang,
  path,
  current,
  back,
  endBack = true,
  children,
}: {
  lang: Lang;
  path: string;
  current: FloorId;
  back: Back;
  endBack?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar lang={lang} path={path} back={back} />
      <ElevatorPanel lang={lang} current={current} />
      <div id="conteudo">{children}</div>
      {endBack ? <EndBack lang={lang} back={back} /> : <footer className="site-foot" />}
    </>
  );
}
