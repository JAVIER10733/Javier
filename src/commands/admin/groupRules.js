import fs from 'fs';
const rulesPath = './database/json/groupRules.json';

export default {
  name: 'rules',
  description: 'Muestra o configura las reglas del grupo',

  async run({ sock, msg, args, sender, isAdmin }) {
    const group = msg.key.remoteJid;
    const db = fs.existsSync(rulesPath) ? JSON.parse(fs.readFileSync(rulesPath)) : {};

    if (args[0] === 'set') {
      if (!isAdmin) return sock.sendMessage(group, { text: '🚫 Solo admins pueden configurar reglas.' });
      const rules = args.slice(1).join(' ');
      db[group] = rules;
      fs.writeFileSync(rulesPath, JSON.stringify(db, null, 2));
      return sock.sendMessage(group, { text: '✅ Reglas actualizadas.' });
    }

    const text = db[group] || '📜 No hay reglas establecidas en este grupo.';
    await sock.sendMessage(group, { text });
  }
};