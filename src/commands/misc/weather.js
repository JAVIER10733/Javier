const fetch = require("node-fetch");

module.exports = {
  name: "weather",
  alias: ["clima", "tiempo"],
  description: "Muestra el clima actual de una ciudad",
  category: "util",
  async execute(m, { conn, args }) {
    if (!args.length) return m.reply("🌤️ Escribe el nombre de una ciudad.");

    const city = args.join(" ");
    const apiKey = "TU_API_KEY_AQUI"; // Reemplaza con tu API key de OpenWeatherMap
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=es`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod !== 200) return m.reply("❌ Ciudad no encontrada.");

      const weatherMsg = `
🌤️ Clima en ${data.name}:
- Temperatura: ${data.main.temp}°C
- Sensación térmica: ${data.main.feels_like}°C
- Humedad: ${data.main.humidity}%
- Condiciones: ${data.weather[0].description}
`;

      await conn.sendMessage(m.chat, { text: weatherMsg.trim() }, { quoted: m });
    } catch {
      m.reply("❌ Error al obtener el clima.");
    }
  },
};