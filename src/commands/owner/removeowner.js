module.exports = {
  name: "removeowner",
  alias: [],
  description: "Elimina a un número de la lista de owners",
  category: "owner",
  owner: true,
  async execute(m, { args }) {
    const number = args[0]?.replace(/\D/g, "");
    if (!number) return m.reply("🔻 Proporciona un número válido para eliminar de los owners.");

    const index = global.owner.findIndex(o => o[0] === number);
    if (index === -1) return m.reply("❌ Ese número no es owner.");

    global.owner.splice(index, 1);
    m.reply(`✅ El número @${number} ha sido removido de los owners.`, null, {
      mentions: [`${number}@s.whatsapp.net`],
    });
  },
};