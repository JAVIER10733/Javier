import fetch from 'node-fetch';

const handler = async (m, { args }) => {
  const signo = args[0]?.toLowerCase();
  if (!signo) return m.reply('✨ Escribe tu signo zodiacal. Ejemplo: *.horoscopos leo*');

  try {
    const res = await fetch(`https://aztro.sameerkumar.website/?sign=${signo}&day=today`, {
      method: 'POST'
    });
    const json = await res.json();
    m.reply(`🔮 Horóscopo de *${signo}*:\n\n${json.description}`);
  } catch {
    m.reply('❌ No se pudo obtener tu horóscopo. Asegúrate de escribir bien tu signo.');
  }
};

handler.help = ['horoscopos <signo>'];
handler.tags = ['fin'];
handler.command = /^hor[óo]scopos?$/i;

export default handler;