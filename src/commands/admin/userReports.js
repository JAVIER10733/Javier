import fs from 'fs';
const reportPath = './database/json/user_reports.json';

export default {
  name: 'userreports',
  description: 'Muestra los reportes enviados por los usuarios',

  ownerOnly: true,

  async run({ sock, msg }) {
    if (!fs.existsSync(reportPath)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '📁 No hay reportes disponibles.' });
    }

    const db = JSON.parse(fs.readFileSync(reportPath));
    const groupReports = db[msg.key.remoteJid] || [];

    if (groupReports.length === 0)
      return sock.sendMessage(msg.key.remoteJid, { text: '📭 No hay reportes para este grupo.' });

    const reportText = groupReports.map((r, i) => `#${i + 1} • @${r.user}\n📝 ${r.reason}\n📅 ${r.date}`).join('\n\n');

    await sock.sendMessage(msg.key.remoteJid, { text: `📋 Reportes:\n\n${reportText}`, mentions: groupReports.map(r => r.user + '@s.whatsapp.net') });
  }
};