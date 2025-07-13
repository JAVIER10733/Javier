import { detectSentiment } from '../../services/geminu-api.js';

export default {
  name: 'sentiment',
  description: 'Analiza el sentimiento del texto',

  async run({ sock, msg, args }) {
    const texto = args.join(' ');
    const sentimiento = await detectSentiment(texto);
    await sock.sendMessage(msg.key.remoteJid, { text: `📊 Sentimiento: ${sentimiento}` });
  }
};