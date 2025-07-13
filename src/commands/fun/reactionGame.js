const handler = async (m) => {
  const emojis = ['🔥', '🍕', '💎', '🚀', '🎉', '🥶'];
  const chosen = emojis[Math.floor(Math.random() * emojis.length)];
  await m.reply(`🔁 Reacciona con el emoji: ${chosen} lo más rápido posible!`);

  conn.reactionGame = conn.reactionGame || {};
  conn.reactionGame[m.sender] = {
    emoji: chosen,
    time: Date.now(),
    timeout: setTimeout(() => delete conn.reactionGame[m.sender], 15000)
  };
};

handler.help = ['reactiongame'];
handler.tags = ['fin'];
handler.command = /^reactiongame$/i;

export default handler;