export default {
  name: 'report',
  description: 'Reporta a un miembro o un problema al owner',

  async run({ sock, msg, args }) {
    const reason = args.join(' ');
    const group = msg.key.remoteJid;
    const owner = '519xxxxxxxx@s.whatsapp.net'; // tu número aquí

    if (!reason) return sock.sendMessage(group, { text: '❗ Usa: report <razón>' });

    await sock.sendMessage(owner, {
      text: `📩 Nuevo reporte desde el grupo:\n\nGrupo: ${group}\nUsuario: @${msg.key.participant?.split('@')[0]}\nMotivo: ${reason}`,
      mentions: [msg.key.participant]
    });

    await sock.sendMessage(group, { text: '✅ Reporte enviado al owner. Gracias.' });
  }
};