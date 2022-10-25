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

        notesmodel.addNotes('First note');
        notesmodel.addNotes('Second note');

        // 2. Act - calls the displayNotes method
        notesview.displayNotes();

        // 3. Assert, what should the test result in?
        // Gets a list of notes
        // Check the div class is note
        expect(document.querySelectorAll('div.note').length).toBe(2)
      })
 })