import fs from 'fs';
const byePath = './database/json/goodbye.json';

export default {
  name: 'setgoodbye',
  description: 'Configura el mensaje de despedida',

  async run({ sock, msg, args, isAdmin }) {
    if (!isAdmin) return sock.sendMessage(msg.key.remoteJid, { text: '🚫 Solo admins' });

    const group = msg.key.remoteJid;
    const message = args.join(' ') || '👋 Adiós, @usuario';

    const db = fs.existsSync(byePath) ? JSON.parse(fs.readFileSync(byePath)) : {};
    db[group] = message;
    fs.writeFileSync(byePath, JSON.stringify(db, null, 2));

    await sock.sendMessage(group, { text: '✅ Mensaje de despedida configurado.' });
  }
};