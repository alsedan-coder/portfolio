import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';

const lang: Lang = 'en';

export const metadata = { title: 'About me · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/sobre-mim" current="terreo" back={{ href: L(lang, '/'), label: 'Ground floor' }}>
      <main className="container about">
        <section className="intro" aria-label="Who I am">
          <img src="/img/foto/alan-foto-busto.webp" alt="Alan Gustavo smiling, wearing glasses, a light blue shirt and a burgundy tie" />
          <div className="prose">
            <span className="kicker">Ground floor · About me</span>
            <h1>I never stopped designing spaces</h1>
            <p>As a child I wanted to be an architect: to draw beautiful spaces that worked for the people living in them. My father noticed I liked computers and taught me IT, finance and administration. At 15 I was already working in an office.</p>
            <p>I did not become an architect, but I never stopped designing spaces. First it was the shops and supermarkets where I sorted out the technology. Then the support service I built from scratch for a retail automation company, the classrooms where I taught IT to everyone from children to older adults, the shop fronts I installed for a print shop and the apps I designed for people who work in the fields. Today the space I design is the path people take through a product or a service.</p>
            <p>Some of these phases did not seem to make much sense at the time, but looking back, each one taught me an important lesson for what I do today.</p>
          </div>
        </section>

        <section className="ssec" aria-label="How I work" style={{ gap: 32 }}>
          <div className="shead">
            <span className="kicker">How I work</span>
            <h2>The floors of this building are also the way I work</h2>
          </div>
          <ul className="verbs">
            <li><span className="n">1</span><b>Listen</b><span>Understand what people see, what they need and how the process really works, before proposing any screen.</span></li>
            <li><span className="n">2</span><b>Build</b><span>Get the idea off paper: prototype, code, test, even if it is simple.</span></li>
            <li><span className="n">3</span><b>Teach</b><span>Make the solution understood and adopted, with training, documentation and language people recognise.</span></li>
            <li><span className="n">4</span><b>Design</b><span>Bring all of this together into a whole product or service, from first contact to everyday use.</span></li>
          </ul>
          <p className="quote" style={{ fontSize: 26 }}>I like to think that technology is only efficient when we first understand the goals and expectations of the people who use it.</p>
        </section>

        <section className="ssec" aria-label="Languages, education and tools" style={{ gap: 32 }}>
          <div className="shead"><span className="kicker">Languages</span><h2>Portuguese, English and Spanish</h2></div>
          <dl className="list">
            <div><dt>Portuguese</dt><dd>My native language.</dd></div>
            <div><dt>English</dt><dd>I read very well, write with confidence and can hold conversations on a wide range of topics. Since August 2026 I have been spending time in Northampton, England, to gain confidence in conversation by living in English.</dd></div>
            <div><dt>Spanish</dt><dd>I read and understand it well; my pronunciation is rusty from lack of use. For six months I guided four-hour tours in Peneda-Gerês National Park, in Portugal, explaining each stop in Portuguese, English and Spanish to the same group.</dd></div>
          </dl>

          <div className="shead"><span className="kicker">Education</span><h2>Education</h2></div>
          <dl className="list">
            <div><dt>MBA in AI-Driven Innovation and User Experience (UX/UI)</dt><dd>UX Unicórnio · 2025–2027 (in progress)</dd></div>
            <div><dt>Degree in Systems Analysis and Development</dt><dd>Anhanguera · 2010–2013</dd></div>
            <div><dt>Technical course in Graphic Design</dt><dd>Anhanguera · 2015–2016</dd></div>
          </dl>

          <div className="shead"><span className="kicker">Tools</span><h2>What I use day to day</h2></div>
          <dl className="list">
            <div><dt>Design</dt><dd>Figma, Adobe Creative Suite, CorelDRAW</dd></div>
            <div><dt>Code</dt><dd>Vibe coding, React, TypeScript, Next.js, Astro, HTML and CSS</dd></div>
            <div><dt>AI and automation</dt><dd>AI agents (Zaia), automations with Google Apps Script</dd></div>
          </dl>
        </section>

        <section className="contact" aria-label="Contact">
          <span className="seek">What I am looking for</span>
          <h2>100% remote roles as a Product Designer, UX/UI Designer or Service Designer</h2>
          <p>At companies in Brazil, the United Kingdom or anywhere in the world: full-time, internship or freelance.</p>
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
