module.exports = {
  name: "reload",
  alias: ["recargar"],
  description: "Recarga todos los comandos sin reiniciar el bot",
  category: "owner",
  owner: true,
  async execute(m, { conn, plugins }) {
    try {
      plugins.reload(); // Dependiendo de tu estructura, puedes ajustar esto
      m.reply("🔁 Comandos recargados correctamente.");
    } catch (e) {
      m.reply(`❌ Error al recargar:\n${e}`);
    }
  },
};