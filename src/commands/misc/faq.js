const faqs = {
  "¿Cómo usar el bot?": "Solo envía comandos con el prefijo establecido.",
  "¿Qué música puedo pedir?": "Puedes pedir canciones por nombre o enlace.",
  "¿El bot tiene comandos de diversión?": "Sí, varios comandos para entretenerte.",
};

module.exports = {
  name: "faq",
  alias: ["preguntasfrecuentes", "ayuda"],
  description: "Responde preguntas frecuentes sobre el bot",
  category: "música",
  async execute(m, { conn, args }) {
    if (!args.length) return m.reply("❓ Escribe una pregunta para recibir ayuda.");

    const question = args.join(" ").toLowerCase();
    const answer = Object.entries(faqs).find(([q]) => q.toLowerCase().includes(question));

    if (answer) {
      await conn.sendMessage(m.chat, { text: `❓ Pregunta: ${answer[0]}\n💡 Respuesta: ${answer[1]}` }, { quoted: m });
    } else {
      await conn.sendMessage(m.chat, { text: "❌ Lo siento, no tengo esa respuesta." }, { quoted: m });
    }
  },
};