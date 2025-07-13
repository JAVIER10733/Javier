import { gambleMoney } from '../../database/economy.js';

export default {
  name: 'gamble',
  description: 'Apuesta tu dinero y gana o pierde',

  async run({ sock, msg, args }) {
    const amount = parseInt(args[0]);
    const user = msg.key.participant;

    const result = await gambleMoney(user, amount);
    await sock.sendMessage(msg.key.remoteJid, { text: result });
  }
};