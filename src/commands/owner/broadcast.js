module.exports = {
  name: "broadcast",
  alias: ["bc"],
  description: "Envía un mensaje a todos los chats",
  category: "owner",
  owner: true,
  async execute(m, { conn, args }) {
    const message = args.join(" ");
    if (!message) return m.reply("📢 Escribe el mensaje que deseas enviar a todos los chats.");

    const chats = await conn.chats.all();
    for (const chat of chats) {
      await conn.sendMessage(chat.id, { text: `📢 *Broadcast:*\n\n${message}` });
    }

    m.reply(`✅ Mensaje enviado a ${chats.length} chats.`);
  },
};