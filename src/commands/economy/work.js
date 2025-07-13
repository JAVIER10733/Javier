import { doWork } from '../../database/economy.js';

export default {
  name: 'work',
  description: 'Trabaja y gana dinero',

  async run({ sock, msg }) {
    const user = msg.key.participant;
    const result = await doWork(user);
    await sock.sendMessage(msg.key.remoteJid, { text: result });
  }
};