const { exec } = require("child_process");

module.exports = {
  name: "exec",
  alias: ["$"],
  description: "Ejecuta comandos de terminal en tiempo real",
  category: "owner",
  owner: true,
  async execute(m, { args }) {
    const command = args.join(" ");
    if (!command) return m.reply("💻 Ingresa el comando a ejecutar.");

    exec(command, (err, stdout, stderr) => {
      if (err) return m.reply(`❌ Error:\n${stderr}`);
      m.reply(`✅ Salida:\n${stdout}`);
    });
  },
};