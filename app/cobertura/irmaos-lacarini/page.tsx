import { InnerPage } from '@/components/Elevator';
import {
  AfterZone, Band, BeforeAfter, Board, Feature, Ficha, Fig, Gallery, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Quote, Results, Section, SectionHead, Shots, SolutionZone, Tiles, Track,
} from '@/components/Case';
import { SectionNextSteps } from '@/components/NextSteps';

export const metadata = { title: 'Irmãos Lacarini · Alan Gustavo' };

const img = (f: string) => `/img/hmv/${f}.webp`;

export default function IrmaosLacarini() {
  return (
    <InnerPage current="cobertura" back={{ href: '/cobertura', label: 'Andar 4 · Cobertura' }}>
      <ProblemZone>
        <Hero
          kicker="Cômodo · Irmãos Lacarini · Product design e design de serviço"
          title="Digitalizando a colheita: do papel perdido ao preço aplicado em lote"
          lead="Na Irmãos Lacarini, produtora e exportadora de figo desde 1969, cada entrega de fruta das famílias de meeiros era registrada em papel."
        >
          <BeforeAfter
            notes={[
              { label: 'Romaneio', text: 'e a observação que escrevi ao lado?', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: 'cadê o romaneio de ontem?', kind: 'yellow', style: { right: '3%', top: 40, width: 200, transform: 'rotate(6deg)' } },
              { label: 'Planilha · safra', text: 'Digitar cada romaneio, produto por produto, e colocar o preço item a item.', kind: 'typed', style: { left: '8%', top: 180, width: 250, transform: 'rotate(3deg)' } },
              { text: 'um romaneio por dia, tudo junto', kind: 'yellow', style: { right: '5%', top: 230, width: 190, transform: 'rotate(-4deg)' } },
              { text: 'conferência: “aceito como está”', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={
              <>
                <Shots
                  items={[
                    { src: img('03-maduro'), alt: 'App do meeiro: formulário de romaneio que imita o papel', caption: 'A família registra' },
                    { src: img('05-contagem-divergencia'), alt: 'App do conferente: contagem com divergência', caption: 'O conferente conta' },
                    { src: img('08-sincronizacao'), alt: 'Sincronização: romaneios enviados mesmo sem sinal', caption: 'Funciona sem sinal' },
                  ]}
                />
                <div className="shot" style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 700 }}>
                  <img src={img('16-painel-lancar-valor')} alt="Dashboard: valor aplicado a vários romaneios de uma vez" style={{ border: '1px solid var(--linha)', borderRadius: 14 }} />
                  <span>O escritório aplica o valor em lote</span>
                </div>
              </>
            }
          />
          <Results
            items={[
              { title: 'O romaneio não se perde mais.', text: 'As famílias registram cada entrega no celular, inclusive sem sinal de internet.' },
              { title: 'O administrativo não digita mais nenhum romaneio.', text: 'Eles chegam prontos e conferidos, e o valor é aplicado com filtros que aceleram o fechamento.' },
              { title: 'As famílias usam todos os dias.', text: 'E estão ansiosas pela evolução do aplicativo, que vai trazer ainda mais comodidade a elas.' },
            ]}
          />
          <Ficha
            items={[
              ['Meu papel', 'Product designer e designer de serviço: pesquisa de campo, desenho do processo, wireframes, acompanhamento do desenvolvimento, implantação e treinamento'],
              ['Período', 'Julho de 2026 até hoje · fase 1 em uso'],
              ['Entregas', 'App do meeiro, app do conferente e dashboard administrativo'],
              ['Usuários', 'Mais de 70 usuários, de cerca de 35 famílias de meeiros, de 18 a mais de 60 anos'],
            ]}
          />
        </Hero>

        <Quote>Não adiantaria criar um app que agiliza um processo que não existe.</Quote>

        <ProblemSection n="01" label="A bagunça" title="Tudo dependia só da confiança">
          <p>Na Lacarini, quem planta e colhe são os <strong>meeiros</strong>: famílias que trabalham nas chácaras da empresa e recebem pelo que produzem. Cada entrega de fruta gera um <strong>romaneio</strong>, o documento que diz quantas caixas de cada produto saíram de cada chácara.</p>
          <p>Esse romaneio era um papel, preenchido à mão no campo. E o papel se perdia: às vezes antes de chegar ao caminhão, às vezes com o motorista, às vezes na própria conferência. Quando a família escrevia uma observação ao lado de um produto, ela quase nunca era vista na correria do recebimento.</p>
          <p>No fim da linha, o administrativo digitava cada romaneio numa planilha, produto por produto, e depois colocava o preço de cada item para calcular quanto pagar a cada família no fim do mês. Na safra, de outubro a janeiro, são cerca de 3 a 4 romaneios por família por dia. A equipe trabalhava de dia a noite para conseguir pagar em dia, porque, se o pagamento atrasa, o meeiro para de produzir no meio da safra, e a fruta tem pedido no Brasil e no exterior.</p>
          <p>Tudo isso funcionava com base em uma coisa só: <strong>confiança</strong>. Entre a família, o conferente e o escritório, não havia nenhum registro em comum.</p>
        </ProblemSection>

        <ProblemSection n="02" label="A descoberta" title="O processo no papel não era o processo real" alt>
          <p>O pedido inicial era digitalizar o romaneio. Antes de desenhar qualquer tela, fui a campo com a equipe: entrevistei meeiros e conferentes e acompanhei o recebimento das frutas no próprio ambiente.</p>
          <p>A pesquisa mostrou que o processo que a empresa acreditava existir não era o processo real:</p>
          <ul>
            <li><strong>O romaneio deveria ser feito a cada coleta do caminhão.</strong> Na prática, as famílias faziam um por dia, juntando tudo, justamente para perder menos papel.</li>
            <li><strong>A conferência quase não existia.</strong> O que chegava era aceito como estava escrito, quando o papel chegava.</li>
          </ul>
          <p>Se eu digitalizasse o papel do jeito que ele era, o app só deixaria mais rápido um processo que não acontecia. O problema não era de tela. Era de serviço.</p>
        </ProblemSection>
      </ProblemZone>

      <SolutionZone lead="Um registro em comum entre a família, o conferente e o escritório.">
        <Section label="Primeiro o processo">
          <SectionHead n="03" label="Primeiro o processo, depois a tela" title="Três momentos, uma ferramenta para cada um">
            <p>Junto com os stakeholders, revisamos os processos internos da Lacarini, um por um, e definimos como cada etapa deveria funcionar de fato: <strong>quem registra, quem confere e quem coloca o valor, e como cada um faz isso</strong>.</p>
            <p>Também definimos <strong>datas e etapas de implantação</strong>. A ideia era colocar o sistema no ar sem um impacto grande na rotina, para que as pessoas confiassem nele antes de qualquer novidade a mais.</p>
          </SectionHead>
          <Track
            items={[
              { place: 'No campo', title: 'A família registra', text: 'o romaneio no campo, a cada coleta.' },
              { place: 'Na conferência', title: 'O conferente conta', text: 'o que chegou e compara com o que foi informado.' },
              { place: 'No escritório', title: 'O administrativo coloca o valor', text: 'e acompanha o que cada família tem a receber.' },
            ]}
          />
          <Prose>
            <p>Comecei pelo papel. Desenhei à mão os fluxos das três ferramentas, tela por tela, com anotações sobre como cada uma deveria se comportar. Alguns exemplos do que já estava nesses esboços:</p>
            <ul>
              <li><strong>Cada família vê só o que produz.</strong> Os tipos de colheita, os produtos e a unidade de medida de cada item são configurados por meeiro no painel, então ninguém precisa procurar o seu produto numa lista enorme.</li>
              <li><strong>Ajuda a um toque</strong>, já na tela de login, abrindo uma conversa com o suporte.</li>
              <li><strong>Confirmação antes de enviar</strong> o romaneio.</li>
              <li><strong>O conferente vê o que o meeiro informou</strong> na hora de conferir.</li>
              <li><strong>Preço em lote e exportação</strong> já desenhados no dashboard, ao lado dos filtros.</li>
            </ul>
          </Prose>
          <Board>
            <Gallery min={180}>
              <Fig src={img('03-meeiro-02-inicio-tipos')} alt="Wireframe à mão: início do app do meeiro com os tipos de colheita" caption="Meeiro: tipos de colheita" />
              <Fig src={img('07-meeiro-03-exportacao')} alt="Wireframe à mão: formulário de Exportação" caption="Meeiro: formulário de Exportação" />
              <Fig src={img('09-itens-personalizaveis-por-meeiro')} alt="Wireframe à mão: itens personalizáveis por meeiro" caption="Itens configurados por meeiro" />
              <Fig src={img('11-conferente-fluxo-conferencia')} alt="Wireframe à mão: fluxo de conferência" caption="Conferente: fluxo de conferência" />
            </Gallery>
          </Board>
          <Prose>
            <p>Depois, antes mesmo de haver um programador no projeto, montei no Figma Make um <strong>protótipo navegável</strong> do app e do painel administrativo para as reuniões iniciais com a cliente. Com ele, todos puderam tocar nas telas e ver o processo funcionando: a família lançando o romaneio, o conferente comparando as contagens, o escritório aplicando o valor em vários romaneios de uma vez e configurando quais produtos cada chácara pode registrar. As decisões foram validadas ali, antes de qualquer linha de código definitiva.</p>
          </Prose>
          <Gallery min={200}>
            <Fig src={img('02-p-menu')} alt="Protótipo: menu do app do meeiro" caption="Protótipo · menu do meeiro" />
            <Fig src={img('07-c-conferencia')} alt="Protótipo: conferência" caption="Protótipo · conferência" />
            <Fig src={img('17-painel-meeiros')} alt="Protótipo: painel de meeiros e produtos por chácara" caption="Protótipo · produtos por chácara" />
          </Gallery>
        </Section>

        <Section label="Uma ferramenta para cada etapa">
          <SectionHead n="04" label="Uma ferramenta para cada etapa do serviço" title="Do campo ao escritório" />
          <Feature src={img('03-maduro')} alt="App do meeiro: formulário com Quantidade, Discriminação e Observação" title="O app do meeiro">
            Quem usa é a família inteira, do filho de 18 anos ao avô com mais de 60. O formulário imita o papel que eles já conheciam, com as colunas Quantidade, Discriminação e Observação, e os produtos já listados. Ninguém precisou aprender uma lógica nova.
          </Feature>
          <Feature src={img('05-contagem-divergencia')} alt="App do conferente: contagem com o informado pelo meeiro" title="O app do conferente" flip dark>
            O conferente vê uma fila de trabalho com os romaneios aguardando contagem. Na contagem, a tela mostra o que o meeiro informou e já preenche a quantidade recebida com o mesmo número. O conferente só ajusta com – e + quando há diferença.
          </Feature>
          <Feature src={img('15-painel-administrativo')} alt="Protótipo do dashboard administrativo com filtros" title="O dashboard administrativo" wide>
            O administrativo enxerga, lado a lado, o que o meeiro informou, o que foi recebido e o que foi aprovado em cada romaneio. Para precificar, combina vários filtros, como chácara, tipo, produto, situação e período, e aplica o valor a vários romaneios de uma vez.
          </Feature>
        </Section>

        <Section label="As decisões">
          <SectionHead n="05" label="As decisões" title="Pensadas para o dia a dia no campo" />
          <Feature src={img('06-massa-ditar-observacao')} alt="Observação ditada por voz no app do meeiro" title="Ditar em vez de digitar">
            Na pesquisa de campo, vimos que é difícil digitar no celular com as mãos sujas da colheita, e as observações escritas à mão eram ignoradas na correria. No app, cada linha tem um microfone: a família fala, o texto aparece e ela revisa antes de confirmar. O áudio não é guardado.
          </Feature>
          <Feature src={img('08-sincronizacao')} alt="Tela de sincronização com pendências" title="Funcionar sem sinal" flip dark>
            No campo, a internet falha. O romaneio é salvo no aparelho e enviado quando há conexão. A tela de sincronização mostra o que está pendente, o que deu erro e o que precisa de suporte.
          </Feature>
          <Tiles
            items={[
              { tag: 'Segurança', title: 'Assinar com o próprio celular', text: 'A contagem é confirmada com a digital, por segurança. Mas a digital falha com a mão de quem passou o dia na lavoura, então a senha do aparelho funciona como alternativa.' },
              { tag: 'Controle', title: 'Um aparelho por pessoa', text: 'Antes de chegar às lojas, o app foi instalado por APK. Para evitar contas compartilhadas, cada usuário entra em um aparelho por vez, e a troca de celular é aprovada no dashboard, sempre com uma justificativa registrada.' },
              { tag: 'Suporte', title: 'Suporte sem repetir perguntas', text: 'A tela de ajuda mostra um código de identificação e o contexto do usuário, para o técnico atender rápido.' },
              { tag: 'Confiança', title: 'Registro de tudo, para gerar confiança', text: 'O dashboard guarda uma auditoria de cada ação, com quem fez e em que contexto, sem expor dados sensíveis, para que famílias, conferência e escritório confiem no que está no sistema.' },
            ]}
          />
        </Section>

        <Section label="Confiança antes de velocidade">
          <SectionHead n="06" label="Confiança antes de velocidade" title="Primeiro, fazer as famílias confiarem no app">
            <p>Um dos objetivos da primeira fase era fazer as famílias confiarem no app. Por isso, o treinamento foi pensado para gerar segurança, e a instalação nos aparelhos foi planejada com antecedência.</p>
            <p>Defini com a equipe como os técnicos fariam cada instalação e criei um registro em que eles anotam os problemas e as dificuldades de cada família. Com esses dados e com reuniões frequentes com os técnicos, acompanho o que está funcionando e o que precisa mudar.</p>
            <p>As famílias aprovaram e já usam o app todos os dias. Mais do que isso: estão animadas com as próximas fases, porque vão ver com facilidade quanto produzem, quanto devem e quanto vão receber.</p>
          </SectionHead>
        </Section>
      </SolutionZone>

      <Band
        kicker="07 · Na mesma tela"
        title="Três versões da verdade na mesma tela"
        cols={[
          { small: 'pela família', big: 'Informado' },
          { small: 'pela conferência', big: 'Recebido' },
          { small: 'pelo escritório', big: 'Aprovado' },
        ]}
      />

      <AfterZone>
        <SectionNextSteps
          n="08"
          title="O cômodo ainda não está terminado"
          intro={<>O maior desafio hoje está no próprio processo de conferência: a cliente ainda está definindo e consolidando essa rotina. Acompanho cada etapa de perto para que os resultados fiquem visíveis antes de seguir.</>}
          items={[
            <><strong>Mais tecnologia na conferência</strong>, para acelerar a contagem, depois de validar que o processo funciona.</>,
            <><strong>Despesas, empréstimos e insumos</strong> no app, para que cada meeiro veja quanto deve, quanto está pagando e quanto vai receber.</>,
            <><strong>Uma nova rodada de pesquisa</strong>, olhando os resultados e os processos que ainda não atacamos.</>,
            <><strong>Redesenhar a experiência (UX) dos fluxos</strong> na segunda fase, a partir do que a pesquisa e o uso real mostrarem.</>,
          ]}
        />
        <Learned
          items={[
            'Antes de desenhar uma tela, é preciso entender como as coisas acontecem na prática, e para isso nada melhor do que observar e conversar com quem participa de fato das atividades. O processo no papel e o processo real raramente são o mesmo.',
            'Confirmei a minha tese de que é preciso focar nas pessoas, entender o seu ambiente e tomar os cuidados necessários na entrega de mudanças. Com o apoio e a confiança dos usuários, fica mais fácil alterar e ajustar o necessário num projeto em que o prazo era discutido com frequência, evitando retrabalhos que tomam ainda mais tempo de todos os envolvidos.',
            'Para ser a ponte entre a cliente e o desenvolvimento, é preciso fazer design de experiência para todos: entender e traduzir o processo em algo possível de construir, depois acompanhar se ele funciona de verdade, levando uma experiência tranquila a todos os stakeholders.',
          ]}
          note="Nota de bastidor: desenhei o projeto e as telas em baixa fidelidade, e o desenvolvimento ficou com um programador. Por prazo e escopo, a interface final ainda é de MVP e não passou por um UI completo. Desde a primeira versão, acompanho cada entrega e peço correções de processo e de interface conforme a prioridade."
        />
      </AfterZone>
    </InnerPage>
  );
}
