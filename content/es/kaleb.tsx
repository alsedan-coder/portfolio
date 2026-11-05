import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import {
  AfterZone, Band, BeforeAfter, Board, Cards, Feature, Ficha, Fig, Gallery, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Quote, Results, Section, SectionHead, SolutionZone, Stats, Track,
} from '@/components/Case';

const lang: Lang = 'es';

export const metadata = { title: 'Ventas y marketing de Kaleb · Alan Gustavo' };

const img = (f: string) => `/img/kaleb/${f}.webp`;

export default function Page() {
  return (
    <InnerPage lang={lang} path="/cobertura/vendas-kaleb" current="cobertura" back={{ href: L(lang, '/cobertura'), label: 'Planta 4 · Ático' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Habitación · Diseño de servicios y estrategia · Comercio"
          title="Reconectar ventas y marketing: prospección con IA y recomendaciones premiadas para un distribuidor que había dejado de vender"
          lead="Kaleb Brasil, distribuidor de sistemas de automatización para el pequeño comercio, tenía el área comercial parada. Rediseñé el servicio de ventas y marketing como un único sistema."
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Prospección', text: 'ya nadie llamando puerta a puerta', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: 'publicaciones sueltas en redes', kind: 'yellow', style: { right: '3%', top: 50, width: 190, transform: 'rotate(6deg)' } },
              { label: 'Embudo de ventas', text: 'Ningún embudo y ningún proceso para buscar nuevos leads.', kind: 'typed', style: { left: '8%', top: 190, width: 250, transform: 'rotate(3deg)' } },
              { text: '¿cliente nuevo? solo por recomendación', kind: 'yellow', style: { right: '5%', top: 240, width: 200, transform: 'rotate(-4deg)' } },
              { text: 'área comercial parada', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={
              <>
                <Fig src={img('09-service-blueprint')} alt="Service blueprint de la prospección y cualificación de leads con IA" />
                <span style={{ fontSize: 14, fontWeight: 700 }}>Un servicio de prospección documentado, del primer contacto al vendedor</span>
              </>
            }
          />
          <Results
            items={[
              { title: 'Prospección sin llamar puerta a puerta.', text: 'Un proceso documentado en un SOP, en el que el equipo solo rellena una hoja de cálculo y un agente de IA en WhatsApp hace el primer contacto y puntúa el lead de 0 a 100.' },
              { title: 'Un piloto con un objetivo claro.', text: 'Calculado al revés: del objetivo de ventas al número de leads que tenía que entrar en el embudo cada semana.' },
              { title: 'Mensajes a escala.', text: 'En una sola semana de mayo, unos 1.850 mensajes enviados, más de 1.800 entregados y unos 1.400 mensajes recibidos de los leads.' },
              { title: 'Dos programas de recomendación.', text: 'Con recompensas, para clientes y para asesorías contables asociadas, apoyados en la mayor fortaleza de la empresa: estar muy bien recomendada.' },
            ]}
          />
          <Ficha
            items={[
              ['Mi papel', 'Diseñador de servicios y estrategia: investigación, matriz CSD, benchmark, blueprint y SOP, diseño del piloto y de las métricas, construcción del sistema de prospección y coordinación del equipo'],
              ['Equipo', 'Alan Gustavo (service design y estrategia), Marta Portela (marketing) y Priscila (comercial)'],
              ['Período', 'Investigación desde noviembre de 2025 · proyecto de enero a junio de 2026'],
              ['Herramientas', 'FigJam, Zaia (agente de IA), API de WhatsApp (Meta), Google Apps Script y Google Sheets, base pública de datos de empresas, Canva'],
            ]}
          />
        </Hero>

        <ProblemSection n="01" label="El desorden" title="Un área comercial que se había detenido">
          <p>Kaleb vende y da soporte a sistemas de automatización comercial (punto de venta, stock, fiscal) para supermercados, tiendas de barrio, restaurantes y otros pequeños comercios.</p>
          <p>Cada año, muchas empresas con potencial para ser clientes abren y cierran, y Kaleb necesita encontrar las nuevas. Para ello, contrataba personas para prospectar en la calle. Pero tardaban en entender el negocio, no se mantenían implicadas mucho tiempo y no traían el resultado esperado. A principios de 2026 ya nadie hacía ese trabajo, y el área comercial estaba parada.</p>
          <p>El marketing lo llevaba una freelance y se reducía a publicaciones sencillas en redes sociales, sin conexión con las ventas.</p>
        </ProblemSection>

        <ProblemSection n="02" label="Entender antes de proponer" title="La mayor fortaleza de la empresa ya estaba ahí" alt>
          <p>Antes de empezar el proyecto, todavía en noviembre de 2025, preparé un <strong>plan de investigación</strong> con un desafío claro: entender y cuantificar por qué era tan difícil concertar visitas con nuevos clientes.</p>
          <ul>
            <li><strong>Con la CEO</strong>, reuní la información actualizada sobre clientes, ventas y lo que ya se había intentado.</li>
            <li><strong>Organicé lo que se sabía en una matriz CSD</strong>, separando certezas, suposiciones y dudas. Entre las certezas: las recomendaciones traían al menos un cliente nuevo al mes, los clientes se quedaban por confianza y no por precio, y la empresa no tenía un embudo ni un proceso para buscar nuevos leads.</li>
            <li><strong>Hice un benchmark con cinco competidores de la región</strong>, comparando funcionalidades, tipo de soporte, precio, segmentos y valoraciones en Google.</li>
            <li><strong>Participé en una reunión con otros distribuidores y con la central</strong>, para escuchar lo que estaba haciendo cada uno.</li>
          </ul>
          <p>La conclusión: no había una receta hecha. La solución tenía que encajar en el contexto de Kaleb. <strong>La empresa atiende muy bien y está muy recomendada.</strong> Lo que faltaba era un proceso para generar contactos nuevos sin depender de alguien llamando puerta a puerta.</p>
        </ProblemSection>

        <Gallery min={420}>
          <Fig src={img('01-matriz-csd')} alt="Matriz CSD: certezas, suposiciones y dudas sobre las ventas de Kaleb" caption="Matriz CSD (en portugués)" />
          <Fig src={img('02-benchmark-concorrentes')} alt="Benchmark con cinco competidores de la región" caption="Benchmark con cinco competidores (precios ocultos)" />
        </Gallery>

        <Quote>¿Cómo transmitir la confianza que los clientes ya tienen en Kaleb a comerciantes que todavía no la conocen?</Quote>
      </ProblemZone>

      <SolutionZone lang={lang} lead="Una forma de probar rápido, un proceso documentado y un agente de IA haciendo el primer contacto.">
        <Section label="PPP">
          <SectionHead n="03" label="Un método para probar rápido" title="PPP: piensa, comparte, produce">
            <p>Con poco tiempo y pocos recursos, necesitábamos probar muchas ideas sin dedicar meses a cada una. Así nació el PPP, casi como una broma dentro del equipo. La broma se convirtió en nuestra forma de trabajar en el proyecto, y con ella descubrimos, en la práctica, qué funcionaba y qué no.</p>
          </SectionHead>
          <Track
            items={[
              { title: 'Piensa', text: 'Trae una idea nueva.' },
              { title: 'Comparte', text: 'Llévala al grupo para entender si se puede hacer y cómo.' },
              { title: 'Produce', text: 'Pruébala, aunque sea de forma muy sencilla, para ver si funciona.' },
            ]}
          />
        </Section>

        <Section label="La planificación">
          <SectionHead n="04" label="La planificación" title="Dos frentes, un destino">
            <p>Organicé la estrategia en una pizarra de planificación, con dos frentes que alimentan el mismo objetivo. Todo converge en un solo punto: <strong>visitas del vendedor a leads que ya llegan calientes</strong>, ya sea por recomendación de socios, por recomendación de clientes, por interés mostrado en la prospección o por la visita a un cliente con el perfil ideal.</p>
          </SectionHead>
          <Cards
            items={[
              { title: 'Comercial · Prospección', list: ['ICPs (perfil de cliente ideal) con IA y un consultor', 'Búsqueda de leads con IA', 'Envíos por WhatsApp con el agente de IA', 'Llamadas a leads fríos que mostraron interés', 'Landing page y email marketing'] },
              { title: 'Comercial · Relación', list: ['Visitas de relación', 'Recomendación incentivada con las asesorías contables asociadas', 'Recomendación incentivada con los propios clientes'] },
              { title: 'Marketing', list: ['Físico: entrega del portafolio', 'Digital: vídeos en Instagram y blog', 'Posicionamiento: que el lead frío recuerde a Kaleb y mostrar la propuesta de valor'] },
            ]}
          />
          <Board>
            <Fig src={img('05-lousa-planejamento')} alt="Pizarra de planificación con los frentes comercial y de marketing convergiendo en las visitas del vendedor" caption="Cada acción de la pizarra se convirtió en una tarjeta con planificación, paso a paso, volumen esperado, coste aproximado y responsable (en portugués)." />
          </Board>
        </Section>

        <Section label="El nuevo servicio de prospección">
          <SectionHead n="05" label="El nuevo servicio de prospección" title="Un blueprint, un SOP y una puntuación para cada lead">
            <p>Documenté el nuevo proceso en un <strong>blueprint de servicio</strong>, con todas sus capas: las acciones del lead, los puntos de contacto, lo que ve el lead, lo que ocurre entre bastidores, los sistemas y hojas de cálculo implicados, las reglas de cualificación, las dependencias, los riesgos y las métricas de gestión.</p>
          </SectionHead>
          <Fig src={img('09-service-blueprint')} alt="Service blueprint completo de la prospección y cualificación de leads fríos con IA" />
          <Track
            items={[
              { place: 'Prospector', title: 'Rellena una hoja de cálculo', text: 'con pocos campos obligatorios: empresa, segmento, WhatsApp, dirección y ciudad.' },
              { place: 'Sistema', title: 'Valida y envía', text: 'al marcar “Enviar a la IA”, un script pasa los datos al agente.' },
              { place: 'Agente de IA', title: 'Conversa y cualifica', text: 'por WhatsApp, de forma consultiva, investigando los problemas del pequeño comercio.' },
              { place: 'Vendedor', title: 'Recibe solo los cualificados', text: 'con una puntuación y un resumen de la conversación.' },
            ]}
          />
          <Feature src={img('03-sop-1')} alt="Primera página del SOP de prospección y cualificación con IA" title="El SOP" wide>
            Para que cualquier persona pudiera operar el proceso, escribí un SOP con los papeles (prospector, agente de IA y comercial), el paso a paso de cada uno y la estructura exacta de las hojas de cálculo de entrada y de salida.
          </Feature>
          <Prose>
            <p>El agente puntúa cada lead de <strong>0 a 100</strong>, sumando criterios sencillos: interés mostrado, problema confirmado, momento de compra, perfil del negocio, capacidad de decisión y encaje con el producto.</p>
          </Prose>
          <div className="score">
            <div><b>&lt; 60</b><span>Se descarta o se recualifica, y se guarda para aprovecharlo en el futuro.</span></div>
            <div><b>De 60 a 79</b><span>Entra en nutrición y lo analizan el cualificador y el área comercial.</span></div>
            <div><b>80 o más</b><span>Va directo al vendedor.</span></div>
          </div>
          <Cards
            items={[
              { title: 'Elegir dónde prospectar', list: ['Mapas de prospección en Google My Maps, con rutas planificadas, aprobados con la dirección en enero', 'IA para encontrar los leads de cada región a partir del perfil de cliente ideal', 'Datos públicos de empresas por API, para montar la lista de tiendas'] },
              { title: 'Datos protegidos', text: 'Definí una política de acceso a las hojas de cálculo, alineada con la ley brasileña de protección de datos (LGPD): cada papel ve solo lo que necesita, y los leads calientes quedan solo para el vendedor y el gestor.' },
              { title: 'El sistema que lo conecta todo', text: 'Construí las hojas en Google Sheets y los scripts en Apps Script que envían los leads al agente de Zaia, mandan los mensajes por WhatsApp y siguen el estado de cada envío.' },
            ]}
          />
        </Section>

        <Section label="El piloto">
          <SectionHead n="06" label="Un piloto con un objetivo calculado al revés" title="Del objetivo de ventas a los leads por semana" />
          <Feature src={img('04-piloto-funil')} alt="Embudo del piloto: 400 leads fríos al mes, 11 visitas cualificadas, objetivo de 3 clientes" title="En lugar de “a ver qué pasa”" wide flip>
            Diseñé un piloto de tres meses con un objetivo concreto y calculé el embudo al revés: del objetivo de ventas a las visitas, los leads calientes, las conversaciones y, por último, el número de leads fríos que tenían que entrar cada semana. El plan preveía unos 100 leads fríos por semana, con objetivos semanales para cada papel y escenarios claros de decisión: interrumpir, validar, mantener o escalar.
          </Feature>
        </Section>

        <Section label="Lo que pasó">
          <SectionHead n="07" label="Lo que pasó" title="El sistema funcionó">
            <p>Los mensajes salían por WhatsApp con plantillas aprobadas por Meta, y un panel en la hoja de cálculo mostraba, para cada lote, cuántos se habían enviado, entregado, leído o fallado. En una sola semana de mayo (del 4 al 8):</p>
          </SectionHead>
          <Stats
            items={[
              { value: '~1.850', label: 'mensajes enviados' },
              { value: '1.800+', label: 'mensajes entregados' },
              { value: '~1.400', label: 'mensajes recibidos de los leads' },
              { value: '~3', label: 'visitas nuevas al mes, cuando el proceso arrancó' },
            ]}
          />
          <Prose>
            <p>Probamos muchas cosas antes de descubrir qué funcionaba. Cuando el proceso arrancó, los contactos y las visitas empezaron a crecer, todavía de forma tímida. Por falta de recursos, el proyecto se interrumpió en junio, antes de poder comprobar si alcanzaríamos todos los resultados del piloto.</p>
          </Prose>
        </Section>

        <Section label="Recomendaciones">
          <SectionHead n="08" label="Recomendaciones que se convierten en programa" title="La mayor fuente de ventas se convirtió en un servicio" />
          <Feature src={img('08-programa-de-parceiros')} alt="Reglamento del Programa de Beneficios para Socios de Kaleb Brasil" title="Dos programas de recomendación" wide>
            Uno para las asesorías contables y otro para los clientes. El Programa de Beneficios para Socios es un recorrido de cinco niveles (Semilla, Crecimiento, Evolución, Expansión y Cosecha), con reglas claras sobre qué cuenta como recomendación válida, recuento mensual y recompensas en experiencias y vales.
          </Feature>
          <Cards
            items={[
              { title: 'Contables como socios', text: 'En abril escribí y apliqué una encuesta cuantitativa a las asesorías. Por email llegaron pocas respuestas. Así que cambiamos el enfoque: contacto por WhatsApp y una cesta con una tarjeta invitando a cada una al programa. Eso abrió unas cinco conversaciones con contables.' },
              { title: 'Una newsletter quincenal', text: 'Por email, para clientes y contables, para mantener viva la relación entre un contacto y otro.' },
              { title: 'Redes sociales con una función', text: 'Contenido pensado para generar confianza y alimentar la prospección y las recomendaciones.' },
            ]}
          />
        </Section>
      </SolutionZone>

      <Band
        kicker="09 · Lo que quedó"
        title="Un equipo que aprendió a probar rápido"
        text="Y que siguió junto: de ahí nació SHEEP³."
      />

      <AfterZone>
        <Learned
          lang={lang}
          items={[
            'Antes de proponer una solución, hay que organizar lo que se sabe y lo que es solo una suposición. La matriz CSD mostró que la respuesta estaba en una fortaleza que la empresa ya tenía.',
            'Un objetivo calculado al revés convierte “vamos a probar IA” en una decisión que la dirección puede seguir.',
            'Menos campos generan mejores datos: la IA funciona bien cuando recibe poco contexto, pero bien definido.',
            'La tecnología no sustituye al vendedor: le quita el trabajo repetitivo para que se ocupe de las personas.',
          ]}
        />
      </AfterZone>
    </InnerPage>
  );
}
