module.exports = {
  name: "birthday",
  alias: ["cumpleaños", "bday"],
  description: "Envía felicitaciones de cumpleaños o información relacionada",
  category: "música",
  async execute(m, { conn }) {
    const message = `🎉 ¡Feliz cumpleaños! 🎂\nEspero que tengas un día increíble lleno de música y alegría. 🎶🎁`;
    await conn.sendMessage(m.chat, { text: message }, { quoted: m });
  },
};