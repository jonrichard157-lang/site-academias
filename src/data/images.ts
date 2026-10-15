export type GridArea = 'a' | 'b' | 'c' | 'd';

export interface ImageSlot {
  /** Nome do arquivo esperado em gyms/<academia>/public/images. Se não existir, o espaço fica reservado. */
  readonly file: string;
  readonly alt: string;
  readonly placeholderLabel: string;
  readonly area: GridArea;
  /** Proporção usada no celular (no desktop a grade define o tamanho). */
  readonly mobileAspect: string;
  /** Ajuste de enquadramento quando a foto for adicionada. */
  readonly objectPosition?: string;
  readonly caption?: string;
}

// Para adicionar uma foto: salve o arquivo com o nome abaixo em gyms/<academia>/public/images.
export const buildEquipmentSlots = (gymName: string): readonly ImageSlot[] => [
  {
    file: 'equipamentos-musculacao.webp',
    alt: `Equipamentos de musculação da ${gymName}`,
    placeholderLabel: 'Equipamentos de musculação',
    area: 'a',
    mobileAspect: '3 / 2',
  },
  {
    file: 'area-pesos-livres.webp',
    alt: `Área de pesos livres da ${gymName}`,
    placeholderLabel: 'Pesos livres',
    area: 'b',
    mobileAspect: '4 / 5',
  },
  {
    file: 'maquinas-detalhe.webp',
    alt: `Detalhe de uma máquina da ${gymName}`,
    placeholderLabel: 'Detalhe das máquinas',
    area: 'c',
    mobileAspect: '1 / 1',
  },
  {
    file: 'area-treino.webp',
    alt: `Área de treino da ${gymName}`,
    placeholderLabel: 'Área de treino',
    area: 'd',
    mobileAspect: '3 / 2',
  },
];

export const buildSpaceSlots = (gymName: string): readonly ImageSlot[] => [
  {
    file: 'ambiente-interno.webp',
    alt: `Vista panorâmica do interior da ${gymName}`,
    placeholderLabel: 'Vista panorâmica do ambiente',
    area: 'a',
    mobileAspect: '16 / 9',
  },
  {
    file: 'ambiente-interno-02.webp',
    alt: `Ambiente interno da ${gymName}`,
    placeholderLabel: 'Ambiente interno',
    area: 'b',
    mobileAspect: '4 / 3',
  },
  {
    file: 'ambiente-interno-03.webp',
    alt: `Ambiente interno da ${gymName}`,
    placeholderLabel: 'Ambiente interno',
    area: 'c',
    mobileAspect: '4 / 3',
  },
];
