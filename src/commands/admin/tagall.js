export default {
  name: 'tagall',
  description: 'Menciona a todos los miembros del grupo',
  groupOnly: true,
  adminOnly: true,

  async run({ sock, msg }) {
    const metadata = await sock.groupMetadata(msg.key.remoteJid);
    const mentions = metadata.participants.map(user => user.id);
    const message = '📣 *MENSAJE PARA TODOS:*\n\n' + (msg.message?.conversation || 'Hola a todos!');
    
    await sock.sendMessage(msg.key.remoteJid, {
      text: message,
      mentions
    });
  }
};