import { AnimationConfig, SpriteConfig } from '@/types/animation';
import CanvasAnimation from '../components/CanvasAnimation';
import PetControls from '../components/PetControls';

const Home = () => {
  //const spritesheet = '/sprites/TamagotchiP1P2.png';
  //const spritesheet = '/sprites/TinyPNG_TamagotchiP1P2.png';
  const spritesheet = '/sprites/TinyPNG_TamagotchiP1P2-transp.png';

  //  x, y, l, a, o

  const sprites: SpriteConfig = {
    // static OvoP1J = [[2, 16, 10, 11,""], [13, 16, 10, 11,""], [24, 13, 10, 14,""]]; // V
    OvoP1J1: { posX: 2, posY: 16, larg: 10, alt: 11 },
    OvoP1J2: { posX: 13, posY: 16, larg: 10, alt: 11 },
    OvoP1J3: { posX: 24, posY: 13, larg: 10, alt: 14 },

    // static OvoP1A = [[35, 16, 10, 11,""], [46, 17, 12, 10,""], [59, 14, 16, 13,""]]; // V
    OvoP1A1: { posX: 35, posY: 16, larg: 10, alt: 11 },
    OvoP1A2: { posX: 46, posY: 17, larg: 12, alt: 10 },
    OvoP1A3: { posX: 59, posY: 14, larg: 16, alt: 13 },

    // static OvoP21 = [[76, 16, 10, 11,""], [87, 18, 12, 9,""], [100, 14, 10, 13,""]]; // V
    OvoP211: { posX: 76, posY: 16, larg: 10, alt: 11 },
    OvoP212: { posX: 87, posY: 18, larg: 12, alt: 9 },
    OvoP213: { posX: 100, posY: 14, larg: 10, alt: 13 },

    // static OvoP22 = [[111, 16, 10, 11,""], [122, 18, 12, 9,""], [135, 14, 16, 13,""]]; // V
    OvoP221: { posX: 111, posY: 16, larg: 10, alt: 11 },
    OvoP222: { posX: 122, posY: 18, larg: 12, alt: 9 },
    OvoP223: { posX: 135, posY: 14, larg: 16, alt: 13 },

    // static OvoP23 = [[152, 14, 12, 13,""], [165, 16, 12, 11,""], [178, 12, 16, 15,""]]; // V
    OvoP231: { posX: 152, posY: 14, larg: 12, alt: 13 },
    OvoP232: { posX: 165, posY: 16, larg: 12, alt: 11 },
    OvoP233: { posX: 178, posY: 12, larg: 16, alt: 15 },

    // static BabitchiP1Idle = [[2, 32, 6, 6,""], [9, 35, 8, 3,""]]; // V
    BabitchiP1Idle1: { posX: 2, posY: 32, larg: 6, alt: 6 },
    BabitchiP1Idle2: { posX: 9, posY: 35, larg: 8, alt: 3 },
  };

  const animations: AnimationConfig = {
    OvoIdle: {
      loop: 0,
      quadros: [
        {
          duracao: 600,
          imagens: [
            { imagem: "OvoP1A1", posicao: "fixa", posX: 11, posY: 2 }
          ]
        },
        {
          duracao: 600,
          imagens: [
            { imagem: "OvoP1A2", posicao: "fixa", posX: 10, posY: 3 }
          ]
        },
      ]
    },
    OvoEvoluindo1: {
      loop: 3,
      acao: "OvoEvoluindo2",
      quadros: [
        {
          duracao: 300,
          imagens: [
            { imagem: "OvoP1A2", posicao: "fixa", posX: 10, posY: 3 }
          ]
        },
        {
          duracao: 300,
          imagens: [
            { imagem: "OvoP1A2", posicao: "fixa", posX: 9, posY: 3 }
          ]
        },
      ]
    },
    OvoEvoluindo2: {
      loop: 1,
      acao: "BabitchiP1Idle",
      quadros: [
        {
          duracao: 900,
          imagens: [
            { imagem: "OvoP1A3", posicao: "fixa", posX: 8, posY: 0 }
          ]
        },
      ]
    },
    BabitchiP1Idle: {
      loop: 0,
      quadros: [
        {
          duracao: 600,
          imagens: [
            { imagem: "BabitchiP1Idle1", posicao: "fixa", posX: 13, posY: 9 }
          ]
        },
        {
          duracao: 600,
          imagens: [
            { imagem: "BabitchiP1Idle1", posicao: "fixa", posX: 10, posY: 9 }
          ]
        },
        {
          duracao: 600,
          imagens: [
            { imagem: "BabitchiP1Idle2", posicao: "fixa", posX: 12, posY: 13 }
          ]
        },
        {
          duracao: 600,
          imagens: [
            { imagem: "BabitchiP1Idle2", posicao: "fixa", posX: 10, posY: 13 }
          ]
        },
      ]
    },

  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Virtual Pet Manager</h1>
      <CanvasAnimation spritesheet={spritesheet} sprites={sprites} animations={animations} />
      <PetControls />
    </div>
  );
};

export default Home;