const { writeFileSync } = require("fs");

module.exports = {
  name: "gif",
  alias: ["togif"],
  description: "Convierte un video corto a gif",
  category: "media",
  async execute(m, { conn }) {
    if (!m.quoted || m.quoted.mimetype !== "video/mp4")
      return m.reply("🎞️ Responde a un video corto para convertir a gif.");

    const media = await m.quoted.download();
    const path = `./tmp/gif-${Date.now()}.mp4`;
    writeFileSync(path, media);

    await conn.sendMessage(m.chat, { video: { url: path }, gifPlayback: true, caption: "🎞️ Aquí tienes tu gif" }, { quoted: m });
  },
};