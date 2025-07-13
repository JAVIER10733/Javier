module.exports = {
  getDate() {
    return new Date().toLocaleDateString("es-ES");
  },

  getTime() {
    return new Date().toLocaleTimeString("es-ES");
  },

  timestamp() {
    return new Date().toISOString();
  },

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
};