const quotes = [
  "La vida es un 10% lo que me ocurre y 90% cómo reacciono a ello.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No cuentes los días, haz que los días cuenten.",
];

module.exports = {
  name: "quote",
  alias: ["frase", "cita"],
  description: "Envía una frase célebre o motivacional",
  category: "util",
  async execute(m, { conn }) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    await conn.sendMessage(m.chat, { text: `💬 "${quote}"` }, { quoted: m });
  },
};