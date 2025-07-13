const bailes = [
  '💃 está bailando salsa sensualmente.',
  '🕺 se pone a bailar reguetón bien sabrosón.',
  '🪩 comienza una danza elegante al ritmo del vals.',
  '🕴️ mueve los pies al ritmo del break dance.',
  '💃 hace una coreografía de K-pop perfecta.',
  '🕺 baila como si nadie lo estuviera viendo.'
];

const handler = async (m) => {
  const randomDance = bailes[Math.floor(Math.random() * bailes.length)];
  m.reply(`*${m.pushName}* ${randomDance}`);
};

handler.help = ['dance'];
handler.tags = ['fin'];
handler.command = /^dance$/i;

export default handler;