import Link from 'next/link';
import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import {
  AfterZone, Band, BeforeAfter, Cards, Ficha, Fig, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Results, Section, SectionHead, SolutionZone,
} from '@/components/Case';

const lang: Lang = 'es';

export const metadata = { title: 'El soporte de Kaleb · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/fundacao/suporte-kaleb" current="fundacao" back={{ href: L(lang, '/fundacao'), label: 'Planta 1 · Cimientos' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Habitación · Diseño de servicios · Soporte · 2009–2016"
          title="El soporte que se convirtió en canal de ventas: lo fundé desde cero y todavía genera recomendaciones"
          lead="Cuando entré en Kaleb Brasil, el soporte no existía. Mi padre, fundador de la empresa, atendía a los clientes él solo, por teléfono y en persona. Fui el primer empleado y monté el soporte desde cero."
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Soporte', text: 'solo por teléfono, sin ver la pantalla del cliente', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: '¿qué te aparece en la pantalla?', kind: 'yellow', style: { right: '3%', top: 50, width: 190, transform: 'rotate(6deg)' } },
              { label: 'Empresa', text: 'Sin procesos, sin equipo y sin acceso remoto.', kind: 'typed', style: { left: '8%', top: 190, width: 250, transform: 'rotate(3deg)' } },
              { text: '¡la impresora fiscal se paró!', kind: 'yellow', style: { right: '5%', top: 245, width: 190, transform: 'rotate(-4deg)' } },
              { text: 'caja parada es venta perdida', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={<Fig src="/img/suporte/timeline.webp" alt="Línea de tiempo de 2009 a 2016: de unos 30 a 250 clientes" link={false} />}
          />
          <Results
            items={[
              { title: 'De unos 30 a 250 clientes.', text: 'Y yo hice la mayor parte de las instalaciones y formaciones de ese período.' },
              { title: 'Unas 10 personas formadas.', text: 'Pasaron por el soporte con los guiones y principios de atención que creé.' },
              { title: 'La base se usa hasta hoy.', text: 'Y la opinión de los clientes sigue siendo la misma que cuando los atendía yo solo.' },
              { title: 'El soporte se convirtió en el as de la empresa.', text: 'Gracias a él, Kaleb recibe tantas recomendaciones, que siguen siendo su principal fuente de nuevos clientes.' },
            ]}
          />
          <Ficha
            items={[
              ['Mi papel', 'Primer empleado: creación del soporte, instalaciones y formación de clientes, guiones de atención, formación del equipo; después, gerente de soporte técnico'],
              ['Período', 'De 2009 a 2016'],
              ['Clientes', 'Pequeños y medianos comercios: supermercados, tiendas, restaurantes y otros'],
              ['Tecnología', 'Sistemas de automatización comercial, impresoras fiscales antiguas y nuevas, impresoras de etiquetas y adaptaciones a cambios fiscales'],
            ]}
          />
        </Hero>

        <ProblemSection n="01" label="El desorden" title="Resolver sin ver">
          <p>No había procesos, ni equipo, ni acceso remoto. Toda la atención se hacía <strong>por teléfono</strong> o yendo hasta el cliente.</p>
          <p>Sin ver la pantalla, tenía que entender por la voz del cliente lo que pasaba en su ordenador o en su impresora fiscal y explicar, paso a paso, cómo resolverlo. Cada llamada era un ejercicio de escucha: hacer las preguntas correctas, traducir lo que la persona describía y hablar su idioma, no el del técnico.</p>
        </ProblemSection>

        <ProblemSection n="02" label="Aprender a escuchar" title="Ahí aprendí a escuchar" alt>
          <p>Para resolver un problema sin verlo, necesitaba entender:</p>
          <ul>
            <li><strong>Quién estaba al otro lado</strong> y cuánto sabía de tecnología.</li>
            <li><strong>Lo que veía de verdad</strong>, y no lo que yo imaginaba.</li>
            <li><strong>Lo que necesitaba para seguir trabajando</strong>, porque, para un comerciante, la caja parada es venta perdida.</li>
          </ul>
          <p>Esta forma de atender se convirtió en la base de todo lo que hago hoy en diseño: entender el contexto real de quien usa algo antes de proponer cualquier solución.</p>
        </ProblemSection>
      </ProblemZone>

      <SolutionZone lang={lang} lead="Una forma de atender que se convirtió en el estándar de la empresa.">
        <Section label="De cero a 250 clientes">
          <SectionHead n="03" label="De cero a una cartera de 250 clientes" title="El soporte iba más allá del software">
            <p>A medida que la empresa crecía, hice la mayor parte de las <strong>instalaciones y formaciones</strong> de los nuevos clientes. Pasé por muchas tecnologías: de las impresoras fiscales antiguas a las más nuevas, impresoras de etiquetas y los muchos cambios en la legislación fiscal, que aprendía para adaptar los sistemas y enseñar a los clientes.</p>
            <p>Los clientes también preguntaban por su negocio, no solo por el sistema. Por eso estudiaba para dar <strong>consejos de exposición de productos</strong> y de organización de la tienda.</p>
          </SectionHead>
        </Section>

        <Section label="Una forma de atender">
          <SectionHead n="04" label="Una forma de atender" title="El cliente primero">
            <p>Cuando el equipo empezó a crecer, creé <strong>guiones de atención</strong> y empecé a formar a cada persona nueva. Más que procedimientos técnicos, enseñaba principios:</p>
          </SectionHead>
          <Cards
            items={[
              { big: '01', title: 'Pensar en la experiencia del cliente en cada detalle', text: 'Un ejemplo: al visitar una tienda, nunca aparcar en un sitio que pudiera impedir que sus clientes llegaran y fueran atendidos.' },
              { big: '02', title: 'Atender con calidad, siempre', text: 'El mismo cuidado en la primera llamada y en la número cien.' },
              { big: '03', title: 'Ayudar al negocio, no solo al sistema', text: 'Si el cliente pregunta, buscamos la respuesta.' },
            ]}
          />
        </Section>
      </SolutionZone>

      <Band
        kicker="05 · Años después"
        title="Los clientes se quedan por confianza, no por precio"
        text="Años después, en la reestructuración comercial de Kaleb, la investigación lo confirmó con datos: la atención es el gran diferencial de la empresa, y la nueva estrategia se construyó sobre ella."
      />

      <AfterZone>
        <Prose>
          <p>De 2017 a 2022 pasé a liderar el equipo de soporte y, más tarde, la empresa. <Link href={L(lang, '/acabamento')}>Esa etapa está en la planta 3 · Acabados →</Link></p>
        </Prose>
        <Learned
          lang={lang}
          items={[
            'Escuchar de verdad es el primer paso para resolver cualquier problema, sobre todo cuando no puedes ver lo que la otra persona ve.',
            'La experiencia del cliente está en los detalles, incluso en dónde aparcas el coche.',
            'Un buen servicio se sostiene en principios, no solo en procedimientos. Cuando el equipo entiende el porqué, el estándar se mantiene aunque no estés cerca.',
            'Un soporte excelente no es un coste: es el mejor canal de ventas que una empresa puede tener.',
          ]}
        />
      </AfterZone>
    </InnerPage>
  );
}
