import fs from 'fs';
const alertsPath = './database/json/alerts.json';

export default {
  name: 'systemalerts',
  description: 'Activa/desactiva alertas de sistema',

  async run({ sock, msg, args, isAdmin }) {
    if (!isAdmin) return sock.sendMessage(msg.key.remoteJid, { text: '🚫 Solo admins' });

    const state = args[0];
    const group = msg.key.remoteJid;
    const db = fs.existsSync(alertsPath) ? JSON.parse(fs.readFileSync(alertsPath)) : {};

    if (state === 'on') db[group] = true;
    else if (state === 'off') db[group] = false;
    else return sock.sendMessage(group, { text: '❓ Usa: systemalerts on | off' });

    fs.writeFileSync(alertsPath, JSON.stringify(db, null, 2));
    await sock.sendMessage(group, { text: `⚠️ Alertas del sistema ${state === 'on' ? 'activadas' : 'desactivadas'}` });
  }
};