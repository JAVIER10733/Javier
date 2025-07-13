const handler = async (m, { text }) => {
  const name = text || m.quoted?.sender || 'alguien';
  m.reply(`🤗 *${m.pushName}* abrazó a *${name}*. ¡Qué tierno!`);
};

handler.help = ['hug <@usuario|nombre>'];
handler.tags = ['fin'];
handler.command = /^hug$/i;

export default handler;