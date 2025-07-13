const Jimp = require("jimp");

module.exports = {
  name: "resize",
  alias: ["redimensionar"],
  description: "Redimensiona una imagen al 50%",
  category: "media",
  async execute(m, { conn }) {
    if (!m.quoted || !/image/.test(m.quoted.mimetype))
      return m.reply("🖼️ Responde a una imagen para redimensionar.");

    const media = await m.quoted.download();
    const image = await Jimp.read(media);

    const newWidth = image.bitmap.width / 2;
    const newHeight = image.bitmap.height / 2;

    image.resize(newWidth, newHeight);

    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
    conn.sendMessage(m.chat, { image: buffer, caption: "✨ Imagen redimensionada al 50%" }, { quoted: m });
  },
};