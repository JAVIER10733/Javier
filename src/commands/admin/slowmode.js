import fs from 'fs';
const delayDB = './database/json/slowmode.json';

export default {
  name: 'slowmode',
  description: 'Establece tiempo entre mensajes',

  async run({ sock, msg, args, isAdmin }) {
    if (!isAdmin) return sock.sendMessage(msg.key.remoteJid, { text: '🚫 Solo admins' });

    const time = parseInt(args[0]) || 5; // en segundos
    const group = msg.key.remoteJid;
    const db = fs.existsSync(delayDB) ? JSON.parse(fs.readFileSync(delayDB)) : {};

    db[group] = time;
    fs.writeFileSync(delayDB, JSON.stringify(db, null, 2));

    await sock.sendMessage(group, { text: `🐌 Modo lento activado: ${time} segundos por usuario` });
  }
};