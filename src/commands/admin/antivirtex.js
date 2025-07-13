export default {
  name: 'antivirtex',
  description: 'Elimina mensajes potencialmente peligrosos (virtex)',

  async run({ sock, msg }) {
    const text = msg.message?.conversation || '';
    if (text.length > 4000) {
      await sock.sendMessage(msg.key.remoteJid, { text: '🛑 Mensaje peligroso detectado y eliminado.' });
      await sock.sendMessage(msg.key.remoteJid, { delete: msg.key });
    }
  }
};