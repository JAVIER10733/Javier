import config from '../../config/loggerConfig.js';
import chalk from 'chalk';
import fs from 'fs';

const logFile = config.logFilePath;

const writeLog = (type, message) => {
  if (config.logToFile) {
    const logMsg = `[${new Date().toISOString()}] [${type.toUpperCase()}] ${message}\n`;
    fs.appendFileSync(logFile, logMsg);
  }
};

const logger = {
  info: (msg) => {
    console.log(chalk.blue('[INFO]'), msg);
    writeLog('info', msg);
  },
  warn: (msg) => {
    console.warn(chalk.yellow('[WARN]'), msg);
    writeLog('warn', msg);
  },
  error: (msg) => {
    console.error(chalk.red('[ERROR]'), msg);
    writeLog('error', msg);
  },
  success: (msg) => {
    console.log(chalk.green('[SUCCESS]'), msg);
    writeLog('success', msg);
  }
};

export default logger;