const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(chalk.bold.green('Success!'));
console.log(msg);
