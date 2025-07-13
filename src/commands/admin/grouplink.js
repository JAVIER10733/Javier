export default {
  name: 'grouplink',
  description: 'Muestra el enlace del grupo',

  async run({ sock, msg }) {
    try {
      const code = await sock.groupInviteCode(msg.key.remoteJid);
      const link = `https://chat.whatsapp.com/${code}`;
      await sock.sendMessage(msg.key.remoteJid, { text: `🔗 Enlace del grupo:\n${link}` });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ No se pudo obtener el link.' });
    }
  }
};