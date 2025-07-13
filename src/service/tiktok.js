import axios from 'axios';

export const getTiktokData = async (url) => {
  try {
    const res = await axios.get(`https://api.tiklydown.me/api/download?url=${encodeURIComponent(url)}`);
    return res.data;
  } catch (err) {
    throw new Error('❌ Error al obtener video de TikTok');
  }
};