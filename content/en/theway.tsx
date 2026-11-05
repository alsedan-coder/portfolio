import { InnerPage } from '@/components/Elevator';
import { L, type Lang } from '@/lib/i18n';
import {
  AfterZone, Band, BeforeAfter, Feature, Ficha, Fig, Gallery, Hero, Learned, ProblemSection, ProblemZone,
  Results, Section, SectionHead, Shots, SolutionZone, Tiles, Track,
} from '@/components/Case';

const lang: Lang = 'en';

export const metadata = { title: 'TheWay · Alan Gustavo' };

const r = (f: string) => `/img/getway/${f}.webp`;

export default function Page() {
  return (
    <InnerPage lang={lang} path="/estrutura/theway" current="estrutura" back={{ href: L(lang, '/estrutura'), label: 'Floor 2 · Framework' }}>
      <ProblemZone>
        <Hero
          lang={lang}
          kicker="Room · Mobile product · 2013–2014"
          title="How much does it cost to get there? A trip app for budget cars without a trip computer, in 2013"
          lead={<>An app where you enter <strong>where you are leaving from, where you are going and what your car is</strong>, and it shows <strong>how many litres you will use, how much it will cost and how much each person pays</strong>. The idea was mine.</>}
        >
          <BeforeAfter
            lang={lang}
            notes={[
              { label: 'Trip', text: 'how many km per litre does this car do?', kind: 'paper', style: { left: '2%', top: 10, width: 240, transform: 'rotate(-5deg)' } },
              { text: 'trip computer? only in expensive cars', kind: 'yellow', style: { right: '3%', top: 50, width: 200, transform: 'rotate(6deg)' } },
              { label: 'Splitting the cost', text: 'Distance, consumption, fuel price and number of people: all worked out in our heads.', kind: 'typed', style: { left: '8%', top: 190, width: 250, transform: 'rotate(3deg)' } },
              { text: 'money left in the tank, missing from our pockets', kind: 'yellow', style: { right: '5%', top: 245, width: 190, transform: 'rotate(-4deg)' } },
              { text: 'will the petrol last?', kind: 'red', style: { left: 4, bottom: 0, transform: 'rotate(-2deg)' } },
            ]}
            after={
              <Shots
                n={4}
                items={[
                  { src: r('01-abertura'), alt: 'TheWay: opening screen', caption: 'Opening' },
                  { src: r('02-trajeto'), alt: 'TheWay: origin, destination and route on the map', caption: 'Route' },
                  { src: r('03-carro'), alt: 'TheWay: choosing the car by model and year', caption: 'Car' },
                  { src: r('04-calculo'), alt: 'TheWay: litres, cost and split per passenger', caption: 'Result' },
                ]}
              />
            }
          />
          <Results
            items={[
              { title: 'The only mobile final-year project in my class.', text: 'Built in about 4 months, learning Android from scratch with the help of books.' },
              { title: 'Published on Google Play in 2014.', text: 'Under the name TheWay.' },
              { title: 'Made for budget cars.', text: 'With no trip computer needed, using our own fuel consumption table for each model.' },
              { title: 'Presented in talks.', text: 'About the experience of creating and launching a product while still at university.' },
            ]}
          />
          <Ficha
            items={[
              ['My role', 'Product idea, visual design and flows (UX/UI), Android front-end development, screen and flow guide for the team, coordination with agile methods'],
              ['Team', 'Alan Gustavo, Michael Felício and Fábio Pires (the project group had five people; the three of us built the app and carried on with it)'],
              ['Period', '2013 (final-year project) · 2014 (launch)'],
              ['Technology', 'Native Android in Java, Google Maps and Directions API, local database'],
              ['Platform', 'Android, published on Google Play'],
            ]}
          />
        </Hero>

        <ProblemSection n="01" label="The mess" title="Every trip ended with a whip-round worked out in our heads">
          <p>Working out the cost of a car trip seems simple, but there are many unknowns: the exact distance, how far the car goes on a litre, the price of fuel and how many people will share the cost. Without a trip computer, fuel consumption was a guess.</p>
          <p>For us, as students, getting it wrong was expensive. Sometimes the fuel was not enough, sometimes there was some left over, and the money left in the tank was missing for something else.</p>
          <p>There was nothing on the market that solved this.</p>
        </ProblemSection>

        <ProblemSection n="02" label="The idea" title="A problem I was living myself" alt>
          <p>When it was time to choose our final-year project, I brought the group a problem I was living myself: I travelled a lot and wanted to split trips with friends in a quick and fair way, just by entering the car and the destination.</p>
          <p>The group bought into the idea, and we made two decisions that broke with the rest of the class:</p>
          <ul>
            <li><strong>Make it for mobile.</strong> The other projects were desktop programs. We wanted something that fitted in your pocket and that anyone could use.</li>
            <li><strong>Make it for Android</strong>, because we believed mobile was the future and we wanted to learn the tool.</li>
          </ul>
        </ProblemSection>
      </ProblemZone>

      <SolutionZone lang={lang} lead="An app in your pocket, for the sum that used to be done in your head.">
        <Section label="Building while learning">
          <SectionHead n="03" label="Building while learning" title="From zero to a finished app in about 4 months">
            <p>In 2013 there was hardly any content about Android in Brazil. We bought books, read articles in English and learned to develop in Eclipse with the Android library, because Android Studio did not exist yet.</p>
          </SectionHead>
          <Track
            items={[
              { place: 'Route', title: 'Origin and destination', text: 'typed in as addresses. The app showed the route, the distance and the journey time on Google Maps.' },
              { place: 'Car', title: 'The car', text: 'chosen by model, year and engine size.' },
              { place: 'Fuel', title: 'Petrol or ethanol', text: 'and the price per litre.' },
              { place: 'Result', title: 'The finished sum', text: 'total litres, the cost of the trip and how much each passenger pays.' },
            ]}
          />
          <Gallery min={180}>
            <Fig src={r('01-abertura')} alt="TheWay 2013: opening screen with the slogan The way to save" caption="Opening" />
            <Fig src={r('02-trajeto')} alt="TheWay 2013: route from Campinas to São Paulo on the map" caption="Route" />
            <Fig src={r('03-carro')} alt="TheWay 2013: choosing the car" caption="Car" />
            <Fig src={r('04-calculo')} alt="TheWay 2013: litres needed, total cost and cost per passenger" caption="Result" />
          </Gallery>
          <p className="backstage">The 2013 screens were rebuilt from the project’s original code and images.</p>
        </Section>

        <Section label="The decisions">
          <SectionHead n="04" label="The decisions" title="Designed for people with fewer resources" />
          <Feature src={r('03-carro')} alt="Choosing the car by model and year" title="A consumption table instead of a trip computer">
            Most cars had no trip computer, and hardly anyone knows off the top of their head how far their car goes on a litre. We built our own table with the petrol and ethanol consumption of the best-selling budget models in Brazil, such as the Ka, Palio, Gol, Uno, Sandero and Clio. People only had to choose their car.
          </Feature>
          <Tiles
            items={[
              { tag: 'Audience', title: 'Start with budget cars', text: 'We deliberately limited the list to the most common models. The audience was students and families on a tight budget, not luxury car owners.' },
              { tag: 'Reality', title: 'Fuel price entered by the user', text: 'Prices change from one petrol station to another and from week to week. Letting people type in the price they saw at the pump kept the sum closer to reality.' },
              { tag: 'Access', title: 'Work on any device', text: 'In 2013 every Android phone had a different screen size. We created versions of the screens for around 20 combinations of size and density, with almost no references.' },
              { tag: 'Language', title: 'Messages that speak to people', text: 'When the internet failed, the app asked people to check their signal and try again, instead of showing a technical error.' },
            ]}
          />
        </Section>

        <Section label="Launching and learning">
          <SectionHead n="05" label="Launching and learning" title="“The way to save”">
            <p>In 2014, after graduating, we published TheWay on Google Play with the slogan “O caminho para economia”, the way to save.</p>
            <p>The app had some downloads, but nothing significant. Looking back, the reason is clear: <strong>we launched without any promotion</strong>. We ran no campaign, went to no events and never thought about how people would discover the app. After that, personal life, work and other projects took up everyone’s time, and the project stalled.</p>
            <p>Even so, the experience paid off: we presented the project in <strong>talks at several events</strong> about the challenges and lessons of creating and launching a product at such a young age.</p>
          </SectionHead>
        </Section>

        <Section label="The next version">
          <SectionHead n="06" label="The next version, which stayed on paper" title="GetWay: colours by function and shared rides">
            <p>After the launch, I designed a new version of the app, called GetWay, so we could carry on with the project. It was never released, but it shows how I was already thinking about the evolution of a product:</p>
            <ul>
              <li><strong>A home screen with four large areas</strong>: Route, Car, Fuel and Result.</li>
              <li><strong>A colour system by function</strong> that guided people through each step: red for the route, blue for the car, purple for fuel and orange for the result.</li>
              <li><strong>Saved routes and cars</strong>, so you would not start from scratch on every trip.</li>
              <li><strong>A comparison between ethanol and petrol</strong>, to help choose the better-value fuel.</li>
              <li><strong>A vision of shared rides</strong>: friends on the same route would split the cost of the trip, even if each of them only went part of the way. Tolls were also part of the plan.</li>
            </ul>
            <p>We even organised the work in sprints, but the team decided to focus its effort on a new project: the start-up EasyMarket.</p>
          </SectionHead>
          <Gallery min={150}>
            <Fig src={r('02-main')} alt="GetWay: home screen with Route, Car, Fuel and Result" caption="Home" />
            <Fig src={r('04-rotas')} alt="GetWay: routes" caption="Route" />
            <Fig src={r('07-carros')} alt="GetWay: cars" caption="Car" />
            <Fig src={r('09-combustivel')} alt="GetWay: fuel" caption="Fuel" />
            <Fig src={r('10-resultado')} alt="GetWay: result split per passenger" caption="Result" />
          </Gallery>
          <p className="backstage">Original prototypes I designed in Illustrator, for a version that was never released.</p>
        </Section>
      </SolutionZone>

      <Band
        kicker="07 · What came next"
        title="The same team stayed together"
        text={<>In 2016 we started FastMarket, which became EasyMarket, our start-up for supermarket shopping with home delivery.</>}
      />

      <AfterZone>
        <Learned
          lang={lang}
          items={[
            'A good product starts with a problem someone really feels. Mine was splitting the petrol money.',
            'Thinking about people with fewer resources changes the product: without the budget car table, the app would not have served those who needed it most.',
            'Launching is not the end of the work. Without promotion, a good product reaches no one.',
            'Deadlines and method make a difference: on the final-year project we delivered everything because there was a date; without one, the project stalled.',
          ]}
        />
      </AfterZone>
    </InnerPage>
  );
}
