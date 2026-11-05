import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import { FloorPage } from '@/components/Floor';

const lang: Lang = 'en';

export const metadata = { title: 'Finishes · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/acabamento" current="acabamento" back={{ href: L(lang, '/'), label: 'Ground floor' }} endBack={false}>
      <FloorPage
        lang={lang}
        id="acabamento"
        intro="The years when I started developing people: leading a team and a company, teaching IT, producing work that leaves the screen and guiding groups in three languages."
        windows={[
          {
            meta: 'Kaleb Brasil · 2017–2022',
            title: 'From serving customers to building the team: leading support, then the company',
            body: (
              <>
                <p>When I came back from EasyMarket, I became the technical support manager at Kaleb Brasil: the installation, training and support team, the schedules, the service scripts and the training of every new person. What I had built on my own now had to work without me, through other people.</p>
                <p>In 2020 I took on the management of the company together with my sister, Mayra, taking part in the strategic decisions. During the pandemic, with the whole team at home, the two of us kept operations and customer service running.</p>
              </>
            ),
            learned: 'A standard only lasts when the team understands why it exists. And in a crisis, leading means deciding what matters first: keeping the customer served.',
          },
          {
            meta: 'Microcamp · 2022–2024',
            title: 'Explaining the same thing to an 8-year-old and a 70-year-old: what teaching taught me about design',
            body: (
              <p>I taught IT at Microcamp, in Sumaré. My students were between 8 and 70 years old, and I followed each of them from their very first contact with a computer through to Excel, Illustrator and Photoshop. To cope with such different classes, I created my own ways of explaining: changing the example, the pace and the words to suit the person in front of me.</p>
            ),
            learned: 'The person who does not understand is not the problem; the explanation is. That is how I think about onboarding, training and microcopy today: the interface also has to speak the language of the people who use it.',
          },
          {
            meta: 'EasyPrint · 2024–2025',
            title: 'From a CorelDRAW file to an installed shop front: design that leaves the screen',
            body: (
              <p>A childhood friend invited me to become a partner in a print shop in Vinhedo. I did the art direction for everything in CorelDRAW and the hands-on work as well: business cards, wedding invitations, large-format stickers, including for cars, and huge shop fronts that I installed myself, despite being afraid of heights.</p>
            ),
            learned: 'In print, mistakes have no “undo”. It taught me to review, to think about material and scale before producing, and to design for the real place where the piece will live. It is the closest I have come to my childhood dream of designing spaces.',
          },
          {
            meta: 'Portugal and Spain · 2025',
            title: 'One tour, three languages: guiding groups in Peneda-Gerês',
            body: (
              <p>Getting to know other cultures and challenging myself in other languages has always been a goal of mine. In 2025 I went to Europe as a volunteer. For six months I guided four-hour tours in Peneda-Gerês National Park, explaining each stop in Portuguese, English and Spanish to the same group. In the other months I worked on the reception of a hostel in Portugal and travelled around Spain, spending every day with guests and colleagues in English and Spanish. In the same period I started my MBA in AI and UX.</p>
            ),
            learned: 'Adapting the same message for different people, at the same time and live. It is the same exercise as designing for diverse audiences, just without a screen.',
          },
        ]}
      />
    </InnerPage>
  );
}
