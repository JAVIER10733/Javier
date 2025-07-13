import fetch from 'node-fetch';

const handler = async (m) => {
  try {
    const res = await fetch('https://dog-api.kinduff.com/api/facts');
    const json = await res.json();
    m.reply(`🐶 Dato curioso de perros:\n\n${json.facts[0]}`);
  } catch (e) {
    m.reply('❌ No se pudo obtener un dato de perro.');
  }
};

handler.help = ['dogfact'];
handler.tags = ['fin'];
handler.command = /^dogfact$/i;

export default handler;