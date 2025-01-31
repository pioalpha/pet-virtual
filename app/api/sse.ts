import { NextApiRequest, NextApiResponse } from 'next';

const clients = new Map();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  //const clientId = Date.now();
  const clientId = "all";
  clients.set(clientId, res);

  req.on('close', () => {
    clients.delete(clientId);
  });
}

export function sendEventToClient(clientId: string, data: any) {
  const client = clients.get(clientId);
  if (client) {
    client.write(`data: ${JSON.stringify(data)}\n\n`);
  }
}