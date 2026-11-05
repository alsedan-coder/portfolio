import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import { FloorPage } from '@/components/Floor';

const lang: Lang = 'es';

export const metadata = { title: 'Cimientos · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/fundacao" current="fundacao" back={{ href: L(lang, '/'), label: 'Planta baja' }} endBack={false}>
      <FloorPage
        lang={lang}
        id="fundacao"
        intro="Donde todo empezó: mis primeros empleos, a los 15 años, y el soporte que monté desde cero, aprendiendo a escuchar a quien usa la tecnología."
        rooms={[
          {
            href: L(lang, '/fundacao/suporte-kaleb'),
            kicker: 'Diseño de servicios · Soporte',
            title: 'El soporte que se convirtió en canal de ventas: lo fundé desde cero y todavía genera recomendaciones',
            text: 'Sin procesos, sin equipo y sin acceso remoto: cómo aprendí a resolver el problema del cliente sin ver su pantalla.',
            tags: ['Atención al cliente', 'Formación', 'Procesos'],
            cover: { src: '/img/suporte/timeline.webp', alt: 'Línea de tiempo del soporte de Kaleb, de 2009 a 2016' },
          },
        ]}
        windows={[
          {
            meta: 'ChriSound e Ilha Supermercados · 2008–2009',
            title: 'Del papel al sistema: mis primeros procesos, a los 15 años',
            body: (
              <>
                <p>Empecé a trabajar a los 15 años en ChriSound, en Campinas, directamente en la oficina, porque ya sabía usar el ordenador, algo raro a mi edad y en mi región. Ayudaba en toda la administración: pagaba facturas, iba al banco y organizaba las cuentas en el sistema. Las cuentas por pagar y por cobrar se controlaban en papel, y fui yo quien organizó cómo pasarían a registrarse en el sistema. También me ocupaba de las facturas, el stock, la caja, el pago de las empleadas y los informes para la gerencia.</p>
                <p>Después pasé a Ilha Supermercados, en Vinhedo. Resolvía todas las cuestiones de informática de la tienda, daba de alta los productos y ayudaba en lo que hiciera falta, incluso con ideas sobre cómo disponer las góndolas. Cuando la tienda cambió de sistema, no hubo migración de datos: organicé con el equipo del supermercado el nuevo registro de todos los artículos en el sistema nuevo.</p>
              </>
            ),
            learned: 'Antes de cualquier tecnología está el proceso. Pasar las cuentas del papel al sistema y volver a registrar una tienda entera me enseñaron a organizar el trabajo de otras personas sin parar la operación, y las góndolas fueron mi primer contacto con pensar la experiencia de quien compra.',
          },
        ]}
      />
    </InnerPage>
  );
}
