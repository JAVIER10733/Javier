import { joinLottery } from '../../database/economy.js';

export default {
  name: 'lottery',
  description: 'Únete a la lotería semanal',

  async run({ sock, msg }) {
    const user = msg.key.participant;
    const result = await joinLottery(user);
    await sock.sendMessage(msg.key.remoteJid, { text: result });
  }
};