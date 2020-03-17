const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing a note!');
  }
});

// List the notes
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function() {
    console.log('Listing notes!');
  }
});

// Read a note
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Read a note!');
  }
});

yargs.parse();

// console.log(yargs.argv);
// ---------------------------

// const getNotes = require('./notes.js');
// const chalk = require('chalk');

// const command = process.argv[2];

// console.log(process.argv);

// if (command === 'add') {
//   console.log('Adding notes');
// } else if (command === 'remove') {
//   console.log('Removing Notes');
// }

// ----------------------------

// const getNotes = require('./notes.js');
// const chalk = require('chalk');

// const msg = getNotes();

// console.log(msg);

// console.log(chalk.green.blue.inverse('Success!'));

// console.log(process.argv[2]);

// -----------------------------

// const validator = require('validator');
// const getNotes = require('./notes.js');

// const msg = getNotes();

// console.log(msg);

// console.log(validator.isURL('https:mead.io'));

// const add = require('./utils.js');
// const name = 'Hello';
// console.log(name(3, 5));
