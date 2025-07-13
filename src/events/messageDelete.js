module.exports = async function messageeDelete({ conn, ev }) {
  ev.on("messages.delete", async (message) => {
    if (!message.keys || message.keys.fromMe) return;

    const chat = message.keys.remoteJid;
    const sender = message.keys.participant;

    await conn.sendMessage(chat, {
      text: `🕵️‍♂️ ¡Un mensaje fue eliminado por @${sender.split("@")[0]}!`,
      mentions: [sender],
    });
  });
};