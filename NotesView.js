class NotesView {
    constructor(model) {
        this.model = model; 
        this.mainContainerElement = document.querySelector('#main-container');

    }

    displayNotes() {
        // get the list of notes
        // For each note, the div element contains HTML class note
        const notes = this.model.getNotes();
        
        notes.forEach(note => {
            const newElement = document.createElement('div');
            newElement.className = 'note';
            newElement.innerText = note;
            // Add to DOM tree, within the 'main container' div
            this.mainContainerElement.append(newElement);
        })
    }
}

module.exports = NotesView;