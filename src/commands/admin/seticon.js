export default {
  name: 'seticon',
  description: 'Cambia el icono del grupo (con imagen)',

  async run({ sock, msg, isAdmin }) {
    if (!isAdmin) return sock.sendMessage(msg.key.remoteJid, { text: '🚫 Solo admins' });

    const media = msg.message?.imageMessage;
    if (!media) return sock.sendMessage(msg.key.remoteJid, { text: '❗ Envía una imagen junto al comando' });

    const buffer = await sock.downloadMediaMessage(msg);
    await sock.updateProfilePicture(msg.key.remoteJid, buffer);
    await sock.sendMessage(msg.key.remoteJid, { text: '✅ Foto de grupo actualizada' });
  }
};