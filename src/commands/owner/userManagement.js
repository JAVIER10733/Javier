module.exports = {
  name: "usermanagement",
  alias: ["usuarios"],
  description: "Muestra el número total de usuarios registrados",
  category: "owner",
  owner: true,
  async execute(m, { conn }) {
    const db = require("../../../database/db.json");
    const users = Object.keys(db.users || {});
    const text = `👥 Usuarios registrados: ${users.length}`;
    await conn.sendMessage(m.chat, { text }, { quoted: m });
  },
};