export default {
  name: 'kick',
  description: 'Expulsa a un usuario del grupo',
  groupOnly: true,
  adminOnly: true,

  async run({ sock, msg }) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned) return await sock.sendMessage(msg.key.remoteJid, { text: '❌ Debes mencionar a un usuario' });

    try {
      await sock.groupParticipantsUpdate(msg.key.remoteJid, mentioned, 'remove');
      await sock.sendMessage(msg.key.remoteJid, { text: '✅ Usuario expulsado' });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ No se pudo expulsar al usuario' });
    }
  }
};