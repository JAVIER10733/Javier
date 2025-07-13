import { generateImage } from '../../services/openai.js';

export default {
  name: 'dalle',
  description: 'Crea una imagen con DALL·E',

  async run({ sock, msg, args }) {
    const description = args.join(' ');
    const imageUrl = await generateImage(description);
    await sock.sendMessage(msg.key.remoteJid, {
      image: { url: imageUrl },
      caption: '🧠 Imagen generada con DALL·E'
    });
  }
};