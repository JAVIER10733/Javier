export default {
  name: 'auctions',
  description: 'Sistema de subastas entre usuarios',

  async run({ sock, msg, args }) {
    // Aquí deberías manejar JSON o SQLite para crear subastas temporales
    // Mostrar productos, permitir pujas, y cerrar al tiempo límite
    await sock.sendMessage(msg.key.remoteJid, {
      text: `📢 Subastas aún en construcción. ¡Próximamente podrás comprar y vender ítems entre usuarios!`
    });
  }
};