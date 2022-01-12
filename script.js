const quotes = [
  "quote1",
  "quote2",
  "quote3",
  "quote4",
  "quote5",
  "quote6",
  "quote7",
  "quote8",
  "quote9",
  "quote10",
];

const listPicker = (array) => {
  const listItem = Math.floor(Math.random() * Math.floor(array.length));
  return array[listItem];
};

console.log(listPicker(quotes));
