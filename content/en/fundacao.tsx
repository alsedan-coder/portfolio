import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import { FloorPage } from '@/components/Floor';

const lang: Lang = 'en';

export const metadata = { title: 'Foundations · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/fundacao" current="fundacao" back={{ href: L(lang, '/'), label: 'Ground floor' }} endBack={false}>
      <FloorPage
        lang={lang}
        id="fundacao"
        intro="Where it all began: my first jobs, at 15, and the support service I built from scratch, learning to listen to the people who use technology."
        rooms={[
          {
            href: L(lang, '/fundacao/suporte-kaleb'),
            kicker: 'Service design · Support',
            title: 'The support service that became a sales channel: I built it from scratch and it still brings in referrals',
            text: 'No process, no team and no remote access: how I learned to solve a customer’s problem without seeing their screen.',
            tags: ['Customer service', 'Training', 'Processes'],
            cover: { src: '/img/suporte/timeline.webp', alt: 'Timeline of Kaleb’s support service, from 2009 to 2016' },
          },
        ]}
        windows={[
          {
            meta: 'ChriSound and Ilha Supermercados · 2008–2009',
            title: 'From paper to system: my first processes, at 15',
            body: (
              <>
                <p>I started working at 15 at ChriSound, in Campinas, straight into the office, because I already knew how to use a computer, something rare at my age and in my region. I helped with all the admin: paying bills, going to the bank and keeping the accounts in the system. Payables and receivables were tracked on paper, and I was the one who organised how they would be entered into the system. I also looked after invoices, stock, the till, staff payments and reports for management.</p>
                <p>Then I moved to Ilha Supermercados, in Vinhedo. I solved all of the shop’s IT issues, registered and entered products and helped wherever needed, including with ideas on how to lay out the shelves. When the shop changed systems there was no data migration, so I organised, with the supermarket team, re-registering every item in the new system.</p>
              </>
            ),
            learned: 'Process comes before any technology. Moving the accounts from paper to a system and re-registering an entire shop taught me to organise other people’s work without stopping operations, and the shelves were my first experience of thinking about the shopper’s experience.',
          },
        ]}
      />
    </InnerPage>
  );
}
