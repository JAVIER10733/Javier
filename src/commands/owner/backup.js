const fs = require("fs");
const path = require("path");

module.exports = {
  name: "backup",
  alias: [],
  description: "Genera un backup de la base de datos",
  category: "owner",
  owner: true,
  async execute(m, { conn }) {
    const dbPath = "./database/db.json";
    if (!fs.existsSync(dbPath)) return m.reply("❌ No se encontró el archivo de base de datos.");

    const buffer = fs.readFileSync(dbPath);
    await conn.sendMessage(m.chat, {
      document: buffer,
      fileName: "db-backup.json",
      mimetype: "application/json",
      caption: "📦 Aquí tienes la copia de seguridad.",
    }, { quoted: m });
  },
};