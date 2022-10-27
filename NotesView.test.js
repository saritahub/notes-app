/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('./NotesModel');
 const NotesView = require('./NotesView');

 describe('NotesView', () => {
    beforeEach(() => {
        document.body.innerHTML = fs.readFileSync('./index.html');
      });

      it('Displays a list of notes', () => {
        // 1. Arrange - Instance of NotesView Class
        const notesmodel = new NotesModel();
        const notesview = new NotesView(notesmodel);
        // Add two notes
        notesmodel.addNote('First note');
        notesmodel.addNote('Second note');

        // 2. Act - calls the displayNotes method TWICE -> added to browser
        notesview.displayNotes();
        notesview.displayNotes();

        // 3. Assert, what should the test result in?
        // Check the div class length is 2
        expect(document.querySelectorAll('div.note').length).toBe(2)
      })

      it('Adds a note and displays it on the page', () => {
        // 1. Arrange - Instance of NotesView Class
        const notesmodel = new NotesModel();
        const notesview = new NotesView(notesmodel);
        // Add one note - mock user input
        const userInput = document.querySelector('#user-input');
        userInput.value = "Test this note";

        // 2. Act - Clicks button, added to notes
        const addNoteButton = document.querySelector('#add-note-btn');
        addNoteButton.click();

        // 3. Assert, what should the test result in?
        // Gets a list of notes, check the div class note length is 1
        expect(document.querySelectorAll('div.note').length).toBe(1)
        // Check that the text was updated
        expect(document.querySelectorAll('div.note')[0].textContent).toBe("Test this note")
      })

      it('displays a list of notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();
        const fakeAPI = {
          loadNotes: (callbackFunction) => { 
            callbackFunction(["Make tea", "Go for a walk"])
        }
      }
        const view = new NotesView(model, fakeAPI);
        view.displayNotesFromApi();
        const viewAllNotes = document.querySelectorAll('.note');
        expect(viewAllNotes[0].textContent).toEqual("Make tea");
        expect(viewAllNotes[1].textContent).toEqual("Go for a walk");
      });
 })