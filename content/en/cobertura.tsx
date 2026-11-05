import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import { FloorPage } from '@/components/Floor';

const lang: Lang = 'en';

export const metadata = { title: 'Rooftop · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/cobertura" current="cobertura" back={{ href: L(lang, '/'), label: 'Ground floor' }} endBack={false}>
      <FloorPage
        lang={lang}
        id="cobertura"
        intro="What I am designing now: products and services for agriculture and retail, with field research, service design and AI."
        rooms={[
          {
            href: L(lang, '/cobertura/irmaos-lacarini'),
            kicker: 'Irmãos Lacarini · Product design · Agriculture',
            title: 'Digitising the harvest: from lost paper slips to prices applied in bulk',
            text: 'The brief was to digitise a piece of paper. Field research showed the problem was not the screen; it was the service.',
            tags: ['Field research', 'Service design', 'App + dashboard'],
            cover: { src: '/img/hmv/16-painel-lancar-valor.webp', alt: 'Admin dashboard applying a price to several delivery slips' },
          },
          {
            href: L(lang, '/cobertura/vendas-kaleb'),
            kicker: 'Service design · Retail',
            title: 'Reconnecting sales and marketing: AI prospecting and rewarded referrals',
            text: 'How do you pass on the trust that customers already have in a tech reseller to people who do not know it yet?',
            tags: ['Service blueprint', 'Applied AI', 'Referral programmes'],
            cover: { src: '/img/kaleb/09-service-blueprint.webp', alt: 'Service blueprint for AI-assisted prospecting' },
          },
        ]}
        windows={[
          {
            meta: 'SHEEP³ · 2026',
            title: 'Getting an agency off the ground with design and code',
            body: (
              <>
                <p>I co-founded SHEEP³, a communications and marketing agency working in Brazil and the United Kingdom, with two people I met on the Kaleb project. I contribute design, technology and strategy, alongside my search for a role in product design, UX/UI or service design.</p>
                <p>I designed and built the agency website (sheepthree.com) with Astro, TypeScript, HTML and CSS. The navigation is a corridor of rooms that people move through with buttons, the mouse wheel, the keyboard or a swipe, with reduced motion for those who need it, routes in Portuguese and English, and a contact form protected against bots on Cloudflare. The code is public on GitHub.</p>
              </>
            ),
            learned: 'Taking a creative idea all the way, from concept to live code, while making sure that being different stays easy to use.',
          },
          {
            meta: 'United Kingdom · since August 2026',
            title: 'Learning English by living in English',
            body: (
              <p>Since August 2026 I have been living in Northampton, England, learning English hands-on, on my own, day to day. I read very well, write with confidence and keep gaining fluency in conversation. This portfolio in three languages is part of that practice too.</p>
            ),
          },
        ]}
      />
    </InnerPage>
  );
}
