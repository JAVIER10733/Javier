const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

module.exports = {
  name: "audioedit",
  alias: ["editaraudio", "audiofx"],
  description: "Edita un audio con efectos como bass, slow, fast, robot, etc.",
  category: "media",
  use: "<efecto>",
  async execute(m, { conn, args, command, prefix }) {
    const efecto = args[0];
    const efectosDisponibles = ["bass", "slow", "fast", "reverse", "robot"];

    if (!efecto || !efectosDisponibles.includes(efecto.toLowerCase()))
      return m.reply(
        `✨ Usa: ${prefix + command} <efecto>\n📦 Efectos: ${efectosDisponibles.join(", ")}`
      );

    if (!m.quoted || !m.quoted.audio) return m.reply("🔊 Responde a un audio.");

    const media = await m.quoted.download();
    const inputPath = `./tmp/input-${Date.now()}.mp3`;
    const outputPath = `./tmp/output-${Date.now()}.mp3`;

    fs.writeFileSync(inputPath, media);

    let comandoFFmpeg = "";

    switch (efecto) {
      case "bass":
        comandoFFmpeg = `ffmpeg -i ${inputPath} -af "bass=g=20" ${outputPath}`;
        break;
      case "slow":
        comandoFFmpeg = `ffmpeg -i ${inputPath} -filter:a "atempo=0.7" ${outputPath}`;
        break;
      case "fast":
        comandoFFmpeg = `ffmpeg -i ${inputPath} -filter:a "atempo=1.5" ${outputPath}`;
        break;
      case "reverse":
        comandoFFmpeg = `ffmpeg -i ${inputPath} -filter_complex areverse ${outputPath}`;
        break;
      case "robot":
        comandoFFmpeg = `ffmpeg -i ${inputPath} -af "afftfilt=real='hypot(re,im)':imag='0'" ${outputPath}`;
        break;
    }

    exec(comandoFFmpeg, async (err) => {
      if (err) {
        fs.unlinkSync(inputPath);
        return m.reply("❌ Ocurrió un error al procesar el audio.");
      }
      const editedAudio = fs.readFileSync(outputPath);
      await conn.sendMessage(m.chat, { audio: editedAudio, mimetype: "audio/mp4", ptt: true }, { quoted: m });
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
    });
  },
};