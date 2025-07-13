import { claimDaily } from '../../database/economy.js';

export default {
  name: 'daily',
  description: 'Reclama tu recompensa diaria',

  async run({ sock, msg }) {
    const user = msg.key.participant;
    const result = await claimDaily(user);
    await sock.sendMessage(msg.key.remoteJid, { text: result });
  }
};