import { summarizeText } from '../../services/openai.js';

export default {
  name: 'summarizer',
  description: 'Resume texto con IA',

  async run({ sock, msg, args }) {
    const texto = args.join(' ');
    const resumen = await summarizeText(texto);
    await sock.sendMessage(msg.key.remoteJid, { text: `📌 Resumen:\n${resumen}` });
  }
};