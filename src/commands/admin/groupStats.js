export default {
  name: 'groupstat',
  description: 'Muestra estadísticas del grupo',

  async run({ sock, msg }) {
    const metadata = await sock.groupMetadata(msg.key.remoteJid);
    const total = metadata.participants.length;
    const admins = metadata.participants.filter(p => p.admin).length;

    const text = `
📊 *Estadísticas del Grupo*
👥 Miembros: ${total}
🛡 Admins: ${admins}
📛 Nombre: ${metadata.subject}
🕒 Creado el: ${new Date(metadata.creation * 1000).toLocaleString()}
    `;

    await sock.sendMessage(msg.key.remoteJid, { text });
  }
};