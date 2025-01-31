import { createAnimations, SpriteConfig } from '@/types/animation';
import CanvasAnimation from '../components/CanvasAnimation';
import PetControls from '../components/PetControls';

const spritesheet = '/sprites/TinyPNG_TamagotchiP1P2-transp.png';

const sprites: SpriteConfig = {

  // static Vazio = [[0, 0, 1, 1,""]];
  Vazio: { posX: 0, posY: 0, larg: 1, alt: 1 },
  // static Prato = [[2, 3, 7, 7,""], [10, 3, 7, 7,""], [18, 3, 7, 7,""], [26, 3, 7, 7,""]]; // V
  Prato1: { posX: 2, posY: 3, larg: 7, alt: 7 },
  Prato2: { posX: 10, posY: 3, larg: 7, alt: 7 },
  Prato3: { posX: 18, posY: 3, larg: 7, alt: 7 },
  Prato4: { posX: 26, posY: 3, larg: 7, alt: 7 },
  // static Pao = [[34, 3, 8, 7,""], [43, 3, 7, 7,""], [51, 3, 7, 7,""]]; // <V
  Pao1: { posX: 34, posY: 3, larg: 8, alt: 7 },
  Pao2: { posX: 43, posY: 3, larg: 7, alt: 7 },
  Pao3: { posX: 51, posY: 3, larg: 7, alt: 7 },
  // static Bolinho = [[58, 3, 8, 7,""], [67, 3, 8, 7,""], [76, 3, 6, 7,""]]; // <V
  Bolinho1: { posX: 58, posY: 3, larg: 8, alt: 7 },
  Bolinho2: { posX: 67, posY: 3, larg: 8, alt: 7 },
  Bolinho3: { posX: 76, posY: 3, larg: 6, alt: 7 },
  // static Batata = [[83, 3, 8, 7,""], [92, 3, 4, 7,""], [98, 3, 4, 7,""]]; // <V
  Batata1: { posX: 83, posY: 3, larg: 8, alt: 7 },
  Batata2: { posX: 92, posY: 3, larg: 4, alt: 7 },
  Batata3: { posX: 98, posY: 3, larg: 4, alt: 7 },
  // static Bala = [[103, 2, 8, 8,""], [112, 4, 6, 6,""], [119, 6, 6, 4,""]]; // >V
  Bala1: { posX: 103, posY: 2, larg: 8, alt: 8 },
  Bala2: { posX: 112, posY: 4, larg: 6, alt: 6 },
  Bala3: { posX: 119, posY: 6, larg: 6, alt: 4 },
  // static Bolo = [[126, 2, 8, 8,""], [135, 2, 5, 8,""], [141, 2, 3, 8,""]]; // <V
  Bolo1: { posX: 126, posY: 1, larg: 8, alt: 8 },
  Bolo2: { posX: 135, posY: 2, larg: 5, alt: 8 },
  Bolo3: { posX: 141, posY: 2, larg: 3, alt: 8 },

  // static Aborrecido = [[145, 3, 3, 7,""], [149, 3, 7, 7,""]]; // <V
  Aborrecido1: { posX: 145, posY: 3, larg: 3, alt: 7 },
  Aborrecido2: { posX: 149, posY: 3, larg: 7, alt: 7 },
  // static Feliz = [[157, 2, 8, 8,""]]; // <V
  Feliz: { posX: 157, posY: 2, larg: 8, alt: 8 },
  // static Doenca = [[166, 3, 7, 7,""]]; // <V
  Doenca: { posX: 166, posY: 3, larg: 7, alt: 7 },
  // static Dormindo = [[174, 4, 7, 6,""], [182, 4, 4, 6,""]];
  Dormindo1: { posX: 174, posY: 4, larg: 7, alt: 6 },
  Dormindo2: { posX: 182, posY: 4, larg: 4, alt: 6 },
  // static Seta = [[187, 3, 6, 7,""], [194, 3, 6, 7,""]]; // <V Esquerda, direita
  SetaE: { posX: 187, posY: 3, larg: 6, alt: 7 },
  SetaD: { posX: 194, posY: 3, larg: 6, alt: 7 },
  // static Coracao = [[201, 3, 7, 7,""]]; // <V
  Coracao: { posX: 201, posY: 3, larg: 7, alt: 7 },
  // static Conteiner = [[209, 3, 7, 7,""]]; // <V
  Conteiner: { posX: 209, posY: 3, larg: 7, alt: 7 },
  // static Balanca = [[217, 3, 8, 7,""]]; // <V
  Balanca: { posX: 217, posY: 3, larg: 8, alt: 7 },
  // static Yr = [[226, 4, 7, 6,""]]; // <V
  Yr: { posX: 226, posY: 4, larg: 7, alt: 6 },
  // static Japones = [[234, 3, 6, 7,""]]; // <V
  Japones: { posX: 234, posY: 3, larg: 6, alt: 7 },
  // static Peso = [[241, 4, 7, 6,""], [249, 4, 7, 6,""], [257, 3, 6, 7,""]];  // <V Oz, lb., g
  Peso1: { posX: 241, posY: 4, larg: 7, alt: 6 },
  Peso2: { posX: 249, posY: 4, larg: 7, alt: 6 },
  Peso3: { posX: 257, posY: 3, larg: 6, alt: 7 },
  // static Vs = [[228, 43, 7, 7,""]];
  Vs: { posX: 228, posY: 43, larg: 7, alt: 7 },
  // static Discipline = [[238, 51,30,8,""]];
  Discipline: { posX: 238, posY: 51, larg: 30, alt: 8 },
  // static Barra = [[238,59,31,7,""], [209, 102, 5, 2], [209, 102, 13, 2], [209, 102, 19, 2], [209, 102, 26, 2]];
  Barra1: { posX: 238, posY: 59, larg: 31, alt: 7 },
  Barra2: { posX: 209, posY: 102, larg: 5, alt: 2 },
  Barra3: { posX: 209, posY: 102, larg: 13, alt: 2 },
  Barra4: { posX: 209, posY: 102, larg: 19, alt: 2 },
  Barra5: { posX: 209, posY: 102, larg: 26, alt: 2 },
  // static Hungry = [[208,76,24,8,""]];
  Hungry: { posX: 208, posY: 76, larg: 24, alt: 8 },
  // static Happy = [[235,76,22,8,""]];
  Happy: { posX: 235, posY: 76, larg: 22, alt: 8 },
  // static Set = [[208,43,12,7,""]];
  Set: { posX: 208, posY: 43, larg: 12, alt: 7 },

  OvoP1J1: { posX: 2, posY: 16, larg: 10, alt: 11 },
  OvoP1J2: { posX: 13, posY: 16, larg: 10, alt: 11 },
  OvoP1J3: { posX: 24, posY: 13, larg: 10, alt: 14 },
  OvoP1A1: { posX: 35, posY: 16, larg: 10, alt: 11 },
  OvoP1A2: { posX: 46, posY: 17, larg: 12, alt: 10 },
  OvoP1A3: { posX: 59, posY: 14, larg: 16, alt: 13 },
  OvoP211: { posX: 76, posY: 16, larg: 10, alt: 11 },
  OvoP212: { posX: 87, posY: 18, larg: 12, alt: 9 },
  OvoP213: { posX: 100, posY: 14, larg: 10, alt: 13 },
  OvoP221: { posX: 111, posY: 16, larg: 10, alt: 11 },
  OvoP222: { posX: 122, posY: 18, larg: 12, alt: 9 },
  OvoP223: { posX: 135, posY: 14, larg: 16, alt: 13 },
  OvoP231: { posX: 152, posY: 14, larg: 12, alt: 13 },
  OvoP232: { posX: 165, posY: 16, larg: 12, alt: 11 },
  OvoP233: { posX: 178, posY: 12, larg: 16, alt: 15 },

  BabitchiP1Idle1: { posX: 2, posY: 32, larg: 6, alt: 6 },
  BabitchiP1Idle2: { posX: 9, posY: 35, larg: 8, alt: 3 },
  // static BabitchiP1Negando = [[18, 32, 6, 6,""], [18, 32, 6, 6,"flipH"]];
  BabitchiP1Negando1: { posX: 18, posY: 32, larg: 6, alt: 6 },
  BabitchiP1Negando2: { posX: 18, posY: 32, larg: 6, alt: 6 }, // FLIP
  // static BabitchiP1Comendo = [[25, 31, 6, 7,""]]; // V
  BabitchiP1Comendo: { posX: 25, posY: 31, larg: 6, alt: 7 },
  // static BabitchiP1Feliz = [[32, 32, 6, 6,""]]; // V
  BabitchiP1Feliz: { posX: 32, posY: 32, larg: 6, alt: 6 },
  // static BabitchiP1Aborrecido = [[39, 31, 8, 7,""]]; // V
  BabitchiP1Aborrecido: { posX: 39, posY: 31, larg: 8, alt: 7 },
  // static BabitchiP1Doente = [[48, 35, 8, 3,""]]; // V
  BabitchiP1Doente: { posX: 48, posY: 35, larg: 8, alt: 3 },

  // static BabitchiP2Idle = [[72, 30, 8, 8,""], [81, 32, 8, 6,""]]; // <V
  BabitchiP2Idle1: { posX: 72, posY: 30, larg: 8, alt: 8 },
  BabitchiP2Idle2: { posX: 81, posY: 32, larg: 8, alt: 6 },
  // static BabitchiP2Comendo = [[90, 30, 8, 8,""], [99, 30, 8, 8,""]]; // <V
  BabitchiP2Comendo1: { posX: 90, posY: 30, larg: 8, alt: 8 },
  BabitchiP2Comendo2: { posX: 99, posY: 30, larg: 8, alt: 8 },
  // static BabitchiP2Feliz = [[108, 30, 8, 8,""]]; // <V
  BabitchiP2Feliz: { posX: 108, posY: 30, larg: 8, alt: 8 },
  // static BabitchiP2Aborrecido = [[117, 30, 8, 8,""]]; // <V
  BabitchiP2Aborrecido: { posX: 117, posY: 30, larg: 8, alt: 8 },
  // static BabitchiP2Doente = [[126, 33, 8, 5,""]]; // <V
  BabitchiP2Doente: { posX: 126, posY: 33, larg: 8, alt: 5 },

  Meal: { posX: 208, posY: 94, larg: 18, alt: 6 },
  Snack: { posX: 229, posY: 93, larg: 23, alt: 7 },

//   static Fonte3x5 = [
//     [208, 29, 3, 5,""], // 0
Fonte3x50: { posX: 208, posY: 29, larg: 3, alt: 5 },
//     [212, 29, 3, 5,""], // 1
Fonte3x51: { posX: 212, posY: 29, larg: 3, alt: 5 },
//     [216, 29, 3, 5,""], // 2
Fonte3x52: { posX: 216, posY: 29, larg: 3, alt: 5 },
//     [220, 29, 3, 5,""], // 3
Fonte3x53: { posX: 220, posY: 29, larg: 3, alt: 5 },
//     [224, 29, 3, 5,""], // 4
Fonte3x54: { posX: 224, posY: 29, larg: 3, alt: 5 },
//     [228, 29, 3, 5,""], // 5
Fonte3x55: { posX: 228, posY: 29, larg: 3, alt: 5 },
//     [232, 29, 3, 5,""], // 6
Fonte3x56: { posX: 232, posY: 29, larg: 3, alt: 5 },
//     [236, 29, 3, 5,""], // 7
Fonte3x57: { posX: 236, posY: 29, larg: 3, alt: 5 },
//     [240, 29, 3, 5,""], // 8
Fonte3x58: { posX: 240, posY: 29, larg: 3, alt: 5 },
//     [244, 29, 3, 5,""], // 9
Fonte3x59: { posX: 244, posY: 29, larg: 3, alt: 5 },
//     [248, 29, 1, 5,""], // :
Fonte3x5doispontos: { posX: 248, posY: 29, larg: 1, alt: 5 },

//     [142, 114, 3, 5,""], // A => 11
Fonte3x5A: { posX: 142, posY: 114, larg: 3, alt: 5 },
//     [146, 114, 3, 5,""], // B
Fonte3x5B: { posX: 146, posY: 114, larg: 3, alt: 5 },
//     [150, 114, 3, 5,""], // C
Fonte3x5C: { posX: 150, posY: 114, larg: 3, alt: 5 },
//     [154, 114, 3, 5,""], // D
Fonte3x5D: { posX: 154, posY: 114, larg: 3, alt: 5 },
//     [158, 114, 3, 5,""], // E
Fonte3x5E: { posX: 158, posY: 114, larg: 3, alt: 5 },
//     [162, 114, 3, 5,""], // F
Fonte3x5F: { posX: 162, posY: 114, larg: 3, alt: 5 },
//     [166, 114, 3, 5,""], // G
Fonte3x5G: { posX: 166, posY: 114, larg: 3, alt: 5 },
//     [170, 114, 3, 5,""], // H
Fonte3x5H: { posX: 170, posY: 114, larg: 3, alt: 5 },
//     [174, 114, 3, 5,""], // I
Fonte3x5I: { posX: 174, posY: 114, larg: 3, alt: 5 },
//     [178, 114, 3, 5,""], // J
Fonte3x5J: { posX: 178, posY: 114, larg: 3, alt: 5 },
//     [182, 114, 3, 5,""], // K
Fonte3x5K: { posX: 182, posY: 114, larg: 3, alt: 5 },
//     [186, 114, 3, 5,""], // L
Fonte3x5L: { posX: 186, posY: 114, larg: 3, alt: 5 },
//     [190, 114, 3, 5,""], // M
Fonte3x5M: { posX: 190, posY: 114, larg: 3, alt: 5 },
//     [194, 114, 3, 5,""], // N
Fonte3x5N: { posX: 194, posY: 114, larg: 3, alt: 5 },
//     [198, 114, 3, 5,""], // O
Fonte3x5O: { posX: 198, posY: 114, larg: 3, alt: 5 },
//     [202, 114, 3, 5,""], // P
Fonte3x5P: { posX: 202, posY: 114, larg: 3, alt: 5 },
//     [206, 114, 3, 5,""], // Q
Fonte3x5Q: { posX: 206, posY: 114, larg: 3, alt: 5 },
//     [210, 114, 3, 5,""], // R
Fonte3x5R: { posX: 210, posY: 114, larg: 3, alt: 5 },
//     [214, 114, 3, 5,""], // S
Fonte3x5S: { posX: 214, posY: 114, larg: 3, alt: 5 },
//     [218, 114, 3, 5,""], // T
Fonte3x5T: { posX: 218, posY: 114, larg: 3, alt: 5 },
//     [222, 114, 3, 5,""], // U
Fonte3x5U: { posX: 222, posY: 114, larg: 3, alt: 5 },
//     [226, 114, 3, 5,""], // V
Fonte3x5V: { posX: 226, posY: 114, larg: 3, alt: 5 },
//     [230, 114, 3, 5,""], // W
Fonte3x5W: { posX: 230, posY: 114, larg: 3, alt: 5 },
//     [234, 114, 3, 5,""], // X
Fonte3x5X: { posX: 234, posY: 114, larg: 3, alt: 5 },
//     [238, 114, 3, 5,""], // Y
Fonte3x5Y: { posX: 238, posY: 114, larg: 3, alt: 5 },
//     [242, 114, 3, 5,""], // Z
Fonte3x5Z: { posX: 242, posY: 114, larg: 3, alt: 5 },

//     [142, 120, 3, 5,""], // a => 37
Fonte3x5a: { posX: 142, posY: 120, larg: 3, alt: 5 },
//     [146, 120, 3, 5,""], // b
Fonte3x5b: { posX: 146, posY: 120, larg: 3, alt: 5 },
//     [150, 120, 3, 5,""], // c
Fonte3x5c: { posX: 150, posY: 120, larg: 3, alt: 5 },
//     [154, 120, 3, 5,""], // d
Fonte3x5d: { posX: 154, posY: 120, larg: 3, alt: 5 },
//     [158, 120, 3, 5,""], // e
Fonte3x5e: { posX: 158, posY: 120, larg: 3, alt: 5 },
//     [162, 120, 3, 5,""], // f
Fonte3x5f: { posX: 162, posY: 120, larg: 3, alt: 5 },
//     [166, 120, 3, 5,""], // g
Fonte3x5g: { posX: 166, posY: 120, larg: 3, alt: 5 },
//     [170, 120, 3, 5,""], // h
Fonte3x5h: { posX: 170, posY: 120, larg: 3, alt: 5 },
//     [174, 120, 3, 5,""], // i
Fonte3x5i: { posX: 174, posY: 120, larg: 3, alt: 5 },
//     [178, 120, 3, 5,""], // j
Fonte3x5j: { posX: 178, posY: 120, larg: 3, alt: 5 },
//     [182, 120, 3, 5,""], // k
Fonte3x5k: { posX: 182, posY: 120, larg: 3, alt: 5 },
//     [186, 120, 3, 5,""], // l
Fonte3x5l: { posX: 186, posY: 120, larg: 3, alt: 5 },
//     [190, 120, 3, 5,""], // m
Fonte3x5m: { posX: 190, posY: 120, larg: 3, alt: 5 },
//     [194, 120, 3, 5,""], // n
Fonte3x5n: { posX: 194, posY: 120, larg: 3, alt: 5 },
//     [198, 120, 3, 5,""], // o
Fonte3x5o: { posX: 198, posY: 120, larg: 3, alt: 5 },
//     [202, 120, 3, 5,""], // p
Fonte3x5p: { posX: 202, posY: 120, larg: 3, alt: 5 },
//     [206, 120, 3, 5,""], // q
Fonte3x5q: { posX: 206, posY: 120, larg: 3, alt: 5 },
//     [210, 120, 3, 5,""], // e
Fonte3x5r: { posX: 210, posY: 120, larg: 3, alt: 5 },
//     [214, 120, 3, 5,""], // s
Fonte3x5s: { posX: 214, posY: 120, larg: 3, alt: 5 },
//     [218, 120, 3, 5,""], // t
Fonte3x5t: { posX: 218, posY: 120, larg: 3, alt: 5 },
//     [222, 120, 3, 5,""], // u
Fonte3x5u: { posX: 222, posY: 120, larg: 3, alt: 5 },
//     [226, 120, 3, 5,""], // v
Fonte3x5v: { posX: 226, posY: 120, larg: 3, alt: 5 },
//     [230, 120, 3, 5,""], // w
Fonte3x5w: { posX: 230, posY: 120, larg: 3, alt: 5 },
//     [234, 120, 3, 5,""], // x
Fonte3x5x: { posX: 234, posY: 120, larg: 3, alt: 5 },
//     [238, 120, 3, 5,""], // y
Fonte3x5y: { posX: 238, posY: 120, larg: 3, alt: 5 },
//     [242, 120, 3, 5,""], // z
Fonte3x5z: { posX: 242, posY: 120, larg: 3, alt: 5 },
// ];
// static Fonte4x7 = [
//     [208, 35, 4, 7, ""], // 0 4x7
Fonte4x70: { posX: 208, posY: 35, larg: 4, alt: 7 },
//     [213, 35, 2, 7, ""], // 1 2x7
Fonte4x71: { posX: 213, posY: 35, larg: 2, alt: 7 },
//     [216, 35, 4, 7, ""], // 2 4x7
Fonte4x72: { posX: 216, posY: 35, larg: 4, alt: 7 },
//     [221, 35, 4, 7, ""], // 3 4x7
Fonte4x73: { posX: 221, posY: 35, larg: 4, alt: 7 },
//     [226, 35, 4, 7, ""], // 4 4x7
Fonte4x74: { posX: 226, posY: 35, larg: 4, alt: 7 },
//     [231, 35, 4, 7, ""], // 5 4x7
Fonte4x75: { posX: 231, posY: 35, larg: 4, alt: 7 },
//     [236, 35, 4, 7, ""], // 6 4x7
Fonte4x76: { posX: 236, posY: 35, larg: 4, alt: 7 },
//     [241, 35, 4, 7, ""], // 7 4x7
Fonte4x77: { posX: 241, posY: 35, larg: 4, alt: 7 },
//     [246, 35, 4, 7, ""], // 8 4x7
Fonte4x78: { posX: 246, posY: 35, larg: 4, alt: 7 },
//     [251, 35, 4, 7, ""], // 9 4x7
Fonte4x79: { posX: 251, posY: 35, larg: 4, alt: 7 },
//     [256, 35, 1, 7, ""], // : 1x7
Fonte4x7doispontos: { posX: 256, posY: 35, larg: 1, alt: 7 },
// ];
// static Segundos = [
//     [208, 102, 1, 5,""], // 0
Segundos0: { posX: 208, posY: 102, larg: 1, alt: 5 },
//     [209, 102, 1, 5,""], // 1
Segundos1: { posX: 209, posY: 102, larg: 1, alt: 5 },
//     [210, 102, 1, 5,""], // 2
Segundos2: { posX: 210, posY: 102, larg: 1, alt: 5 },
//     [211, 102, 1, 5,""], // 3
Segundos3: { posX: 211, posY: 102, larg: 1, alt: 5 },
//     [212, 102, 1, 5,""], // 4
Segundos4: { posX: 212, posY: 102, larg: 1, alt: 5 },
//     [213, 102, 1, 5,""], // 5
Segundos5: { posX: 213, posY: 102, larg: 1, alt: 5 },
//     [214, 102, 1, 5,""], // 6
Segundos6: { posX: 214, posY: 102, larg: 1, alt: 5 },
//     [215, 102, 1, 5,""], // 7
Segundos7: { posX: 215, posY: 102, larg: 1, alt: 5 },
//     [216, 102, 1, 5,""], // 8
Segundos8: { posX: 216, posY: 102, larg: 1, alt: 5 },
//     [217, 102, 1, 5,""], // 9
Segundos9: { posX: 217, posY: 102, larg: 1, alt: 5 },
// ];
// static Banho = [[135, 29, 6, 16,""]]; // Banho
Banho: { posX: 135, posY: 29, larg: 6, alt: 16 },
// static On = [[208, 59, 12, 6,""]];
On: { posX: 208, posY: 59, larg: 12, alt: 6 },
// static Off = [[221, 59, 15, 6,""]];
Off: { posX: 221, posY: 59, larg: 15, alt: 6 },
// static DormindoLuzApagada = [[142, 29, 32, 16,""], [175, 29, 32, 16,""]];
DormindoLuzApagada1: { posX: 142, posY: 29, larg: 32, alt: 16 },
DormindoLuzApagada2: { posX: 175, posY: 29, larg: 32, alt: 16 },
// static Fezes = [[122, 46, 9, 8,""], [132, 46, 9, 8,""]];
Fezes1: { posX: 122, posY: 46, larg: 9, alt: 8 },
Fezes2: { posX: 132, posY: 46, larg: 9, alt: 8 },

Evoluindo1: { posX: 142, posY: 46, larg: 32, alt: 16 },
Evoluindo2: { posX: 174, posY: 46, larg: 32, alt: 16 },
Evoluindo3: { posX: 142, posY: 62, larg: 32, alt: 16 },
Evoluindo4: { posX: 174, posY: 62, larg: 32, alt: 16 },
Evoluindo5: { posX: 142, posY: 79, larg: 32, alt: 16 },
Evoluindo6: { posX: 174, posY: 79, larg: 32, alt: 16 },
Evoluindo7: { posX: 142, posY: 96, larg: 32, alt: 16 },
Evoluindo8: { posX: 174, posY: 96, larg: 32, alt: 16 },


};

