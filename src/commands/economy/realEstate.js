import { handleRealEstate } from '../../database/realestate.js';

export default {
  name: 'realestate',
  description: 'Compra o vende propiedades',

  async run({ sock, msg, args }) {
    const user = msg.key.participant;
    const result = await handleRealEstate(user, args);
    await sock.sendMessage(msg.key.remoteJid, { text: result });
  }
};