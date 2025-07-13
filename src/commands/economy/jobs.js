import { getJob, setJob } from '../../database/economy.js';

export default {
  name: 'jobs',
  description: 'Elige un trabajo para recibir salario',

  async run({ sock, msg, args }) {
    const user = msg.key.participant;
    if (!args[0]) {
      const job = await getJob(user);
      return sock.sendMessage(msg.key.remoteJid, { text: `👷‍♂️ Tu trabajo actual: ${job || 'Ninguno'}` });
    }
    const newJob = args[0];
    const result = await setJob(user, newJob);
    await sock.sendMessage(msg.key.remoteJid, { text: result });
  }
};