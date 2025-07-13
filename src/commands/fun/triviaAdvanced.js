import fetch from 'node-fetch';

const handler = async (m) => {
  const difficulty = ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)];
  const res = await fetch(`https://opentdb.com/api.php?amount=1&difficulty=${difficulty}`);
  const json = await res.json();
  const q = json.results[0];
  const choices = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);

  m.reply(`📚 Trivia (${difficulty.toUpperCase()}):\n\n*${q.question}*\n\n` +
    choices.map((c, i) => `${i + 1}. ${c}`).join('\n'));
};

handler.help = ['triviaadvance'];
handler.tags = ['fin'];
handler.command = /^triviaadvance$/i;

export default handler;