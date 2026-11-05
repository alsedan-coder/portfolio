import Link from 'next/link';
import { InnerPage } from '@/components/Elevator';
import {
  AfterZone, Band, BeforeAfter, Cards, Ficha, Fig, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Results, Section, SectionHead, SolutionZone,
} from '@/components/Case';

export const metadata = { title: 'O suporte da Kaleb · Alan Gustavo' };

export default function SuporteKaleb() {
  return (
    <InnerPage current="fundacao" back={{ href: '/fundacao', label: 'Andar 1 · Fundação' }}>
      <ProblemZone>
        <Hero
          kicker="Cômodo · Design de serviço · Suporte · 2009–2016"
          title="O suporte que virou canal de vendas: fundei do zero e ele ainda gera indicações"
          lead="Quando entrei na Kaleb Brasil, o suporte não existia. Meu pai, fundador da empresa, atendia os clientes sozinho, por telefone e presencialmente. Eu fui o primeiro funcionário e montei o suporte do zero."
        >
          <BeforeAfter
            notes={[
              { label: 'Suporte', text: 'só por telefone, sem ver a tela do cliente', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: 'o que aparece aí na sua tela?', kind: 'yellow', style: { right: '3%', top: 50, width: 190, transform: 'rotate(6deg)' } },
              { label: 'Empresa', text: 'Sem processo, sem equipe e sem acesso remoto.', kind: 'typed', style: { left: '8%', top: 190, width: 250, transform: 'rotate(3deg)' } },
              { text: 'a impressora fiscal parou!', kind: 'yellow', style: { right: '5%', top: 245, width: 190, transform: 'rotate(-4deg)' } },
              { text: 'caixa parado é venda perdida', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={<Fig src="/img/suporte/timeline.webp" alt="Linha do tempo de 2009 a 2016: de cerca de 30 para 250 clientes" link={false} />}
          />
          <Results
            items={[
              { title: 'De cerca de 30 para 250 clientes.', text: 'E eu fiz a maior parte das instalações e treinamentos desse período.' },
              { title: 'Cerca de 10 pessoas treinadas.', text: 'Passaram pelo suporte com roteiros e princípios de atendimento que criei.' },
              { title: 'A base é usada até hoje.', text: 'E o feedback dos clientes continua o mesmo de quando eu atendia sozinho.' },
              { title: 'O suporte virou o trunfo da empresa.', text: 'É por causa dele que a Kaleb recebe tantas indicações, até hoje a sua principal fonte de novos clientes.' },
            ]}
          />
          <Ficha
            items={[
              ['Meu papel', 'Primeiro funcionário: criação do suporte, instalações e treinamentos de clientes, roteiros de atendimento, treinamento da equipe; depois, gerente de suporte técnico'],
              ['Período', '2009 a 2016'],
              ['Clientes', 'Pequenos e médios varejos: mercados, lojas, restaurantes e outros'],
              ['Tecnologia', 'Sistemas de automação comercial, impressoras fiscais antigas e novas, impressoras de etiquetas e adequações a mudanças fiscais'],
            ]}
          />
        </Hero>

        <ProblemSection n="01" label="A bagunça" title="Resolver sem enxergar">
          <p>Não havia processo, nem equipe, nem acesso remoto. Todo atendimento era feito <strong>por telefone</strong> ou indo até o cliente.</p>
          <p>Sem ver a tela, eu precisava entender pela voz do cliente o que estava acontecendo no computador ou na impressora fiscal dele e explicar, passo a passo, como resolver. Cada ligação era um exercício de escuta: fazer as perguntas certas, traduzir o que a pessoa descrevia e falar a língua dela, não a do técnico.</p>
        </ProblemSection>

        <ProblemSection n="02" label="Aprender a ouvir" title="Foi ali que aprendi a ouvir" alt>
          <p>Para resolver um problema sem enxergá-lo, eu precisava entender:</p>
          <ul>
            <li><strong>Quem estava do outro lado</strong> e quanto ela conhecia de tecnologia.</li>
            <li><strong>O que ela estava vendo de fato</strong>, e não o que eu imaginava.</li>
            <li><strong>O que ela precisava para seguir trabalhando</strong>, porque, para um comerciante, o caixa parado é venda perdida.</li>
          </ul>
          <p>Esse jeito de atender virou a base de tudo o que faço hoje em design: entender o contexto real de quem usa antes de propor qualquer solução.</p>
        </ProblemSection>
      </ProblemZone>

      <SolutionZone lead="Um jeito de atender que virou o padrão da empresa.">
        <Section label="Do zero a 250 clientes">
          <SectionHead n="03" label="Do zero a uma carteira de 250 clientes" title="O suporte ia além do software">
            <p>Conforme a empresa crescia, fiz a maior parte das <strong>instalações e dos treinamentos</strong> dos novos clientes. Passei por muitas tecnologias: das impressoras fiscais antigas às mais novas, impressoras de etiquetas e as várias mudanças na legislação fiscal, que eu aprendia para adequar os sistemas e ensinar os clientes.</p>
            <p>Os clientes também perguntavam sobre o negócio, não só sobre o sistema. Por isso, eu estudava para dar <strong>dicas de exposição de produtos</strong> e de organização da loja.</p>
          </SectionHead>
        </Section>

        <Section label="Um jeito de atender">
          <SectionHead n="04" label="Um jeito de atender" title="O cliente primeiro">
            <p>Quando a equipe começou a crescer, criei <strong>roteiros de atendimento</strong> e passei a treinar cada pessoa nova. Mais do que procedimentos técnicos, eu ensinava princípios:</p>
          </SectionHead>
          <Cards
            items={[
              { big: '01', title: 'Pensar na experiência do cliente em cada detalhe', text: 'Um exemplo: ao visitar uma loja, nunca estacionar numa vaga que pudesse atrapalhar os clientes dele de chegar e serem atendidos.' },
              { big: '02', title: 'Atender com qualidade, sempre', text: 'O mesmo cuidado no primeiro chamado e no centésimo.' },
              { big: '03', title: 'Ajudar o negócio, não só o sistema', text: 'Se o cliente pergunta, a gente busca a resposta.' },
            ]}
          />
        </Section>
      </SolutionZone>

      <Band
        kicker="05 · Anos depois"
        title="Os clientes ficam pela confiança, não pelo preço"
        text="Anos depois, na reestruturação comercial da Kaleb, a pesquisa confirmou isso com dados: o atendimento é o grande diferencial da empresa, e a estratégia nova foi construída em cima dele."
      />

      <AfterZone>
        <Prose>
          <p>De 2017 a 2022 passei a liderar a equipe de suporte e, mais tarde, a empresa. <Link href="/acabamento">Essa fase está no andar 3 · Acabamento →</Link></p>
        </Prose>
        <Learned
          items={[
            'Ouvir de verdade é o primeiro passo para resolver qualquer problema, principalmente quando não dá para ver o que a pessoa vê.',
            'A experiência do cliente está nos detalhes, até em onde estacionar o carro.',
            'Um bom serviço se sustenta em princípios, não só em procedimentos. Quando a equipe entende o porquê, o padrão se mantém mesmo sem você por perto.',
            'Um suporte excelente não é custo: é o melhor canal de vendas que uma empresa pode ter.',
          ]}
        />
      </AfterZone>
    </InnerPage>
  );
}
