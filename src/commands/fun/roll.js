const handler = async (m) => {
  const roll = Math.floor(Math.random() * 100) + 1;
  m.reply(`🎲 *${m.pushName}* lanzó un dado virtual y sacó: *${roll}* 🎯`);
};

handler.help = ['roll'];
handler.tags = ['fin'];
handler.command = /^roll$/i;

export default handler;