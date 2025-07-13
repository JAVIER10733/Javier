import yts from 'yt-search';

export const searchYoutube = async (query) => {
  const res = await yts(query);
  return res.videos.slice(0, 5);
};

export const getVideoDetails = async (url) => {
  const res = await yts({ videoId: url.split('v=')[1] });
  return res.video;
};

export const fetchLyrics = async (song) => {
  const res = await yts(song + ' lyrics');
  const url = res.videos[0].url;
  return `🎵 *${res.videos[0].title}*\n📺 ${url}`;
};