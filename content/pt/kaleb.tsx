import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';

const lang: Lang = 'pt';
import {
  AfterZone, Band, BeforeAfter, Board, Cards, Feature, Ficha, Fig, Gallery, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Quote, Results, Section, SectionHead, SolutionZone, Stats, Track,
} from '@/components/Case';

export const metadata = { title: 'Vendas e marketing da Kaleb · Alan Gustavo' };

const img = (f: string) => `/img/kaleb/${f}.webp`;

export default function Page() {
  return (
    <InnerPage lang={lang} path="/cobertura/vendas-kaleb" current="cobertura" back={{ href: L(lang, '/cobertura'), label: 'Andar 4 · Cobertura' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Cômodo · Design de serviço e estratégia · Varejo"
          title="Religando vendas e marketing: prospecção com IA e indicações premiadas para uma revenda que tinha parado de vender"
          lead="A Kaleb Brasil, revenda de sistemas de automação para o pequeno varejo, estava com o comercial parado. Redesenhei o serviço de vendas e marketing como um sistema só."
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Prospecção', text: 'ninguém mais batendo de porta em porta', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: 'postagens soltas nas redes', kind: 'yellow', style: { right: '3%', top: 50, width: 190, transform: 'rotate(6deg)' } },
              { label: 'Funil de vendas', text: 'Nenhum funil e nenhum processo para buscar novos leads.', kind: 'typed', style: { left: '8%', top: 190, width: 250, transform: 'rotate(3deg)' } },
              { text: 'cliente novo? só por indicação', kind: 'yellow', style: { right: '5%', top: 240, width: 200, transform: 'rotate(-4deg)' } },
              { text: 'comercial parado', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={
              <>
                <Fig src={img('09-service-blueprint')} alt="Service blueprint da prospecção e qualificação de leads com IA" />
                <span style={{ fontSize: 14, fontWeight: 700 }}>Um serviço de prospecção documentado, do primeiro contato ao vendedor</span>
              </>
            }
          />
          <Results
            prefix="Resultado"
            items={[
              { title: 'Prospecção sem bater de porta em porta.', text: 'Um processo documentado em SOP, em que a equipe só preenche uma planilha e um agente de IA no WhatsApp faz o primeiro contato e qualifica o lead com uma nota de 0 a 100.' },
              { title: 'Um piloto com meta clara.', text: 'Calculado de trás para frente: da meta de vendas até o número de leads que precisava entrar no funil por semana.' },
              { title: 'Mensagens em escala.', text: 'Numa única semana de maio, cerca de 1.850 mensagens enviadas, mais de 1.800 entregues e cerca de 1.400 mensagens recebidas dos leads.' },
              { title: 'Dois programas de indicação.', text: 'Com recompensas, para clientes e para escritórios de contabilidade parceiros, apoiados na maior força da empresa: ser muito bem indicada.' },
            ]}
          />
          <Ficha
            items={[
              ['Meu papel', 'Designer de serviço e estratégia: pesquisa, Matriz CSD, benchmark, blueprint e SOP, desenho do piloto e das métricas, construção do sistema de prospecção e coordenação da equipe'],
              ['Equipe', 'Alan Gustavo (service design e estratégia), Marta Portela (marketing) e Priscila (comercial)'],
              ['Período', 'Pesquisas a partir de novembro de 2025 · projeto de janeiro a junho de 2026'],
              ['Ferramentas', 'FigJam, Zaia (agente de IA), API do WhatsApp (Meta), Google Apps Script e Google Sheets, base pública de dados de empresas, Canva'],
            ]}
          />
        </Hero>

        <ProblemSection n="01" label="A bagunça" title="Um comercial que tinha parado">
          <p>A Kaleb vende e dá suporte a sistemas de automação comercial (frente de caixa, estoque, fiscal) para mercados, lojas de bairro, restaurantes e outros pequenos varejos.</p>
          <p>Todo ano, muitas empresas com potencial para virar cliente abrem e fecham, e a Kaleb precisa encontrar as novas. Para isso, contratava pessoas para prospectar na rua. Mas elas demoravam a entender o negócio, não ficavam engajadas por muito tempo e não traziam o resultado esperado. No começo de 2026, ninguém mais fazia esse trabalho, e o comercial estava parado.</p>
          <p>O marketing era cuidado por uma freelancer e se resumia a postagens simples nas redes sociais, sem ligação com as vendas.</p>
        </ProblemSection>

        <ProblemSection n="02" label="Entender antes de propor" title="A maior força da empresa já estava ali" alt>
          <p>Antes de começar o projeto, ainda em novembro de 2025, montei um <strong>plano de pesquisa</strong> com um desafio claro: entender e quantificar por que era tão difícil agendar visitas com novos clientes.</p>
          <ul>
            <li><strong>Com a CEO</strong>, reuni as informações atualizadas sobre clientes, vendas e o que já tinha sido tentado.</li>
            <li><strong>Organizei o que se sabia numa Matriz CSD</strong>, separando certezas, suposições e dúvidas. Entre as certezas: as indicações traziam pelo menos um cliente novo por mês, os clientes ficavam pela confiança e não pelo preço, e a empresa não tinha um funil nem um processo para buscar novos leads.</li>
            <li><strong>Fiz um benchmark com cinco concorrentes da região</strong>, comparando funcionalidades, tipo de suporte, preço, segmentos e avaliações no Google.</li>
            <li><strong>Participei de uma reunião com outras revendas e com a central</strong>, para ouvir o que cada uma estava fazendo.</li>
          </ul>
          <p>A conclusão: não havia uma receita pronta. A solução precisava caber no contexto da Kaleb. <strong>A empresa atende muito bem e é muito indicada.</strong> O que faltava era um processo para gerar contatos novos sem depender de alguém batendo de porta em porta.</p>
        </ProblemSection>

        <Gallery min={420}>
          <Fig src={img('01-matriz-csd')} alt="Matriz CSD: certezas, suposições e dúvidas sobre as vendas da Kaleb" caption="Matriz CSD" />
          <Fig src={img('02-benchmark-concorrentes')} alt="Benchmark com cinco concorrentes da região" caption="Benchmark com cinco concorrentes (preços ocultos)" />
        </Gallery>

        <Quote>Como transmitir a confiança que os clientes já têm na Kaleb a varejistas que ainda não a conhecem?</Quote>
      </ProblemZone>

      <SolutionZone lang={lang} lead="Um jeito de testar rápido, um processo documentado e um agente de IA fazendo o primeiro contato.">
        <Section label="PPP">
          <SectionHead n="03" label="Um método para testar rápido" title="PPP: pense, partilhe, produza">
            <p>Com pouco tempo e pouco recurso, precisávamos testar muitas ideias sem gastar meses em cada uma. Daí nasceu, quase como uma brincadeira entre a equipe, o PPP. A brincadeira virou o nosso jeito de trabalhar no projeto, e foi com ele que descobrimos, na prática, o que funcionava e o que não.</p>
          </SectionHead>
          <Track
            items={[
              { title: 'Pense', text: 'Traga uma ideia nova.' },
              { title: 'Partilhe', text: 'Leve ao grupo para entender se e como dá para fazer.' },
              { title: 'Produza', text: 'Teste, nem que seja de um jeito bem simples, para ver se funciona.' },
            ]}
          />
        </Section>

        <Section label="O planejamento">
          <SectionHead n="04" label="O planejamento" title="Duas frentes, um destino">
            <p>Organizei a estratégia numa lousa de planejamento, com duas frentes que alimentam o mesmo objetivo. Tudo converge para um só ponto: <strong>visitas do vendedor a leads que já chegam aquecidos</strong>, seja por indicação de parceiros, por indicação de clientes, por interesse demonstrado na prospecção ou por uma visita a um cliente com o perfil ideal.</p>
          </SectionHead>
          <Cards
            items={[
              { title: 'Comercial · Prospecção', list: ['ICPs (perfil de cliente ideal) com IA e um consultor', 'Levantamento de leads com IA', 'Disparos pelo WhatsApp com o agente de IA', 'Ligações para leads frios que demonstraram interesse', 'Landing page e e-mail marketing'] },
              { title: 'Comercial · Relacionamento', list: ['Visitas de relacionamento', 'Indicação incentivada com os escritórios de contabilidade parceiros', 'Indicação incentivada com os próprios clientes'] },
              { title: 'Marketing', list: ['Físico: entrega de portfólio', 'Digital: vídeos no Instagram e blog', 'Posicionamento: manter o lead frio lembrando da Kaleb e mostrar a proposta de valor'] },
            ]}
          />
          <Board>
            <Fig src={img('05-lousa-planejamento')} alt="Lousa de planejamento com as frentes comercial e de marketing convergindo nas visitas do vendedor" caption="Cada ação da lousa virou um cartão com planejamento, passo a passo, volume esperado, custo aproximado e responsável." />
          </Board>
        </Section>

        <Section label="O novo serviço de prospecção">
          <SectionHead n="05" label="O novo serviço de prospecção" title="Um blueprint, um SOP e uma nota para cada lead">
            <p>Documentei o novo processo num <strong>blueprint de serviço</strong>, com todas as camadas: as ações do lead, os pontos de contato, o que o lead vê, o que acontece por trás, os sistemas e planilhas envolvidos, as regras de qualificação, as dependências, os riscos e as métricas de gestão.</p>
          </SectionHead>
          <Fig src={img('09-service-blueprint')} alt="Service blueprint completo da prospecção e qualificação de leads frios com IA" />
          <Track
            items={[
              { place: 'Prospectador', title: 'Preenche uma planilha', text: 'com poucos campos obrigatórios: empresa, segmento, WhatsApp, endereço e cidade.' },
              { place: 'Sistema', title: 'Valida e dispara', text: 'ao marcar “Enviar para IA”, um script manda os dados ao agente.' },
              { place: 'Agente de IA', title: 'Conversa e qualifica', text: 'pelo WhatsApp, de forma consultiva, investigando as dores do pequeno varejo.' },
              { place: 'Vendedor', title: 'Recebe só os qualificados', text: 'com uma nota e um resumo da conversa.' },
            ]}
          />
          <Feature src={img('03-sop-1')} alt="Primeira página do SOP de prospecção e qualificação com IA" title="O SOP" wide>
            Para que qualquer pessoa conseguisse operar o processo, escrevi um SOP com os papéis (prospectador, agente de IA e comercial), o passo a passo de cada um e a estrutura exata das planilhas de entrada e de saída.
          </Feature>
          <Prose>
            <p>O agente classifica cada lead com uma <strong>nota de 0 a 100</strong>, somando critérios simples: interesse demonstrado, dor confirmada, momento de compra, perfil do negócio, autoridade de decisão e aderência ao produto.</p>
          </Prose>
          <div className="score">
            <div><b>&lt; 60</b><span>Descartado ou requalificado, e guardado para ser reaproveitado no futuro.</span></div>
            <div><b>60 a 79</b><span>Entra em nutrição e é analisado pelo qualificador e pelo comercial.</span></div>
            <div><b>80 ou mais</b><span>Vai direto para o vendedor.</span></div>
          </div>
          <Cards
            items={[
              { title: 'Escolher onde prospectar', list: ['Mapas de prospecção no Google My Maps, com rotas planejadas, aprovados com a direção em janeiro', 'IA para levantar os leads de cada região a partir do perfil de cliente ideal', 'Dados públicos de empresas por API, para montar a lista de lojas'] },
              { title: 'Dados protegidos', text: 'Defini uma política de acesso às planilhas, alinhada à LGPD: cada papel vê apenas o que precisa, e os leads quentes ficam só com o vendedor e o gestor.' },
              { title: 'O sistema que liga tudo', text: 'Construí as planilhas no Google Sheets e os scripts no Apps Script que enviam os leads ao agente da Zaia, disparam as mensagens pelo WhatsApp e acompanham o status de cada envio.' },
            ]}
          />
        </Section>

        <Section label="O piloto">
          <SectionHead n="06" label="Um piloto com meta calculada de trás para frente" title="Da meta de vendas aos leads por semana" />
          <Feature src={img('04-piloto-funil')} alt="Funil do piloto: 400 leads frios por mês, 11 visitas qualificadas, meta de 3 clientes" title="Em vez de “vamos ver no que dá”" wide flip>
            Desenhei um piloto de três meses com uma meta concreta e calculei o funil de trás para frente: da meta de vendas até as visitas, os leads quentes, as conversas e, por fim, o número de leads frios que precisavam entrar por semana. O plano previa cerca de 100 leads frios por semana, com metas semanais para cada papel e cenários claros de decisão: interromper, validar, manter ou escalar.
          </Feature>
        </Section>

        <Section label="O que aconteceu">
          <SectionHead n="07" label="O que aconteceu" title="O sistema rodou">
            <p>As mensagens saíam pelo WhatsApp com modelos aprovados pela Meta, e um painel na planilha mostrava, para cada lote, quantas tinham sido enviadas, entregues, lidas ou falhado. Numa única semana de maio (de 4 a 8):</p>
          </SectionHead>
          <Stats
            items={[
              { value: '~1.850', label: 'mensagens enviadas' },
              { value: '1.800+', label: 'mensagens entregues' },
              { value: '~1.400', label: 'mensagens recebidas dos leads' },
              { value: '~3', label: 'novas visitas por mês, quando o processo engrenou' },
            ]}
          />
          <Prose>
            <p>Testamos muita coisa antes de descobrir o que funcionava. Quando o processo engrenou, os contatos e as visitas começaram a crescer, ainda de forma tímida. Por falta de recursos, o projeto foi interrompido em junho, antes de podermos verificar se chegaríamos a todos os resultados do piloto.</p>
          </Prose>
        </Section>

        <Section label="Indicações">
          <SectionHead n="08" label="Indicações que viram programa" title="A maior fonte de vendas virou um serviço" />
          <Feature src={img('08-programa-de-parceiros')} alt="Regulamento do Programa de Benefícios para Parceiros da Kaleb Brasil" title="Dois programas de indicação" wide>
            Um para os escritórios de contabilidade e outro para os clientes. O Programa de Benefícios para Parceiros é uma jornada de cinco níveis (Semente, Crescimento, Evolução, Expansão e Colheita), com regras claras do que conta como indicação válida, contagem mensal e recompensas em experiências e vouchers.
          </Feature>
          <Cards
            items={[
              { title: 'Contadores como parceiros', text: 'Escrevi e apliquei, em abril, uma pesquisa quantitativa com os escritórios. Por e-mail, vieram poucas respostas. Então mudamos a abordagem: contato pelo WhatsApp e uma cesta com um cartão convidando cada um para o programa. Isso abriu cerca de cinco conversas com contadores.' },
              { title: 'Uma newsletter quinzenal', text: 'Por e-mail, para clientes e contadores, para manter o relacionamento vivo entre um contato e outro.' },
              { title: 'Redes sociais com função', text: 'Conteúdo pensado para gerar confiança e alimentar a prospecção e as indicações.' },
            ]}
          />
        </Section>
      </SolutionZone>

      <Band
        kicker="09 · O que ficou"
        title="Uma equipe que aprendeu a testar rápido"
        text="E que continuou junta: dali nasceu a SHEEP³."
      />

      <AfterZone>
        <Learned
          lang={lang}
          items={[
            'Antes de propor uma solução, é preciso organizar o que se sabe e o que é só suposição. A Matriz CSD mostrou que a resposta estava numa força que a empresa já tinha.',
            'Uma meta calculada de trás para frente transforma “vamos testar IA” numa decisão que a direção consegue acompanhar.',
            'Menos campos geram dados melhores: a IA trabalha bem quando recebe pouco contexto, mas bem definido.',
            'Tecnologia não substitui o vendedor: ela tira dele o trabalho repetitivo, para que ele cuide das pessoas.',
          ]}
        />
      </AfterZone>
    </InnerPage>
  );
}
