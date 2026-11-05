import { L, type Lang } from './i18n';

export type FloorId = 'cobertura' | 'acabamento' | 'estrutura' | 'fundacao' | 'terreo';

export type Floor = {
  id: FloorId;
  button: string;
  name: string;
  desc: string;
  years?: string;
  href: string;
};

type FloorText = { name: string; desc: string };

const base: { id: FloorId; button: string; years?: string; path: string }[] = [
  { id: 'cobertura', button: '4', years: '2026', path: '/cobertura' },
  { id: 'acabamento', button: '3', years: '2017–2025', path: '/acabamento' },
  { id: 'estrutura', button: '2', years: '2013–2017', path: '/estrutura' },
  { id: 'fundacao', button: '1', years: '2008–2016', path: '/fundacao' },
  { id: 'terreo', button: 'T', path: '/' },
];

const text: Record<Lang, Record<FloorId, FloorText>> = {
  pt: {
    cobertura: { name: 'Cobertura', desc: 'Projetos de Product e Service Design' },
    acabamento: { name: 'Acabamento', desc: 'Liderança, ensino e voluntariado' },
    estrutura: { name: 'Estrutura', desc: 'Apps Android' },
    fundacao: { name: 'Fundação', desc: 'Suporte e primeiros empregos' },
    terreo: { name: 'Térreo', desc: 'Entrada, quem sou e contato' },
  },
  en: {
    cobertura: { name: 'Rooftop', desc: 'Product and Service Design projects' },
    acabamento: { name: 'Finishes', desc: 'Leadership, teaching and volunteering' },
    estrutura: { name: 'Framework', desc: 'Android apps' },
    fundacao: { name: 'Foundations', desc: 'Support and first jobs' },
    terreo: { name: 'Ground floor', desc: 'Entrance, about me and contact' },
  },
  es: {
    cobertura: { name: 'Ático', desc: 'Proyectos de Product y Service Design' },
    acabamento: { name: 'Acabados', desc: 'Liderazgo, docencia y voluntariado' },
    estrutura: { name: 'Estructura', desc: 'Apps Android' },
    fundacao: { name: 'Cimientos', desc: 'Soporte y primeros empleos' },
    terreo: { name: 'Planta baja', desc: 'Entrada, quién soy y contacto' },
  },
};

/** Andares do painel, de cima para baixo, no idioma escolhido. */
export function floors(lang: Lang): Floor[] {
  return base.map((b) => ({ id: b.id, button: b.button, years: b.years, href: L(lang, b.path), ...text[lang][b.id] }));
}

export function getFloor(lang: Lang, id: FloorId): Floor {
  return floors(lang).find((f) => f.id === id)!;
}

export function neighbours(lang: Lang, id: FloorId) {
  const list = floors(lang);
  const i = list.findIndex((f) => f.id === id);
  return { up: i > 0 ? list[i - 1] : undefined, down: i < list.length - 1 ? list[i + 1] : undefined };
}
