module.exports = {
  name: "shutdown",
  alias: ["apagar"],
  description: "Apaga el bot completamente",
  category: "owner",
  owner: true,
  async execute(m) {
    m.reply("🛑 Apagando el bot...").then(() => process.exit());
  },
};