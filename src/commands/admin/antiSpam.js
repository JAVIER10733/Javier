const usage = new Map();

export default {
  name: 'antispam',
  description: 'Evita comandos repetidos',

  async run({ sock, msg }) {
    const sender = msg.key.remoteJid;
    if (usage.has(sender)) {
      const last = usage.get(sender);
      if (Date.now() - last < 3000) {
        await sock.sendMessage(sender, { text: '⏳ No spamees comandos, espera un poco...' });
        return false;
      }
    }
    usage.set(sender, Date.now());
    return true;
  }
};