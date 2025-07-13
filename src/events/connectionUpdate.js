const { Boom } = require("@hapi/boom");

module.exports = async function conectionUpdate({ conn, ev }) {
  ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

      console.log("🔌 Conexión cerrada:", reason);

      if (reason !== 401) {
        console.log("🔁 Reintentando conexión...");
        require("../../index.js");
      } else {
        console.log("⛔ Sesión no autorizada. Elimina session y vuelve a iniciar.");
      }
    }

    if (connection === "open") {
      console.log("✅ Bot conectado correctamente.");
    }
  });
};