const respuestas = [
  "Sí.",
  "No.",
  "Tal vez.",
  "Definitivamente.",
  "No cuentes con ello.",
  "Pregunta de nuevo luego.",
  "Es muy probable.",
  "Mis fuentes dicen que no.",
  "Sin duda.",
  "No estoy seguro."
];

const handler = async (m, { text }) => {
  if (!text) return m.reply('🎱 Pregunta algo.\nEjemplo: *.eightball voy a aprobar?*');
  const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
  m.reply(`🎱 ${respuesta}`);
};

handler.help = ['eightball <pregunta>'];
handler.tags = ['fin'];
handler.command = /^eightball$/i;

export default handler;