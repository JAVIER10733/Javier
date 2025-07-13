module.exports = async function Messagereaccion({ conn, ev }) {
  ev.on("messages.reaction", async (reaction) => {
    const { key, reaction: emoji } = reaction;
    const user = key.participant;

    console.log(`💬 ${user} reaccionó con ${emoji}`);
  });
};