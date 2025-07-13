export default {
  name: 'antifake',
  description: 'Expulsa números no permitidos (fake)',

  async run({ sock, msg }) {
    const number = msg.key.remoteJid.split('@')[0];
    if (!number.startsWith('593,52,57,51')) { // Ecuador 🇪🇨 //Mexico 🇲🇽 
      await sock.sendMessage(msg.key.remoteJid, { text: '🔒 Números internacionales no permitidos.' });
      await sock.groupParticipantsUpdate(msg.key.remoteJid, [msg.key.participant], 'remove');
    }
  }
};