import { depositMoney } from '../../database/economy.js';

export default {
  name: 'deposit',
  description: 'Deposita dinero en el banco',

  async run({ sock, msg, args }) {
    const user = msg.key.participant;
    const amount = parseInt(args[0]);

    const result = await depositMoney(user, amount);
    await sock.sendMessage(msg.key.remoteJid, { text: result });
  }
};