const listPicker = (array) => {
  const listItem = Math.floor(Math.random() * Math.floor(array.length));
  return array[listItem];
};

const noun = [
  "addition",
  "setting",
  "people",
  "country",
  "attention",
  "wood",
  "friendship",
  "tension",
  "reaction",
  "length",
  "response",
  "truth",
  "article",
  "atmosphere",
  "environment",
  "recording",
  "diamond",
  "village",
  "event",
  "foundation",
  "editor",
  "science",
  "obligation",
  "stranger",
  "presence",
  "lady",
  "housing",
  "baseball",
  "law",
  "dirt",
  "contribution",
  "delivery",
  "flight",
  "comparison",
  "church",
  "youth",
  "way",
  "sympathy",
  "investment",
  "marketing",
  "charity",
  "weakness",
  "mom",
  "possibility",
  "insect",
  "currency",
  "method",
  "mode",
  "potato",
  "session",
];

const verb = [
  "schedule",
  "suspect",
  "lead",
  "drink",
  "retire",
  "prove",
  "stretch",
  "draw",
  "encourage",
  "cover",
  "practise",
  "accumulate",
  "eat",
  "inspire",
  "stroke",
  "love",
  "give",
  "shed",
  "recall",
  "disclose",
  "tighten",
  "bring",
  "call",
  "shave",
  "diminish",
  "widen",
  "clear",
  "influence",
  "implement",
  "calm",
  "reward",
  "progress",
  "compensate",
  "roll",
  "suppress",
  "show",
  "imply",
  "disagree",
  "read",
  "scan",
  "intervene",
  "assemble",
  "sustain",
  "access",
  "comment",
  "adapt",
  "catch",
  "shoot",
  "sign",
  "recover",
];

const adjective = [
  "shut",
  "panicky",
  "heady",
  "silly",
  "cultural",
  "accurate",
  "nauseating",
  "furry",
  "cooperative",
  "hypnotic",
  "miscreant",
  "obsequious",
  "maddening",
  "paltry",
  "stupendous",
  "yellow",
  "violet",
  "unequaled",
  "productive",
  "alleged",
  "animated",
  "omniscient",
  "defective",
  "fluttering",
  "gifted",
  "evasive",
  "grubby",
  "nice",
  "safe",
  "awake",
  "friendly",
  "ludicrous",
  "barbarous",
  "gamy",
  "flashy",
  "abundant",
  "dull",
  "courageous",
  "fascinated",
  "sick",
  "selective",
  "tremendous",
  "disgusting",
  "successfully",
  "irate",
  "substantial",
  "plain",
  "graceful",
  "hurried",
  "dead",
];

const phrase = [
  `Please take the ${listPicker(noun)} outside and ${listPicker(
    verb
  )} it, until it is ${listPicker(adjective)}.`,
  `While the ${listPicker(noun)} is ${listPicker(
    adjective
  )}, don't forget to ${listPicker(verb)} the large ${listPicker(noun)}.`,
  `If the ${listPicker(noun)} is too ${listPicker(
    adjective
  )}, remember you always have time to ${listPicker(verb)} it again.`,
  `She was so used to the ${listPicker(noun)} being so ${listPicker(
    adjective
  )}, she totally forgot to ${listPicker(verb)} it.`,
  `He needed to ${listPicker(verb)} over the ${listPicker(
    noun
  )}, because he was ${listPicker(adjective)}.`,
  `The ${listPicker(noun)} was so insanely ${listPicker(
    adjective
  )}.  The only choice they had was to ${listPicker(
    verb
  )} it up the ${listPicker(noun)}.`,
  `Sometimes, when I feel ${listPicker(adjective)}, I open my ${listPicker(
    noun
  )}, and ${listPicker(verb)} until I am ${listPicker(adjective)}.`,
];

console.log(listPicker(phrase));
