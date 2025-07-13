const translate = require("@vitalets/google-translate-api");

module.exports = {
  name: "translator",
  alias: ["traductor", "translate"],
  description: "Traduce texto a otro idioma",
  category: "util",
  async execute(m, { conn, args }) {
    if (args.length < 2) return m.reply("✍️ Uso: .translator <idioma_destino> <texto>");

    const targetLang = args[0].toLowerCase();
    const text = args.slice(1).join(" ");

    try {
      const res = await translate(text, { to: targetLang });
      await conn.sendMessage(m.chat, { text: `🌐 Traducción (${res.from.language.iso} → ${targetLang}):\n${res.text}` }, { quoted: m });
    } catch (e) {
      m.reply("❌ Error al traducir el texto.");
    }
  },
};