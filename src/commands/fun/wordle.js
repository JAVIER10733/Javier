const palabras = ['flor', 'lago', 'mesa', 'casa', 'dado'];

const handler = async (m) => {
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  const pista = palabra.replace(/[a-z]/g, '_');

  m.reply(`🟩 WORDLE\n\nAdivina la palabra de 4 letras:\n${pista}\n\n(Escribe tu intento)`);
  conn.wordle = conn.wordle || {};
  conn.wordle[m.sender] = {
    palabra,
    timeout: setTimeout(() => delete conn.wordle[m.sender], 60000)
  };
};

handler.help = ['wordle'];
handler.tags = ['fin'];
handler.command = /^wordle$/i;

export default handler;