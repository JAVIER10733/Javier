export default {
  name: 'promote',
  description: 'Promueve a un usuario a admin',

  groupOnly: true,
  adminOnly: true,

  async run({ sock, msg }) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0)
      return sock.sendMessage(msg.key.remoteJid, { text: '⚠️ Menciona al usuario que deseas promover.' });

    await sock.groupParticipantsUpdate(msg.key.remoteJid, mentioned, 'promote');
    await sock.sendMessage(msg.key.remoteJid, {
      text: `✅ Usuario promovido a admin: @${mentioned[0].split('@')[0]}`,
      mentions: mentioned
    });
  }
};