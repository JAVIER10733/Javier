import fs from 'fs';
const configPath = './database/json/antilink.json';

export default {
  name: 'setantilink',
  description: 'Activa o desactiva el sistema antilink',

  async run({ sock, msg, args, isAdmin }) {
    if (!isAdmin) return sock.sendMessage(msg.key.remoteJid, { text: '🚫 Solo admins' });

    const group = msg.key.remoteJid;
    const state = args[0];
    const db = fs.existsSync(configPath) ? JSON.parse(fs.readFileSync(configPath)) : {};

    if (state === 'on') {
      db[group] = true;
    } else if (state === 'off') {
      db[group] = false;
    } else {
      return sock.sendMessage(group, { text: '❓ Usa: setantilink on | off' });
    }

    fs.writeFileSync(configPath, JSON.stringify(db, null, 2));
    await sock.sendMessage(group, { text: `✅ Antilink ${state === 'on' ? 'activado' : 'desactivado'}.` });
  }
};