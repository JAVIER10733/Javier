const fetch = require("node-fetch");

module.exports = {
  async get(url, headers = {}) {
    const res = await fetch(url, { headers });
    return await res.json();
  },

  async post(url, data = {}, headers = {}) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(data),
    });
    return await res.json();
  },
};