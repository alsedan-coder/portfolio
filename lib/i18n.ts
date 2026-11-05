export type Lang = 'pt' | 'en' | 'es';

export const langs: Lang[] = ['pt', 'en', 'es'];

export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en-GB', es: 'es' };

/** Monta o endereço de uma página no idioma escolhido. O português fica na raiz. */
export function L(lang: Lang, path: string) {
  if (lang === 'pt') return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

/** Textos fixos da interface (botões, rótulos, painel). Os textos dos casos ficam em content/. */
export const ui = {
  pt: {
    floor: 'Andar',
    rooms: 'Cômodos',
    windows: 'Janelas',
    enterRoom: 'Entrar no cômodo',
    learned: 'O que eu aprendi',
    up: 'Subir para o',
    down: 'Descer para o',
    downGround: 'Descer para o Térreo',
    backTo: 'Voltar ao',
    ground: 'Térreo',
    before: 'Antes',
    after: 'Depois',
    reformed: 'O cômodo reformado',
    nextWorks: 'A próxima obra',
    panel: 'Painel do elevador',
    youAreOn: 'Você está em',
    language: 'Idioma',
    availableFor: 'Disponível para',
    remoteRoles: 'Vagas 100% remotas',
    languages: 'Idiomas',
    aboutMe: 'Sobre mim',
    floorsNav: 'Navegação entre andares',
    result: 'O resultado',
  },
  en: {
    floor: 'Floor',
    rooms: 'Rooms',
    windows: 'Windows',
    enterRoom: 'Enter the room',
    learned: 'What I learned',
    up: 'Up to floor',
    down: 'Down to floor',
    downGround: 'Down to the Ground floor',
    backTo: 'Back to',
    ground: 'Ground floor',
    before: 'Before',
    after: 'After',
    reformed: 'The room, renovated',
    nextWorks: 'The next works',
    panel: 'Lift panel',
    youAreOn: 'You are on',
    language: 'Language',
    availableFor: 'Available for',
    remoteRoles: '100% remote roles',
    languages: 'Languages',
    aboutMe: 'About me',
    floorsNav: 'Floor navigation',
    result: 'The result',
  },
  es: {
    floor: 'Planta',
    rooms: 'Habitaciones',
    windows: 'Ventanas',
    enterRoom: 'Entrar en la habitación',
    learned: 'Lo que aprendí',
    up: 'Subir a la planta',
    down: 'Bajar a la planta',
    downGround: 'Bajar a la Planta baja',
    backTo: 'Volver a la',
    ground: 'Planta baja',
    before: 'Antes',
    after: 'Después',
    reformed: 'La habitación reformada',
    nextWorks: 'La próxima obra',
    panel: 'Panel del ascensor',
    youAreOn: 'Estás en',
    language: 'Idioma',
    availableFor: 'Disponible para',
    remoteRoles: 'Puestos 100% remotos',
    languages: 'Idiomas',
    aboutMe: 'Sobre mí',
    floorsNav: 'Navegación entre plantas',
    result: 'El resultado',
  },
} satisfies Record<Lang, Record<string, string>>;
