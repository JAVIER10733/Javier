export default {
  name: 'openclose',
  description: 'Abre o cierra el grupo para escribir',

  async run({ sock, msg, args }) {
    const action = args[0];
    if (action === 'abrir') {
      await sock.groupSettingUpdate(msg.key.remoteJid, 'not_announcement');
      await sock.sendMessage(msg.key.remoteJid, { text: '✅ Grupo abierto para todos.' });
    } else if (action === 'cerrar') {
      await sock.groupSettingUpdate(msg.key.remoteJid, 'announcement');
      await sock.sendMessage(msg.key.remoteJid, { text: '🚫 Grupo cerrado solo para admins.' });
    } else {
      await sock.sendMessage(msg.key.remoteJid, { text: '❓ Usa: openclose abrir | cerrar' });
    }
  }
};