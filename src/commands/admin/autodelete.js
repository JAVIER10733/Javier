export default {
  name: 'autodelete',
  description: 'Elimina mensajes con palabras prohibidas',

  async run({ sock, msg }) {
    const badWords = ['puto', 'porno', 'mierda'];
    const text = msg.message?.conversation?.toLowerCase();

    if (badWords.some(w => text?.includes(w))) {
      await sock.sendMessage(msg.key.remoteJid, { text: '🚫 Palabra prohibida detectada y eliminada.' });
      await sock.sendMessage(msg.key.remoteJid, { delete: msg.key });
    }
  }
};