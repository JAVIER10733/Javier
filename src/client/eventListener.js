import { handleMessage } from './handler.js';
import logger from './logger.js';

export const loadEventListeners = (sock) => {
  sock.ev.on('messages.upsert', async ({ messages }) => {
    if (!messages || !messages[0]) return;
    try {
      await handleMessage(sock, messages[0]);
    } catch (err) {
      logger.error('❌ Error al manejar mensaje:', err);
    }
  });

  sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    if (connection === 'close') {
      logger.warn('📴 Conexión cerrada. Reconectando...');
      startBot();
    } else if (connection === 'open') {
      logger.success('✅ Bot conectado exitosamente.');
    }
  });

  sock.ev.on('group-participants.update', async (update) => {
    logger.info(`👥 Participantes actualizados: ${JSON.stringify(update)}`);
  });
};