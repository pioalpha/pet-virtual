export interface SpritePosition {
    alt: number;
    larg: number;
    posX: number;
    posY: number;
  }
  
  export interface AnimationFrame {
    duracao: number;
    imagens: {
      imagem: string;
      posicao: 'fixa' | 'relativa';
      posX: number;
      posY: number;
    }[];
  }

  export interface SpriteConfig {
    [key: string]: SpritePosition;
 }
  
  export interface AnimationConfig {
    [key: string]: {
      loop: number;
      acao?: string;
      quadros: AnimationFrame[];
    };
  }