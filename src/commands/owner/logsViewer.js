const fs = require("fs");

module.exports = {
  name: "logsviewer",
  alias: ["logs"],
  description: "Muestra los últimos registros del bot",
  category: "owner",
  owner: true,
  async execute(m, { conn }) {
    const path = "./logs/log.txt";
    if (!fs.existsSync(path)) return m.reply("❌ No se encontró el archivo de logs.");

    const logs = fs.readFileSync(path, "utf-8");
    const lines = logs.split("\n").slice(-20).join("\n");

    await conn.sendMessage(m.chat, { text: `📝 Últimos logs:\n\n${lines}` }, { quoted: m });
  },
};