import fs from 'fs';

export default {
  name: 'audiologs',
  description: 'Guarda logs de audios',

  async run({ sock, msg }) {
    const audio = msg.message?.audioMessage;
    if (audio) {
      fs.appendFileSync('./logs/audio.log', `[${new Date().toISOString()}] ${msg.key.remoteJid}\n`);
    }
  }
};