const fs = require("fs");
const logPath = "./logs/log.txt";

module.exports = {
  log(message) {
    const timestamp = new Date().toISOString();
    const entry = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(logPath, entry);
    console.log(entry.trim());
  },

  error(message) {
    this.log(`❌ ERROR: ${message}`);
  },

  info(message) {
    this.log(`ℹ️ INFO: ${message}`);
  },

  warn(message) {
    this.log(`⚠️ WARNING: ${message}`);
  },
};