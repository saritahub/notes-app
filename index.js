// Main JS file, loads all other dependencies (source files)
console.log("The notes app is running")

const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView');
const client = require('./notesclient');
const NotesClient = require('./notesclient');
// const newNote = document.querySelector('#user-input').value;


const model = new NotesModel();
const notesClient = new NotesClient();
// model.addNote("Work out tonight");
// model.addNote("Cook pasta");
console.log(model.getNotes()); // Works - displayed in console

const view = new NotesView(model, notesClient);

view.displayNotes(model.getNotes()); // Adds above notes to the HTML page 

view.displayNotesFromApi();

