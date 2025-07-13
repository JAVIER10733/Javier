export default {
  name: 'mute',
  description: 'Silencia el grupo (solo admins pueden escribir)',

  async run({ sock, msg, args }) {
    const mode = args[0];
    if (mode === 'on') {
      await sock.groupSettingUpdate(msg.key.remoteJid, 'announcement');
      await sock.sendMessage(msg.key.remoteJid, { text: '🔇 Grupo silenciado para miembros.' });
    } else if (mode === 'off') {
      await sock.groupSettingUpdate(msg.key.remoteJid, 'not_announcement');
      await sock.sendMessage(msg.key.remoteJid, { text: '🔊 Grupo abierto para todos.' });
    } else {
      await sock.sendMessage(msg.key.remoteJid, { text: '❓ Usa: mute on | off' });
    }
  }
};