export type FloorId = 'cobertura' | 'acabamento' | 'estrutura' | 'fundacao' | 'terreo';

export type Floor = {
  id: FloorId;
  button: string;
  name: string;
  desc: string;
  years?: string;
  href: string;
};

// Ordem do painel: de cima para baixo.
export const floors: Floor[] = [
  { id: 'cobertura', button: '4', name: 'Cobertura', desc: 'Projetos de Product e Service Design', years: '2026', href: '/cobertura' },
  { id: 'acabamento', button: '3', name: 'Acabamento', desc: 'Liderança, ensino e voluntariado', years: '2017–2025', href: '/acabamento' },
  { id: 'estrutura', button: '2', name: 'Estrutura', desc: 'Apps Android', years: '2013–2017', href: '/estrutura' },
  { id: 'fundacao', button: '1', name: 'Fundação', desc: 'Suporte e primeiros empregos', years: '2008–2016', href: '/fundacao' },
  { id: 'terreo', button: 'T', name: 'Térreo', desc: 'Entrada, quem sou e contato', href: '/' },
];

export function getFloor(id: FloorId): Floor {
  return floors.find((f) => f.id === id)!;
}

export function neighbours(id: FloorId) {
  const i = floors.findIndex((f) => f.id === id);
  return { up: i > 0 ? floors[i - 1] : undefined, down: i < floors.length - 1 ? floors[i + 1] : undefined };
}
