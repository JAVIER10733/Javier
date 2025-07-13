const handler = async (m, { args }) => {
  const choice = args[0]?.toLowerCase();
  if (!choice || !['cara', 'cruz'].includes(choice)) {
    return m.reply('🪙 Usa: *.coinflip cara* o *.coinflip cruz*');
  }

  const flip = Math.random() > 0.5 ? 'cara' : 'cruz';
  const result = choice === flip ? '🎉 ¡Ganaste!' : '😢 Perdiste';
  
  m.reply(`🪙 Salió: *${flip}*\n${result}`);
};

handler.help = ['coinflip <cara|cruz>'];
handler.tags = ['fin'];
handler.command = /^coinflip$/i;

export default handler;