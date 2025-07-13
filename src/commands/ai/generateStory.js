import { askAI } from '../../services/openai.js';

export default {
  name: 'generatestory',
  description: 'Genera una historia usando IA',

  async run({ sock, msg, args }) {
    const tema = args.join(' ') || 'una aventura épica';
    const story = await askAI(`Crea una historia sobre ${tema}`);
    await sock.sendMessage(msg.key.remoteJid, { text: `📖 Historia:\n\n${story}` });
  }
};