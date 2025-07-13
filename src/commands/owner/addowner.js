module.exports = {
  name: "addowner",
  alias: [],
  description: "Agrega un nuevo número como owner del bot",
  category: "owner",
  owner: true,
  async execute(m, { args, conn }) {
    const number = args[0]?.replace(/\D/g, "");
    if (!number) return m.reply("📌 Ingresa un número válido para agregar como owner.");

    global.owner.push([number]);
    m.reply(`✅ @${number} fue agregado como nuevo owner.`, null, {
      mentions: [`${number}@s.whatsapp.net`],
    });
  },
};