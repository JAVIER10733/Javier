const fs = require("fs");

module.exports = {
  name: "restore",
  alias: [],
  description: "Restaura la base de datos desde un archivo JSON",
  category: "owner",
  owner: true,
  async execute(m, { conn }) {
    if (!m.quoted || !m.quoted.documentMessage || !/json/.test(m.quoted.mimetype))
      return m.reply("📥 Responde a un archivo .json con la base de datos para restaurar.");

    const media = await m.quoted.download();
    try {
      const json = JSON.parse(media.toString());
      fs.writeFileSync("./database/db.json", JSON.stringify(json, null, 2));
      m.reply("✅ Base de datos restaurada correctamente.");
    } catch (e) {
      m.reply("❌ Error al restaurar la base de datos.");
    }
  },
};