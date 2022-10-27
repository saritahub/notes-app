class NotesModel {
    constructor() {
        this.notes = [];
    }

    getNotes() {
        return this.notes;
    }

    addNote(title) {
        this.notes.push(title);
    }

    reset() {
        this.notes = [];
    }

    setNotes(notes) {
        this.notes = notes;
    }
}

module.exports = NotesModel;