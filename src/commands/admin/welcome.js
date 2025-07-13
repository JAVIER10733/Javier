import fs from 'fs';
const welcomeDB = './database/json/welcome.json';

export const handleWelcome = async (sock, participant, group) => {
  if (!fs.existsSync(welcomeDB)) return;

  const db = JSON.parse(fs.readFileSync(welcomeDB));
  const message = db[group];

  if (!message) return;

  const text = message.replace('@usuario', '@' + participant.split('@')[0]);

  await sock.sendMessage(group, {
    text,
    mentions: [participant]
  });
};