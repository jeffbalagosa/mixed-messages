const quotes = [
  '"You have passed through life without an opponent—no one can ever know what you are capable of, not even you." -Seneca',
  '"Look back over the past, with its changing empires that rose and fell, and you can foresee the future too." -Marcus Aurelius',
  '"Stoicism, in our day, is not strength to overcome wishes, but to hide them." -Rollo May, "Love and Will"',
  '"The one who puts the finishing touches on their life each day is never short of time." -Marcus Aurelius',
  '"Sometimes in life, we need a few bad days in order to keep the good ones in perspective." -Colleen Hoover, "Maybe Someday"',
  '"Begin at once to live, and count each separate day as a separate life." -Seneca',
  '"It\'s time you realized that you have something in you more powerful and miraculous than the things that affect you and make you dance like a puppet." – Marcus Aurelius',
  '"Whatever can happen at any time can happen today." -Seneca',
  '"They lose the day in expectation of the night, and the night in fear of the dawn." -Seneca',
  '"There is no better way to grow as a person than to do something you hate every day." -David Goggins',
];

const listPicker = (array) => {
  const listItem = Math.floor(Math.random() * Math.floor(array.length));
  return array[listItem];
};

console.log(listPicker(quotes));
