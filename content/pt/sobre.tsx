import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';

const lang: Lang = 'pt';

export const metadata = { title: 'Sobre mim · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/sobre-mim" current="terreo" back={{ href: L(lang, '/'), label: 'Térreo' }}>
      <main className="container about">
        <section className="intro" aria-label="Quem eu sou">
          <img src="/img/foto/alan-foto-busto.webp" alt="Alan Gustavo sorrindo, de óculos, camisa azul-clara e gravata vinho" />
          <div className="prose">
            <span className="kicker">Térreo · Sobre mim</span>
            <h1>Nunca parei de projetar espaços</h1>
            <p>Quando criança, eu queria ser arquiteto: desenhar espaços bonitos e que funcionassem para quem vive neles. Meu pai percebeu que eu gostava de computadores e me ensinou informática, financeiro e administração. Aos 15 anos eu já estava trabalhando num escritório.</p>
            <p>Não virei arquiteto, mas nunca parei de projetar espaços. Primeiro foram as lojas e os supermercados onde eu resolvia a tecnologia. Depois, o suporte que montei do zero para uma empresa de automação comercial, as salas de aula onde ensinei informática de crianças a idosos, as fachadas que instalei numa gráfica e os apps que desenhei para quem trabalha no campo. Hoje o espaço que projeto é o caminho que as pessoas percorrem dentro de um produto ou de um serviço.</p>
            <p>Algumas dessas fases pareciam não ter muito sentido na hora, mas olhando para trás, cada uma me ensinou uma lição importante pro que eu faço hoje.</p>
          </div>
        </section>

        <section className="ssec" aria-label="Como eu trabalho" style={{ gap: 32 }}>
          <div className="shead">
            <span className="kicker">Como eu trabalho</span>
            <h2>Os andares deste prédio são também o meu jeito de trabalhar</h2>
          </div>
          <ul className="verbs">
            <li><span className="n">1</span><b>Ouvir</b><span>Entender o que a pessoa vê, o que ela precisa e como o processo funciona de verdade, antes de propor qualquer tela.</span></li>
            <li><span className="n">2</span><b>Construir</b><span>Tirar a ideia do papel: protótipo, código, teste, mesmo que simples.</span></li>
            <li><span className="n">3</span><b>Ensinar</b><span>Fazer a solução ser entendida e adotada, com treinamento, documentação e uma linguagem que a pessoa reconhece.</span></li>
            <li><span className="n">4</span><b>Projetar</b><span>Juntar tudo isso num produto ou serviço inteiro, do primeiro contato até o uso no dia a dia.</span></li>
          </ul>
          <p className="quote" style={{ fontSize: 26 }}>Gosto de pensar que a tecnologia só é eficiente quando entendemos primeiro os objetivos e as expectativas de quem a usa.</p>
        </section>

        <section className="ssec" aria-label="Idiomas, formação e ferramentas" style={{ gap: 32 }}>
          <div className="shead"><span className="kicker">Idiomas</span><h2>Português, inglês e espanhol</h2></div>
          <dl className="list">
            <div><dt>Português</dt><dd>Minha língua.</dd></div>
            <div><dt>Inglês</dt><dd>Leio muito bem, escrevo com segurança e consigo me comunicar em diversos assuntos. Desde agosto de 2026 estou passando uma temporada em Northampton, na Inglaterra, para ganhar segurança na conversa vivendo em inglês.</dd></div>
            <div><dt>Espanhol</dt><dd>Leio e entendo bem, a pronúncia está defasada por falta de uso. Por seis meses guiei passeios de quatro horas no Parque Nacional da Peneda-Gerês, em Portugal, explicando cada parada em português, inglês e espanhol para o mesmo grupo.</dd></div>
          </dl>

          <div className="shead"><span className="kicker">Formação</span><h2>Formação</h2></div>
          <dl className="list">
            <div><dt>MBA em Inovação Orientada à IA e Experiência do Usuário (UX/UI)</dt><dd>UX Unicórnio · 2025–2027 (em curso)</dd></div>
            <div><dt>Graduação em Análise e Desenvolvimento de Sistemas</dt><dd>Anhanguera · 2010–2013</dd></div>
            <div><dt>Curso técnico em Design Gráfico</dt><dd>Anhanguera · 2015–2016</dd></div>
          </dl>

          <div className="shead"><span className="kicker">Ferramentas</span><h2>O que uso no dia a dia</h2></div>
          <dl className="list">
            <div><dt>Design</dt><dd>Figma, Pacote Adobe, CorelDRAW</dd></div>
            <div><dt>Código</dt><dd>Vibe Coding, React, TypeScript, Next.js, Astro, HTML e CSS</dd></div>
            <div><dt>IA e automação</dt><dd>Agentes de IA (Zaia), automações com Google Apps Script</dd></div>
          </dl>
        </section>

        <section className="contact" aria-label="Contato">
          <span className="seek">O que eu procuro</span>
          <h2>Vagas 100% remotas de Product Designer, UX/UI Designer ou Service Designer</h2>
          <p>Em empresas do Brasil, do Reino Unido ou de qualquer lugar do mundo: tempo integral, estágio ou freelance.</p>
          <div className="links">
            <a href="mailto:al.gustavo.br@gmail.com">al.gustavo.br@gmail.com</a>
            <a href="https://www.linkedin.com/in/alangustavo-ux" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/alsedan-coder" target="_blank" rel="noopener">GitHub</a>
          </div>
        </section>
      </main>
    </InnerPage>
  );
}
