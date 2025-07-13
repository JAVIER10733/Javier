const fs = require("fs");

const dbPath = "./database/db.json";

module.exports = {
  load() {
    if (!fs.existsSync(dbPath)) return {};
    const data = fs.readFileSync(dbPath, "utf8");
    return JSON.parse(data);
  },

  save(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  },

  getUser(id) {
    const db = this.load();
    if (!db.users) db.users = {};
    if (!db.users[id]) db.users[id] = { premium: false, level: 1, exp: 0 };
    return db.users[id];
  },

  updateUser(id, newData = {}) {
    const db = this.load();
    db.users = db.users || {};
    db.users[id] = { ...db.users[id], ...newData };
    this.save(db);
  },
};