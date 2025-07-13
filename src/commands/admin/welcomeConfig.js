import fs from 'fs';
const welcomeStatusPath = './database/json/welcome_status.json';

export default {
  name: 'welcomeconfig',
  description: 'Activa o desactiva el mensaje de bienvenida',

  async run({ sock, msg, args, isAdmin }) {
    if (!isAdmin) return sock.sendMessage(msg.key.remoteJid, { text: '🚫 Solo admins' });

    const group = msg.key.remoteJid;
    const estado = args[0]; // on / off
    const db = fs.existsSync(welcomeStatusPath) ? JSON.parse(fs.readFileSync(welcomeStatusPath)) : {};

    if (estado === 'on') db[group] = true;
    else if (estado === 'off') db[group] = false;
    else return sock.sendMessage(group, { text: '❓ Usa: welcomeconfig on | off' });

    fs.writeFileSync(welcomeStatusPath, JSON.stringify(db, null, 2));
    await sock.sendMessage(group, { text: `📥 Bienvenida ${estado === 'on' ? 'activada' : 'desactivada'}.` });
  }
};