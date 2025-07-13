const Jimp = require("jimp");

module.exports = {
  name: "filtrer",
  alias: ["filtro"],
  description: "Aplica un filtro sepia a la imagen",
  category: "media",
  async execute(m, { conn }) {
    if (!m.quoted || !/image/.test(m.quoted.mimetype))
      return m.reply("🖼️ Responde a una imagen para aplicar filtro.");

    const media = await m.quoted.download();
    const image = await Jimp.read(media);
    image.sepia();

    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
    conn.sendMessage(m.chat, { image: buffer, caption: "🎨 Imagen con filtro sepia" }, { quoted: m });
  },
};