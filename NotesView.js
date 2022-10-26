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
        // get the list of notes
        // For each note, the div element contains HTML class note
        const notes = this.model.getNotes();

        const userInput = document.querySelector('#user-input').value 
        const newElement = document.createElement('div');
        newElement.className = 'note';
        newElement.innerText = userInput;
        document.querySelector('#user-input').value = '';
        this.mainContainerElement.append(newElement);       
         // notes.forEach(note => {
        //     const newElement = document.createElement('div');
        //     newElement.className = 'note';
        //     newElement.innerText = note;
        //     // Add to DOM tree, within the 'main container' div
        //     this.mainContainerElement.append(newElement);
        // })
    }
    
}

module.exports = NotesView;