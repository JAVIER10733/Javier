const { writeFileSync, unlinkSync } = require("fs");
const { exec } = require("child_process");

module.exports = {
  name: "stiker",
  alias: ["sticker", "stik", "stikcer"],
  description: "Convierte imágenes o videos cortos en stickers",
  category: "media",
  async execute(m, { conn }) {
    if (!m.quoted || (!/image/.test(m.quoted.mimetype) && !/video/.test(m.quoted.mimetype)))
      return m.reply("❗ Responde a una imagen o video (menos de 10 segundos) para crear un sticker.");

    const media = await m.quoted.download();
    const inputPath = `./tmp/input-${Date.now()}`;
    const outputPath = `./tmp/output-${Date.now()}.webp`;

    // Guarda archivo temporal con extensión correcta
    const ext = /video/.test(m.quoted.mimetype) ? ".mp4" : ".png";
    writeFileSync(inputPath + ext, media);

    // Comando ffmpeg para convertir a sticker webp
    let command = "";

    if (ext === ".mp4") {
      command = `ffmpeg -i ${inputPath + ext} -vf "scale=512:512:force_original_aspect_ratio=decrease,fps=15" -vcodec libwebp -lossless 1 -preset default -an -vsync 0 -s 512:512 ${outputPath}`;
    } else {
      command = `ffmpeg -i ${inputPath + ext} -vcodec libwebp -filter:v "scale=512:512:force_original_aspect_ratio=decrease" -lossless 1 -preset default -an -vsync 0 ${outputPath}`;
    }

    exec(command, async (err) => {
      // Limpieza
      unlinkSync(inputPath + ext);

      if (err) return m.reply("❌ Error al crear el sticker.");

      const stickerBuffer = require("fs").readFileSync(outputPath);
      await conn.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
      unlinkSync(outputPath);
    });
  },
};