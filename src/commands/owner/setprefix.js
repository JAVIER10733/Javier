module.exports = {
  name: "setprefix",
  alias: [],
  description: "Cambia el prefijo de comandos del bot",
  category: "owner",
  owner: true,
  async execute(m, { args }) {
    const prefix = args[0];
    if (!prefix) return m.reply("📝 Especifica el nuevo prefijo.");
    global.prefix = prefix;
    m.reply(`✅ El nuevo prefijo es: *${prefix}*`);
  },
};