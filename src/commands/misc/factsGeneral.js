const facts = [
  "Los gatos duermen aproximadamente 16 horas al día.",
  "La música puede mejorar tu estado de ánimo instantáneamente.",
  "El piano tiene 88 teclas.",
  "Los Beatles lanzaron su primer álbum en 1963.",
];

module.exports = {
  name: "factsgeneral",
  alias: ["datos", "datoscuriosos"],
  description: "Envía datos curiosos generales",
  category: "música",
  async execute(m, { conn }) {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    await conn.sendMessage(m.chat, { text: `🔍 Dato curioso: ${fact}` }, { quoted: m });
  },
};