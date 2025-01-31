export interface SpritePosition {
    alt: number;
    larg: number;
    posX: number;
    posY: number;
}

export interface SpriteConfig {
  [key: string]: SpritePosition;
}

export interface AnimationFrame {
    duracao: number;
    imagens: {
      imagem: SpritePosition;
      posicao: 'fixa' | 'relativa';
      posX: number;
      posY: number;
    }[];
}
  
// export interface AnimationConfig {
//     [key: string]: {
//       loop: number;
//       acao?: string;
//       quadros: AnimationFrame[];
//       nome?: string;
//     };
// }

export type AnimationConfig<T extends Record<string, AnimationDefinition>> = {
  [K in keyof T]: T[K] & { name: K };
};

export interface AnimationDefinition {
  loop: number;
  acao?: string;
  quadros: AnimationFrame[];
}

export function createAnimations<T extends Record<string, Omit<AnimationDefinition, 'name'>>>(
  config: T
): AnimationConfig<T> {
  return Object.fromEntries(
    Object.entries(config).map(([key, value]) => [key, { ...value, name: key }])
  ) as AnimationConfig<T>;
}