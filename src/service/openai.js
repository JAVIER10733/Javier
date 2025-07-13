import axios from 'axios';
const OPENAI_KEY = process.env.OPENAI_API_KEY;

const headers = {
  'Authorization': `Bearer ${OPENAI_KEY}`,
  'Content-Type': 'application/json'
};

export const askAI = async (prompt) => {
  const res = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }]
  }, { headers });

  return res.data.choices[0].message.content.trim();
};

export const summarizeText = async (text) => askAI(`Resume lo siguiente:\n\n${text}`);
export const generateCode = async (desc) => askAI(`Genera código para esto:\n\n${desc}`);
export const chatWithMemory = async (userId, input) => askAI(`[Usuario ${userId}]: ${input}`);
export const generateImage = async (prompt) => {
  const res = await axios.post('https://api.openai.com/v1/images/generations', {
    prompt, n: 1, size: '512x512'
  }, { headers });
  return res.data.data[0].url;
};

export const generateVoice = async (text) => {
  const res = await axios.post('https://api.openai.com/v1/audio/speech', {
    model: "tts-1", input: text, voice: "nova"
  }, { headers, responseType: 'arraybuffer' });
  return Buffer.from(res.data);
};

export const transcribeAudio = async (audioBuffer) => {
  const res = await axios.post('https://api.openai.com/v1/audio/transcriptions', audioBuffer, {
    headers: {
      ...headers,
      'Content-Type': 'audio/mp3'
    }
  });
  return res.data.text;
};