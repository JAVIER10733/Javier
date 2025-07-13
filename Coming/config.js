import dotenv from 'dotenv';
dotenv.config();

export default {
  // Información del bot
  botName: 'Javier-bot',
  version: '1.0.0',
  description: 'Bot de WhatsApp modular, inteligente y ultra completo',

  // Configuración global
  prefix: process.env.BOT_PREFIX || '!',
  language: 'es',
  timezone: 'America/Guayaquil',
  autoRead: true,
  autoTyping: true,
  autoRecording: false,
  antiCall: true,
  antiFake: true,
  privateMode: false, // true = solo responde al dueño

  // Dueño del bot
  ownerNumber: process.env.OWNER_NUMBER || '123456789@s.whatsapp.net',
  ownerName: 'Javier Dev',
  ownerTag: ['123456789@s.whatsapp.net'], // Para tag múltiples dueños

  // Mensajes por defecto
  messages: {
    success: '✅ Hecho',
    error: '❌ Ocurrió un error',
    admin: '👑 Este comando es solo para admins.',
    owner: '🔒 Este comando es solo para el owner.',
    group: '👥 Solo en grupos.',
    private: '📩 Solo en chat privado.',
    wait: '⏳ Procesando...',
    premium: '✨ Comando premium, solicita acceso.',
    limitReached: '🚫 Límite alcanzado, vuelve más tarde.',
  },

  // Configuración de comandos
  commandOptions: {
    cooldown: 3, // segundos
    antiSpam: true,
    blockedWords: ['puto', 'porno', 'estúpido'],
    limitPerUser: 100, // comandos por día
  },

  // Menús
  menus: {
    type: 'buttons', // list | buttons | carousel
    footer: 'Javier-bot © 2025',
    themeEmoji: '🤖',
  },

  // APIs externas
  APIs: {
    openai: process.env.OPENAI_API_KEY || 'api-key-aqui',
    removebg: 'api-key-removebg',
    weather: 'api-weather-key',
    ytApi: 'api-youtube-key',
  },

  // Archivos de respaldo (bases JSON)
  database: {
    users: './database/json/users.json',
    economy: './database/json/economy.json',
    levels: './database/json/levels.json',
    settings: './database/json/settings.json',
  },

  // Estilos visuales
  emojis: {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    loading: '⏳',
    money: '💰',
    xp: '⭐',
    warning: '⚠️',
  },

  // Config avanzada
  logs: {
    enable: true,
    level: 'info', // debug | info | warn | error
    file: './logs/acceso.log'
  }
};