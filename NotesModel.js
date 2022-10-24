class NotesModel {
    constructor() {
        this.notes = [];
    }

    getNotes() {
        return this.notes;
    }

    addNotes(title) {
        this.notes.push(title);
    }

    reset() {
        this.notes = [];
    }
}

module.exports = NotesModel;