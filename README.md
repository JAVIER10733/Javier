# 🤖 java-bot-MD

Bot de WhatsApp **Modular & Profesional**, desarrollado en **Node.js** usando la librería [Baileys-MD](https://github.com/WhiskeySockets/Baileys) y una arquitectura completamente organizada por carpetas.

---

## 📌 Características

- 🔁 **Reconexión automática** y manejo de eventos.
- 💬 Soporte para múltiples comandos: texto, stickers, audio, imágenes, videos, economía, juegos, inteligencia artificial y más.
- 🧠 IA con OpenAI y Gemini.
- 📦 Sistema modular de plugins y comandos.
- 👥 Manejo avanzado de grupos.
- 🛠️ Sistema de niveles, economía y perfiles.
- 🌐 Servidor web Express con API REST y QR.
- 🔐 Sistema de sesiones multi-device (baileys).

---

## 🧬 Estructura del Proyecto

```bash
java-bot-MD/
├── index.js
├── package.json
├── .env
├── README.md
├── Dockerfile
├── docker-compose.yml
├── Web/                  # Servidor web + interfaz pública
├── Session/              # Sesiones de Baileys MD
├── src/
│   ├── client/           # Conexión y manejo del cliente
│   ├── commands/         # Comandos por categorías
│   ├── events/           # Manejo de eventos (mensajes, grupos, llamadas)
│   ├── middleware/       # Filtros: auth, cooldown, permisos
│   ├── menus/            # Menús visuales: listas, botones, gif
│   ├── services/         # APIs externas (OpenAI, YT, TikTok, Weather, etc)
│   └── utils/            # Herramientas reutilizables
└── media/                # Audios, imágenes, videos, stickers
