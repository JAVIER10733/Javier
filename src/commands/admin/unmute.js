export default {
  name: 'unmute',
  description: 'Activa el chat para todos en el grupo',

  groupOnly: true,
  adminOnly: true,

  async run({ sock, msg }) {
    await sock.groupSettingUpdate(msg.key.remoteJid, 'not_announcement');
    await sock.sendMessage(msg.key.remoteJid, { text: '🔊 Grupo desmuteado. Todos pueden hablar.' });
  }
};