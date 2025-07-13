import fetch from 'node-fetch';

const handler = async (m) => {
  try {
    const res = await fetch('https://uselessfacts.jsph.pl/random.json?language=es');
    const json = await res.json();
    m.reply(`📚 Dato curioso:\n\n${json.text}`);
  } catch {
    m.reply('❌ No se pudo obtener un dato curioso.');
  }
};

handler.help = ['fact'];
handler.tags = ['fin'];
handler.command = /^fact$/i;

export default handler;