import { getTopUsers } from '../../database/economy.js';

export default {
  name: 'leaderboard',
  description: 'Ranking de los más ricos',

  async run({ sock, msg }) {
    const top = await getTopUsers();
    const lista = top.map((u, i) => `#${i + 1} 👤 @${u.id.split('@')[0]} - 💰 ${u.wallet + u.bank}`).join('\n');
    await sock.sendMessage(msg.key.remoteJid, {
      text: `🏆 *Leaderboard Económico*\n\n${lista}`,
      mentions: top.map(u => u.id)
    });
  }
};