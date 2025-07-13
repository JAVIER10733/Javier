import { transcribeAudio } from '../../services/openai.js';

export default {
  name: 'speechtotext',
  description: 'Convierte voz a texto',

  async run({ sock, msg }) {
    const audio = msg.message?.audioMessage;
    if (!audio) return sock.sendMessage(msg.key.remoteJid, { text: '🎙 Envía un audio para transcribir' });

    const buffer = await sock.downloadMediaMessage(msg);
    const text = await transcribeAudio(buffer);
    await sock.sendMessage(msg.key.remoteJid, { text: `📝 Transcripción:\n${text}` });
  }
};