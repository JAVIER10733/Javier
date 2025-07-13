export default {
  name: 'groupinfo',
  description: 'Muestra la información del grupo',

  async run({ sock, msg }) {
    const meta = await sock.groupMetadata(msg.key.remoteJid);
    const owner = meta.owner || meta.participants.find(p => p.admin === 'superadmin')?.id;

    const text = `
📘 *Información del Grupo*
📛 Nombre: ${meta.subject}
🧑‍💼 Dueño: @${owner?.split('@')[0]}
👥 Participantes: ${meta.participants.length}
📝 Descripción: ${meta.desc || 'Sin descripción'}
🔗 ID: ${meta.id}
    `;

    await sock.sendMessage(msg.key.remoteJid, {
      text,
      mentions: [owner]
    });
  }
};