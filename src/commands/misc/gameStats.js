module.exports = {
  name: "gamestats",
  alias: ["estadisticasjuego"],
  description: "Muestra estadísticas o información sobre juegos",
  category: "música",
  async execute(m, { conn }) {
    const statsMessage = `
🎮 Estadísticas del juego:
- Partidas jugadas: 120
- Victorias: 45
- Derrotas: 75
- Mejor puntaje: 2000
`;

    await conn.sendMessage(m.chat, { text: statsMessage.trim() }, { quoted: m });
  },
};