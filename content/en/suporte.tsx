import Link from 'next/link';
import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import {
  AfterZone, Band, BeforeAfter, Cards, Ficha, Fig, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Results, Section, SectionHead, SolutionZone,
} from '@/components/Case';

const lang: Lang = 'en';

export const metadata = { title: 'Kaleb’s support service · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/fundacao/suporte-kaleb" current="fundacao" back={{ href: L(lang, '/fundacao'), label: 'Floor 1 · Foundations' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Room · Service design · Support · 2009–2016"
          title="The support service that became a sales channel: I built it from scratch and it still brings in referrals"
          lead="When I joined Kaleb Brasil, there was no support service. My father, the company’s founder, looked after customers on his own, by phone and in person. I was the first employee and I built the support service from scratch."
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Support', text: 'by phone only, without seeing the customer’s screen', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: 'what can you see on your screen?', kind: 'yellow', style: { right: '3%', top: 50, width: 190, transform: 'rotate(6deg)' } },
              { label: 'Company', text: 'No process, no team and no remote access.', kind: 'typed', style: { left: '8%', top: 190, width: 250, transform: 'rotate(3deg)' } },
              { text: 'the receipt printer has stopped!', kind: 'yellow', style: { right: '5%', top: 245, width: 190, transform: 'rotate(-4deg)' } },
              { text: 'a stopped till is a lost sale', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={<Fig src="/img/suporte/timeline.webp" alt="Timeline from 2009 to 2016: from around 30 to 250 customers" link={false} />}
          />
          <Results
            items={[
              { title: 'From around 30 to 250 customers.', text: 'And I carried out most of the installations and training in that period.' },
              { title: 'Around 10 people trained.', text: 'They worked in support using the service scripts and principles I created.' },
              { title: 'The foundation is still in use.', text: 'And customer feedback is the same as when I looked after them on my own.' },
              { title: 'Support became the company’s trump card.', text: 'It is the reason Kaleb gets so many referrals, still its main source of new customers.' },
            ]}
          />
          <Ficha
            items={[
              ['My role', 'First employee: creating the support service, customer installations and training, service scripts, team training; later, technical support manager'],
              ['Period', '2009 to 2016'],
              ['Customers', 'Small and medium-sized retailers: grocers, shops, restaurants and others'],
              ['Technology', 'Retail automation systems, old and new fiscal printers, label printers and updates for changes in tax rules'],
            ]}
          />
        </Hero>

        <ProblemSection n="01" label="The mess" title="Solving problems without seeing them">
          <p>There was no process, no team and no remote access. Every request was handled <strong>by phone</strong> or by going to the customer.</p>
          <p>Without seeing the screen, I had to understand from the customer’s voice what was happening on their computer or fiscal printer and explain, step by step, how to fix it. Every call was an exercise in listening: asking the right questions, translating what the person described and speaking their language, not the technician’s.</p>
        </ProblemSection>

        <ProblemSection n="02" label="Learning to listen" title="That is where I learned to listen" alt>
          <p>To solve a problem without seeing it, I needed to understand:</p>
          <ul>
            <li><strong>Who was on the other end</strong> and how much they knew about technology.</li>
            <li><strong>What they were actually seeing</strong>, not what I imagined.</li>
            <li><strong>What they needed to keep working</strong>, because for a shopkeeper a stopped till is a lost sale.</li>
          </ul>
          <p>This way of serving people became the basis of everything I do in design today: understanding the real context of the people who use something before proposing any solution.</p>
        </ProblemSection>
      </ProblemZone>

      <SolutionZone lang={lang} lead="A way of serving customers that became the company standard.">
        <Section label="From zero to 250 customers">
          <SectionHead n="03" label="From zero to 250 customers" title="Support went beyond the software">
            <p>As the company grew, I carried out most of the <strong>installations and training</strong> for new customers. I worked with many technologies: from old fiscal printers to the newest ones, label printers and the many changes in tax legislation, which I learned so I could adapt the systems and teach the customers.</p>
            <p>Customers also asked about their business, not just the system. So I studied to give <strong>tips on product display</strong> and shop organisation.</p>
          </SectionHead>
        </Section>

        <Section label="A way of serving">
          <SectionHead n="04" label="A way of serving" title="The customer comes first">
            <p>When the team started to grow, I created <strong>service scripts</strong> and began training every new person. More than technical procedures, I taught principles:</p>
          </SectionHead>
          <Cards
            items={[
              { big: '01', title: 'Think about the customer’s experience in every detail', text: 'One example: when visiting a shop, never park in a space that could stop their customers from arriving and being served.' },
              { big: '02', title: 'Always serve with quality', text: 'The same care on the first call and the hundredth.' },
              { big: '03', title: 'Help the business, not just the system', text: 'If the customer asks, we find the answer.' },
            ]}
          />
        </Section>
      </SolutionZone>

      <Band
        kicker="05 · Years later"
        title="Customers stay for trust, not for price"
        text="Years later, during Kaleb’s commercial restructuring, research confirmed this with data: customer service is the company’s great differentiator, and the new strategy was built on it."
      />

      <AfterZone>
        <Prose>
          <p>From 2017 to 2022 I went on to lead the support team and, later, the company. <Link href={L(lang, '/acabamento')}>That phase is on floor 3 · Finishes →</Link></p>
        </Prose>
        <Learned
          lang={lang}
          items={[
            'Truly listening is the first step to solving any problem, especially when you cannot see what the other person sees.',
            'Customer experience is in the details, even in where you park the car.',
            'A good service rests on principles, not just procedures. When the team understands why, the standard holds even when you are not around.',
            'Excellent support is not a cost: it is the best sales channel a company can have.',
          ]}
        />
      </AfterZone>
    </InnerPage>
  );
}
