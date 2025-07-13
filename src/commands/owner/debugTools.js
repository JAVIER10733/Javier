module.exports = {
  name: "debugtools",
  alias: [],
  description: "Muestra información de depuración del bot",
  category: "owner",
  owner: true,
  async execute(m, { conn }) {
    const memory = process.memoryUsage();
    const debugInfo = `
🛠️ *Herramientas de Debug:*

- Memoria usada: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB
- Uptime: ${(process.uptime() / 60).toFixed(2)} min
- Node: ${process.version}
`;

    await conn.sendMessage(m.chat, { text: debugInfo.trim() }, { quoted: m });
  },
};