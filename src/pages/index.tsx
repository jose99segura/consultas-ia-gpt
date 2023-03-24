import { useState } from 'react';
import fetchGptResponse from './utils/fetchGptResponse';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const gptResponse = await fetchGptResponse(prompt);
    setResponse(gptResponse);
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          Ingresa un prompt:
          <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full mt-2" />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
          Enviar
        </button>
      </form>
      <div className="border border-gray-300 rounded-md p-4">
        Respuesta de GPT: {response}
      </div>
    </div>
  );
}
