import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const res = await fetch('https://api.waifu.pics/sfw/waifu');
    const json = await res.json();
    await conn.sendFile(m.chat, json.url, 'waifu.jpg', '💖 Tu waifu del día:', m);
  } catch {
    m.reply('❌ No se pudo obtener una waifu.');
  }
};

handler.help = ['waifus'];
handler.tags = ['fin'];
handler.command = /^waifus$/i;

export default handler;