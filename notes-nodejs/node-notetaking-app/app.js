//librarys
const chalk = require('chalk');
const yargs = require('yargs');

//my files
const notes = require('./notes.js');


// Create Add command
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
      describe: 'Node body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body)
  }
})


// Create Remove command
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
  handler: function(argv) {
    notes.removeNote(argv.title)
  }
})


// Set up list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function() {
    console.log('listing out all notes');
  }
})


// Read Notes command
yargs.command({
  command: 'read',
  describe: 'Read a Note',
  handler: function() {
    console.log('reading a note...');
  }
})


yargs.parse();
