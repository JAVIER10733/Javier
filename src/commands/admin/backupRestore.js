import fs from 'fs';

export default {
  name: 'backup',
  description: 'Crea y restaura backups',

  async run({ sock, msg, args }) {
    const opt = args[0];
    if (opt === 'guardar') {
      const data = fs.readFileSync('./database/json/users.json');
      fs.writeFileSync(`./backups/users-${Date.now()}.json`, data);
      await sock.sendMessage(msg.key.remoteJid, { text: '✅ Backup creado' });
    } else if (opt === 'restaurar') {
      const file = args[1];
      const data = fs.readFileSync(`./backups/${file}`);
      fs.writeFileSync('./database/json/users.json', data);
      await sock.sendMessage(msg.key.remoteJid, { text: '♻️ Backup restaurado' });
    } else {
      await sock.sendMessage(msg.key.remoteJid, { text: '❓ Usa: backup guardar | restaurar <archivo>' });
    }
  }
};