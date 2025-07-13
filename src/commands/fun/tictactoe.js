const handler = async (m, { conn }) => {
  m.reply('❌ Módulo en desarrollo. Próximamente se podrá jugar tic-tac-toe (gato).');
};

handler.help = ['tictactoe'];
handler.tags = ['fin'];
handler.command = /^tictactoe$/i;

export default handler;