class NotesView {
    constructor(model) {
        this.model = model; 
        this.mainContainerElement = document.querySelector('#main-container');

        document.querySelector('#add-note-btn').addEventListener('click', () => {
            const newNote = document.querySelector('#user-input').value;
            this.addNewNote(newNote);
          });
    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
    }

      displayNotes() {
        // 1. Remove all previous notes
         document.querySelectorAll('.note').forEach(element => {
            element.remove();
        });
        
        // 2. For each note, create and append a new element on the main container
        const notes = this.model.getNotes();
        const userInput = document.querySelector('#user-input').value 
        notes.forEach (note => {
            const noteElement = document.createElement('div');
            noteElement.textContent = note;
            noteElement.className = 'note';
            this.mainContainerElement.append(noteElement); 
        })   
        document.querySelector('#user-input').value = userInput;
        // // Reset text field (blank)
        document.querySelector('#user-input').value = '';
    }
    
}

module.exports = NotesView;