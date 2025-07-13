import { askAI } from '../../services/openai.js';

export default {
  name: 'generarpoem',
  description: 'Genera un poema con IA',

  async run({ sock, msg, args }) {
    const tema = args.join(' ') || 'la vida';
    const poema = await askAI(`Escribe un poema sobre ${tema}`);
    await sock.sendMessage(msg.key.remoteJid, { text: `📜 Poema:\n\n${poema}` });
  }
};