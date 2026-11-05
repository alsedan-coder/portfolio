import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';

const lang: Lang = 'es';

export const metadata = { title: 'Sobre mí · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/sobre-mim" current="terreo" back={{ href: L(lang, '/'), label: 'Planta baja' }}>
      <main className="container about">
        <section className="intro" aria-label="Quién soy">
          <img src="/img/foto/alan-foto-busto.webp" alt="Alan Gustavo sonriendo, con gafas, camisa azul claro y corbata granate" />
          <div className="prose">
            <span className="kicker">Planta baja · Sobre mí</span>
            <h1>Nunca dejé de diseñar espacios</h1>
            <p>De niño quería ser arquitecto: dibujar espacios bonitos y que funcionaran para quienes viven en ellos. Mi padre se dio cuenta de que me gustaban los ordenadores y me enseñó informática, finanzas y administración. A los 15 años ya trabajaba en una oficina.</p>
            <p>No me hice arquitecto, pero nunca dejé de diseñar espacios. Primero fueron las tiendas y los supermercados donde resolvía la tecnología. Después, el soporte que monté desde cero para una empresa de automatización comercial, las aulas donde enseñé informática desde niños hasta personas mayores, las fachadas que instalé en una imprenta y las apps que diseñé para quienes trabajan en el campo. Hoy el espacio que diseño es el camino que las personas recorren dentro de un producto o de un servicio.</p>
            <p>Algunas de estas etapas no parecían tener mucho sentido en su momento, pero mirando atrás, cada una me enseñó una lección importante para lo que hago hoy.</p>
          </div>
        </section>

        <section className="ssec" aria-label="Cómo trabajo" style={{ gap: 32 }}>
          <div className="shead">
            <span className="kicker">Cómo trabajo</span>
            <h2>Las plantas de este edificio son también mi forma de trabajar</h2>
          </div>
          <ul className="verbs">
            <li><span className="n">1</span><b>Escuchar</b><span>Entender lo que la persona ve, lo que necesita y cómo funciona de verdad el proceso, antes de proponer cualquier pantalla.</span></li>
            <li><span className="n">2</span><b>Construir</b><span>Sacar la idea del papel: prototipo, código, prueba, aunque sea sencillo.</span></li>
            <li><span className="n">3</span><b>Enseñar</b><span>Hacer que la solución se entienda y se adopte, con formación, documentación y un lenguaje que la persona reconoce.</span></li>
            <li><span className="n">4</span><b>Diseñar</b><span>Unir todo esto en un producto o servicio completo, desde el primer contacto hasta el uso diario.</span></li>
          </ul>
          <p className="quote" style={{ fontSize: 26 }}>Me gusta pensar que la tecnología solo es eficiente cuando entendemos primero los objetivos y las expectativas de quien la usa.</p>
        </section>

        <section className="ssec" aria-label="Idiomas, formación y herramientas" style={{ gap: 32 }}>
          <div className="shead"><span className="kicker">Idiomas</span><h2>Portugués, inglés y español</h2></div>
          <dl className="list">
            <div><dt>Portugués</dt><dd>Mi lengua materna.</dd></div>
            <div><dt>Inglés</dt><dd>Leo muy bien, escribo con seguridad y puedo comunicarme sobre temas muy diversos. Desde agosto de 2026 paso una temporada en Northampton, Inglaterra, para ganar seguridad en la conversación viviendo en inglés.</dd></div>
            <div><dt>Español</dt><dd>Lo leo y lo entiendo bien; la pronunciación está oxidada por falta de uso. Durante seis meses guié paseos de cuatro horas en el Parque Nacional de Peneda-Gerês, en Portugal, explicando cada parada en portugués, inglés y español al mismo grupo.</dd></div>
          </dl>

          <div className="shead"><span className="kicker">Formación</span><h2>Formación</h2></div>
          <dl className="list">
            <div><dt>MBA en Innovación Orientada a la IA y Experiencia de Usuario (UX/UI)</dt><dd>UX Unicórnio · 2025–2027 (en curso)</dd></div>
            <div><dt>Grado en Análisis y Desarrollo de Sistemas</dt><dd>Anhanguera · 2010–2013</dd></div>
            <div><dt>Curso técnico en Diseño Gráfico</dt><dd>Anhanguera · 2015–2016</dd></div>
          </dl>

          <div className="shead"><span className="kicker">Herramientas</span><h2>Lo que uso en el día a día</h2></div>
          <dl className="list">
            <div><dt>Diseño</dt><dd>Figma, Adobe Creative Suite, CorelDRAW</dd></div>
            <div><dt>Código</dt><dd>Vibe coding, React, TypeScript, Next.js, Astro, HTML y CSS</dd></div>
            <div><dt>IA y automatización</dt><dd>Agentes de IA (Zaia), automatizaciones con Google Apps Script</dd></div>
          </dl>
        </section>

        <section className="contact" aria-label="Contacto">
          <span className="seek">Lo que busco</span>
          <h2>Puestos 100% remotos de Product Designer, UX/UI Designer o Service Designer</h2>
          <p>En empresas de Brasil, del Reino Unido o de cualquier lugar del mundo: jornada completa, prácticas o freelance.</p>
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
