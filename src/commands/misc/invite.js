module.exports = {
  name: "invite",
  alias: ["invitar"],
  description: "Envía un enlace para invitar al bot a otros grupos",
  category: "util",
  async execute(m, { conn }) {
    const inviteLink = "https://chat.whatsapp.com/your_invite_link_here"; // Cambia este enlace por el correcto

    await conn.sendMessage(m.chat, { text: `📩 Invita al bot a tus grupos con este enlace:\n${inviteLink}` }, { quoted: m });
  },
};