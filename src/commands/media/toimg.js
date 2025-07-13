const { exec } = require("child_process");
const fs = require("fs");

module.exports = {
  name: "toimg",
  alias: ["stikertoimg", "stikertoimage"],
  description: "Convierte un sticker animado o estático a imagen PNG",
  category: "media",
  async execute(m, { conn }) {
    if (!m.quoted || !m.quoted.sticker)
      return m.reply("❗ Responde a un sticker para convertirlo en imagen.");

    const media = await m.quoted.download();
    const inputPath = `./tmp/input-${Date.now()}.webp`;
    const outputPath = `./tmp/output-${Date.now()}.png`;

    fs.writeFileSync(inputPath, media);

    const command = `ffmpeg -i ${inputPath} ${outputPath}`;

    exec(command, async (err) => {
      fs.unlinkSync(inputPath);
      if (err) return m.reply("❌ Error al convertir el sticker.");

      const buffer = fs.readFileSync(outputPath);
      await conn.sendMessage(m.chat, { image: buffer, caption: "🖼️ Sticker convertido a imagen" }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
  },
};