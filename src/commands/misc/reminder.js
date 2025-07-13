const reminders = new Map();

module.exports = {
  name: "reminder",
  alias: ["recordatorio"],
  description: "Configura un recordatorio (en minutos)",
  category: "util",
  async execute(m, { conn, args }) {
    if (args.length < 2) return m.reply("✍️ Uso: .reminder <minutos> <mensaje>");

    const minutes = parseInt(args[0]);
    if (isNaN(minutes) || minutes <= 0) return m.reply("❌ Escribe un número válido de minutos.");

    const text = args.slice(1).join(" ");
    await m.reply(`⏰ Recordatorio configurado en ${minutes} minuto(s): ${text}`);

    setTimeout(() => {
      conn.sendMessage(m.chat, { text: `⏰ Recordatorio: ${text}` }, { quoted: m });
    }, minutes * 60000);
  },
};