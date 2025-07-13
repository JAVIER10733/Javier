import makeWASocket, { useMultiFileAuthState } from '@whiskeysockets/baileys';
import pino from 'pino';
import logger from './logger.js';
import { startSessionWatcher } from './sessionManager.js';
import { loadEventListeners } from './eventListener.js';

export const startBot = async () => {
  const { state, saveCreds } = await useMultiFileAuthState('./session/multi-file-auth');

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    defaultQueryTimeoutMs: undefined,
    markOnlineOnConnect: true,
    browser: ['Javier-bot', 'Chrome', '1.0.0']
  });

  sock.ev.on('creds.update', saveCreds);
  loadEventListeners(sock);
  startSessionWatcher(sock);

  return sock;
};