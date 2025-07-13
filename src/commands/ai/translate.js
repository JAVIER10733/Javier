import { translateText } from '../../services/translate-api.js';

export default {
  name: 'translate',
  description: 'Traduce texto automáticamente',

  async run({ sock, msg, args }) {
    const lang = args[0];
    const text = args.slice(1).join(' ');
    const resultado = await translateText(text, lang);
    await sock.sendMessage(msg.key.remoteJid, { text: `🌐 Traducción:\n${resultado}` });
  }
};