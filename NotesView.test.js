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
        document.body.innerHTML = fs.readFileSync('./index.html');

        // 1. Arrange - Instance of NotesView Class
        const notesmodel = new NotesModel();
        const notesview = new NotesView(notesmodel);
        // Add two notes
        notesmodel.addNote('First note');
        notesmodel.addNote('Second note');

        // 2. Act - calls the displayNotes method -> added to browser
        notesview.displayNotes();
        notesview.displayNotes();

        // 3. Assert, what should the test result in?
        // Gets a list of notes
        // Check the div class is note
        expect(document.querySelectorAll('div.note').length).toBe(2)
      })

      it('Adds a note and displays it on the page', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        // 1. Arrange - Instance of NotesView Class
        const notesmodel = new NotesModel();
        const notesview = new NotesView(notesmodel);
        // Add one note - mock user input
        const userInput = document.querySelector('#user-input');
        userInput.value = "Test this note";

        // 2. Act - Clicks button, added to notes
        // clicks the button
        const addNoteButton = document.querySelector('#add-note-btn');
        addNoteButton.click();

        // 3. Assert, what should the test result in?
        // Gets a list of notes
        // Check the div class note length is 1
        expect(document.querySelectorAll('div.note').length).toBe(1)
        // Check that the text was updated
        expect(document.querySelectorAll('div.note')[0].innerText).toBe("Test this note")
      })

      // when displayNotes  is called twice, 
      //there should still be the right number of notes from 
      //the model on the page 



 })