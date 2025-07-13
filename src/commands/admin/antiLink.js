export default {
  name: 'antilink',
  description: 'Elimina mensajes con enlaces',

  async run({ sock, msg }) {
    const body = msg.message?.conversation || msg.message?.extendedTextMessage?.text;
    const linkRegex = /(https?:\/\/[^\s]+)/gi;

    if (linkRegex.test(body)) {
      await sock.sendMessage(msg.key.remoteJid, {
        text: '🔗 No se permiten enlaces.'
      });
      await sock.sendMessage(msg.key.remoteJid, { delete: msg.key });
    }
  }
};