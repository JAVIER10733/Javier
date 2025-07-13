const messageMap = new Map();

export default {
  name: 'antiflood',
  description: 'Evita spam de mensajes',

  async run({ sock, msg }) {
    const sender = msg.key.remoteJid;
    const now = Date.now();

    if (!messageMap.has(sender)) {
      messageMap.set(sender, []);
    }

    const timestamps = messageMap.get(sender);
    timestamps.push(now);

    // Limpiar mensajes antiguos
    const filtered = timestamps.filter(t => now - t < 5000);
    messageMap.set(sender, filtered);

    if (filtered.length > 5) {
      await sock.sendMessage(sender, { text: '🚫 Estás enviando mensajes demasiado rápido.' });
    }
  }
};