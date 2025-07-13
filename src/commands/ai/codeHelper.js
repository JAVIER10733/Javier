import { askAI } from '../../services/openai.js';

export default {
  name: 'codehelper',
  description: 'Genera o explica código con IA',

  async run({ sock, msg, args }) {
    const input = args.join(' ');
    const result = await askAI(`Explica o mejora este código:\n${input}`);
    await sock.sendMessage(msg.key.remoteJid, { text: result });
  }
};