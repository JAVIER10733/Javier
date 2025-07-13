module.exports = async function GoupUpdate({ conn, ev }) {
  ev.on("groups.update", async (updates) => {
    for (const group of updates) {
      const id = group.id;
      if (group.subject) {
        await conn.sendMessage(id, { text: `📢 El nombre del grupo ha sido cambiado a: *${group.subject}*` });
      }

      if (group.desc) {
        await conn.sendMessage(id, { text: `📝 Nueva descripción del grupo:\n\n${group.desc}` });
      }
    }
  });
};