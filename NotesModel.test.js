const NotesModel = require('./NotesModel')

describe("NotesModel", () => {
    it('Returns an empty list of items', () => {
        const model = new NotesModel();
        
        expect(model.getNotes()).toEqual([]);
    })

    it('Adds a new item to the list', () => {
        const model = new NotesModel();

        model.addNotes('Renew gym membership')
        expect(model.getNotes()).toEqual(['Renew gym membership'])
    })

    it('Clears all items on the list', () => {
        const model = new NotesModel();

        model.addNotes('Renew gym membership')
        model.addNotes('Buy milk')
        model.reset();
        expect(model.getNotes()).toEqual([])
    })
})