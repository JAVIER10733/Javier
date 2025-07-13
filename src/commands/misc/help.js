module.exports = {
  name: "help",
  alias: ["ayuda", "commands"],
  description: "Muestra la lista de comandos disponibles",
  category: "util",
  async execute(m, { conn }) {
    const helpText = `
🤖 *Lista de comandos:*

- help: Muestra esta ayuda
- invite: Invita a tus amigos
- ping: Muestra el ping del bot
- poll: Crea una encuesta
- quote: Envía una frase célebre
- reminder: Configura un recordatorio
- report: Reporta un problema
- stats: Muestra estadísticas del bot
- translator: Traduce texto a otro idioma
- uptime: Muestra el tiempo activo del bot
- weather: Muestra el clima actual
`;

    await conn.sendMessage(m.chat, { text: helpText }, { quoted: m });
  },
};