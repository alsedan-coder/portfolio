import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import {
  AfterZone, Band, BeforeAfter, Board, Cards, Feature, Ficha, Fig, Gallery, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Quote, Results, Section, SectionHead, SolutionZone, Stats, Track,
} from '@/components/Case';

const lang: Lang = 'en';

export const metadata = { title: 'Kaleb sales and marketing · Alan Gustavo' };

const img = (f: string) => `/img/kaleb/${f}.webp`;

export default function Page() {
  return (
    <InnerPage lang={lang} path="/cobertura/vendas-kaleb" current="cobertura" back={{ href: L(lang, '/cobertura'), label: 'Floor 4 · Rooftop' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Room · Service design and strategy · Retail"
          title="Reconnecting sales and marketing: AI prospecting and rewarded referrals for a reseller that had stopped selling"
          lead="Kaleb Brasil, a reseller of automation systems for small retailers, had stalled commercially. I redesigned its sales and marketing service as a single system."
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Prospecting', text: 'nobody knocking on doors any more', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: 'random posts on social media', kind: 'yellow', style: { right: '3%', top: 50, width: 190, transform: 'rotate(6deg)' } },
              { label: 'Sales funnel', text: 'No funnel and no process to find new leads.', kind: 'typed', style: { left: '8%', top: 190, width: 250, transform: 'rotate(3deg)' } },
              { text: 'new customer? only by referral', kind: 'yellow', style: { right: '5%', top: 240, width: 200, transform: 'rotate(-4deg)' } },
              { text: 'sales at a standstill', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={
              <>
                <Fig src={img('09-service-blueprint')} alt="Service blueprint for prospecting and qualifying leads with AI" />
                <span style={{ fontSize: 14, fontWeight: 700 }}>A documented prospecting service, from first contact to the salesperson</span>
              </>
            }
          />
          <Results
            items={[
              { title: 'Prospecting without knocking on doors.', text: 'A process documented in an SOP, where the team only fills in a spreadsheet and an AI agent on WhatsApp makes first contact and scores the lead from 0 to 100.' },
              { title: 'A pilot with a clear target.', text: 'Worked out backwards: from the sales target to the number of leads that had to enter the funnel each week.' },
              { title: 'Messages at scale.', text: 'In a single week in May, around 1,850 messages sent, more than 1,800 delivered and around 1,400 messages received from leads.' },
              { title: 'Two referral programmes.', text: 'With rewards, for customers and for partner accounting firms, built on the company’s greatest strength: being highly recommended.' },
            ]}
          />
          <Ficha
            items={[
              ['My role', 'Service designer and strategist: research, CSD matrix, benchmark, blueprint and SOP, pilot and metrics design, building the prospecting system and coordinating the team'],
              ['Team', 'Alan Gustavo (service design and strategy), Marta Portela (marketing) and Priscila (sales)'],
              ['Period', 'Research from November 2025 · project from January to June 2026'],
              ['Tools', 'FigJam, Zaia (AI agent), WhatsApp API (Meta), Google Apps Script and Google Sheets, public company database, Canva'],
            ]}
          />
        </Hero>

        <ProblemSection n="01" label="The mess" title="A sales team that had come to a halt">
          <p>Kaleb sells and supports retail automation systems (point of sale, stock, tax) for grocers, local shops, restaurants and other small retailers.</p>
          <p>Every year, many businesses that could become customers open and close, and Kaleb has to find the new ones. To do so, it hired people to prospect door to door. But they took a long time to understand the business, did not stay engaged for long and did not bring the expected results. By early 2026 nobody was doing this work any more, and sales had stalled.</p>
          <p>Marketing was handled by a freelancer and amounted to simple social media posts, with no link to sales.</p>
        </ProblemSection>

        <ProblemSection n="02" label="Understanding before proposing" title="The company’s greatest strength was already there" alt>
          <p>Before the project started, back in November 2025, I put together a <strong>research plan</strong> with a clear challenge: to understand and quantify why it was so hard to book visits with new customers.</p>
          <ul>
            <li><strong>With the CEO</strong>, I gathered up-to-date information on customers, sales and what had already been tried.</li>
            <li><strong>I organised what we knew in a CSD matrix</strong>, separating certainties, assumptions and doubts. Among the certainties: referrals brought in at least one new customer a month, customers stayed for trust rather than price, and the company had no funnel or process to find new leads.</li>
            <li><strong>I benchmarked five local competitors</strong>, comparing features, type of support, price, segments and Google reviews.</li>
            <li><strong>I joined a meeting with other resellers and head office</strong>, to hear what each of them was doing.</li>
          </ul>
          <p>The conclusion: there was no ready-made recipe. The solution had to fit Kaleb’s context. <strong>The company serves its customers very well and is highly recommended.</strong> What was missing was a process to generate new contacts without relying on someone knocking on doors.</p>
        </ProblemSection>

        <Gallery min={420}>
          <Fig src={img('01-matriz-csd')} alt="CSD matrix: certainties, assumptions and doubts about Kaleb’s sales" caption="CSD matrix (in Portuguese)" />
          <Fig src={img('02-benchmark-concorrentes')} alt="Benchmark of five local competitors" caption="Benchmark of five competitors (prices hidden)" />
        </Gallery>

        <Quote>How do we pass on the trust customers already have in Kaleb to retailers who do not know it yet?</Quote>
      </ProblemZone>

      <SolutionZone lang={lang} lead="A way to test quickly, a documented process and an AI agent making first contact.">
        <Section label="PPP">
          <SectionHead n="03" label="A method for testing fast" title="PPP: think, share, produce">
            <p>With little time and few resources, we needed to test many ideas without spending months on each one. That is how PPP was born, almost as a joke within the team. The joke became our way of working on the project, and it is how we found out, in practice, what worked and what did not.</p>
          </SectionHead>
          <Track
            items={[
              { title: 'Think', text: 'Bring a new idea.' },
              { title: 'Share', text: 'Take it to the group to see whether and how it can be done.' },
              { title: 'Produce', text: 'Test it, even in a very simple way, to see if it works.' },
            ]}
          />
        </Section>

        <Section label="The plan">
          <SectionHead n="04" label="The plan" title="Two fronts, one destination">
            <p>I organised the strategy on a planning board, with two fronts feeding the same goal. Everything converges on one point: <strong>visits from the salesperson to leads who are already warm</strong>, whether through partner referrals, customer referrals, interest shown during prospecting or a visit to a customer with the ideal profile.</p>
          </SectionHead>
          <Cards
            items={[
              { title: 'Sales · Prospecting', list: ['ICPs (ideal customer profiles) with AI and a consultant', 'Finding leads with AI', 'WhatsApp campaigns with the AI agent', 'Calls to cold leads who showed interest', 'Landing page and email marketing'] },
              { title: 'Sales · Relationships', list: ['Relationship visits', 'Rewarded referrals with partner accounting firms', 'Rewarded referrals with existing customers'] },
              { title: 'Marketing', list: ['Physical: handing out the portfolio', 'Digital: Instagram videos and a blog', 'Positioning: keeping cold leads aware of Kaleb and showing the value proposition'] },
            ]}
          />
          <Board>
            <Fig src={img('05-lousa-planejamento')} alt="Planning board with the sales and marketing fronts converging on the salesperson’s visits" caption="Each action on the board became a card with planning, step by step, expected volume, approximate cost and owner (in Portuguese)." />
          </Board>
        </Section>

        <Section label="The new prospecting service">
          <SectionHead n="05" label="The new prospecting service" title="A blueprint, an SOP and a score for every lead">
            <p>I documented the new process in a <strong>service blueprint</strong>, with all its layers: the lead’s actions, the touchpoints, what the lead sees, what happens behind the scenes, the systems and spreadsheets involved, the qualification rules, the dependencies, the risks and the management metrics.</p>
          </SectionHead>
          <Fig src={img('09-service-blueprint')} alt="Full service blueprint for prospecting and qualifying cold leads with AI" />
          <Track
            items={[
              { place: 'Prospector', title: 'Fills in a spreadsheet', text: 'with only a few required fields: company, segment, WhatsApp, address and city.' },
              { place: 'System', title: 'Validates and sends', text: 'when the lead is marked “Send to AI”, a script passes the data to the agent.' },
              { place: 'AI agent', title: 'Talks and qualifies', text: 'on WhatsApp, in a consultative way, exploring the pain points of small retailers.' },
              { place: 'Salesperson', title: 'Only gets qualified leads', text: 'with a score and a summary of the conversation.' },
            ]}
          />
          <Feature src={img('03-sop-1')} alt="First page of the SOP for prospecting and qualifying with AI" title="The SOP" wide>
            So that anyone could run the process, I wrote an SOP with the roles (prospector, AI agent and sales), each one’s step-by-step tasks and the exact structure of the input and output spreadsheets.
          </Feature>
          <Prose>
            <p>The agent scores each lead from <strong>0 to 100</strong>, adding up simple criteria: interest shown, confirmed pain point, buying moment, business profile, decision-making authority and product fit.</p>
          </Prose>
          <div className="score">
            <div><b>&lt; 60</b><span>Discarded or requalified, and kept for future reuse.</span></div>
            <div><b>60 to 79</b><span>Goes into nurturing and is reviewed by the qualifier and sales.</span></div>
            <div><b>80 or more</b><span>Goes straight to the salesperson.</span></div>
          </div>
          <Cards
            items={[
              { title: 'Choosing where to prospect', list: ['Prospecting maps in Google My Maps, with planned routes, approved with management in January', 'AI to find leads in each region based on the ideal customer profile', 'Public company data via API, to build the list of shops'] },
              { title: 'Protected data', text: 'I defined an access policy for the spreadsheets, in line with Brazil’s data protection law (LGPD): each role sees only what it needs, and hot leads stay with the salesperson and the manager only.' },
              { title: 'The system that connects it all', text: 'I built the spreadsheets in Google Sheets and the Apps Script code that sends leads to the Zaia agent, sends the WhatsApp messages and tracks the status of each one.' },
            ]}
          />
        </Section>

        <Section label="The pilot">
          <SectionHead n="06" label="A pilot with a target worked out backwards" title="From the sales target to leads per week" />
          <Feature src={img('04-piloto-funil')} alt="Pilot funnel: 400 cold leads a month, 11 qualified visits, target of 3 customers" title="Instead of “let’s see what happens”" wide flip>
            I designed a three-month pilot with a concrete target and worked out the funnel backwards: from the sales target to visits, hot leads, conversations and, finally, the number of cold leads that had to come in each week. The plan assumed around 100 cold leads a week, with weekly targets for each role and clear decision scenarios: stop, validate, keep going or scale up.
          </Feature>
        </Section>

        <Section label="What happened">
          <SectionHead n="07" label="What happened" title="The system ran">
            <p>Messages went out on WhatsApp using templates approved by Meta, and a panel in the spreadsheet showed, for each batch, how many had been sent, delivered, read or failed. In a single week in May (the 4th to the 8th):</p>
          </SectionHead>
          <Stats
            items={[
              { value: '~1,850', label: 'messages sent' },
              { value: '1,800+', label: 'messages delivered' },
              { value: '~1,400', label: 'messages received from leads' },
              { value: '~3', label: 'new visits a month, once the process got going' },
            ]}
          />
          <Prose>
            <p>We tested a lot before finding out what worked. Once the process got going, contacts and visits started to grow, still modestly. Because of a lack of resources, the project was stopped in June, before we could check whether we would reach all of the pilot’s targets.</p>
          </Prose>
        </Section>

        <Section label="Referrals">
          <SectionHead n="08" label="Referrals that became a programme" title="The biggest source of sales became a service" />
          <Feature src={img('08-programa-de-parceiros')} alt="Rules of Kaleb Brasil’s Partner Benefits Programme" title="Two referral programmes" wide>
            One for accounting firms and one for customers. The Partner Benefits Programme is a five-level journey (Seed, Growth, Evolution, Expansion and Harvest), with clear rules on what counts as a valid referral, monthly counting and rewards in experiences and vouchers.
          </Feature>
          <Cards
            items={[
              { title: 'Accountants as partners', text: 'In April I wrote and ran a quantitative survey with the firms. By email, few replied. So we changed approach: contact on WhatsApp and a gift basket with a card inviting each one to the programme. That opened around five conversations with accountants.' },
              { title: 'A fortnightly newsletter', text: 'By email, for customers and accountants, to keep the relationship alive between one contact and the next.' },
              { title: 'Social media with a purpose', text: 'Content designed to build trust and feed prospecting and referrals.' },
            ]}
          />
        </Section>
      </SolutionZone>

      <Band
        kicker="09 · What remained"
        title="A team that learned to test fast"
        text="And that stayed together: that is where SHEEP³ was born."
      />

      <AfterZone>
        <Learned
          lang={lang}
          items={[
            'Before proposing a solution, you need to organise what you know and what is only an assumption. The CSD matrix showed that the answer lay in a strength the company already had.',
            'A target worked out backwards turns “let’s test AI” into a decision that management can follow.',
            'Fewer fields produce better data: AI works well when it gets little context, as long as it is well defined.',
            'Technology does not replace the salesperson: it takes the repetitive work off their hands so they can look after people.',
          ]}
        />
      </AfterZone>
    </InnerPage>
  );
}
