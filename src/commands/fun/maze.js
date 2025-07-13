const laberintos = [
  '🟩⬜⬜⬜⬜⬛\n⬛⬛⬛⬜⬛⬛\n⬜⬜⬜⬜⬜🏁',
  '⬜⬛⬛⬛⬛⬛\n⬜⬜⬜⬛⬛⬛\n⬛⬛⬜⬛⬜🏁',
  '⬜⬛⬛⬛⬛⬛\n⬜⬜⬛⬛⬛⬛\n⬜⬛⬛⬛⬜🏁'
];

const handler = async (m) => {
  const maze = laberintos[Math.floor(Math.random() * laberintos.length)];
  m.reply(`🧩 Encuentra la salida:\n\n${maze}`);
};

handler.help = ['maze'];
handler.tags = ['fin'];
handler.command = /^maze$/i;

export default handler;