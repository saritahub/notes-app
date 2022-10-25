/**
 * @jest-environment jsdom
 */
const NotesModelView = require('./NotesModelView');

const fs = require('fs')

describe('NotesModelView', () => {
    it('Should display one note on the page', () => {
        // Arrange
        // As Jest doesn't have a webpage, we need to use 
        // @jest-env at the top
        // Then, jest can access the DOM
        // fs will read the HTML file, need to require at the top
        document.body.innerHTML = fs.readFileSync('./index.html');
        const view = new NotesModelView();
     
        //Act
        // Call the document that you want to test drive
        view.displayNotes(['This is a note']);

        // Assert 
        const noteItemElements = document.querySelectorAll('div.todo-note')
        expect(noteItemElements.length).toBe(1);
        expect(noteItemElements[0].innerText).toBe('This is a note');
    })


    // notes.displayNotes(['This is a note']) // Want this to be displayed on the page 
})