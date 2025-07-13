import axios from 'axios';

export const translateText = async (text, targetLang = 'en') => {
  const res = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
  return res.data[0].map(t => t[0]).join('');
};

export const detectLanguage = async (text) => {
  const res = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=ld&q=${encodeURIComponent(text)}`);
  return res.data[2];
};