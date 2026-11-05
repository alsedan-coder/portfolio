import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import { FloorPage } from '@/components/Floor';

const lang: Lang = 'es';

export const metadata = { title: 'Ático · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/cobertura" current="cobertura" back={{ href: L(lang, '/'), label: 'Planta baja' }} endBack={false}>
      <FloorPage
        lang={lang}
        id="cobertura"
        intro="Lo que estoy diseñando ahora: productos y servicios para el agro y el comercio minorista, con investigación de campo, diseño de servicios e IA."
        rooms={[
          {
            href: L(lang, '/cobertura/irmaos-lacarini'),
            kicker: 'Irmãos Lacarini · Product design · Agro',
            title: 'Digitalizar la cosecha: del albarán de papel perdido al precio aplicado en bloque',
            text: 'El encargo era digitalizar un papel. La investigación de campo mostró que el problema no era de pantalla, sino de servicio.',
            tags: ['Investigación de campo', 'Diseño de servicios', 'App + panel'],
            cover: { src: '/img/hmv/16-painel-lancar-valor.webp', alt: 'Panel administrativo aplicando un precio a varios albaranes' },
          },
          {
            href: L(lang, '/cobertura/vendas-kaleb'),
            kicker: 'Diseño de servicios · Comercio',
            title: 'Reconectar ventas y marketing: prospección con IA y recomendaciones premiadas',
            text: '¿Cómo transmitir la confianza que los clientes ya tienen en un distribuidor de tecnología a quienes todavía no lo conocen?',
            tags: ['Service blueprint', 'IA aplicada', 'Programas de recomendación'],
            cover: { src: '/img/kaleb/09-service-blueprint.webp', alt: 'Service blueprint de la prospección con IA' },
          },
        ]}
        windows={[
          {
            meta: 'SHEEP³ · 2026',
            title: 'Sacar una agencia del papel con diseño y código',
            body: (
              <>
                <p>Ayudé a fundar SHEEP³, una agencia de comunicación y marketing que trabaja en Brasil y en el Reino Unido, con dos personas que conocí en el proyecto de Kaleb. Aporto diseño, tecnología y estrategia, en paralelo a mi búsqueda de un puesto en product design, UX/UI o diseño de servicios.</p>
                <p>Diseñé y programé la web de la agencia (sheepthree.com) con Astro, TypeScript, HTML y CSS. La navegación es un pasillo de salas que se recorre con botones, la rueda del ratón, el teclado o deslizando el dedo, con movimiento reducido para quien lo necesita, rutas en portugués e inglés y un formulario protegido contra bots en Cloudflare. El código es público en GitHub.</p>
              </>
            ),
            learned: 'Llevar una idea creativa hasta el final, del concepto al código publicado, cuidando que lo diferente siga siendo fácil de usar.',
          },
          {
            meta: 'Reino Unido · desde agosto de 2026',
            title: 'Aprender inglés viviendo en inglés',
            body: (
              <p>Desde agosto de 2026 vivo en Northampton, Inglaterra, para aprender inglés en la práctica, por mi cuenta, en el día a día. Leo muy bien, escribo con seguridad y voy ganando fluidez en la conversación. Este portafolio en tres idiomas también forma parte de ese ejercicio.</p>
            ),
          },
        ]}
      />
    </InnerPage>
  );
}
