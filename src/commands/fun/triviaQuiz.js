const preguntas = [
  { q: "¿Cuál es la capital de Francia?", a: "París" },
  { q: "¿Cuánto es 8x8?", a: "64" },
  { q: "¿Quién escribió Cien Años de Soledad?", a: "Gabriel García Márquez" }
];

const handler = async (m) => {
  const p = preguntas[Math.floor(Math.random() * preguntas.length)];
  m.reply(`🧠 Trivia rápida:\n\n${p.q}`);

  conn.quiz = conn.quiz || {};
  conn.quiz[m.sender] = {
    answer: p.a.toLowerCase(),
    timeout: setTimeout(() => delete conn.quiz[m.sender], 60000)
  };
};

handler.help = ['triviaquiz'];
handler.tags = ['fin'];
handler.command = /^triviaquiz$/i;

export default handler;