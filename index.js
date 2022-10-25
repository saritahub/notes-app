// Main JS file, loads all other dependencies (source files)
console.log("The notes app is running")

const NotesModel = require('./NotesModel');
const model = new NotesModel();
model.addNotes("Work out tonight")
console.log(model.getNotes());