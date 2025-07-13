const palabras = ['gato', 'perro', 'bot', 'comando', 'javascript'];

const handler = async (m) => {
  const palabra = palabras[Math.floor(Math.random() * palabras.length)];
  const oculto = palabra.replace(/./g, '_ ').trim();

  m.reply(`🎮 Ahorcado:\n\n${oculto}\n\n(Pista: ${palabra.length} letras)\nEscribe tu intento:`);

  conn.hangman = conn.hangman || {};
  conn.hangman[m.sender] = {
    palabra,
    timeout: setTimeout(() => delete conn.hangman[m.sender], 90000)
  };
};

handler.help = ['hangman'];
handler.tags = ['fin'];
handler.command = /^hangman$/i;

export default handler;