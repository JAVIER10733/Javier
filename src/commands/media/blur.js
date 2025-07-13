const Jimp = require("jimp");

module.exports = {
  name: "blur",
  alias: ["desenfocar"],
  description: "Aplica un efecto de desenfoque a una imagen",
  category: "media",
  async execute(m, { conn }) {
    if (!m.quoted || !/image/.test(m.quoted.mimetype))
      return m.reply("🖼️ Responde a una imagen para aplicar blur.");

    const imgBuffer = await m.quoted.download();
    const image = await Jimp.read(imgBuffer);
    image.blur(10);

    image.getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
      if (err) return m.reply("❌ Error al aplicar blur.");
      conn.sendMessage(m.chat, { image: buffer, caption: "✨ Imagen desenfocada" }, { quoted: m });
    });
  },
};