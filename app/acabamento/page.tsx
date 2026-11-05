import { InnerPage } from '@/components/Elevator';
import { FloorPage } from '@/components/Floor';

export const metadata = { title: 'Acabamento · Alan Gustavo' };

export default function Acabamento() {
  return (
    <InnerPage current="acabamento" back={{ href: '/', label: 'Térreo' }} endBack={false}>
      <FloorPage
        id="acabamento"
        intro="Os anos em que passei a formar pessoas: liderando uma equipe e uma empresa, dando aula de informática, produzindo peças que saem da tela e guiando grupos em três idiomas."
        windows={[
          {
            meta: 'Kaleb Brasil · 2017–2022',
            title: 'De quem atende a quem forma a equipe: liderar o suporte e depois a empresa',
            body: (
              <>
                <p>Quando voltei da EasyMarket, assumi a gerência do suporte técnico da Kaleb Brasil: a equipe de instalação, treinamento e suporte, as agendas, os roteiros de atendimento e o treinamento de cada pessoa nova. O que eu tinha montado sozinho agora precisava funcionar sem mim, com outras pessoas.</p>
                <p>Em 2020 assumi a direção da empresa junto com a minha irmã, Mayra, participando das decisões estratégicas. Na pandemia, com toda a equipe em casa, fomos nós dois que mantivemos a operação e o atendimento aos clientes.</p>
              </>
            ),
            learned: 'um padrão só se sustenta quando a equipe entende o porquê dele. E, numa crise, liderar é decidir o essencial primeiro: manter o cliente atendido.',
          },
          {
            meta: 'Microcamp · 2022–2024',
            title: 'Explicar a mesma coisa para uma criança de 8 e um senhor de 70: o que ensinar me ensinou sobre design',
            body: (
              <p>Fui professor de informática na Microcamp, em Sumaré. Meus alunos tinham de 8 a 70 anos, e eu acompanhava cada um desde o primeiro contato com o computador até o Excel, o Illustrator e o Photoshop. Para dar conta de turmas tão diferentes, criei meus próprios jeitos de explicar: mudar o exemplo, o ritmo e as palavras conforme a pessoa na minha frente.</p>
            ),
            learned: 'quem não entende não é o problema; a explicação é. Hoje é assim que penso onboarding, treinamento e microtexto: a interface também precisa falar a língua de quem usa.',
          },
          {
            meta: 'EasyPrint · 2024–2025',
            title: 'Do arquivo no CorelDRAW à fachada instalada: design que sai da tela',
            body: (
              <p>Um amigo de infância me convidou para ser sócio de uma gráfica em Vinhedo. Eu fazia a direção de arte de tudo no CorelDRAW e também a parte manual: cartões de visita, convites de casamento, adesivos de grande formato, inclusive para carros, e fachadas enormes, que eu mesmo instalava, mesmo tendo medo de altura.</p>
            ),
            learned: 'no impresso, o erro não tem “desfazer”. Isso me ensinou a revisar, a pensar no material e na escala antes de produzir, e a projetar para o lugar real onde a peça vai viver. Foi a vez em que mais cheguei perto do meu sonho de criança, de projetar espaços.',
          },
          {
            meta: 'Portugal e Espanha · 2025',
            title: 'Um passeio, três idiomas: guiar grupos no Peneda-Gerês',
            body: (
              <p>Conhecer outras culturas e me desafiar em outros idiomas sempre foi um objetivo meu. Em 2025 fui para a Europa como voluntário. Durante seis meses guiei passeios de quatro horas no Parque Nacional da Peneda-Gerês, explicando cada parada em português, inglês e espanhol para o mesmo grupo. Nos outros meses trabalhei na recepção de um hostel em Portugal e viajei pela Espanha, convivendo todos os dias com hóspedes e colegas em inglês e espanhol. No mesmo período comecei o MBA em IA e UX.</p>
            ),
            learned: 'adaptar a mesma mensagem para pessoas diferentes, ao mesmo tempo e ao vivo. É o mesmo exercício de desenhar para públicos diversos, só que sem tela.',
          },
        ]}
      />
    </InnerPage>
  );
}
