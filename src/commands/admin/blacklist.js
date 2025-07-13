import fs from 'fs';

let palabrasProhibidas = ['porno', 'violencia', 'terror'];

export default {
  name: 'blacklist',
  description: 'Bloquea palabras globales',

  async run({ sock, msg }) {
    const texto = msg.message?.conversation?.toLowerCase();
    if (palabrasProhibidas.some(p => texto?.includes(p))) {
      await sock.sendMessage(msg.key.remoteJid, {
        text: '⚠️ Tu mensaje contiene contenido bloqueado.'
      });
      await sock.sendMessage(msg.key.remoteJid, { delete: msg.key });
    }
  }
};