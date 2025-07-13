export default {
  name: 'demote',
  description: 'Quita privilegios de admin',
  groupOnly: true,
  adminOnly: true,

  async run({ sock, msg }) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned) return await sock.sendMessage(msg.key.remoteJid, { text: '❌ Menciona a un admin para degradarlo' });

    try {
      await sock.groupParticipantsUpdate(msg.key.remoteJid, mentioned, 'demote');
      await sock.sendMessage(msg.key.remoteJid, { text: '✅ Usuario degradado' });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ No se pudo degradar' });
    }
  }
};