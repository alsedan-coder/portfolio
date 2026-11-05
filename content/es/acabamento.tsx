import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import { FloorPage } from '@/components/Floor';

const lang: Lang = 'es';

export const metadata = { title: 'Acabados · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/acabamento" current="acabamento" back={{ href: L(lang, '/'), label: 'Planta baja' }} endBack={false}>
      <FloorPage
        lang={lang}
        id="acabamento"
        intro="Los años en que empecé a formar personas: liderando un equipo y una empresa, dando clases de informática, produciendo piezas que salen de la pantalla y guiando grupos en tres idiomas."
        windows={[
          {
            meta: 'Kaleb Brasil · 2017–2022',
            title: 'De atender a formar el equipo: liderar el soporte y después la empresa',
            body: (
              <>
                <p>Cuando volví de EasyMarket, asumí la gerencia del soporte técnico de Kaleb Brasil: el equipo de instalación, formación y soporte, las agendas, los guiones de atención y la formación de cada persona nueva. Lo que yo había montado solo ahora tenía que funcionar sin mí, con otras personas.</p>
                <p>En 2020 asumí la dirección de la empresa junto con mi hermana, Mayra, participando en las decisiones estratégicas. Durante la pandemia, con todo el equipo en casa, fuimos nosotros dos quienes mantuvimos la operación y la atención a los clientes.</p>
              </>
            ),
            learned: 'Un estándar solo se mantiene cuando el equipo entiende por qué existe. Y, en una crisis, liderar es decidir primero lo esencial: que el cliente siga atendido.',
          },
          {
            meta: 'Microcamp · 2022–2024',
            title: 'Explicar lo mismo a un niño de 8 años y a un señor de 70: lo que enseñar me enseñó sobre diseño',
            body: (
              <p>Fui profesor de informática en Microcamp, en Sumaré. Mis alumnos tenían entre 8 y 70 años, y acompañaba a cada uno desde su primer contacto con el ordenador hasta Excel, Illustrator y Photoshop. Para atender a grupos tan distintos, creé mis propias formas de explicar: cambiar el ejemplo, el ritmo y las palabras según la persona que tenía delante.</p>
            ),
            learned: 'Quien no entiende no es el problema; la explicación sí. Así pienso hoy el onboarding, la formación y el microtexto: la interfaz también tiene que hablar el idioma de quien la usa.',
          },
          {
            meta: 'EasyPrint · 2024–2025',
            title: 'Del archivo en CorelDRAW a la fachada instalada: diseño que sale de la pantalla',
            body: (
              <p>Un amigo de la infancia me invitó a ser socio de una imprenta en Vinhedo. Yo hacía la dirección de arte de todo en CorelDRAW y también la parte manual: tarjetas de visita, invitaciones de boda, vinilos de gran formato, incluso para coches, y fachadas enormes que instalaba yo mismo, aunque tengo miedo a las alturas.</p>
            ),
            learned: 'En el impreso, el error no tiene “deshacer”. Me enseñó a revisar, a pensar en el material y la escala antes de producir, y a diseñar para el lugar real donde vivirá la pieza. Fue lo más cerca que estuve de mi sueño de niño de diseñar espacios.',
          },
          {
            meta: 'Portugal y España · 2025',
            title: 'Un paseo, tres idiomas: guiar grupos en Peneda-Gerês',
            body: (
              <p>Conocer otras culturas y desafiarme en otros idiomas siempre fue un objetivo para mí. En 2025 fui a Europa como voluntario. Durante seis meses guié paseos de cuatro horas en el Parque Nacional de Peneda-Gerês, explicando cada parada en portugués, inglés y español al mismo grupo. Los otros meses trabajé en la recepción de un hostel en Portugal y viajé por España, conviviendo a diario con huéspedes y compañeros en inglés y español. En el mismo período empecé el MBA en IA y UX.</p>
            ),
            learned: 'Adaptar el mismo mensaje para personas distintas, al mismo tiempo y en directo. Es el mismo ejercicio que diseñar para públicos diversos, solo que sin pantalla.',
          },
        ]}
      />
    </InnerPage>
  );
}
