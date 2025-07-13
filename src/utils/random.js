module.exports = {
  pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  bool(prob = 0.5) {
    return Math.random() < prob;
  },
};