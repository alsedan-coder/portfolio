import { InnerPage } from '@/components/Elevator';
import { FloorPage } from '@/components/Floor';

export const metadata = { title: 'Estrutura · Alan Gustavo' };

export default function Estrutura() {
  return (
    <InnerPage current="estrutura" back={{ href: '/', label: 'Térreo' }} endBack={false}>
      <FloorPage
        id="estrutura"
        intro="Os apps Android que criei na faculdade e na minha primeira startup, aprendendo a construir do zero."
        rooms={[
          {
            href: '/estrutura/theway',
            kicker: 'Produto mobile · 2013–2014',
            title: 'Quanto custa ir até lá? Um app de viagem para carros populares sem computador de bordo em 2013',
            text: 'Meu TCC de 2013: dividir a conta da viagem de carro entre amigos, quando computador de bordo era coisa de carro caro.',
            tags: ['Android nativo', 'UX/UI', 'Lançamento'],
            cover: { src: '/img/getway/theway-2013-reconstrucao.webp', alt: 'Telas do TheWay, de 2013, reconstruídas a partir do código original' },
          },
        ]}
        windows={[
          {
            meta: 'EasyMarket · 2016–2017',
            title: 'EasyMarket: o supermercado no celular antes de virar padrão',
            body: (
              <>
                <p>Em 2016, junto com o Michael e o Fábio, criei uma startup para que as pessoas pudessem fazer as compras do supermercado pelo celular e receber em casa ou retirar na loja. Na época, o delivery por app ainda engatinhava no Brasil. Hoje, quase todo supermercado oferece isso.</p>
                <p>Fechamos sociedade com um investidor que cuidaria da parte comercial, e nós três deixamos nossos empregos para nos dedicar só ao produto durante seis meses. Trabalhando com metodologias ágeis, fiz todo o front-end em Android, garantindo que o app funcionasse bem em qualquer aparelho, enquanto o Fábio e o Michael cuidavam do back-end, das APIs e do banco de dados.</p>
                <p>O app ficou pronto e funcionando, mas, quando o sócio responsável pelo comercial precisou se afastar por motivo de saúde, o investimento parou e ficamos sem quem levasse o produto aos supermercados. Tentamos por conta própria, mas não conseguimos clientes a tempo, e cada um precisou voltar a trabalhar.</p>
              </>
            ),
            learned: 'um produto pronto não é um negócio. Desde então, penso no serviço inteiro, da construção até como ele chega a quem vai usar, e evito que uma parte essencial dependa de uma pessoa só.',
          },
        ]}
      />
    </InnerPage>
  );
}
