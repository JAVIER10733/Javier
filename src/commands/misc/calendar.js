module.exports = {
  name: "calendar",
  alias: ["calendario"],
  description: "Muestra la fecha actual o calendario del mes",
  category: "música",
  async execute(m, { conn }) {
    const now = new Date();
    const dateString = now.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    await conn.sendMessage(m.chat, { text: `📅 Hoy es ${dateString}` }, { quoted: m });
  },
};