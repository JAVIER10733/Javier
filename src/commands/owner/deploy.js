const { exec } = require("child_process");

module.exports = {
  name: "deploy",
  alias: ["gitpull"],
  description: "Actualiza el bot desde el repositorio (git pull)",
  category: "owner",
  owner: true,
  async execute(m, { conn }) {
    exec("git pull", async (err, stdout, stderr) => {
      if (err) return m.reply(`❌ Error:\n${stderr}`);
      await m.reply(`✅ Resultado:\n${stdout}`);
    });
  },
};