import { getUserData } from '../../database/economy.js';

export default {
  name: 'balance',
  description: 'Muestra tu saldo actual',

  async run({ sock, msg }) {
    const user = msg.key.participant;
    const data = await getUserData(user);
    await sock.sendMessage(msg.key.remoteJid, {
      text: `💰 *Balance de @${user.split('@')[0]}*\n\n🪙 Wallet: ${data.wallet}\n🏦 Banco: ${data.bank}`,
      mentions: [user]
    });
  }
};