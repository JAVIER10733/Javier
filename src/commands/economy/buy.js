import { buyItem } from '../../database/shop.js';

export default {
  name: 'buy',
  description: 'Compra un ítem del mercado',

  async run({ sock, msg, args }) {
    const item = args[0];
    const quantity = parseInt(args[1] || '1');
    const user = msg.key.participant;

    const result = await buyItem(user, item, quantity);
    await sock.sendMessage(msg.key.remoteJid, { text: result });
  }
};