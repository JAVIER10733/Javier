import { manageBusiness } from '../../database/business.js';

export default {
  name: 'business',
  description: 'Compra o gestiona tu negocio virtual',

  async run({ sock, msg, args }) {
    const user = msg.key.participant;
    const action = args[0];

    if (action === 'buy') {
      const result = await manageBusiness(user, 'buy');
      return sock.sendMessage(msg.key.remoteJid, { text: result });
    } else if (action === 'view') {
      const result = await manageBusiness(user, 'view');
      return sock.sendMessage(msg.key.remoteJid, { text: result });
    } else {
      return sock.sendMessage(msg.key.remoteJid, {
        text: '❓ Usa: business buy | business view'
      });
    }
  }
};