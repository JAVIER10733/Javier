module.exports = {
  getExpForLevel(level) {
    return 100 * level;
  },

  addExp(user, amount) {
    user.exp += amount;
    while (user.exp >= this.getExpForLevel(user.level)) {
      user.exp -= this.getExpForLevel(user.level);
      user.level++;
    }
    return user;
  },
};