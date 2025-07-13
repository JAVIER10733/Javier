module.exports = {
  name: "poll",
  alias: ["encuesta"],
  description: "Crea una encuesta sencilla",
  category: "util",
  async execute(m, { conn, args }) {
    if (!args.length) return m.reply("✍️ Escribe la pregunta para la encuesta.");

    const question = args.join(" ");
    // Aquí un ejemplo simple enviando texto (puedes mejorar con botones si quieres)
    await conn.sendMessage(m.chat, { text: `📊 Encuesta: ${question}\nResponde con 👍 o 👎` }, { quoted: m });
  },
};