export default {
  name: 'poll',
  description: 'Crea una encuesta simple',

  async run({ sock, msg, args }) {
    const question = args.join(' ').split('|')[0]?.trim();
    const options = args.join(' ').split('|').slice(1).map(opt => opt.trim()).filter(Boolean);

    if (!question || options.length < 2) {
      return await sock.sendMessage(msg.key.remoteJid, { text: '❓ Usa: !poll pregunta | opción1 | opción2 ...' });
    }

    await sock.sendMessage(msg.key.remoteJid, {
      poll: {
        name: question,
        values: options,
        selectableCount: 1
      }
    });
  }
};