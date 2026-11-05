import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import { FloorPage } from '@/components/Floor';

const lang: Lang = 'es';

export const metadata = { title: 'Estructura · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/estrutura" current="estrutura" back={{ href: L(lang, '/'), label: 'Planta baja' }} endBack={false}>
      <FloorPage
        lang={lang}
        id="estrutura"
        intro="Las apps Android que creé en la universidad y en mi primera startup, aprendiendo a construir desde cero."
        rooms={[
          {
            href: L(lang, '/estrutura/theway'),
            kicker: 'Producto móvil · 2013–2014',
            title: '¿Cuánto cuesta llegar? Una app de viajes para coches populares sin ordenador de a bordo, en 2013',
            text: 'Mi proyecto de fin de carrera en 2013: dividir el coste del viaje en coche entre amigos, cuando el ordenador de a bordo era cosa de coches caros.',
            tags: ['Android nativo', 'UX/UI', 'Lanzamiento'],
            cover: { src: '/img/getway/theway-2013-reconstrucao.webp', alt: 'Pantallas de TheWay, de 2013, reconstruidas a partir del código original' },
          },
        ]}
        windows={[
          {
            meta: 'EasyMarket · 2016–2017',
            title: 'EasyMarket: el supermercado en el móvil antes de que fuera lo normal',
            body: (
              <>
                <p>En 2016, junto con Michael y Fábio, creé una startup para que la gente pudiera hacer la compra del supermercado desde el móvil y recibirla en casa o recogerla en la tienda. En aquella época, el reparto por app todavía daba sus primeros pasos en Brasil. Hoy, casi todos los supermercados lo ofrecen.</p>
                <p>Nos asociamos con un inversor que se encargaría de la parte comercial, y los tres dejamos nuestros trabajos para dedicarnos solo al producto durante seis meses. Trabajando con metodologías ágiles, hice todo el front-end en Android, asegurando que la app funcionara bien en cualquier dispositivo, mientras Fábio y Michael se ocupaban del back-end, las APIs y la base de datos.</p>
                <p>La app quedó lista y funcionando, pero cuando el socio responsable de la parte comercial tuvo que apartarse por motivos de salud, la inversión se detuvo y nos quedamos sin quien llevara el producto a los supermercados. Lo intentamos por nuestra cuenta, pero no conseguimos clientes a tiempo, y cada uno tuvo que volver a trabajar.</p>
              </>
            ),
            learned: 'Un producto terminado no es un negocio. Desde entonces pienso en el servicio completo, desde la construcción hasta cómo llega a quien lo va a usar, y evito que una parte esencial dependa de una sola persona.',
          },
        ]}
      />
    </InnerPage>
  );
}
