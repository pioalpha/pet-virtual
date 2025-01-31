import { NextApiRequest, NextApiResponse } from 'next';
import { sendEventToClient } from './sse';

const petState = {
  hungerTimer: 0,
  weight: 0,
  lastMeal: Date.now(),
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { command } = req.body;

    switch (command) {
      case 'feed':
        petState.hungerTimer += 3600000; // +1 hora
        petState.weight += 0.5;
        sendEventToClient('all', {
            type: 'triggerAnimation',
            animation: 'OvoEvoluindo1'
          });
        break;
      case 'snack':
        petState.hungerTimer += 1800000; // +30 min
        petState.weight += 0.2;
        break;
      default:
        // Disparar animação
        sendEventToClient('all', {
            type: 'triggerAnimation',
            animation: 'OvoIdle'
        });
      // Adicione outros casos...
    }



    res.status(200).json(petState);
  } else {
    res.status(405).end();
  }
}