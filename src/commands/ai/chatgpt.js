import { askAI } from '../../services/openai.js';

export default {
  name: 'chatgpt',
  description: 'Haz una pregunta a ChatGPT',

  async run({ sock, msg, args }) {
    const prompt = args.join(' ');
    const respuesta = await askAI(prompt);
    await sock.sendMessage(msg.key.remoteJid, { text: `🤖 ${respuesta}` });
  }
};