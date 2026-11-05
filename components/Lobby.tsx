import Link from 'next/link';
import { floors } from '@/lib/floors';
import { contact } from '@/lib/contact';
import { L, ui, type Lang } from '@/lib/i18n';
import { Langs } from './Elevator';

const card: Record<Lang, { role: string; intro: string; alt: string }> = {
  pt: {
    role: 'Product Designer · UX/UI · Design de Serviço',
    intro: '17 anos do lado de quem usa a tecnologia. Hoje projeto produtos e serviços para que ela funcione para essas pessoas.',
    alt: 'Alan Gustavo sorrindo, de óculos, camisa azul-clara e gravata vinho',
  },
  en: {
    role: 'Product Designer · UX/UI · Service Design',
    intro: '17 years on the side of the people who use technology. Today I design products and services so that it works for them.',
    alt: 'Alan Gustavo smiling, wearing glasses, a light blue shirt and a burgundy tie',
  },
  es: {
    role: 'Product Designer · UX/UI · Diseño de Servicios',
    intro: '17 años del lado de quienes usan la tecnología. Hoy diseño productos y servicios para que funcione para esas personas.',
    alt: 'Alan Gustavo sonriendo, con gafas, camisa azul claro y corbata granate',
  },
};

/** Térreo: o card do Alan e o painel do elevador, dentro da cabine. */
export function Lobby({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const c = card[lang];
  return (
    <div className="lobby">
      <div className="scene" aria-hidden="true">
        <div className="back" />
        <div className="wall l" />
        <div className="wall r" />
        <div className="ceil" />
        <div className="light" />
      </div>

      <main>
        <section className="placa" aria-label="Alan Gustavo Souza Santos">
          <div className="who">
            <img src="/img/foto/alan-foto-busto.webp" alt={c.alt} />
            <h1>Alan Gustavo<br />Souza Santos</h1>
          </div>
          <p className="role">{c.role}</p>
          <p className="intro">{c.intro}</p>
          <div className="facts">
            <div><span>{t.availableFor}</span><span>{t.remoteRoles}</span></div>
            <div><span>{t.languages}</span><span>Português · English · Español</span></div>
          </div>
          <div className="cta">
            <a className="primary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            <Link href={L(lang, '/sobre-mim')}>{t.aboutMe} →</Link>
          </div>
        </section>

        <nav className="painel" aria-label={t.panel}>
          <div className="mostrador"><span>T</span><span>{t.ground}</span></div>
          <Langs lang={lang} path="/" />
          <ul>
            {floors(lang).map((f) => (
              <li key={f.id} className={f.id === 'terreo' ? 'here' : undefined}>
                <Link href={f.href} aria-current={f.id === 'terreo' ? 'page' : undefined}>
                  <span className="btn" aria-hidden="true">{f.button}</span>
                  <span className="txt">
                    <span className="nm">{f.name}</span>
                    <span className="ds">{f.desc}{f.years ? ` · ${f.years}` : ''}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