//export const animations: AnimationConfig = {
export const animations = createAnimations ({
    OvoIdle: { loop: 0, quadros: [
      { duracao: 600, imagens: [ { imagem: sprites.OvoP1A1, posicao: "fixa", posX: 11, posY: 2 } ] },
      { duracao: 600, imagens: [ { imagem: sprites.OvoP1A2, posicao: "fixa", posX: 10, posY: 3 } ] },
    ]
  },
  OvoEvoluindo1: { loop: 3, acao: "OvoEvoluindo2", quadros: [
      { duracao: 300, imagens: [ { imagem: sprites.OvoP1A2, posicao: "fixa", posX: 10, posY: 3 } ] },
      { duracao: 300, imagens: [ { imagem: sprites.OvoP1A2, posicao: "fixa", posX: 9, posY: 3 } ] },
    ]
  },
  OvoEvoluindo2: { loop: 1, acao: "BabitchiP1Idle", quadros: [
      { duracao: 900, imagens: [ { imagem: sprites.OvoP1A3, posicao: "fixa", posX: 8, posY: 0 } ] },
      { duracao: 100, imagens: [ { imagem: sprites.Evoluindo1, posicao: "fixa", posX: 0, posY: 0 } ] },
      { duracao: 100, imagens: [ { imagem: sprites.Evoluindo2, posicao: "fixa", posX: 0, posY: 0 } ] },
      { duracao: 100, imagens: [ { imagem: sprites.Evoluindo3, posicao: "fixa", posX: 0, posY: 0 } ] },
      { duracao: 100, imagens: [ { imagem: sprites.Evoluindo4, posicao: "fixa", posX: 0, posY: 0 } ] },
      { duracao: 100, imagens: [ { imagem: sprites.Evoluindo5, posicao: "fixa", posX: 0, posY: 0 } ] },
      { duracao: 100, imagens: [ { imagem: sprites.Evoluindo6, posicao: "fixa", posX: 0, posY: 0 } ] },
      { duracao: 100, imagens: [ { imagem: sprites.Evoluindo7, posicao: "fixa", posX: 0, posY: 0 } ] },
      { duracao: 100, imagens: [ { imagem: sprites.Evoluindo8, posicao: "fixa", posX: 0, posY: 0 } ] },
    ]
  },
  BabitchiP1Idle: { loop: 0, quadros: [
      { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Idle1, posicao: "fixa", posX: 13, posY: 9 } ] },
      { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Idle1, posicao: "fixa", posX: 10, posY: 9 } ] },
      { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 } ] },
      { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 10, posY: 13 } ] },
    ]
  },
  AlimentarRefeicao: { loop: 0, quadros: [
      { duracao: 300, imagens: [
        { imagem: sprites.SetaD, posicao: "fixa", posX: 1, posY: 0 },
        { imagem: sprites.Meal, posicao: "fixa", posX: 8, posY: 1 },
        { imagem: sprites.Snack, posicao: "fixa", posX: 8, posY: 8 },
      ] },
    ]
  },
  AlimentarLanche: { loop: 0, quadros: [
      { duracao: 300, imagens: [
        { imagem: sprites.SetaD, posicao: "fixa", posX: 1, posY: 9 },
        { imagem: sprites.Meal, posicao: "fixa", posX: 8, posY: 1 },
        { imagem: sprites.Snack, posicao: "fixa", posX: 8, posY: 8 },
      ] },
    ]
  },
  
  ComendoRefeicaoBabitchi: { loop: 1, acao: "BabitchiP1Idle", quadros: [
      { duracao: 600, imagens: [ { imagem: sprites.Pao1, posicao: "fixa", posX: 4, posY: 0 }, { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
      { duracao: 600, imagens: [ { imagem: sprites.Pao1, posicao: "fixa", posX: 4, posY: 9 }, { imagem: sprites.BabitchiP1Comendo, posicao: "fixa", posX: 13, posY: 8 }, ] },
      { duracao: 600, imagens: [ { imagem: sprites.Pao2, posicao: "fixa", posX: 4, posY: 9 }, { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
      { duracao: 600, imagens: [ { imagem: sprites.Pao2, posicao: "fixa", posX: 4, posY: 9 }, { imagem: sprites.BabitchiP1Comendo, posicao: "fixa", posX: 13, posY: 8 }, ] },
      { duracao: 600, imagens: [ { imagem: sprites.Pao3, posicao: "fixa", posX: 5, posY: 9 }, { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
      { duracao: 600, imagens: [ { imagem: sprites.Pao3, posicao: "fixa", posX: 5, posY: 9 }, { imagem: sprites.BabitchiP1Comendo, posicao: "fixa", posX: 13, posY: 8 }, ] },
      { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
      { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Comendo, posicao: "fixa", posX: 13, posY: 8 }, ] },
      { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
    ]
  },


//   "NegandoRefeicao.Babitchi": [
//       [0, 1, Imagens.BabitchiP1Negando[0], 13, 9, []],
//       [2, 3, Imagens.BabitchiP1Negando[1], 13, 9, []],
//   ],
  NegandoRefeicaoBabitchi: { loop: 0, quadros: [
      { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Negando1, posicao: "fixa", posX: 13, posY: 9 } ] },
      { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Negando2, posicao: "fixa", posX: 13, posY: 9 } ] },
    ]
  },

  ComendoLancheBabitchi: { loop: 1, acao: "BabitchiP1Idle", quadros: [
    { duracao: 600, imagens: [ { imagem: sprites.Bala1, posicao: "fixa", posX: 4, posY: 0 }, { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
    { duracao: 600, imagens: [ { imagem: sprites.Bala1, posicao: "fixa", posX: 4, posY: 8 }, { imagem: sprites.BabitchiP1Comendo, posicao: "fixa", posX: 13, posY: 8 }, ] },
    { duracao: 600, imagens: [ { imagem: sprites.Bala2, posicao: "fixa", posX: 6, posY: 10 }, { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
    { duracao: 600, imagens: [ { imagem: sprites.Bala2, posicao: "fixa", posX: 6, posY: 10 }, { imagem: sprites.BabitchiP1Comendo, posicao: "fixa", posX: 13, posY: 8 }, ] },
    { duracao: 600, imagens: [ { imagem: sprites.Bala3, posicao: "fixa", posX: 6, posY: 12 }, { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
    { duracao: 600, imagens: [ { imagem: sprites.Bala3, posicao: "fixa", posX: 6, posY: 12 }, { imagem: sprites.BabitchiP1Comendo, posicao: "fixa", posX: 13, posY: 8 }, ] },
    { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
    { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Comendo, posicao: "fixa", posX: 13, posY: 8 }, ] },
    { duracao: 600, imagens: [ { imagem: sprites.BabitchiP1Idle2, posicao: "fixa", posX: 12, posY: 13 }, ] },
  ]
  },

//   "ApagarLuz": [
//       [0, 0, Imagens.Seta[1], 1, 9, []],
//       [0, 0, Imagens.On[0], 8, 1, []],
//       [0, 0, Imagens.Off[0], 8, 8, []],
//   ],
//   "AcenderLuz": [
//       [0, 0, Imagens.Seta[1], 1, 0, []],
//       [0, 0, Imagens.On[0], 8, 1, []],
//       [0, 0, Imagens.Off[0], 8, 8, []],
//   ],
//   "DormindoLuzAcesa.Babitchi": [
//       [0, 3, Imagens.BabitchiP1Doente[0], 13, 13, []],
//       [0, 1, Imagens.Dormindo[0], 24, 0, []],
//       [2, 3, Imagens.Dormindo[1], 25, 2, []],
//       [4, 5, Imagens.BabitchiP1Doente[0], 12, 13, []],
//       [4, 5, Imagens.Dormindo[0], 24, 0, []],
//       [6, 7, Imagens.BabitchiP1Doente[0], 13, 13, []],
//       [6, 7, Imagens.Dormindo[1], 25, 2, []],
//   ],
//   "DormindoLuzApagada": [
//       [0, 1, Imagens.DormindoLuzApagada[0], 0, 0, []],
//       [2, 3, Imagens.DormindoLuzApagada[1], 0, 0, []],
//   ],
//   "AcordadoLuzApagada": [
//       [0, 0, Imagens.Evoluindo[7], 0, 0, []]
//   ],
//   "Brincar.Babitchi": [
//       [0, 1, Imagens.Conteiner[0], 0, 9, []],
//       [0, 1, Imagens.Coracao[0], 8, 0, []],
//       [0, 1, Imagens.Conteiner[0], 15, 9, []],
//       [0, 1, Imagens.Coracao[0], 22, 0, []],

//       [2, 2, Imagens.Conteiner[0], 3, 9, []],
//       [2, 2, Imagens.Coracao[0], 11, 0, []],
//       [2, 2, Imagens.Conteiner[0], 18, 9, []],
//       [2, 2, Imagens.Coracao[0], 25, 0, []],

//       [3, 3, Imagens.Conteiner[0], 6, 9, []],
//       [3, 3, Imagens.Coracao[0], 14, 0, []],
//       [3, 3, Imagens.Conteiner[0], 21, 9, []],
//       [3, 3, Imagens.Coracao[0], 28, 0, []],

//       [4, 4, Imagens.Conteiner[0], 9, 9, []],
//       [4, 4, Imagens.Coracao[0], 17, 0, []],
//       [4, 4, Imagens.Conteiner[0], 24, 9, []],
//       [4, 4, Imagens.Coracao[0], 31, 0, []],

//       [5, 5, Imagens.Conteiner[0], 12, 9, []],
//       [5, 5, Imagens.Coracao[0], 20, 0, []],
//       [5, 5, Imagens.Conteiner[0], 27, 9, []],

//       [6, 6, Imagens.Conteiner[0], 15, 9, []],
//       [6, 6, Imagens.Coracao[0], 23, 0, []],
//       [6, 6, Imagens.Conteiner[0], 30, 9, []],

//       [7, 7, Imagens.Conteiner[0], 18, 9, []],
//       [7, 7, Imagens.Coracao[0], 26, 0, []],
//       [7, 7, Imagens.BabitchiP1Idle[0], -2, 9, []],

//       [8, 8, Imagens.Conteiner[0], 21, 9, []],
//       [8, 8, Imagens.Coracao[0], 29, 0, []],
//       [8, 8, Imagens.BabitchiP1Idle[0], 1, 9, []],

//       [9, 9, Imagens.Conteiner[0], 24, 9, []],
//       [9, 9, Imagens.Coracao[0], 32, 0, []],
//       [9, 9, Imagens.BabitchiP1Idle[0], 4, 9, []],

//       [10, 10, Imagens.Conteiner[0], 27, 9, []],
//       [10, 10, Imagens.BabitchiP1Idle[0], 7, 9, []],

//       [11, 11, Imagens.Conteiner[0], 30, 9, []],
//       [11, 11, Imagens.BabitchiP1Idle[0], 10, 9, []],

//       //[12, 12, Imagens.BabitchiP1Idle[0], 13, 9, []],
//   ],
//   "BrincarIdle.Babitchi":[
//       [0, 1, Imagens.BabitchiP1Idle[0], 13, 9, []],
//       [2, 3, Imagens.BabitchiP1Feliz[0], 13, 8, []],
//   ],
//   "BrincarDD.Babitchi": [
//       [0, 6, Imagens.Seta[1], 25, 8, []],
//       [0, 6, Imagens.BabitchiP1Negando[1], 13, 9, []],
//   ],
//   "BrincarEE.Babitchi": [
//       [0, 6, Imagens.Seta[0], 1, 8, []],
//       [0, 6, Imagens.BabitchiP1Negando[0], 13, 9, []],
//   ],
//   "BrincarDE.Babitchi": [
//       [0, 6, Imagens.Seta[1], 25, 8, []],
//       [0, 6, Imagens.BabitchiP1Negando[0], 13, 9, []],
//   ],
//   "BrincarED.Babitchi": [
//       [0, 6, Imagens.Seta[0], 1, 8, []],
//       [0, 6, Imagens.BabitchiP1Negando[1], 13, 9, []],
//   ],
//   "BrincarVenceu.Babitchi": [
//       [0, 1, Imagens.BabitchiP1Feliz[0], 13, 8, []],
//       [0, 1, Imagens.Feliz[0], 20, 8, []],
//       [2, 3, Imagens.BabitchiP1Idle[1], 12, 13, []],
//       [4, 5, Imagens.BabitchiP1Feliz[0], 13, 8, []],
//       [4, 5, Imagens.Feliz[0], 20, 8, []],
//       [6, 7, Imagens.BabitchiP1Idle[1], 12, 13, []],
//   ],
//   "BrincarPerdeu.Babitchi": [
//       [0, 1, Imagens.BabitchiP1Idle[1], 12, 13, []],
//       [0, 1, Imagens.Aborrecido[0], 22, 7, []],
//       [2, 3, Imagens.BabitchiP1Aborrecido[0], 12, 8, []],
//       [2, 3, Imagens.Aborrecido[1], 21, 8, []],
//       [4, 5, Imagens.BabitchiP1Idle[1], 12, 13, []],
//       [4, 5, Imagens.Aborrecido[0], 22, 7, []],
//       [6, 7, Imagens.BabitchiP1Aborrecido[0], 12, 8, []],
//       [6, 7, Imagens.Aborrecido[1], 21, 8, []],
//   ],
//   "BrincarPlacar": [
//       [0, 0, Imagens.BabitchiP1Idle[0], 1, 1, []],
//       [0, 0, Imagens.Vs[0], 9, 9, []],
//       [0, 0, Imagens.Conteiner[0], 17, 1, []],
//       [0, 0, (p0) => { return Imagens.Fonte4x7[p0]; }, 2, 9, []],
//       [0, 0, (p1) => { return Imagens.Fonte4x7[p1]; }, 19, 9, []],
//   ],
//   "DoenteIdle.Babitchi": [
//       [0, 0, Imagens.BabitchiP1Doente[0], 12, 13, []],
//       [0, 0, Imagens.Doenca[0], 25, 0, []],
//   ],
//   "Doenca": [
//       [0, 0, Imagens.Doenca[0], 25, 0, []],
//   ],
//   "Medicar.Babitchi": [
//       [0, 1, Imagens.BabitchiP1Idle[1], 12, 13, []],
//       [0, 1, Imagens.Aborrecido[0], 22, 7, []],
//       [2, 3, Imagens.BabitchiP1Aborrecido[0], 12, 8, []],
//       [2, 3, Imagens.Aborrecido[1], 21, 8, []],
//       [4, 5, Imagens.BabitchiP1Idle[1], 12, 13, []],
//       [4, 5, Imagens.Aborrecido[0], 22, 7, []],
//       [6, 7, Imagens.BabitchiP1Aborrecido[0], 12, 8, []],
//       [6, 7, Imagens.Aborrecido[1], 21, 8, []],
//   ],
//   "Sujando.Babitchi": [ // 45:08 Agachado tremendo depois pula feliz
//       [ 0,  0, Imagens.BabitchiP1Doente[0], 13, 13, []],
//       [ 1,  1, Imagens.BabitchiP1Doente[0], 14, 13, []],
//       [ 2,  2, Imagens.BabitchiP1Doente[0], 13, 13, []],
//       [ 3,  3, Imagens.BabitchiP1Doente[0], 14, 13, []],
//       [ 4,  4, Imagens.BabitchiP1Doente[0], 13, 13, []],
//       [ 5, 20, Imagens.BabitchiP1Feliz[0], 10, 8, []],
//       [ 5,  6, Imagens.Fezes[1], 17, 8, []],
//       [ 7,  8, Imagens.Fezes[0], 17, 8, []],
//       [ 9, 10, Imagens.Fezes[1], 17, 8, []],
//       [11, 12, Imagens.Fezes[0], 17, 8, []],
//       [13, 14, Imagens.Fezes[1], 17, 8, []],
//       [15, 16, Imagens.Fezes[0], 17, 8, []],
//       [17, 18, Imagens.Fezes[1], 17, 8, []],
//       [19, 20, Imagens.Fezes[0], 17, 8, []],
//   ],
//   "Sujo": [
//       [0, 1, Imagens.Fezes[0], 23, 8, []],
//       [2, 3, Imagens.Fezes[1], 23, 8, []],
//   ],
//   "Banhar": [
//       [ 0,  0, "Scroll", 0, 0, [-3]], [0, 0, Imagens.Banho[0], 33, 0, []],
//       [ 1,  1, "Scroll", 0, 0, [-3]], [1, 1, Imagens.Banho[0], 33, 0, []],
//       [ 2,  2, "Scroll", 0, 0, [-3]], [2, 2, Imagens.Banho[0], 33, 0, []],
//       [ 3,  3, "Scroll", 0, 0, [-3]], [3, 3, Imagens.Banho[0], 33, 0, []],
//       [ 4,  4, "Scroll", 0, 0, [-3]], [4, 4, Imagens.Banho[0], 33, 0, []],
//       [ 5,  5, "Scroll", 0, 0, [-3]], [5, 5, Imagens.Banho[0], 33, 0, []],
//       [ 6,  6, "Scroll", 0, 0, [-3]], [6, 6, Imagens.Banho[0], 33, 0, []],
//       [ 7,  7, "Scroll", 0, 0, [-3]], [7, 7, Imagens.Banho[0], 33, 0, []],
//       [ 8,  8, "Scroll", 0, 0, [-3]], [8, 8, Imagens.Banho[0], 33, 0, []],
//       [ 9,  9, "Scroll", 0, 0, [-3]], [9, 9, Imagens.Banho[0], 33, 0, []],
//       [10, 10, "Scroll", 0, 0, [-3]], [10, 10, Imagens.Banho[0], 33, 0, []],
//       [11, 11, "Scroll", 0, 0, [-3]], [11, 11, Imagens.Banho[0], 33, 0, []],
//   ],
//   "Status1": [
//       [0, 0, Imagens.BabitchiP1Idle[0], 2, 1, []],
//       [0, 0, Imagens.Balanca[0], 1, 9, []],
//       [0, 0, (p0) => { return p0 !== undefined ? Imagens.Fonte4x7[p0] : Imagens.Vazio[0]; }, 13, 1, []],
//       [0, 0, (p1) => { return Imagens.Fonte4x7[p1]; }, 19, 1, []],
//       [0, 0, Imagens.Yr[0], 25, 2, []],
//       [0, 0, (p2) => { return p2 !== undefined ? Imagens.Fonte4x7[p2] : Imagens.Vazio[0]; }, 13, 9, []],
//       [0, 0, (p3) => { return Imagens.Fonte4x7[p3]; }, 19, 9, []],
//       [0, 0, Imagens.Peso[0], 25, 10, []],
//   ],
//   "Status2": [
//       [0, 0, Imagens.Discipline[0], 1, 0, []],
//       [0, 0, Imagens.Barra[0], 1, 8, []],
//   ],
//   "Status3": [
//       [0, 0, Imagens.Hungry[0], 0, 0, []],
//       [0, 0, (p0) => { return p0 ? Imagens.Coracao[0] : Imagens.Conteiner[0]; }, 0, 9, []],
//       [0, 0, (p1) => { return p1 ? Imagens.Coracao[0] : Imagens.Conteiner[0]; }, 8, 9, []],
//       [0, 0, (p2) => { return p2 ? Imagens.Coracao[0] : Imagens.Conteiner[0]; }, 16, 9, []],
//       [0, 0, (p3) => { return p3 ? Imagens.Coracao[0] : Imagens.Conteiner[0]; }, 24, 9, []],
//   ],
//   "Status4": [
//       [0, 0, Imagens.Happy[0], 0, 0, []],
//       [0, 0, (p0) => { return p0 ? Imagens.Coracao[0] : Imagens.Conteiner[0]; }, 0, 9, []],
//       [0, 0, (p1) => { return p1 ? Imagens.Coracao[0] : Imagens.Conteiner[0]; }, 8, 9, []],
//       [0, 0, (p2) => { return p2 ? Imagens.Coracao[0] : Imagens.Conteiner[0]; }, 16, 9, []],
//       [0, 0, (p3) => { return p3 ? Imagens.Coracao[0] : Imagens.Conteiner[0]; }, 24, 9, []],
//   ],
//   "Disciplinar.Babitchi": [
//       [0, 1, Imagens.BabitchiP1Idle[1], 12, 13, []],
//       [0, 1, Imagens.Aborrecido[0], 22, 7, []],
//       [2, 3, Imagens.BabitchiP1Aborrecido[0], 12, 8, []],
//       [2, 3, Imagens.Aborrecido[1], 21, 8, []],
//       [4, 5, Imagens.BabitchiP1Idle[1], 12, 13, []],
//       [4, 5, Imagens.Aborrecido[0], 22, 7, []],
//       [6, 7, Imagens.BabitchiP1Aborrecido[0], 12, 8, []],
//       [6, 7, Imagens.Aborrecido[1], 21, 8, []],
//   ],
//   "Evoluindo": [
//       [0, 0, "Fixo", 0, 0, []], [0, 0, Imagens.Evoluindo[0], 0, 0, []],
//       [1, 1, "Fixo", 0, 0, []], [1, 1, Imagens.Evoluindo[1], 0, 0, []],
//       [2, 2, "Fixo", 0, 0, []], [2, 2, Imagens.Evoluindo[2], 0, 0, []],
//       [3, 3, "Fixo", 0, 0, []], [3, 3, Imagens.Evoluindo[3], 0, 0, []],
//       [4, 4, "Fixo", 0, 0, []], [4, 4, Imagens.Evoluindo[4], 0, 0, []],
//       [5, 5, "Fixo", 0, 0, []], [5, 5, Imagens.Evoluindo[5], 0, 0, []],
//       [6, 6, "Fixo", 0, 0, []], [6, 6, Imagens.Evoluindo[6], 0, 0, []],
//       [7, 7, "Fixo", 0, 0, []], [7, 7, Imagens.Evoluindo[7], 0, 0, []],
//   ],
//   "Relogio": [
//       [0, 0, (p0) => { return Imagens.Fonte3x5[p0]; }, 0, 0, []],
//       [0, 0, (p1) => { return Imagens.Fonte3x5[p1]; }, 4, 0, []],
//       [0, 0, Imagens.Fonte3x5[40], 8, 0, []],
//       [0, 0, (p2) => { return Imagens.Fonte3x5[p2]; }, 12, 0, []],
//       [0, 0, (p3) => { return Imagens.Fonte3x5[p3]; }, 16, 0, []],
//       [0, 0, Imagens.Fonte3x5[10], 20, 0, []],
//       [0, 0, (p4) => { return Imagens.Fonte3x5[p4]; }, 22, 0, []],
//       [0, 0, (p5) => { return Imagens.Fonte3x5[p5]; }, 26, 0, []],
//       [0, 0, (p6) => { return Imagens.Segundos[p6]; }, 30, 0, []],
//       [0, 0, (p7) => { return Imagens.Segundos[p7]; }, 31, 0, []],
//   ],
// };
// }


});


const Home = () => {
  //const spritesheet = '/sprites/TamagotchiP1P2.png';
  //const spritesheet = '/sprites/TinyPNG_TamagotchiP1P2.png';

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Virtual Pet Manager</h1>
      <CanvasAnimation spritesheet={spritesheet} animations={animations} />
      <PetControls />
    </div>
  );
};

export default Home;