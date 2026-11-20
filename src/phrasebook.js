// Phrases here are shown instantly and exactly as written, with no translation service involved.
// Anything a speaker says that matches a phrase (ignoring case and punctuation) uses this wording.
// Add your own: vows, MC script lines, toasts. Ask speakers for their notes ahead of time.

export const PHRASES = [
  { en: 'Good evening everyone', zh: '大家晚上好' },
  { en: 'Welcome to our wedding', zh: '欢迎来到我们的婚礼' },
  { en: 'Thank you all for being here', zh: '感谢大家的到来' },
  { en: 'Please raise your glasses', zh: '请大家举杯' },
  { en: 'Cheers!', zh: '干杯！' },
  { en: 'Congratulations!', zh: '恭喜恭喜！' },
  { en: 'Happy wedding!', zh: '新婚快乐！' },
  { en: 'To the happy couple', zh: '祝新人幸福美满' },
  { en: 'May you grow old together', zh: '祝你们白头偕老' },
  { en: 'May your hearts be united forever', zh: '祝你们永结同心' },
  { en: 'I do', zh: '我愿意' },
  { en: 'Please enjoy the meal', zh: '请慢用' },
  { en: 'Thank you', zh: '谢谢大家' },
  { en: "Please be seated", zh: "请大家入座" },
  { en: "Let's take a group photo", zh: "我们来拍张大合照" },
  { en: "The bride and groom will now cut the cake", zh: "现在请新人切蛋糕" },
  { en: "The couple will now exchange rings.", zh: "现在请两位新人交换婚戒。" },
  { en: 'Dinner will be served shortly.', zh: '婚宴即将开席。' },
  { en: 'Please repeat after me.', zh: '请跟我一起说' },
];

// Names and family terms. Only the Gemini provider can use these (it receives them as instructions).
// Machine translators tend to get Chinese kinship words wrong, so list the ones you care about.
// Example: { en: 'Grandma (mother\'s side)', zh: '外婆' }
export const GLOSSARY = [
  // { en: 'Uncle Wang', zh: '王叔叔' },
];

export const normalize = (s) =>
  s.toLowerCase().replace(/[\s.,!?;:'"“”‘’，。！？、；：…\-—]/g, '');

const index = { en: new Map(), zh: new Map() };
for (const p of PHRASES) {
  index.en.set(normalize(p.en), p.zh);
  index.zh.set(normalize(p.zh), p.en);
}

/** Returns the translation if `text` (spoken in language `from`) is in the phrasebook. */
export function findPhrase(text, from) {
  return index[from]?.get(normalize(text)) ?? null;
}
