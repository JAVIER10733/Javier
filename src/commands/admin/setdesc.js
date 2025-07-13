export default {
  name: 'setdesc',
  description: 'Cambia la descripción del grupo',

  async run({ sock, msg, args, isAdmin }) {
    if (!isAdmin) return sock.sendMessage(msg.key.remoteJid, { text: '🚫 Solo admins' });

    const desc = args.join(' ');
    if (!desc) return sock.sendMessage(msg.key.remoteJid, { text: '❗ Escribe una descripción' });

    await sock.groupUpdateDescription(msg.key.remoteJid, desc);
    await sock.sendMessage(msg.key.remoteJid, { text: '✅ Descripción actualizada' });
  }
};