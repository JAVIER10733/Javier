module.exports = {
  name: "stats",
  alias: ["estadisticas"],
  description: "Muestra estadísticas básicas del bot",
  category: "util",
  async execute(m, { conn }) {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const statsText = `
📊 *Estadísticas del bot*:
- Uptime: ${hours}h ${minutes}m ${seconds}s
- Usuarios activos: (por implementar)
- Comandos usados: (por implementar)
`;

    await conn.sendMessage(m.chat, { text: statsText.trim() }, { quoted: m });
  },
};