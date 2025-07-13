const { exec } = require("child_process");
const fs = require("fs");

module.exports = {
  name: "videoedit",
  alias: ["editarvideo"],
  description: "Aplica efectos básicos a videos (cortar, acelerar, ralentizar)",
  category: "media",
  async execute(m, { conn, args }) {
    if (!m.quoted || m.quoted.mimetype !== "video/mp4")
      return m.reply("🎞️ Responde a un video para editar.");

    const media = await m.quoted.download();
    const inputPath = `./tmp/input-${Date.now()}.mp4`;
    const outputPath = `./tmp/output-${Date.now()}.mp4`;

    fs.writeFileSync(inputPath, media);

    let command = "";
    const effect = args[0];

    switch (effect) {
      case "fast":
        command = `ffmpeg -i ${inputPath} -filter:v "setpts=0.5*PTS" ${outputPath}`;
        break;
      case "slow":
        command = `ffmpeg -i ${inputPath} -filter:v "setpts=2.0*PTS" ${outputPath}`;
        break;
      case "reverse":
        command = `ffmpeg -i ${inputPath} -vf reverse -af areverse ${outputPath}`;
        break;
      default:
        fs.unlinkSync(inputPath);
        return m.reply("❗ Efectos disponibles: fast, slow, reverse");
    }

    exec(command, async (err) => {
      fs.unlinkSync(inputPath);
      if (err) return m.reply("❌ Error al procesar el video.");

      const buffer = fs.readFileSync(outputPath);
      await conn.sendMessage(m.chat, { video: buffer, caption: `🎞️ Video con efecto: ${effect}` }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
  },
};