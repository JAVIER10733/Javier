module.exports = async function CallEvents({ conn, ev }) {
  ev.on("CB:call", async (json) => {
    const call = json.content[0]?.attrs || {};
    const from = call.from || "desconocido";

    console.log("📞 Llamada detectada de:", from);

    // Opción: bloquear al usuario si llama
    if (conn.blockUser) {
      await conn.updateBlockStatus(from, "block");
      await conn.sendMessage(from, {
        text: "❌ No se permiten llamadas. Has sido bloqueado.",
      });
    }
  });
};