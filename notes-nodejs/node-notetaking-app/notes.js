const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {

    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes)
    console.log(chalk.green('New Note added!'));
  } else {
    console.log(chalk.bold.red('Note title already in use'));
  }

}


const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green('Note removed'));
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('Note not found'));
  }

}


const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (error) {
    return [];
  }
}

const listNotes = () => {
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(chalk `Note Titlte: {green ${note.title}}\nYour Note: ${note.body}\n`);
  })
}


const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk `{green ${note.title}}\n ${note.body}`);
  } else {
    console.log("Note not found");
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
