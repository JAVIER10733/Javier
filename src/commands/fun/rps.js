const options = ['piedra', 'papel', 'tijera'];

const handler = async (m, { args }) => {
  const user = args[0]?.toLowerCase();
  if (!user || !options.includes(user)) return m.reply('✊ Usa: *.rps piedra|papel|tijera*');

  const bot = options[Math.floor(Math.random() * options.length)];
  let res = '';

  if (user === bot) res = '🤝 Empate';
  else if (
    (user === 'piedra' && bot === 'tijera') ||
    (user === 'papel' && bot === 'piedra') ||
    (user === 'tijera' && bot === 'papel')
  ) res = '🎉 ¡Ganaste!';
  else res = '😢 Perdiste';

  m.reply(`🧠 Tú: ${user}\n🤖 Bot: ${bot}\n\n${res}`);
};

handler.help = ['rps <piedra|papel|tijera>'];
handler.tags = ['fin'];
handler.command = /^rps$/i;

export default handler;