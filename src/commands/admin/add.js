export default {
  name: 'add',
  description: 'Agrega a un usuario al grupo',
  groupOnly: true,
  adminOnly: true,

  async run({ sock, msg, args }) {
    if (!args[0]) return await sock.sendMessage(msg.key.remoteJid, { text: '❌ Debes ingresar un número' });

    const number = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    try {
      await sock.groupParticipantsUpdate(msg.key.remoteJid, [number], 'add');
      await sock.sendMessage(msg.key.remoteJid, { text: `✅ Usuario añadido: ${args[0]}` });
    } catch (e) {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ No se pudo añadir al usuario.' });
    }
  }
};