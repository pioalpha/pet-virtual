//export const runtime = 'edge'; // Usaria runtime Edge para streaming eficiente mas causa erro da perda do objeto clients

import { animations } from "@/app/page";

const clients = new Map();

export async function GET(request: Request) {
  // Cria um stream de transformação para formatar os dados no padrão SSE
  const clientId = new URL(request.url).searchParams.get('clientId');
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

   //const clientId = Date.now();
   clients.set(clientId, writer);
   console.log(`ClientId registrado: ${clientId}, Total de registros: ${clients.size}`);

   sendEventToClient(clientId!, {
    type: 'triggerAnimation',
    animation: animations.OvoIdle.name
  });

  // Limpeza quando a conexão for fechada
  writer.closed.then(() => {
    clients.delete(clientId);

    console.log(`Connection closed para o cliente ${clientId}`);
  });

  // Retorna a resposta do stream
  return new Response(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    }
  });
}

// Função para enviar dados periodicamente
export function sendEventToClient(clientId: string, data: any) {
  const encoder = new TextEncoder();
  console.log(clients.size);
  console.log(clientId);
  const client = clients.get(clientId);
  if (client) {
    const temp = JSON.stringify(data);
    console.log(temp);
    client.write(encoder.encode(`data: ${temp}\n\n`));
  }
};

  // export function sendEventToClient(clientId: string, data: any) {
//   const client = clients.get(clientId);
//   if (client) {
//     client.write(`data: ${JSON.stringify(data)}\n\n`);
//   }
// }

// import { NextResponse } from "next/server";

// const clients = new Map();

// export async function GET(request) {
//   res.setHeader('Content-Type', 'text/event-stream');
//   res.setHeader('Cache-Control', 'no-cache');
//   res.setHeader('Connection', 'keep-alive');
//   res.flushHeaders();

//   const clientId = Date.now();
//   clients.set(clientId, res);

//   req.on('close', () => {
//     clients.delete(clientId);
//   });
// }

// export function sendEventToClient(clientId: string, data: any) {
//   const client = clients.get(clientId);
//   if (client) {
//     client.write(`data: ${JSON.stringify(data)}\n\n`);
//   }
// }