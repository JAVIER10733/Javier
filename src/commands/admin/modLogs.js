import fs from 'fs';

export default {
  name: 'modlog',
  description: 'Muestra el registro de acciones del grupo',

  async run({ sock, msg }) {
    const groupID = msg.key.remoteJid;
    const logPath = `./logs/modlog_${groupID}.log`;

    if (!fs.existsSync(logPath)) {
      await sock.sendMessage(groupID, { text: '📁 No hay registros todavía.' });
    } else {
      const logs = fs.readFileSync(logPath, 'utf8');
      await sock.sendMessage(groupID, { text: `📜 Últimos registros:\n\n${logs.slice(-1500)}` });
    }
  }
};