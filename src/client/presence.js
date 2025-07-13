/**
 * Control de presencia del bot (escribiendo, grabando, etc.)
 * Compatible con Baileys
 */

export const setPresence = async (sock, jid, type = 'available') => {
  try {
    switch (type) {
      case 'composing':
        await sock.sendPresenceUpdate('composing', jid);
        break;
      case 'recording':
        await sock.sendPresenceUpdate('recording', jid);
        break;
      case 'paused':
        await sock.sendPresenceUpdate('paused', jid);
        break;
      case 'unavailable':
        await sock.sendPresenceUpdate('unavailable', jid); // invisible
        break;
      case 'available':
      default:
        await sock.sendPresenceUpdate('available', jid);
        break;
    }
  } catch (error) {
    console.error('[Presence Error]', error);
  }
};