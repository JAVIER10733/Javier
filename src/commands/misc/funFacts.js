const funFacts = [
  "Los murciélagos siempre giran a la izquierda cuando salen de una cueva.",
  "La Tierra no es una esfera perfecta, es un esferoide oblato.",
  "Las abejas tienen cinco ojos.",
  "El sonido viaja más rápido en el agua que en el aire.",
];

module.exports = {
  name: "funfacts",
  alias: ["curiosidades"],
  description: "Envía datos divertidos o curiosos",
  category: "música",
  async execute(m, { conn }) {
    const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
    await conn.sendMessage(m.chat, { text: `🤓 Dato curioso: ${fact}` }, { quoted: m });
  },
};