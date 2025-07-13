import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    m.reply(`🐱 Dato curioso de gatos:\n\n${data.fact}`);
  } catch (e) {
    m.reply('❌ Ocurrió un error al obtener el dato del gato.');
  }
};

handler.help = ['catfact'];
handler.tags = ['fin'];
handler.command = /^catfact$/i;

export default handler;