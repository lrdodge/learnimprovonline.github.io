const replace = require('replace-in-file');
const conventions = require('./conventions.json');

const tokens = [];
const verbiage = [];

console.log('Tokens');
conventions.forEach((convention) => {
  const token = new RegExp(`{{ ${convention.name} }}`, 'g');
  tokens.push(token);
  verbiage.push(convention.verbiage);
  console.log(`* ${token}`);
});

const replaceOptions = {
  files: 'src/data/activities/*.md',
  from: tokens,
  to: verbiage,
};

const changes = replace.sync(replaceOptions);

console.log(changes);
