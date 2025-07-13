const handler = async (m, { conn, command, args }) => {
  const user = m.sender;
  const bet = parseInt(args[0]);
  if (!bet || isNaN(bet) || bet <= 0) {
    return m.reply('🎰 Ingresa una cantidad válida para apostar.\nEjemplo: *.blackjack 100*');
  }

  global.db.data.users[user] = global.db.data.users[user] || { money: 0 };
  const userMoney = global.db.data.users[user].money;

  if (userMoney < bet) {
    return m.reply(`💸 No tienes suficiente dinero. Tienes: ${userMoney} monedas.`);
  }

  const getCard = () => Math.floor(Math.random() * 10) + 2;
  let playerTotal = getCard() + getCard();
  let botTotal = getCard() + getCard();

  let result = '';
  if (playerTotal > botTotal || botTotal > 21) {
    global.db.data.users[user].money += bet;
    result = `🎉 ¡Ganaste!\n🧍‍♂️ Tú: ${playerTotal}\n🤖 Bot: ${botTotal}\n💰 Ganaste ${bet} monedas.`;
  } else if (playerTotal < botTotal) {
    global.db.data.users[user].money -= bet;
    result = `😢 Perdiste.\n🧍‍♂️ Tú: ${playerTotal}\n🤖 Bot: ${botTotal}\n💸 Perdiste ${bet} monedas.`;
  } else {
    result = `😐 Empate.\n🧍‍♂️ Tú: ${playerTotal}\n🤖 Bot: ${botTotal}\n💲 No ganaste ni perdiste.`;
  }

  m.reply(result);
};

handler.help = ['blackjack <cantidad>'];
handler.tags = ['fin'];
handler.command = /^blackjack$/i;

export default handler;