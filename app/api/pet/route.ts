import { NextResponse } from "next/server";
import { sendEventToClient } from '../sse/route';

const petState = {
  hungerTimer: 0,
  weight: 0,
  lastMeal: Date.now(),
};

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);
    const { command, clientId } = body;

    if (clientId) {
    switch (command) {
      case 'feed':
        petState.hungerTimer += 3600000; // +1 hora
        petState.weight += 0.5;
        sendEventToClient(clientId, {
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
        sendEventToClient(clientId, {
            type: 'triggerAnimation',
            animation: 'OvoIdle'
        });
      // Adicione outros casos...
    }
  } else {
    console.error("Sem clientId");
  }


    return NextResponse.json({ success: true, data: petState }, { status: 200 });
}