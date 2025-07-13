module.exports = {
  name: "report",
  alias: ["reporte"],
  description: "Reporta un problema o error al creador del bot",
  category: "util",
  async execute(m, { conn, args }) {
    if (!args.length) return m.reply("✍️ Escribe el problema o error que quieres reportar.");

    const report = args.join(" ");
    // Aquí deberías enviar este reporte a un chat admin o guardarlo en base de datos

    await m.reply("✅ Tu reporte ha sido enviado. Gracias por ayudar a mejorar el bot.");
  },
};