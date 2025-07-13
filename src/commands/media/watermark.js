const Jimp = require("jimp");

module.exports = {
  name: "watermark",
  alias: ["marcaagua"],
  description: "Agrega una marca de agua de texto a una imagen",
  category: "media",
  async execute(m, { conn, args }) {
    if (!m.quoted || !/image/.test(m.quoted.mimetype))
      return m.reply("🖼️ Responde a una imagen para agregar marca de agua.");

    const text = args.join(" ");
    if (!text) return m.reply("✍️ Escribe el texto para la marca de agua.");

    const media = await m.quoted.download();
    const image = await Jimp.read(media);

    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    image.print(font, 10, image.bitmap.height - 40, text);

    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
    conn.sendMessage(m.chat, { image: buffer, caption: "💧 Imagen con marca de agua" }, { quoted: m });
  },
};