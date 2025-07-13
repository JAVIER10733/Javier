import fetch from 'node-fetch';

const handler = async (m) => {
  try {
    const res = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
    const json = await res.json();
    const q = json.results[0];
    const options = [...q.incorrect_answers, q.correct_answer]
      .sort(() => Math.random() - 0.5);

    const question = `❓ *${q.question.replace(/&quot;|&#039;/g, '"')}*\n\n` +
      options.map((o, i) => `${i + 1}. ${o}`).join('\n');

    m.reply(question + `\n\n*(Responde con el número correspondiente)*`);

    conn.trivia = conn.trivia || {};
    conn.trivia[m.sender] = {
      answer: q.correct_answer,
      options,
      timeout: setTimeout(() => delete conn.trivia[m.sender], 60000)
    };
  } catch {
    m.reply('❌ Error al obtener pregunta de trivia.');
  }
};

handler.help = ['trivia'];
handler.tags = ['fin'];
handler.command = /^trivia$/i;

export default handler;