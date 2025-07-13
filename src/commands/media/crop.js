const Jimp = require("jimp");

module.exports = {
  name: "crop",
  alias: ["recortar"],
  description: "Recorta una imagen (por defecto al centro)",
  category: "media",
  async execute(m, { conn }) {
    if (!m.quoted || !/image/.test(m.quoted.mimetype))
      return m.reply("🖼️ Responde a una imagen.");

    const media = await m.quoted.download();
    const image = await Jimp.read(media);

    const width = image.bitmap.width / 2;
    const height = image.bitmap.height / 2;
    const x = image.bitmap.width / 4;
    const y = image.bitmap.height / 4;

    image.crop(x, y, width, height);
    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
    conn.sendMessage(m.chat, { image: buffer, caption: "🖼️ Imagen recortada" }, { quoted: m });
  },
};