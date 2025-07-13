const handler = async (m, { text }) => {
  const objetivo = text || 'alguien';
  m.reply(`💦 *${m.pushName}* salpicó a *${objetivo}* con agua fría! 😱`);
};

handler.help = ['salp <@usuario|nombre>'];
handler.tags = ['fin'];
handler.command = /^salp$/i;

export default handler;