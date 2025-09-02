import {
  GoogleGenAI,
} from '@google/genai';

async function chat(prompt) {
  let fullResponse = '';  
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_AI_API_KEY,
  });
  const config = {};
  const model = 'gemini-2.0-flash-lite';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `${prompt}`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
//   let fileIndex = 0;
  for await (const chunk of response) {
    // console.log(chunk.text);
    fullResponse += chunk.text;
  }

//   console.log('Full response', fullResponse);
  return fullResponse;
}

export default chat;