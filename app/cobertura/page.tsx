import { InnerPage } from '@/components/Elevator';
import { FloorPage } from '@/components/Floor';

export const metadata = { title: 'Cobertura · Alan Gustavo' };

export default function Cobertura() {
  return (
    <InnerPage current="cobertura" back={{ href: '/', label: 'Térreo' }} endBack={false}>
      <FloorPage
        id="cobertura"
        intro="O que estou projetando agora: produtos e serviços para o agro e para o varejo, com pesquisa de campo, design de serviço e IA."
        rooms={[
          {
            href: '/cobertura/irmaos-lacarini',
            kicker: 'Irmãos Lacarini · Product design · Agro',
            title: 'Digitalizando a colheita: do papel perdido ao preço aplicado em lote',
            text: 'O pedido era digitalizar um papel. A pesquisa de campo mostrou que o problema não era de tela, era de serviço.',
            tags: ['Pesquisa de campo', 'Design de serviço', 'App + dashboard'],
            cover: { src: '/img/hmv/16-painel-lancar-valor.webp', alt: 'Painel administrativo aplicando valor a vários romaneios' },
          },
          {
            href: '/cobertura/vendas-kaleb',
            kicker: 'Design de serviço · Varejo',
            title: 'Religando vendas e marketing: prospecção com IA e indicações premiadas',
            text: 'Como transmitir a confiança que os clientes já têm numa revenda de tecnologia a quem ainda não a conhece?',
            tags: ['Service blueprint', 'IA aplicada', 'Programas de indicação'],
            cover: { src: '/img/kaleb/09-service-blueprint.webp', alt: 'Service blueprint da prospecção com IA' },
          },
        ]}
        windows={[
          {
            meta: 'SHEEP³ · 2026',
            title: 'Tirando uma agência do papel com design e código',
            body: (
              <>
                <p>Ajudei a fundar a SHEEP³, uma agência de comunicação e marketing com atuação no Brasil e no Reino Unido, com duas pessoas que conheci no projeto da Kaleb. Contribuo com design, tecnologia e estratégia, em paralelo à minha busca por uma vaga em product design, UX/UI ou design de serviço.</p>
                <p>Desenhei e programei o site da agência (sheepthree.com) com Astro, TypeScript, HTML e CSS. A navegação é um corredor de salas que a pessoa percorre com botões, roda do mouse, teclado ou deslizando o dedo, com movimento reduzido para quem precisa, rotas em português e inglês e formulário protegido contra robôs no Cloudflare. O código está público no GitHub.</p>
              </>
            ),
            learned: 'levar uma ideia criativa até o fim, do conceito ao código no ar, cuidando para que o diferente continue fácil de usar.',
          },
          {
            meta: 'Reino Unido · desde agosto de 2026',
            title: 'Aprender inglês vivendo em inglês',
            body: (
              <p>Desde agosto de 2026 moro em Northampton, na Inglaterra, para aprender inglês na prática, por conta própria, no dia a dia. Leio muito bem, escrevo com segurança e venho ganhando fluência na conversa. Este portfólio em três idiomas também faz parte desse exercício.</p>
            ),
          },
        ]}
      />
    </InnerPage>
  );
}
