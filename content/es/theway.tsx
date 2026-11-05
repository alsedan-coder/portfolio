import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import {
  AfterZone, Band, BeforeAfter, Feature, Ficha, Fig, Gallery, Hero, Learned, ProblemSection, ProblemZone,
  Results, Section, SectionHead, Shots, SolutionZone, Tiles, Track,
} from '@/components/Case';

const lang: Lang = 'es';

export const metadata = { title: 'TheWay · Alan Gustavo' };

const r = (f: string) => `/img/getway/${f}.webp`;

export default function Page() {
  return (
    <InnerPage lang={lang} path="/estrutura/theway" current="estrutura" back={{ href: L(lang, '/estrutura'), label: 'Planta 2 · Estructura' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Habitación · Producto móvil · 2013–2014"
          title="¿Cuánto cuesta llegar? Una app de viajes para coches populares sin ordenador de a bordo, en 2013"
          lead={<>Una app en la que indicas <strong>desde dónde sales, adónde vas y cuál es tu coche</strong>, y te muestra <strong>cuántos litros vas a gastar, cuánto va a costar y cuánto le toca a cada uno</strong>. La idea fue mía.</>}
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Viaje', text: '¿cuántos km por litro hace este coche?', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: '¿ordenador de a bordo? solo en coches caros', kind: 'yellow', style: { right: '3%', top: 50, width: 200, transform: 'rotate(6deg)' } },
              { label: 'El bote', text: 'Distancia, consumo, precio del litro y cuántas personas: todo de cabeza.', kind: 'typed', style: { left: '8%', top: 190, width: 250, transform: 'rotate(3deg)' } },
              { text: 'sobró en el depósito, faltó en el bolsillo', kind: 'yellow', style: { right: '5%', top: 245, width: 190, transform: 'rotate(-4deg)' } },
              { text: '¿nos llegará la gasolina?', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={
              <Shots
                n={4}
                items={[
                  { src: r('01-abertura'), alt: 'TheWay: pantalla de inicio', caption: 'Inicio' },
                  { src: r('02-trajeto'), alt: 'TheWay: origen, destino y ruta en el mapa', caption: 'Trayecto' },
                  { src: r('03-carro'), alt: 'TheWay: elección del coche por modelo y año', caption: 'Coche' },
                  { src: r('04-calculo'), alt: 'TheWay: litros, coste y reparto por ocupante', caption: 'Cálculo' },
                ]}
              />
            }
          />
          <Results
            items={[
              { title: 'El único proyecto de fin de carrera móvil de la clase.', text: 'Desarrollado en unos 4 meses, aprendiendo Android desde cero con ayuda de libros.' },
              { title: 'Publicado en Google Play en 2014.', text: 'Con el nombre TheWay.' },
              { title: 'Hecho para coches populares.', text: 'Sin ordenador de a bordo, con una tabla propia de consumo de cada modelo.' },
              { title: 'Presentado en charlas.', text: 'Sobre la experiencia de crear y lanzar un producto todavía en la universidad.' },
            ]}
          />
          <Ficha
            items={[
              ['Mi papel', 'Idea del producto, diseño visual y flujos (UX/UI), programación front-end en Android, guía de pantallas y flujos para el equipo, coordinación con metodologías ágiles'],
              ['Equipo', 'Alan Gustavo, Michael Felício y Fábio Pires (el grupo del proyecto tenía cinco personas; nosotros tres construimos la app y seguimos con ella)'],
              ['Período', '2013 (proyecto de fin de carrera) · 2014 (publicación)'],
              ['Tecnología', 'Android nativo en Java, Google Maps y Directions API, base de datos local'],
              ['Plataforma', 'Android, publicada en Google Play'],
            ]}
          />
        </Hero>

        <ProblemSection n="01" label="El desorden" title="Cada viaje acababa con un bote calculado de cabeza">
          <p>La cuenta de un viaje en coche parece sencilla, pero tiene muchas incógnitas: la distancia exacta, cuántos kilómetros hace el coche por litro, el precio del combustible y cuántas personas van a dividir el gasto. Sin ordenador de a bordo, el consumo era una suposición.</p>
          <p>Para nosotros, como universitarios, equivocarse salía caro. A veces el combustible no llegaba, a veces sobraba, y el dinero que se quedaba en el depósito faltaba para otra cosa.</p>
          <p>No existía nada en el mercado que lo resolviera.</p>
        </ProblemSection>

        <ProblemSection n="02" label="La idea" title="Un problema que yo mismo vivía" alt>
          <p>Cuando llegó el momento de elegir el proyecto de fin de carrera, llevé al grupo un problema que yo mismo vivía: viajaba mucho y quería dividir los viajes con los amigos de forma rápida y justa, solo indicando el coche y el destino.</p>
          <p>El grupo compró la idea, y tomamos dos decisiones que se salían de lo habitual en la clase:</p>
          <ul>
            <li><strong>Hacerlo para móvil.</strong> Los otros proyectos eran programas de ordenador. Nosotros queríamos algo que cupiera en el bolsillo y que cualquiera pudiera usar.</li>
            <li><strong>Hacerlo para Android</strong>, porque creíamos que el mercado móvil sería el futuro y queríamos aprender la herramienta.</li>
          </ul>
        </ProblemSection>
      </ProblemZone>

      <SolutionZone lang={lang} lead="Una app en el bolsillo, para la cuenta que antes se hacía de cabeza.">
        <Section label="Construir aprendiendo">
          <SectionHead n="03" label="Construir aprendiendo" title="De cero a la app terminada en unos 4 meses">
            <p>En 2013 casi no había contenido sobre Android en Brasil. Compramos libros, leímos artículos en inglés y aprendimos a desarrollar en Eclipse con la biblioteca de Android, porque Android Studio todavía no existía.</p>
          </SectionHead>
          <Track
            items={[
              { place: 'Ruta', title: 'Origen y destino', text: 'escritos como direcciones. La app mostraba la ruta, la distancia y el tiempo del viaje en Google Maps.' },
              { place: 'Coche', title: 'El coche', text: 'elegido por modelo, año y potencia.' },
              { place: 'Combustible', title: 'Gasolina o etanol', text: 'y el precio del litro.' },
              { place: 'Resultado', title: 'La cuenta hecha', text: 'el total de litros, el coste del viaje y cuánto le toca a cada ocupante.' },
            ]}
          />
          <Gallery min={180}>
            <Fig src={r('01-abertura')} alt="TheWay 2013: inicio con el eslogan El camino para ahorrar" caption="Inicio" />
            <Fig src={r('02-trajeto')} alt="TheWay 2013: trayecto de Campinas a São Paulo en el mapa" caption="Trayecto" />
            <Fig src={r('03-carro')} alt="TheWay 2013: selección del coche" caption="Coche" />
            <Fig src={r('04-calculo')} alt="TheWay 2013: litros necesarios, coste total y coste por ocupante" caption="Cálculo" />
          </Gallery>
          <p className="backstage">Las pantallas de 2013 se reconstruyeron a partir del código y las imágenes originales del proyecto.</p>
        </Section>

        <Section label="Las decisiones">
          <SectionHead n="04" label="Las decisiones" title="Pensado para quien tenía menos recursos" />
          <Feature src={r('03-carro')} alt="Selección del coche por modelo y año" title="Una tabla de consumo en lugar del ordenador de a bordo">
            La mayoría de los coches no tenía ordenador de a bordo, y casi nadie sabe de memoria cuántos kilómetros hace su coche por litro. Creamos una tabla propia con el consumo de gasolina y etanol de los modelos populares más vendidos en Brasil, como Ka, Palio, Gol, Uno, Sandero y Clio. La persona solo tenía que elegir su coche.
          </Feature>
          <Tiles
            items={[
              { tag: 'Público', title: 'Empezar por los coches populares', text: 'Limitamos la lista a los modelos más comunes a propósito. El público eran estudiantes y familias con un presupuesto ajustado, no dueños de coches de lujo.' },
              { tag: 'Realidad', title: 'Precio del combustible indicado por la persona', text: 'El precio cambia de una gasolinera a otra y de una semana a otra. Dejar que la persona escribiera el precio que vio en el surtidor acercaba la cuenta a la realidad.' },
              { tag: 'Acceso', title: 'Funcionar en cualquier dispositivo', text: 'En 2013 cada móvil Android tenía un tamaño de pantalla distinto. Creamos versiones de las pantallas para unas 20 combinaciones de tamaño y densidad, casi sin referencias.' },
              { tag: 'Lenguaje', title: 'Mensajes que hablan con la persona', text: 'Cuando internet fallaba, la app pedía comprobar la señal y volver a intentarlo, en lugar de mostrar un error técnico.' },
            ]}
          />
        </Section>

        <Section label="Lanzar y aprender">
          <SectionHead n="05" label="Lanzar y aprender" title="“El camino para ahorrar”">
            <p>En 2014, ya graduados, publicamos TheWay en Google Play con el eslogan “O caminho para economia”, el camino para ahorrar.</p>
            <p>La app tuvo algunas descargas, pero nada significativo. Mirando atrás, la razón está clara: <strong>la lanzamos sin ninguna promoción</strong>. No hicimos campañas, no fuimos a eventos, no pensamos en cómo la gente iba a descubrir la app. Después, la vida personal, el trabajo y otros proyectos ocuparon el tiempo de todos, y el proyecto se quedó parado.</p>
            <p>Aun así, la experiencia valió la pena: presentamos el proyecto en <strong>charlas en varios eventos</strong> sobre las dificultades y los aprendizajes de crear y lanzar un producto siendo tan jóvenes.</p>
          </SectionHead>
        </Section>

        <Section label="La próxima versión">
          <SectionHead n="06" label="La próxima versión, que se quedó en papel" title="GetWay: colores por función y viajes compartidos">
            <p>Después del lanzamiento, diseñé una nueva versión de la app, llamada GetWay, para seguir con el proyecto. Nunca llegó a lanzarse, pero muestra cómo ya pensaba la evolución de un producto:</p>
            <ul>
              <li><strong>Una pantalla de inicio con cuatro áreas grandes</strong>: Ruta, Coche, Combustible y Resultado.</li>
              <li><strong>Un sistema de colores por función</strong> que acompañaba a la persona en cada paso: rojo para la ruta, azul para el coche, morado para el combustible y naranja para el resultado.</li>
              <li><strong>Rutas y coches guardados</strong>, para no empezar de cero en cada viaje.</li>
              <li><strong>Comparación entre etanol y gasolina</strong>, para ayudar a elegir el combustible más ventajoso.</li>
              <li><strong>Una visión de viajes compartidos</strong>: amigos en el mismo camino dividirían el coste del viaje, incluso solo hasta el punto en que cada uno se bajara. Los peajes también entraban en los planes.</li>
            </ul>
            <p>Llegamos a organizar el trabajo en sprints, pero el equipo decidió concentrar el esfuerzo en un nuevo proyecto: la startup EasyMarket.</p>
          </SectionHead>
          <Gallery min={150}>
            <Fig src={r('02-main')} alt="GetWay: pantalla de inicio con Ruta, Coche, Combustible y Resultado" caption="Inicio" />
            <Fig src={r('04-rotas')} alt="GetWay: rutas" caption="Ruta" />
            <Fig src={r('07-carros')} alt="GetWay: coches" caption="Coche" />
            <Fig src={r('09-combustivel')} alt="GetWay: combustible" caption="Combustible" />
            <Fig src={r('10-resultado')} alt="GetWay: resultado con reparto por ocupante" caption="Resultado" />
          </Gallery>
          <p className="backstage">Prototipos originales que diseñé en Illustrator, para una versión que nunca llegó a lanzarse.</p>
        </Section>
      </SolutionZone>

      <Band
        kicker="07 · Lo que vino después"
        title="El mismo equipo siguió junto"
        text={<>En 2016 empezamos FastMarket, que se convirtió en EasyMarket, nuestra startup de compra de supermercado con entrega a domicilio.</>}
      />

      <AfterZone>
        <Learned
          lang={lang}
          items={[
            'Un buen producto empieza en un problema que alguien siente de verdad. El mío era el bote de la gasolina.',
            'Pensar en quien tiene menos recursos cambia el producto: sin la tabla de coches populares, la app no habría servido a quien más la necesitaba.',
            'Lanzar no es el final del trabajo. Sin promoción, un buen producto no llega a nadie.',
            'Los plazos y el método marcan la diferencia: en el proyecto de fin de carrera lo cumplimos todo porque había una fecha; sin ella, el proyecto se paró.',
          ]}
        />
      </AfterZone>
    </InnerPage>
  );
}
