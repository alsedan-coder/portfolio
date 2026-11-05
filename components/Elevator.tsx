import Link from 'next/link';
import { floors, type FloorId } from '@/lib/floors';

/** Painel fixo do elevador, presente em todas as páginas internas. */
export function ElevatorPanel({ current }: { current: FloorId }) {
  const here = floors.find((f) => f.id === current)!;
  return (
    <nav className="elev" aria-label="Painel do elevador">
      <span className="scr" aria-label={`Você está em: ${here.name}`}>{here.button}</span>
      <span className="sep" aria-hidden="true" />
      {floors.map((f) => (
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

/** Botões de idioma. EN e ES ficam apagados até as traduções estarem prontas. */
export function Langs() {
  return (
    <div className="langs" role="group" aria-label="Idioma">
      <span className="on" aria-current="true">PT</span>
      <span className="off" title="Em breve">EN</span>
      <span className="off" title="Em breve">ES</span>
    </div>
  );
}

export function TopBar({ back }: { back: { href: string; label: string } }) {
  return (
    <header className="topbar">
      <Link href={back.href}>← {back.label}</Link>
      <Langs />
    </header>
  );
}

/** Fim da página: um botão grande para voltar de onde a pessoa veio. */
export function EndBack({ back }: { back: { href: string; label: string } }) {
  return (
    <footer className="site-foot">
      <Link href={back.href} className="end-back">← Voltar ao {back.label}</Link>
    </footer>
  );
}

/** Esqueleto de uma página interna: link de pular, cabeçalho, painel, conteúdo e rodapé. */
export function InnerPage({
  current,
  back,
  endBack = true,
  children,
}: {
  current: FloorId;
  back: { href: string; label: string };
  endBack?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <TopBar back={back} />
      <ElevatorPanel current={current} />
      <div id="conteudo">{children}</div>
      {endBack ? <EndBack back={back} /> : <footer className="site-foot" />}
    </>
  );
}
