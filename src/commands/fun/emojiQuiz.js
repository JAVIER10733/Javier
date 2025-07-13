const quizzes = [
  { emoji: '🍕📦', answer: 'pizza' },
  { emoji: '🎬🍿', answer: 'cine' },
  { emoji: '🚗💨', answer: 'carro' },
  { emoji: '👨‍🍳🍝', answer: 'chef' },
  { emoji: '🎸🎶', answer: 'música' }
];

const handler = async (m) => {
  const quiz = quizzes[Math.floor(Math.random() * quizzes.length)];
  m.reply(`❓ Adivina la palabra:\n${quiz.emoji}\n\n(Escribe tu respuesta en el chat)`);

  conn.quiz = conn.quiz || {};
  conn.quiz[m.sender] = {
    answer: quiz.answer.toLowerCase(),
    timeout: setTimeout(() => delete conn.quiz[m.sender], 60000)
  };
};

handler.help = ['emojiquiz'];
handler.tags = ['fin'];
handler.command = /^emojiquiz$/i;

export default handler;