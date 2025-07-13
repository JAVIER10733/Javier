const { writeFileSync } = require("fs");
const { spawn } = require("child_process");

module.exports = {
  name: "memegenerator",
  alias: ["meme"],
  description: "Genera un meme con texto superior e inferior",
  category: "media",
  use: "<texto_arriba>|<texto_abajo>",
  async execute(m, { conn, args }) {
    const [topText, bottomText] = args.join(" ").split("|");
    if (!topText || !bottomText) return m.reply("📌 Usa: .meme texto_arriba|texto_abajo");
    if (!m.quoted || !/image/.test(m.quoted.mimetype)) return m.reply("🖼️ Responde a una imagen");

    const media = await m.quoted.download();
    const inputPath = `./tmp/meme-input.jpg`;
    const outputPath = `./tmp/meme-output.jpg`;
    writeFileSync(inputPath, media);

    const cmd = `convert ${inputPath} -gravity north -stroke black -strokewidth 3 -annotate +0+10 "${topText}" -stroke none -fill white -annotate +0+10 "${topText}" -gravity south -stroke black -strokewidth 3 -annotate +0+10 "${bottomText}" -stroke none -fill white -annotate +0+10 "${bottomText}" ${outputPath}`;

    spawn("bash", ["-c", cmd]).on("close", () => {
      const buffer = require("fs").readFileSync(outputPath);
      conn.sendMessage(m.chat, { image: buffer, caption: "📸 Meme generado" }, { quoted: m });
    });
  },
};