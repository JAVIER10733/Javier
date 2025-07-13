import { detectEmotion } from '../../services/geminu-api.js';

export default {
  name: 'emotiondetection',
  description: 'Detecta emociones del texto',

  async run({ sock, msg, args }) {
    const text = args.join(' ');
    const emotion = await detectEmotion(text);
    await sock.sendMessage(msg.key.remoteJid, { text: `💡 Emoción detectada: ${emotion}` });
  }
};