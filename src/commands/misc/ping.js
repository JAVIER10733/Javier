module.exports = {
  name: "ping",
  alias: ["latency"],
  description: "Muestra el ping o latencia del bot",
  category: "util",
  async execute(m, { conn }) {
    const start = Date.now();
    await conn.sendMessage(m.chat, { text: "🏓 Ping..." }, { quoted: m });
    const latency = Date.now() - start;
    await conn.sendMessage(m.chat, { text: `🏓 Pong! Latencia: ${latency} ms` }, { quoted: m });
  },
};