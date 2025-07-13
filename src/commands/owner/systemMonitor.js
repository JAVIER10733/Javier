const os = require("os");

module.exports = {
  name: "systemmonitor",
  alias: ["monitor"],
  description: "Muestra el uso del sistema en tiempo real",
  category: "owner",
  owner: true,
  async execute(m, { conn }) {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usage = ((totalMem - freeMem) / totalMem) * 100;

    const msg = `
📊 *Monitor del Sistema*

- Memoria total: ${(totalMem / 1024 / 1024).toFixed(2)} MB
- Memoria libre: ${(freeMem / 1024 / 1024).toFixed(2)} MB
- Uso de RAM: ${usage.toFixed(2)}%
- CPU: ${os.cpus()[0].model}
`;

    await conn.sendMessage(m.chat, { text: msg.trim() }, { quoted: m });
  },
};