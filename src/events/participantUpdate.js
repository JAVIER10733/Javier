module.exports = async function ParticipantUpdate({ conn, ev }) {
  ev.on("group-participants.update", async (data) => {
    const { id, participants, action } = data;

    for (let user of participants) {
      if (action === "add") {
        await conn.sendMessage(id, {
          text: `🎉 Bienvenido @${user.split("@")[0]}!`,
          mentions: [user],
        });
      } else if (action === "remove") {
        await conn.sendMessage(id, {
          text: `👋 Adiós @${user.split("@")[0]}.`,
          mentions: [user],
        });
      }
    }
  });
};