import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import {
  AfterZone, Band, BeforeAfter, Board, Feature, Ficha, Fig, Gallery, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Quote, Results, Section, SectionHead, Shots, SolutionZone, Tiles, Track,
} from '@/components/Case';
import { SectionNextSteps } from '@/components/NextSteps';

const lang: Lang = 'es';

export const metadata = { title: 'Irmãos Lacarini · Alan Gustavo' };

const img = (f: string) => `/img/hmv/${f}.webp`;

export default function Page() {
  return (
    <InnerPage lang={lang} path="/cobertura/irmaos-lacarini" current="cobertura" back={{ href: L(lang, '/cobertura'), label: 'Planta 4 · Ático' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Habitación · Irmãos Lacarini · Product design y diseño de servicios"
          title="Digitalizar la cosecha: del albarán de papel perdido al precio aplicado en bloque"
          lead="En Irmãos Lacarini, productora y exportadora de higos desde 1969, cada entrega de fruta de las familias de aparceros se registraba en papel."
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Albarán', text: '¿y la nota que escribí al lado?', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: '¿dónde está el albarán de ayer?', kind: 'yellow', style: { right: '3%', top: 40, width: 200, transform: 'rotate(6deg)' } },
              { label: 'Hoja de cálculo · cosecha', text: 'Teclear cada albarán, producto por producto, y poner el precio artículo por artículo.', kind: 'typed', style: { left: '8%', top: 180, width: 250, transform: 'rotate(3deg)' } },
              { text: 'un albarán al día, todo junto', kind: 'yellow', style: { right: '5%', top: 230, width: 190, transform: 'rotate(-4deg)' } },
              { text: 'verificación: “se acepta tal cual”', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={
              <>
                <Shots
                  items={[
                    { src: img('03-maduro'), alt: 'App del aparcero: formulario de albarán que imita el papel', caption: 'La familia registra' },
                    { src: img('05-contagem-divergencia'), alt: 'App del verificador: recuento con diferencia', caption: 'El verificador cuenta' },
                    { src: img('08-sincronizacao'), alt: 'Sincronización: albaranes enviados incluso sin señal', caption: 'Funciona sin señal' },
                  ]}
                />
                <div className="shot" style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 700 }}>
                  <img src={img('16-painel-lancar-valor')} alt="Panel: precio aplicado a varios albaranes a la vez" style={{ border: '1px solid var(--linha)', borderRadius: 14 }} />
                  <span>La oficina aplica el precio en bloque</span>
                </div>
              </>
            }
          />
          <Results
            items={[
              { title: 'El albarán ya no se pierde.', text: 'Las familias registran cada entrega en el móvil, incluso sin señal de internet.' },
              { title: 'La administración ya no teclea ningún albarán.', text: 'Llegan listos y verificados, y el precio se aplica con filtros que agilizan el cierre.' },
              { title: 'Las familias lo usan a diario.', text: 'Y esperan con ganas la evolución de la app, que les traerá todavía más comodidad.' },
            ]}
          />
          <Ficha
            items={[
              ['Mi papel', 'Product designer y diseñador de servicios: investigación de campo, diseño del proceso, wireframes, seguimiento del desarrollo, implantación y formación'],
              ['Período', 'De julio de 2026 hasta hoy · fase 1 en uso'],
              ['Entregas', 'App del aparcero, app del verificador y panel administrativo'],
              ['Usuarios', 'Más de 70 usuarios, de unas 35 familias de aparceros, de 18 a más de 60 años'],
            ]}
          />
        </Hero>

        <Quote>No serviría de nada crear una app que agilice un proceso que no existe.</Quote>

        <ProblemSection n="01" label="El desorden" title="Todo dependía solo de la confianza">
          <p>En Lacarini, quienes siembran y cosechan son los <strong>aparceros</strong>: familias que trabajan en las fincas de la empresa y cobran por lo que producen. Cada entrega de fruta genera un <strong>albarán</strong>, el documento que indica cuántas cajas de cada producto salieron de cada finca.</p>
          <p>Ese albarán era un papel, rellenado a mano en el campo. Y el papel se perdía: a veces antes de llegar al camión, a veces con el conductor, a veces en la propia verificación. Cuando la familia escribía una nota junto a un producto, casi nunca se veía con las prisas de la recepción.</p>
          <p>Al final de la cadena, la administración tecleaba cada albarán en una hoja de cálculo, producto por producto, y después ponía el precio de cada artículo para calcular cuánto pagar a cada familia a fin de mes. En la cosecha, de octubre a enero, hay unos 3 o 4 albaranes por familia al día. El equipo trabajaba de la mañana a la noche para pagar a tiempo, porque, si el pago se retrasa, el aparcero deja de producir en plena cosecha, y la fruta tiene pedidos en Brasil y en el extranjero.</p>
          <p>Todo eso funcionaba gracias a una sola cosa: la <strong>confianza</strong>. Entre la familia, el verificador y la oficina no había ningún registro común.</p>
        </ProblemSection>

        <ProblemSection n="02" label="El descubrimiento" title="El proceso en papel no era el proceso real" alt>
          <p>El encargo inicial era digitalizar el albarán. Antes de diseñar ninguna pantalla, fui al campo con el equipo: entrevisté a aparceros y verificadores y acompañé la recepción de la fruta en su propio entorno.</p>
          <p>La investigación mostró que el proceso que la empresa creía que existía no era el real:</p>
          <ul>
            <li><strong>El albarán debía hacerse en cada recogida del camión.</strong> En la práctica, las familias hacían uno al día, juntándolo todo, precisamente para perder menos papel.</li>
            <li><strong>La verificación casi no existía.</strong> Lo que llegaba se aceptaba tal como estaba escrito, cuando el papel llegaba.</li>
          </ul>
          <p>Si hubiera digitalizado el papel tal como era, la app solo habría acelerado un proceso que no ocurría. El problema no era de pantalla. Era de servicio.</p>
        </ProblemSection>
      </ProblemZone>

      <SolutionZone lang={lang} lead="Un registro común entre la familia, el verificador y la oficina.">
        <Section label="Primero el proceso">
          <SectionHead n="03" label="Primero el proceso, después la pantalla" title="Tres momentos, una herramienta para cada uno">
            <p>Junto con los stakeholders, revisamos uno a uno los procesos internos de Lacarini y definimos cómo debía funcionar de verdad cada etapa: <strong>quién registra, quién verifica y quién pone el precio, y cómo lo hace cada uno</strong>.</p>
            <p>También definimos <strong>fechas y etapas de implantación</strong>. La idea era poner el sistema en marcha sin un gran impacto en la rutina, para que la gente confiara en él antes de cualquier novedad adicional.</p>
          </SectionHead>
          <Track
            items={[
              { place: 'En el campo', title: 'La familia registra', text: 'el albarán en el campo, en cada recogida.' },
              { place: 'En la verificación', title: 'El verificador cuenta', text: 'lo que llegó y lo compara con lo declarado.' },
              { place: 'En la oficina', title: 'La administración pone el precio', text: 'y sigue lo que cada familia tiene que cobrar.' },
            ]}
          />
          <Prose>
            <p>Empecé por el papel. Dibujé a mano los flujos de las tres herramientas, pantalla por pantalla, con notas sobre cómo debía comportarse cada una. Algunos ejemplos de lo que ya estaba en esos bocetos:</p>
            <ul>
              <li><strong>Cada familia ve solo lo que produce.</strong> Los tipos de cosecha, los productos y la unidad de medida de cada artículo se configuran por aparcero en el panel, así nadie tiene que buscar su producto en una lista enorme.</li>
              <li><strong>Ayuda a un toque</strong>, ya en la pantalla de inicio de sesión, abriendo una conversación con soporte.</li>
              <li><strong>Confirmación antes de enviar</strong> el albarán.</li>
              <li><strong>El verificador ve lo que declaró el aparcero</strong> en el momento de verificar.</li>
              <li><strong>Precio en bloque y exportación</strong> ya diseñados en el panel, junto a los filtros.</li>
            </ul>
          </Prose>
          <Board>
            <Gallery min={180}>
              <Fig src={img('03-meeiro-02-inicio-tipos')} alt="Wireframe a mano: inicio de la app del aparcero con los tipos de cosecha" caption="Aparcero: tipos de cosecha" />
              <Fig src={img('07-meeiro-03-exportacao')} alt="Wireframe a mano: formulario de Exportación" caption="Aparcero: formulario de Exportación" />
              <Fig src={img('09-itens-personalizaveis-por-meeiro')} alt="Wireframe a mano: artículos configurables por aparcero" caption="Artículos configurados por aparcero" />
              <Fig src={img('11-conferente-fluxo-conferencia')} alt="Wireframe a mano: flujo de verificación" caption="Verificador: flujo de verificación" />
            </Gallery>
          </Board>
          <Prose>
            <p>Después, antes incluso de que hubiera un programador en el proyecto, monté en Figma Make un <strong>prototipo navegable</strong> de la app y del panel administrativo para las primeras reuniones con la clienta. Con él, todos pudieron tocar las pantallas y ver el proceso funcionando: la familia registrando el albarán, el verificador comparando los recuentos, la oficina aplicando el precio a varios albaranes a la vez y configurando qué productos puede registrar cada finca. Las decisiones se validaron ahí, antes de cualquier línea de código definitiva.</p>
          </Prose>
          <Gallery min={200}>
            <Fig src={img('02-p-menu')} alt="Prototipo: menú de la app del aparcero" caption="Prototipo · menú del aparcero" />
            <Fig src={img('07-c-conferencia')} alt="Prototipo: verificación" caption="Prototipo · verificación" />
            <Fig src={img('17-painel-meeiros')} alt="Prototipo: panel de aparceros y productos por finca" caption="Prototipo · productos por finca" />
          </Gallery>
        </Section>

        <Section label="Una herramienta para cada etapa">
          <SectionHead n="04" label="Una herramienta para cada etapa del servicio" title="Del campo a la oficina" />
          <Feature src={img('03-maduro')} alt="App del aparcero: formulario con Cantidad, Descripción y Observación" title="La app del aparcero">
            La usa toda la familia, desde el hijo de 18 años hasta el abuelo de más de 60. El formulario imita el papel que ya conocían, con las columnas Cantidad, Descripción y Observación, y los productos ya listados. Nadie tuvo que aprender una lógica nueva.
          </Feature>
          <Feature src={img('05-contagem-divergencia')} alt="App del verificador: recuento con lo declarado por el aparcero" title="La app del verificador" flip dark>
            El verificador ve una cola de trabajo con los albaranes pendientes de recuento. Al contar, la pantalla muestra lo que declaró el aparcero y ya rellena la cantidad recibida con el mismo número. El verificador solo ajusta con – y + cuando hay diferencia.
          </Feature>
          <Feature src={img('15-painel-administrativo')} alt="Prototipo del panel administrativo con filtros" title="El panel administrativo" wide>
            La administración ve, una al lado de la otra, lo que declaró el aparcero, lo que se recibió y lo que se aprobó en cada albarán. Para poner precios, combina varios filtros, como finca, tipo, producto, estado y período, y aplica el precio a varios albaranes a la vez.
          </Feature>
        </Section>

        <Section label="Las decisiones">
          <SectionHead n="05" label="Las decisiones" title="Pensadas para el día a día en el campo" />
          <Feature src={img('06-massa-ditar-observacao')} alt="Observación dictada por voz en la app del aparcero" title="Dictar en lugar de teclear">
            En la investigación de campo vimos que es difícil teclear en el móvil con las manos sucias de la cosecha, y las notas escritas a mano se ignoraban con las prisas. En la app, cada línea tiene un micrófono: la familia habla, aparece el texto y lo revisa antes de confirmar. El audio no se guarda.
          </Feature>
          <Feature src={img('08-sincronizacao')} alt="Pantalla de sincronización con pendientes" title="Funcionar sin señal" flip dark>
            En el campo, internet falla. El albarán se guarda en el dispositivo y se envía cuando hay conexión. La pantalla de sincronización muestra lo pendiente, lo que dio error y lo que necesita soporte.
          </Feature>
          <Tiles
            items={[
              { tag: 'Seguridad', title: 'Firmar con el propio móvil', text: 'El recuento se confirma con la huella, por seguridad. Pero la huella falla en las manos de quien ha pasado el día en el campo, así que el código del móvil funciona como alternativa.' },
              { tag: 'Control', title: 'Un dispositivo por persona', text: 'Antes de llegar a las tiendas de apps, la app se instaló por APK. Para evitar cuentas compartidas, cada usuario entra en un solo dispositivo a la vez, y el cambio de móvil se aprueba en el panel, siempre con una justificación registrada.' },
              { tag: 'Soporte', title: 'Soporte sin repetir preguntas', text: 'La pantalla de ayuda muestra un código de identificación y el contexto del usuario, para que el técnico atienda rápido.' },
              { tag: 'Confianza', title: 'Registro de todo, para generar confianza', text: 'El panel guarda una auditoría de cada acción, con quién la hizo y en qué contexto, sin exponer datos sensibles, para que familias, verificación y oficina confíen en lo que hay en el sistema.' },
            ]}
          />
        </Section>

        <Section label="Confianza antes que velocidad">
          <SectionHead n="06" label="Confianza antes que velocidad" title="Primero, que las familias confiaran en la app">
            <p>Uno de los objetivos de la primera fase era que las familias confiaran en la app. Por eso, la formación se pensó para dar seguridad, y la instalación en los dispositivos se planificó con antelación.</p>
            <p>Definí con el equipo cómo harían los técnicos cada instalación y creé un registro donde anotan los problemas y las dificultades de cada familia. Con esos datos y con reuniones frecuentes con los técnicos, sigo lo que funciona y lo que tiene que cambiar.</p>
            <p>Las familias la aprobaron y ya usan la app a diario. Y más que eso: están ilusionadas con las próximas fases, porque verán fácilmente cuánto producen, cuánto deben y cuánto van a cobrar.</p>
          </SectionHead>
        </Section>
      </SolutionZone>

      <Band
        kicker="07 · En la misma pantalla"
        title="Tres versiones de la verdad en la misma pantalla"
        cols={[
          { small: 'por la familia', big: 'Declarado' },
          { small: 'por la verificación', big: 'Recibido' },
          { small: 'por la oficina', big: 'Aprobado' },
        ]}
      />

      <AfterZone>
        <SectionNextSteps
          lang={lang}
          n="08"
          title="La habitación todavía no está terminada"
          intro={<>El mayor desafío hoy está en el propio proceso de verificación: la clienta todavía está definiendo y consolidando esa rutina. Sigo cada etapa de cerca para que los resultados sean visibles antes de avanzar.</>}
          items={[
            <><strong>Más tecnología en la verificación</strong>, para agilizar el recuento, después de validar que el proceso funciona.</>,
            <><strong>Gastos, préstamos e insumos</strong> en la app, para que cada aparcero vea cuánto debe, cuánto está pagando y cuánto va a cobrar.</>,
            <><strong>Una nueva ronda de investigación</strong>, mirando los resultados y los procesos que todavía no hemos abordado.</>,
            <><strong>Rediseñar la experiencia (UX) de los flujos</strong> en la segunda fase, a partir de lo que muestren la investigación y el uso real.</>,
          ]}
        />
        <Learned
          lang={lang}
          items={[
            'Antes de diseñar una pantalla, hay que entender cómo ocurren las cosas en la práctica, y para eso no hay nada mejor que observar y hablar con quienes de verdad hacen el trabajo. El proceso en papel y el proceso real rara vez son el mismo.',
            'Confirmé mi idea de que hay que centrarse en las personas, entender su entorno y cuidar la entrega de los cambios. Con el apoyo y la confianza de los usuarios, es más fácil cambiar y ajustar lo necesario en un proyecto cuyo plazo se discutía a menudo, evitando retrabajos que quitan todavía más tiempo a todos los implicados.',
            'Para ser el puente entre la clienta y el desarrollo, hay que diseñar la experiencia para todos: entender el proceso y traducirlo en algo que se pueda construir, y después comprobar si funciona de verdad, ofreciendo una experiencia tranquila a todos los stakeholders.',
          ]}
          note="Nota entre bastidores: diseñé el proyecto y las pantallas en baja fidelidad, y el desarrollo lo hizo un programador. Por plazo y alcance, la interfaz final todavía es un MVP y no pasó por un trabajo de UI completo. Desde la primera versión, sigo cada entrega y pido correcciones de proceso e interfaz según la prioridad."
        />
      </AfterZone>
    </InnerPage>
  );
}
