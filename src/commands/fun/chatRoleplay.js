const handler = async (m, { text }) => {
  if (!text) return m.reply('🎭 Escribe algo para que el bot te responda en modo rol.');
  
  const respuestas = [
    `*${m.pushName}* mira a los ojos y dice: "${text}"`,
    `El ambiente se vuelve tenso. *${m.pushName}* susurra: "${text}"`,
    `*${m.pushName}* se acerca lentamente y murmura: "${text}"`,
    `En un suspiro, *${m.pushName}* exclama: "${text}"`,
    `Con voz firme, *${m.pushName}* dice: "${text}"`
  ];

  const res = respuestas[Math.floor(Math.random() * respuestas.length)];
  m.reply(res);
};

handler.help = ['chatroleplay <texto>'];
handler.tags = ['fin'];
handler.command = /^chatroleplay$/i;

export default handler;