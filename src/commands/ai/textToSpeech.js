import { generateVoice } from '../../services/openai.js';

export default {
  name: 'texttospeech',
  description: 'Convierte texto a voz con IA',

  async run({ sock, msg, args }) {
    const text = args.join(' ');
    const audio = await generateVoice(text);
    await sock.sendMessage(msg.key.remoteJid, { audio, mimetype: 'audio/mp4', ptt: true });
  }
};