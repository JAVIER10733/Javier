const os = require("os");

module.exports = {
  name: "serverstatus",
  alias: ["statusserver"],
  description: "Muestra información del servidor del bot",
  category: "owner",
  owner: true,
  async execute(m, { conn }) {
    const uptime = os.uptime();
    const load = os.loadavg();
    const mem = os.totalmem() - os.freemem();

    const msg = `
🖥️ *Estado del Servidor*:

- Tiempo activo: ${(uptime / 60).toFixed(2)} minutos
- CPU Carga promedio: ${load.map(n => n.toFixed(2)).join(", ")}
- Memoria usada: ${(mem / 1024 / 1024).toFixed(2)} MB
`;

    await conn.sendMessage(m.chat, { text: msg.trim() }, { quoted: m });
  },
};