import Link from 'next/link';
import { floors } from '@/lib/floors';
import { contact } from '@/lib/contact';

export default function Terreo() {
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
            <img src="/img/foto/alan-foto-busto.webp" alt="Alan Gustavo sorrindo, de óculos, camisa azul-clara e gravata vinho" />
            <h1>Alan Gustavo<br />Souza Santos</h1>
          </div>
          <p className="role">Product Designer · UX/UI · Design de Serviço</p>
          <p className="intro">17 anos do lado de quem usa a tecnologia. Hoje projeto produtos e serviços para que ela funcione para essas pessoas.</p>
          <div className="facts">
            <div><span>Disponível para</span><span>Vagas 100% remotas</span></div>
            <div><span>Idiomas</span><span>Português · English · Español</span></div>
          </div>
          <div className="cta">
            {contact.whatsapp && (
              <a className="primary" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
            )}
            <a className={contact.whatsapp ? '' : 'primary'} href={`mailto:${contact.email}`}>{contact.email}</a>
            <Link href="/sobre-mim">Sobre mim →</Link>
          </div>
        </section>

        <nav className="painel" aria-label="Painel do elevador">
          <div className="mostrador"><span>T</span><span>Térreo</span></div>
          <div className="langs" role="group" aria-label="Idioma">
            <span className="on" aria-current="true">PT</span>
            <span className="off" title="Em breve">EN</span>
            <span className="off" title="Em breve">ES</span>
          </div>
          <ul>
            {floors.map((f) => (
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
