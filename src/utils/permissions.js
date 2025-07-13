module.exports = {
  isOwner(userId) {
    return global.owner.some(([id]) => id === userId);
  },

  isPremium(userId, db) {
    return db.users?.[userId]?.premium === true;
  },

  isAdmin(groupMetadata, userId) {
    return groupMetadata?.participants?.some(p => p.id === userId && p.admin);
  },
};