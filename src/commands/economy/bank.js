import { getUserData } from '../../database/economy.js';

export default {
  name: 'bank',
  description: 'Consulta tu banco',

  async run({ sock, msg }) {
    const user = msg.key.participant;
    const data = await getUserData(user);
    await sock.sendMessage(msg.key.remoteJid, {
      text: `🏦 *Banco de @${user.split('@')[0]}*\n💳 Saldo bancario: ${data.bank}`,
      mentions: [user]
    });
  }
}; 