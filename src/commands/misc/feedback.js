module.exports = {
  name: "feedback",
  alias: ["comentarios", "sugerencias"],
  description: "Envía feedback o sugerencias al creador del bot",
  category: "música",
  async execute(m, { conn, args }) {
    if (!args.length) return m.reply("✍️ Escribe tu sugerencia o comentario.");

    const feedback = args.join(" ");
    // Aquí podrías enviar el feedback a un chat admin o guardarlo

    await conn.sendMessage(m.chat, { text: "✅ Gracias por tu feedback, lo valoramos mucho." }, { quoted: m });
  },
};