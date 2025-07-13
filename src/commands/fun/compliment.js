const compliments = [
  "Eres increíble tal y como eres.",
  "Tu sonrisa puede iluminar cualquier lugar.",
  "Tienes un corazón hermoso.",
  "Siempre sabes cómo hacer feliz a los demás.",
  "Eres una persona única y maravillosa.",
  "Tu energía es contagiosa.",
  "Tu bondad inspira a todos a tu alrededor."
];

const handler = async (m) => {
  const msg = compliments[Math.floor(Math.random() * compliments.length)];
  m.reply(`💖 ${msg}`);
};

handler.help = ['compliment'];
handler.tags = ['fin'];
handler.command = /^compliment$/i;

export default handler;