const Jimp = require("jimp");

module.exports = {
  name: "textonimage",
  alias: ["textoimagen", "textimg"],
  description: "Agrega texto personalizado sobre una imagen",
  category: "media",
  async execute(m, { conn, args }) {
    if (!m.quoted || !/image/.test(m.quoted.mimetype))
      return m.reply("🖼️ Responde a una imagen para agregar texto.");

    const text = args.join(" ");
    if (!text) return m.reply("✍️ Escribe el texto que quieres agregar.");

    const media = await m.quoted.download();
    const image = await Jimp.read(media);

    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);

    // Agrega texto centrado
    image.print(
      font,
      10,
      image.bitmap.height / 2 - 16,
      {
        text: text,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
      },
      image.bitmap.width - 20,
      32
    );

    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
    conn.sendMessage(m.chat, { image: buffer, caption: "📝 Imagen con texto agregado" }, { quoted: m });
  },
};