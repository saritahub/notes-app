// Main JS file, loads all other dependencies (source files)
console.log("The notes app is running")

const NotesModel = require('./NotesModel');
const NotesModelView = require('./NotesModelView');
const model = new NotesModel();
model.addNotes("Work out tonight");
model.addNotes("Cook pasta");
console.log(model.getNotes());

const view = new NotesModelView();
view.displayNotes(model.getNotes()); // Adds above notes to the HTML page 