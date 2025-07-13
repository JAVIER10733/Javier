import fetch from 'node-fetch';

const handler = async (m) => {
  try {
    const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const json = await res.json();
    m.reply(`😂 Chiste:\n\n${json.setup}\n${json.punchline}`);
  } catch {
    m.reply('❌ No se pudo obtener un chiste.');
  }
};

handler.help = ['joke'];
handler.tags = ['fin'];
handler.command = /^joke$/i;

export default handler;