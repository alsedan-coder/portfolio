import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import { FloorPage } from '@/components/Floor';

const lang: Lang = 'en';

export const metadata = { title: 'Framework · Alan Gustavo' };

export default function Page() {
  return (
    <InnerPage lang={lang} path="/estrutura" current="estrutura" back={{ href: L(lang, '/'), label: 'Ground floor' }} endBack={false}>
      <FloorPage
        lang={lang}
        id="estrutura"
        intro="The Android apps I created at university and at my first start-up, learning to build from scratch."
        rooms={[
          {
            href: L(lang, '/estrutura/theway'),
            kicker: 'Mobile product · 2013–2014',
            title: 'How much does it cost to get there? A trip app for budget cars without a trip computer, in 2013',
            text: 'My final-year project in 2013: splitting the cost of a car trip between friends, when a trip computer was something only expensive cars had.',
            tags: ['Native Android', 'UX/UI', 'Launch'],
            cover: { src: '/img/getway/theway-2013-reconstrucao.webp', alt: 'TheWay screens from 2013, rebuilt from the original code' },
          },
        ]}
        windows={[
          {
            meta: 'EasyMarket · 2016–2017',
            title: 'EasyMarket: the supermarket on your phone before it became the norm',
            body: (
              <>
                <p>In 2016, together with Michael and Fábio, I created a start-up so that people could do their supermarket shopping on their phone and have it delivered or collect it in store. At the time, app-based delivery was still in its infancy in Brazil. Today, almost every supermarket offers it.</p>
                <p>We partnered with an investor who would handle the commercial side, and the three of us left our jobs to focus only on the product for six months. Working with agile methods, I built the entire Android front end, making sure the app worked well on any device, while Fábio and Michael handled the back end, the APIs and the database.</p>
                <p>The app was finished and working, but when the partner in charge of sales had to step away for health reasons, the investment stopped and we had no one to take the product to supermarkets. We tried on our own, but could not win customers in time, and each of us had to go back to work.</p>
              </>
            ),
            learned: 'A finished product is not a business. Since then I think about the whole service, from building it to how it reaches the people who will use it, and I avoid having an essential part depend on a single person.',
          },
        ]}
      />
    </InnerPage>
  );
}
