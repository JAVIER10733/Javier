import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../../config/config.js';
import logger from './logger.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const commandFolders = path.join(__dirname, '../commands/');

const commands = new Map();

export const loadCommands = () => {
  fs.readdirSync(commandFolders).forEach(folder => {
    const files = fs.readdirSync(path.join(commandFolders, folder));
    files.forEach(file => {
      if (file.endsWith('.js')) {
        import(`../commands/${folder}/${file}`).then((cmd) => {
          const commandName = file.replace('.js', '');
          commands.set(commandName, cmd.default || cmd);
        });
      }
    });
  });

  logger.info(`✅ ${commands.size} comandos cargados`);
};

export const handleMessage = async (sock, msg) => {
  const body = msg.message?.conversation || msg.message?.extendedTextMessage?.text;
  const sender = msg.key.remoteJid;

  if (!body || !body.startsWith(config.prefix)) return;

  const args = body.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!commands.has(command)) return;

  try {
    await commands.get(command).run({ sock, msg, args, sender });
  } catch (err) {
    logger.error(`❌ Error ejecutando el comando ${command}:`, err);
  }
};

import { setPresence } from './presence.js';

// antes de responder:
await setPresence(sock, msg.key.remoteJid, 'composing');

// luego responde...