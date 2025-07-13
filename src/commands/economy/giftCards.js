import { createGiftCard, redeemGiftCard } from '../../database/giftcards.js';

export default {
  name: 'giftcard',
  description: 'Genera o canjea tarjetas de regalo',

  async run({ sock, msg, args }) {
    const action = args[0];
    const user = msg.key.participant;

    if (action === 'generate') {
      const amount = parseInt(args[1]);
      const code = await createGiftCard(user, amount);
      return sock.sendMessage(msg.key.remoteJid, { text: `🎁 Código generado: ${code}` });
    } else if (action === 'redeem') {
      const code = args[1];
      const result = await redeemGiftCard(user, code);
      return sock.sendMessage(msg.key.remoteJid, { text: result });
    } else {
      return sock.sendMessage(msg.key.remoteJid, { text: 'Usa: giftcard generate <cantidad> | redeem <código>' });
    }
  }
};