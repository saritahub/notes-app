// Main JS file, loads all other dependencies (source files)
console.log("The notes app is running")

const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView');

const model = new NotesModel();
model.addNotes("Work out tonight");
model.addNotes("Cook pasta");
console.log(model.getNotes()); // Works - displayed in console

const view = new NotesView(model);
view.displayNotes(model.getNotes()); // Adds above notes to the HTML page 