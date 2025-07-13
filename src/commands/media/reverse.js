const { exec } = require("child_process");
const fs = require("fs");

module.exports = {
  name: "reverse",
  alias: ["reverso"],
  description: "Reproduce un video o audio al revés",
  category: "media",
  async execute(m, { conn }) {
    if (!m.quoted || !(m.quoted.video || m.quoted.audio))
      return m.reply("🎞️ Responde a un video o audio para revertir.");

    const media = await m.quoted.download();
    const inputPath = `./tmp/input-${Date.now()}`;
    const outputPath = `./tmp/output-${Date.now()}.mp4`;

    fs.writeFileSync(inputPath, media);

    const command = m.quoted.video
      ? `ffmpeg -i ${inputPath} -vf reverse -af areverse ${outputPath}`
      : `ffmpeg -i ${inputPath} -af areverse ${outputPath}`;

    exec(command, async (err) => {
      fs.unlinkSync(inputPath);
      if (err) return m.reply("❌ Error al procesar el archivo.");

      const outputMedia = fs.readFileSync(outputPath);
      const message = m.quoted.video
        ? { video: outputMedia, caption: "🎞️ Video al revés" }
        : { audio: outputMedia, mimetype: "audio/mp4", ptt: true };

      await conn.sendMessage(m.chat, message, { quoted: m });
      fs.unlinkSync(outputPath);
    });
  },
};