export default {
  name: 'automod',
  description: 'Activa módulos de auto moderación',

  async run({ sock, msg }) {
    // Puedes usar config o settings.json para leer qué automods están activos
    await sock.sendMessage(msg.key.remoteJid, {
      text: '🛡 AutoModeración activa: antilink, antiflood, antispam, antivirtex'
    });
  }
};