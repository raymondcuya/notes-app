const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

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
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// List the notes
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler() {
    notes.listNotes();
  }
});

// Read a note
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
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
