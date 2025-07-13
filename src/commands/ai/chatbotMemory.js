import { chatWithMemory } from '../../services/openai.js';

export default {
  name: 'memorychat',
  description: 'Conversación con memoria de contexto',

  async run({ sock, msg, args }) {
    const prompt = args.join(' ');
    const response = await chatWithMemory(msg.key.participant, prompt);
    await sock.sendMessage(msg.key.remoteJid, { text: `🧠 ${response}` });
  }
};