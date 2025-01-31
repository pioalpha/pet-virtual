"use client";

import { useSearchParams } from "next/navigation";

const PetControls = () => {
    const searchParams = useSearchParams();
    const clientId = searchParams.get('clientId');

    const sendCommand = async (command: string) => {
        console.log(command);
        await fetch('/api/pet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command, clientId }),
      });
    };
  
    return (
      <div className="grid grid-cols-2 gap-4 mt-4">
        <button onClick={() => sendCommand('feed')} className="p-2 bg-blue-500 text-white rounded">
          Alimentar
        </button>
        <button onClick={() => sendCommand('snack')} className="p-2 bg-green-500 text-white rounded">
          Lanche
        </button>
        <button onClick={() => sendCommand('bath')} className="p-2 bg-yellow-500 text-white rounded">
          Banho
        </button>
        <button onClick={() => sendCommand('play')} className="p-2 bg-red-500 text-white rounded">
          Brincar
        </button>
      </div>
    );
  };

  export default PetControls;