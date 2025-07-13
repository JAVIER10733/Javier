import { getInventory } from '../../database/economy.js';

export default {
  name: 'inventory',
  description: 'Muestra tu inventario',

  async run({ sock, msg }) {
    const user = msg.key.participant;
    const items = await getInventory(user);
    const formatted = Object.entries(items).map(([item, qty]) => `📦 ${item}: ${qty}`).join('\n');
    await sock.sendMessage(msg.key.remoteJid, { text: `🎒 Inventario:\n${formatted || 'Vacío'}` });
  }
};