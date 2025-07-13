import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const res = await fetch('https://meme-api.com/gimme');
    const json = await res.json();
    await conn.sendFile(m.chat, json.url, 'meme.jpg', `🤣 *${json.title}*`, m);
  } catch {
    m.reply('❌ No se pudo obtener un meme.');
  }
};

handler.help = ['meme'];
handler.tags = ['fin'];
handler.command = /^meme$/i;

export default handler;