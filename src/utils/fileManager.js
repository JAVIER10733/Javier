const fs = require("fs");
const path = require("path");

module.exports = {
  exists(filePath) {
    return fs.existsSync(filePath);
  },

  read(filePath) {
    return fs.readFileSync(filePath, "utf8");
  },

  write(filePath, data) {
    fs.writeFileSync(filePath, data, "utf8");
  },

  delete(filePath) {
    if (this.exists(filePath)) fs.unlinkSync(filePath);
  },

  list(folderPath) {
    return fs.existsSync(folderPath) ? fs.readdirSync(folderPath) : [];
  },
};