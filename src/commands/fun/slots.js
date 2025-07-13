const frutas = ['🍒', '🍋', '🍉', '🍇', '🍊'];

const handler = async (m) => {
  const roll = () => frutas[Math.floor(Math.random() * frutas.length)];
  const [a, b, c] = [roll(), roll(), roll()];
  const win = a === b && b === c;

  m.reply(`🎰 SLOT MACHINE 🎰\n\n| ${a} | ${b} | ${c} |\n\n${win ? '🎉 ¡Ganaste!' : '😢 Perdiste, intenta de nuevo!'}`);
};

handler.help = ['slot'];
handler.tags = ['fin'];
handler.command = /^slot$/i;

export default handler;