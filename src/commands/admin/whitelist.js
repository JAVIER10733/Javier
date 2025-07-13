import fs from 'fs';
const whitelistPath = './database/json/whitelist.json';

export default {
  name: 'whitelist',
  description: 'Añade o quita usuarios de la whitelist',

  ownerOnly: true,

  async run({ sock, msg, args }) {
    const group = msg.key.remoteJid;
    const db = fs.existsSync(whitelistPath) ? JSON.parse(fs.readFileSync(whitelistPath)) : {};
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];

    if (!db[group]) db[group] = [];

    if (args[0] === 'add') {
      mentioned.forEach(user => {
        if (!db[group].includes(user)) db[group].push(user);
      });
      await sock.sendMessage(group, { text: '✅ Usuarios añadidos a la whitelist.' });
    } else if (args[0] === 'remove') {
      db[group] = db[group].filter(u => !mentioned.includes(u));
      await sock.sendMessage(group, { text: '✅ Usuarios removidos de la whitelist.' });
    } else {
      return sock.sendMessage(group, { text: '❓ Usa: whitelist add @user | remove @user' });
    }

    fs.writeFileSync(whitelistPath, JSON.stringify(db, null, 2));
  }
};