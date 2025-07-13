import { recognizeImage } from '../../services/geminu-api.js';

export default {
  name: 'imagerecognition',
  description: 'Reconoce elementos de una imagen',

  async run({ sock, msg }) {
    const image = msg.message?.imageMessage;
    if (!image) return sock.sendMessage(msg.key.remoteJid, { text: '❗ Envía una imagen' });

    const buffer = await sock.downloadMediaMessage(msg);
    const result = await recognizeImage(buffer);
    await sock.sendMessage(msg.key.remoteJid, { text: `🔍 Resultado IA:\n${result}` });
  }
};