import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';

const lang: Lang = 'pt';
import {
  AfterZone, Band, BeforeAfter, Feature, Ficha, Fig, Gallery, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Results, Section, SectionHead, Shots, SolutionZone, Tiles, Track,
} from '@/components/Case';

export const metadata = { title: 'TheWay · Alan Gustavo' };

const r = (f: string) => `/img/getway/${f}.webp`;

export default function Page() {
  return (
    <InnerPage lang={lang} path="/estrutura/theway" current="estrutura" back={{ href: L(lang, '/estrutura'), label: 'Andar 2 · Estrutura' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Cômodo · Produto mobile · 2013–2014"
          title="Quanto custa ir até lá? Um app de viagem para carros populares sem computador de bordo em 2013"
          lead={<>Um app em que você informa <strong>de onde sai, para onde vai e qual é o seu carro</strong>, e ele mostra <strong>quantos litros vai gastar, quanto vai custar e quanto fica para cada um</strong>. A ideia foi minha.</>}
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Viagem', text: 'quanto esse carro faz por litro?', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: 'computador de bordo? só em carro caro', kind: 'yellow', style: { right: '3%', top: 50, width: 200, transform: 'rotate(6deg)' } },
              { label: 'Vaquinha', text: 'Distância, consumo, preço do litro e quantas pessoas: tudo de cabeça.', kind: 'typed', style: { left: '8%', top: 190, width: 250, transform: 'rotate(3deg)' } },
              { text: 'sobrou no tanque, faltou no bolso', kind: 'yellow', style: { right: '5%', top: 245, width: 190, transform: 'rotate(-4deg)' } },
              { text: 'será que a gasolina dá?', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={
              <Shots
                n={4}
                items={[
                  { src: r('01-abertura'), alt: 'TheWay: tela de abertura', caption: 'Abertura' },
                  { src: r('02-trajeto'), alt: 'TheWay: origem, destino e rota no mapa', caption: 'Trajeto' },
                  { src: r('03-carro'), alt: 'TheWay: escolha do carro por modelo e ano', caption: 'Carro' },
                  { src: r('04-calculo'), alt: 'TheWay: litros, valor e divisão por ocupante', caption: 'Cálculo' },
                ]}
              />
            }
          />
          <Results
            prefix="Resultado"
            items={[
              { title: 'O único TCC mobile da turma.', text: 'Desenvolvido em cerca de 4 meses, aprendendo Android do zero com ajuda de livros.' },
              { title: 'Publicado no Google Play em 2014.', text: 'Com o nome TheWay.' },
              { title: 'Feito para carros populares.', text: 'Sem computador de bordo, com uma tabela própria de consumo de cada modelo.' },
              { title: 'Apresentado em palestras.', text: 'Sobre a experiência de criar e lançar um produto ainda na faculdade.' },
            ]}
          />
          <Ficha
            items={[
              ['Meu papel', 'Ideia do produto, design visual e fluxos (UX/UI), programação front-end no Android, guia de telas e fluxo para a equipe, coordenação com metodologias ágeis'],
              ['Equipe', 'Alan Gustavo, Michael Felício e Fábio Pires (o grupo do TCC tinha cinco pessoas; nós três construímos e seguimos com o app)'],
              ['Período', '2013 (TCC) · 2014 (publicação)'],
              ['Tecnologia', 'Android nativo em Java, Google Maps e Directions API, banco de dados local'],
              ['Plataforma', 'Android, publicado no Google Play'],
            ]}
          />
        </Hero>

        <ProblemSection n="01" label="A bagunça" title="Toda viagem terminava numa vaquinha feita de cabeça">
          <p>A conta de uma viagem de carro parece simples, mas tem muita incógnita: a distância exata, quanto o carro faz por litro, o preço do combustível e quantas pessoas vão dividir. Sem computador de bordo, o consumo era um palpite.</p>
          <p>Para nós, universitários, o erro custava caro. Às vezes o combustível não dava, às vezes sobrava, e o dinheiro que ficava no tanque faltava para outra coisa.</p>
          <p>Não existia nada no mercado que resolvesse isso.</p>
        </ProblemSection>

        <ProblemSection n="02" label="A ideia" title="Um problema que eu mesmo vivia" alt>
          <p>Quando chegou a hora de escolher o TCC, levei para o grupo um problema que eu mesmo vivia: eu viajava muito e queria dividir as viagens com os amigos de um jeito rápido e justo, só informando o carro e o destino.</p>
          <p>O grupo comprou a ideia, e tomamos duas decisões que fugiam do padrão da turma:</p>
          <ul>
            <li><strong>Fazer para celular.</strong> Os outros TCCs eram programas de computador. Nós queríamos algo que coubesse no bolso e que qualquer pessoa pudesse usar.</li>
            <li><strong>Fazer para Android</strong>, porque acreditávamos que o mercado mobile seria o futuro e queríamos aprender a ferramenta.</li>
          </ul>
        </ProblemSection>
      </ProblemZone>

      <SolutionZone lang={lang} lead="Um app no bolso, para a conta que antes era feita de cabeça.">
        <Section label="Construir aprendendo">
          <SectionHead n="03" label="Construir aprendendo" title="Do zero ao app pronto em cerca de 4 meses">
            <p>Em 2013 quase não havia conteúdo sobre Android no Brasil. Compramos livros, lemos artigos em inglês e aprendemos a desenvolver no Eclipse com a biblioteca do Android, porque o Android Studio ainda não existia.</p>
          </SectionHead>
          <Track
            items={[
              { place: 'Rota', title: 'Origem e destino', text: 'digitados como endereço. O app mostrava a rota, a distância e o tempo da viagem no Google Maps.' },
              { place: 'Carro', title: 'O carro', text: 'escolhido por modelo, ano e potência.' },
              { place: 'Combustível', title: 'Gasolina ou etanol', text: 'e o preço do litro.' },
              { place: 'Resultado', title: 'A conta pronta', text: 'o total de litros, o valor da viagem e quanto fica para cada ocupante.' },
            ]}
          />
          <Gallery min={180}>
            <Fig src={r('01-abertura')} alt="TheWay 2013: abertura com o slogan O caminho para economia" caption="Abertura" />
            <Fig src={r('02-trajeto')} alt="TheWay 2013: trajeto de Campinas a São Paulo no mapa" caption="Trajeto" />
            <Fig src={r('03-carro')} alt="TheWay 2013: seleção do automóvel" caption="Carro" />
            <Fig src={r('04-calculo')} alt="TheWay 2013: litros necessários, valor total e valor por ocupante" caption="Cálculo" />
          </Gallery>
          <p className="backstage">As telas de 2013 são uma reconstrução a partir do código e das imagens originais do projeto.</p>
        </Section>

        <Section label="As decisões">
          <SectionHead n="04" label="As decisões" title="Pensado para quem tinha menos recursos" />
          <Feature src={r('03-carro')} alt="Seleção do carro por modelo e ano" title="Uma tabela de consumo no lugar do computador de bordo">
            A maioria dos carros não tinha computador de bordo, e quase ninguém sabe de cabeça quanto o seu carro faz por litro. Montamos uma tabela própria com o consumo de gasolina e etanol dos modelos populares mais vendidos no Brasil, como Ka, Palio, Gol, Uno, Sandero e Clio. A pessoa só escolhia o carro.
          </Feature>
          <Tiles
            items={[
              { tag: 'Público', title: 'Começar pelos carros populares', text: 'Limitamos a lista aos modelos mais comuns de propósito. O público eram estudantes e famílias com orçamento apertado, não donos de carro de luxo.' },
              { tag: 'Realidade', title: 'Preço do combustível informado pela pessoa', text: 'O preço muda de posto para posto e de semana para semana. Deixar a pessoa digitar o valor que viu na bomba deixava a conta mais próxima da realidade.' },
              { tag: 'Acesso', title: 'Funcionar em qualquer aparelho', text: 'Em 2013, cada celular Android tinha um tamanho de tela diferente. Criamos versões das telas para cerca de 20 combinações de tamanho e densidade, quase sem referências.' },
              { tag: 'Linguagem', title: 'Mensagens que falam com a pessoa', text: 'Quando a internet falhava, o app pedia para verificar o sinal e tentar de novo, em vez de mostrar um erro técnico.' },
            ]}
          />
        </Section>

        <Section label="Lançar e aprender">
          <SectionHead n="05" label="Lançar e aprender" title="“O caminho para economia”">
            <p>Em 2014, já formados, publicamos o TheWay no Google Play, com o slogan “O caminho para economia”.</p>
            <p>O app teve alguns downloads, mas nada expressivo. Olhando para trás, a razão é clara: <strong>lançamos sem nenhuma divulgação</strong>. Não fizemos campanha, não fomos a eventos, não pensamos em como as pessoas iam descobrir o app. Depois disso, vida pessoal, trabalho e outros projetos tomaram o tempo de todos, e o projeto ficou parado.</p>
            <p>Mesmo assim, a experiência rendeu: apresentamos o projeto em <strong>palestras em vários eventos</strong> sobre as dificuldades e os aprendizados de criar e lançar um produto ainda tão jovens.</p>
          </SectionHead>
        </Section>

        <Section label="A próxima versão">
          <SectionHead n="06" label="A próxima versão, que ficou no papel" title="GetWay: cores por função e carona compartilhada">
            <p>Depois do lançamento, desenhei uma nova versão do app, com o nome GetWay, para seguirmos com o projeto. Ela nunca chegou a ser lançada, mas mostra como eu já pensava a evolução de um produto:</p>
            <ul>
              <li><strong>Uma tela inicial com quatro áreas grandes</strong>: Rota, Carro, Combustível e Resultado.</li>
              <li><strong>Um sistema de cores por função</strong>, que acompanhava a pessoa em cada etapa: vermelho para a rota, azul para o carro, roxo para o combustível e laranja para o resultado.</li>
              <li><strong>Rotas e carros salvos</strong>, para não começar do zero a cada viagem.</li>
              <li><strong>Comparação entre etanol e gasolina</strong>, para ajudar a escolher o combustível mais vantajoso.</li>
              <li><strong>Uma visão de carona compartilhada</strong>: amigos no mesmo caminho dividiriam o custo da viagem, inclusive só até o ponto em que cada um descesse. O pedágio também entrava nos planos.</li>
            </ul>
            <p>Chegamos a organizar o trabalho em sprints, mas a equipe decidiu concentrar o esforço num novo projeto: a startup EasyMarket.</p>
          </SectionHead>
          <Gallery min={150}>
            <Fig src={r('02-main')} alt="GetWay: tela inicial com Rota, Carro, Combustível e Resultado" caption="Início" />
            <Fig src={r('04-rotas')} alt="GetWay: rotas" caption="Rota" />
            <Fig src={r('07-carros')} alt="GetWay: carros" caption="Carro" />
            <Fig src={r('09-combustivel')} alt="GetWay: combustível" caption="Combustível" />
            <Fig src={r('10-resultado')} alt="GetWay: resultado com divisão por ocupante" caption="Resultado" />
          </Gallery>
          <p className="backstage">Protótipos originais desenhados por mim no Illustrator, para uma versão que não chegou a ser lançada.</p>
        </Section>
      </SolutionZone>

      <Band
        kicker="07 · O que veio depois"
        title="A mesma equipe seguiu junta"
        text={<>Em 2016 começamos o FastMarket, que virou a EasyMarket, a nossa startup de compras de supermercado com entrega.</>}
      />

      <AfterZone>
        <Learned
          lang={lang}
          items={[
            'Um bom produto começa num problema que alguém sente de verdade. O meu era a vaquinha da gasolina.',
            'Pensar em quem tem menos recursos muda o produto: sem a tabela de carros populares, o app não serviria para quem mais precisava dele.',
            'Lançar não é o fim do trabalho. Sem divulgação, um produto bom não chega a ninguém.',
            'Prazo e método fazem diferença: no TCC cumprimos tudo porque havia data; sem ela, o projeto parou.',
          ]}
        />
      </AfterZone>
    </InnerPage>
  );
}
