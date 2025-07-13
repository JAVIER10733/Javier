export default {
  name: 'anticall',
  description: 'Expulsa o bloquea a quien llame al bot',
  privateOnly: true,

  async run({ sock, msg }) {
    const id = msg.key.remoteJid;
    if (msg.message?.call) {
      await sock.sendMessage(id, { text: '📵 Llamadas no están permitidas. Serás bloqueado.' });
      await sock.updateBlockStatus(id, 'block');
    }
  }
};