module.exports = {
  name: "uptime",
  alias: ["tiempoactivo"],
  description: "Muestra el tiempo que lleva activo el bot",
  category: "util",
  async execute(m, { conn }) {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    await conn.sendMessage(m.chat, { text: `⏱️ Uptime: ${hours}h ${minutes}m ${seconds}s` }, { quoted: m });
  },
};