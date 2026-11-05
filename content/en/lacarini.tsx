import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import {
  AfterZone, Band, BeforeAfter, Board, Feature, Ficha, Fig, Gallery, Hero, Learned, ProblemSection, ProblemZone,
  Prose, Quote, Results, Section, SectionHead, Shots, SolutionZone, Tiles, Track,
} from '@/components/Case';
import { SectionNextSteps } from '@/components/NextSteps';

const lang: Lang = 'en';

export const metadata = { title: 'Irmãos Lacarini · Alan Gustavo' };

const img = (f: string) => `/img/hmv/${f}.webp`;

export default function Page() {
  return (
    <InnerPage lang={lang} path="/cobertura/irmaos-lacarini" current="cobertura" back={{ href: L(lang, '/cobertura'), label: 'Floor 4 · Rooftop' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Room · Irmãos Lacarini · Product design and service design"
          title="Digitising the harvest: from lost paper slips to prices applied in bulk"
          lead="At Irmãos Lacarini, a fig grower and exporter since 1969, every fruit delivery from the sharecropper families was recorded on paper."
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Delivery slip', text: 'and the note I wrote next to it?', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: 'where is yesterday’s slip?', kind: 'yellow', style: { right: '3%', top: 40, width: 200, transform: 'rotate(6deg)' } },
              { label: 'Spreadsheet · harvest', text: 'Typing in every slip, product by product, and pricing item by item.', kind: 'typed', style: { left: '8%', top: 180, width: 250, transform: 'rotate(3deg)' } },
              { text: 'one slip a day, all lumped together', kind: 'yellow', style: { right: '5%', top: 230, width: 190, transform: 'rotate(-4deg)' } },
              { text: 'checking: “accepted as it is”', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={
              <>
                <Shots
                  items={[
                    { src: img('03-maduro'), alt: 'Sharecropper app: delivery slip form that mirrors the paper one', caption: 'The family records' },
                    { src: img('05-contagem-divergencia'), alt: 'Checker app: count with a discrepancy', caption: 'The checker counts' },
                    { src: img('08-sincronizacao'), alt: 'Sync: slips sent even without signal', caption: 'Works without signal' },
                  ]}
                />
                <div className="shot" style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 700 }}>
                  <img src={img('16-painel-lancar-valor')} alt="Dashboard: price applied to several slips at once" style={{ border: '1px solid var(--linha)', borderRadius: 14 }} />
                  <span>The office applies prices in bulk</span>
                </div>
              </>
            }
          />
          <Results
            items={[
              { title: 'Delivery slips no longer get lost.', text: 'Families record every delivery on their phone, even without an internet signal.' },
              { title: 'The office no longer types in a single slip.', text: 'They arrive ready and checked, and prices are applied with filters that speed up closing.' },
              { title: 'Families use it every day.', text: 'And they are looking forward to the next versions of the app, which will make things even easier for them.' },
            ]}
          />
          <Ficha
            items={[
              ['My role', 'Product designer and service designer: field research, process design, wireframes, development follow-up, rollout and training'],
              ['Period', 'July 2026 to date · phase 1 in use'],
              ['Deliverables', 'Sharecropper app, checker app and admin dashboard'],
              ['Users', 'More than 70 users, from around 35 sharecropper families, aged 18 to over 60'],
            ]}
          />
        </Hero>

        <Quote>There would be no point in building an app that speeds up a process that does not exist.</Quote>

        <ProblemSection n="01" label="The mess" title="Everything relied on trust alone">
          <p>At Lacarini, the people who plant and harvest are <strong>sharecroppers</strong>: families who work on the company’s farms and are paid for what they produce. Every fruit delivery generates a <strong>delivery slip</strong>, the document that says how many boxes of each product left each farm.</p>
          <p>That slip was a piece of paper, filled in by hand in the field. And the paper got lost: sometimes before it reached the lorry, sometimes with the driver, sometimes at the checking point itself. When a family wrote a note next to a product, it was hardly ever seen in the rush of receiving the fruit.</p>
          <p>At the end of the line, the office typed every slip into a spreadsheet, product by product, and then priced each item to work out how much to pay each family at the end of the month. During the harvest, from October to January, there are around 3 to 4 slips per family per day. The team worked from morning to night to pay on time, because if payment is late, sharecroppers stop producing in the middle of the harvest, and the fruit has orders in Brazil and abroad.</p>
          <p>All of this ran on one thing only: <strong>trust</strong>. Between the family, the checker and the office, there was no shared record.</p>
        </ProblemSection>

        <ProblemSection n="02" label="The discovery" title="The process on paper was not the real process" alt>
          <p>The original brief was to digitise the delivery slip. Before designing any screen, I went into the field with the team: I interviewed sharecroppers and checkers and followed the receiving of the fruit on site.</p>
          <p>The research showed that the process the company believed existed was not the real one:</p>
          <ul>
            <li><strong>A slip was supposed to be filled in at every lorry collection.</strong> In practice, families did one a day, lumping everything together, precisely to lose less paper.</li>
            <li><strong>Checking barely existed.</strong> Whatever arrived was accepted as written, when the paper arrived at all.</li>
          </ul>
          <p>If I had digitised the paper as it was, the app would only have sped up a process that was not happening. The problem was not the screen. It was the service.</p>
        </ProblemSection>
      </ProblemZone>

      <SolutionZone lang={lang} lead="A shared record between the family, the checker and the office.">
        <Section label="Process first">
          <SectionHead n="03" label="Process first, then the screen" title="Three moments, one tool for each">
            <p>Together with the stakeholders, we reviewed Lacarini’s internal processes one by one and defined how each step should actually work: <strong>who records, who checks and who sets the price, and how each of them does it</strong>.</p>
            <p>We also set <strong>rollout dates and stages</strong>. The idea was to launch the system without a big impact on people’s routine, so they would trust it before anything else new was added.</p>
          </SectionHead>
          <Track
            items={[
              { place: 'In the field', title: 'The family records', text: 'the delivery slip in the field, at every collection.' },
              { place: 'At checking', title: 'The checker counts', text: 'what arrived and compares it with what was declared.' },
              { place: 'In the office', title: 'The office sets the price', text: 'and keeps track of what each family is owed.' },
            ]}
          />
          <Prose>
            <p>I started on paper. I drew the flows of the three tools by hand, screen by screen, with notes on how each one should behave. Some examples of what was already in those sketches:</p>
            <ul>
              <li><strong>Each family only sees what it produces.</strong> Harvest types, products and the unit of measure for each item are configured per sharecropper in the dashboard, so nobody has to look for their product in a huge list.</li>
              <li><strong>Help one tap away</strong>, right on the login screen, opening a chat with support.</li>
              <li><strong>Confirmation before sending</strong> the slip.</li>
              <li><strong>The checker sees what the sharecropper declared</strong> while checking.</li>
              <li><strong>Bulk pricing and export</strong> already designed into the dashboard, next to the filters.</li>
            </ul>
          </Prose>
          <Board>
            <Gallery min={180}>
              <Fig src={img('03-meeiro-02-inicio-tipos')} alt="Hand-drawn wireframe: sharecropper app home with harvest types" caption="Sharecropper: harvest types" />
              <Fig src={img('07-meeiro-03-exportacao')} alt="Hand-drawn wireframe: Export form" caption="Sharecropper: Export form" />
              <Fig src={img('09-itens-personalizaveis-por-meeiro')} alt="Hand-drawn wireframe: items configurable per sharecropper" caption="Items configured per sharecropper" />
              <Fig src={img('11-conferente-fluxo-conferencia')} alt="Hand-drawn wireframe: checking flow" caption="Checker: checking flow" />
            </Gallery>
          </Board>
          <Prose>
            <p>Then, before there was even a developer on the project, I built a <strong>clickable prototype</strong> of the app and the admin dashboard in Figma Make for the first meetings with the client. With it, everyone could tap through the screens and see the process working: the family entering the slip, the checker comparing counts, the office pricing several slips at once and configuring which products each farm can record. The decisions were validated there, before a single line of final code.</p>
          </Prose>
          <Gallery min={200}>
            <Fig src={img('02-p-menu')} alt="Prototype: sharecropper app menu" caption="Prototype · sharecropper menu" />
            <Fig src={img('07-c-conferencia')} alt="Prototype: checking" caption="Prototype · checking" />
            <Fig src={img('17-painel-meeiros')} alt="Prototype: sharecroppers panel and products per farm" caption="Prototype · products per farm" />
          </Gallery>
        </Section>

        <Section label="One tool for each step">
          <SectionHead n="04" label="One tool for each step of the service" title="From the field to the office" />
          <Feature src={img('03-maduro')} alt="Sharecropper app: form with Quantity, Description and Note" title="The sharecropper app">
            It is used by the whole family, from the 18-year-old son to the grandfather over 60. The form mirrors the paper they already knew, with the columns Quantity, Description and Note, and the products already listed. Nobody had to learn a new logic.
          </Feature>
          <Feature src={img('05-contagem-divergencia')} alt="Checker app: count showing what the sharecropper declared" title="The checker app" flip dark>
            The checker sees a work queue with the slips waiting to be counted. When counting, the screen shows what the sharecropper declared and pre-fills the received quantity with the same number. The checker only adjusts it with – and + when there is a difference.
          </Feature>
          <Feature src={img('15-painel-administrativo')} alt="Prototype of the admin dashboard with filters" title="The admin dashboard" wide>
            The office sees, side by side, what the sharecropper declared, what was received and what was approved on each slip. To set prices, they combine several filters, such as farm, type, product, status and period, and apply the price to several slips at once.
          </Feature>
        </Section>

        <Section label="The decisions">
          <SectionHead n="05" label="The decisions" title="Designed for everyday life in the field" />
          <Feature src={img('06-massa-ditar-observacao')} alt="Note dictated by voice in the sharecropper app" title="Dictate instead of typing">
            In the field research we saw that it is hard to type on a phone with hands dirty from the harvest, and handwritten notes were ignored in the rush. In the app, every line has a microphone: the family speaks, the text appears and they review it before confirming. The audio is not stored.
          </Feature>
          <Feature src={img('08-sincronizacao')} alt="Sync screen with pending items" title="Working without signal" flip dark>
            In the field, the internet fails. The slip is saved on the device and sent when there is a connection. The sync screen shows what is pending, what failed and what needs support.
          </Feature>
          <Tiles
            items={[
              { tag: 'Security', title: 'Signing with your own phone', text: 'The count is confirmed with a fingerprint, for security. But fingerprints fail on the hands of someone who has spent the day in the fields, so the phone’s passcode works as an alternative.' },
              { tag: 'Control', title: 'One device per person', text: 'Before reaching the app stores, the app was installed via APK. To avoid shared accounts, each user signs in on one device at a time, and changing phones is approved in the dashboard, always with a recorded reason.' },
              { tag: 'Support', title: 'Support without repeating questions', text: 'The help screen shows an ID code and the user’s context, so the technician can help quickly.' },
              { tag: 'Trust', title: 'A record of everything, to build trust', text: 'The dashboard keeps an audit trail of every action, with who did it and in what context, without exposing sensitive data, so families, checkers and the office can trust what is in the system.' },
            ]}
          />
        </Section>

        <Section label="Trust before speed">
          <SectionHead n="06" label="Trust before speed" title="First, getting families to trust the app">
            <p>One of the goals of the first phase was to get families to trust the app. That is why the training was designed to build confidence, and installing the app on the phones was planned in advance.</p>
            <p>I defined with the team how the technicians would carry out each installation and created a log where they note each family’s problems and difficulties. With that data and frequent meetings with the technicians, I keep track of what is working and what needs to change.</p>
            <p>The families approved it and already use the app every day. More than that, they are excited about the next phases, because they will easily see how much they produce, how much they owe and how much they will receive.</p>
          </SectionHead>
        </Section>
      </SolutionZone>

      <Band
        kicker="07 · On the same screen"
        title="Three versions of the truth on the same screen"
        cols={[
          { small: 'by the family', big: 'Declared' },
          { small: 'by the checker', big: 'Received' },
          { small: 'by the office', big: 'Approved' },
        ]}
      />

      <AfterZone>
        <SectionNextSteps
          lang={lang}
          n="08"
          title="The room is not finished yet"
          intro={<>The biggest challenge today lies in the checking process itself: the client is still defining and consolidating that routine. I follow each step closely so the results are visible before moving on.</>}
          items={[
            <><strong>More technology at checking</strong>, to speed up counting, once the process has been validated.</>,
            <><strong>Expenses, loans and supplies</strong> in the app, so each sharecropper can see how much they owe, how much they are paying and how much they will receive.</>,
            <><strong>A new round of research</strong>, looking at the results and the processes we have not tackled yet.</>,
            <><strong>Redesigning the experience (UX) of the flows</strong> in the second phase, based on what the research and real use show.</>,
          ]}
        />
        <Learned
          lang={lang}
          items={[
            'Before designing a screen, you have to understand how things happen in practice, and there is nothing better for that than observing and talking to the people who actually do the work. The process on paper and the real process are rarely the same.',
            'It confirmed my belief that you have to focus on people, understand their environment and take the necessary care when rolling out change. With users’ support and trust, it becomes easier to change and adjust what is needed in a project whose deadline was often under discussion, avoiding rework that takes even more of everyone’s time.',
            'To be the bridge between the client and development, you have to design the experience for everyone: understand the process and translate it into something that can be built, then follow up on whether it really works, giving every stakeholder a smooth experience.',
          ]}
          note="Behind the scenes: I designed the project and the screens in low fidelity, and development was done by a programmer. Because of time and scope, the final interface is still an MVP and has not had a full UI pass. Since the first version, I have followed every release and asked for process and interface fixes by priority."
        />
      </AfterZone>
    </InnerPage>
  );
}
