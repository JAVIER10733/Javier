import fs from 'fs';
import logger from './logger.js';

export const startSessionWatcher = (sock) => {
  setInterval(() => {
    try {
      if (!fs.existsSync('./session/multi-file-auth/credentials.json')) {
        logger.warn('⚠️ No hay sesión activa');
      } else {
        logger.info('📶 Sesión activa verificada');
      }
    } catch (e) {
      logger.error('❌ Error verificando sesión:', e);
    }
  }, 10000); // cada 10 segundos
};