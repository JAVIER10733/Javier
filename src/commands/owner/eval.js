module.exports = {
  name: "eval",
  alias: [">"],
  description: "Evalúa código JavaScript en tiempo real",
  category: "owner",
  owner: true,
  async execute(m, { args }) {
    try {
      let code = args.join(" ");
      if (!code) return m.reply("💻 Ingresa el código a evaluar.");
      let res = await eval(`(async () => { ${code} })()`);
      if (typeof res !== "string") res = require("util").inspect(res);
      m.reply(`✅ Resultado:\n${res}`);
    } catch (e) {
      m.reply(`❌ Error:\n${e}`);
    }
  },
};