class NotesModelView {
    displayNotes(todoNotes) {
        todoNotes.forEach((todoNote) => {
            const newElement = document.createElement('div');
            newElement.className = 'note';
            newElement.innerText = todoNote;
            // Add to DOM tree, within the 'main container' div
            document.querySelector('#main-container').append(newElement)


        })
    }
}

module.exports = NotesModelView;