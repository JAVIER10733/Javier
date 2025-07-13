const frases = [
  "Hoy es un buen día para empezar algo nuevo.",
  "La suerte favorece a los valientes.",
  "Confía en tu instinto.",
  "Un cambio inesperado traerá felicidad.",
  "La paciencia es la clave del éxito.",
  "La oportunidad llegará cuando estés listo."
];

const handler = async (m) => {
  const fortune = frases[Math.floor(Math.random() * frases.length)];
  m.reply(`🥠 Galleta de la fortuna:\n\n"${fortune}"`);
};

handler.help = ['fortecookie'];
handler.tags = ['fin'];
handler.command = /^fort(une)?cookie$/i;

export default handler;