import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';

const lang: Lang = 'pt';
import { FloorPage } from '@/components/Floor';

export const metadata = { title: 'Fundação · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/fundacao" current="fundacao" back={{ href: L(lang, '/'), label: 'Térreo' }} endBack={false}>
      <FloorPage
        lang={lang}
        id="fundacao"
        intro="Onde tudo começou: os primeiros empregos, aos 15 anos, e o suporte que montei do zero, aprendendo a ouvir quem usa a tecnologia."
        rooms={[
          {
            href: L(lang, '/fundacao/suporte-kaleb'),
            kicker: 'Design de serviço · Suporte',
            title: 'O suporte que virou canal de vendas: fundei do zero e ele ainda gera indicações',
            text: 'Sem processo, sem equipe e sem acesso remoto: como aprendi a resolver o problema do cliente sem ver a tela dele.',
            tags: ['Atendimento', 'Treinamento', 'Processos'],
            cover: { src: '/img/suporte/timeline.webp', alt: 'Linha do tempo do suporte da Kaleb, de 2009 a 2016' },
          },
        ]}
        windows={[
          {
            meta: 'ChriSound e Ilha Supermercados · 2008–2009',
            title: 'Do papel para o sistema: meus primeiros processos, aos 15 anos',
            body: (
              <>
                <p>Comecei a trabalhar aos 15 anos na ChriSound, em Campinas, direto no escritório, porque já sabia usar o computador, coisa rara na minha idade e na minha região. Ajudava em todo o administrativo: pagava contas, ia ao banco e organizava as contas no sistema. As contas a pagar e a receber eram controladas no papel, e fui eu quem organizou como elas passariam a ser lançadas no sistema. Também cuidava de notas fiscais, estoque, caixa, pagamento das funcionárias e relatórios para a gerência.</p>
                <p>Depois fui para o Ilha Supermercados, em Vinhedo. Resolvia todas as questões de informática da loja, cadastrava e lançava produtos e ajudava no que fosse preciso, inclusive com ideias de como dispor as gôndolas. Quando a loja trocou de sistema, não houve migração de dados: organizei com a equipe do mercado o recadastro de todos os itens no sistema novo.</p>
              </>
            ),
            learned: 'antes de qualquer tecnologia vem o processo. Passar as contas do papel para o sistema e recadastrar uma loja inteira me ensinaram a organizar o trabalho de outras pessoas sem parar a operação, e as gôndolas foram meu primeiro contato com pensar a experiência de quem compra.',
          },
        ]}
      />
    </InnerPage>
  );
}
