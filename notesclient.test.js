const NotesClient = require('./notesclient');
const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView');

require('jest-fetch-mock').enableMocks()

describe('notesClient class', () => {
  it('calls fetch and loads data', (done) => {
    // 1. Instantiate the class
    const notesClient = new NotesClient();
    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    // 3. We call the method, giving a callback function.
    // When the HTTP response is received, the callback will be called.
    // We then use `expect` to assert the data from the server contain
    // what it should.

    notesClient.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);

    // 4. Tell Jest our test can now end.
      done();
    });
  }); 
  // Changed timeout to 30 seconds
  it('calls fetch and loads POST data', () => {
    // 1. Instantiate the class
    const notesModel = new NotesModel();
    const notesClient = new NotesClient();
     
    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    const fakeAPI = {
      loadNotes: () => {
        module.setNotes(["Test note"]);
        view.displayNotes();
      },
      createNote: () => {
        return { content: "Test note"}
      }
    }

    const noteView = new NotesView(notesModel, notesClient);

    const textBox = document.querySelector('#user-input')
    textBox.value = "User input";

    const addNoteButton = document.querySelector('#add-note-btn');
    addNoteButton.click();



    // 3. We call the method, giving a callback function.
    // When the HTTP response is received, the callback will be called.
    // We then use `expect` to assert the data from the server contain
    // what it should.

 
  }); // Changed timeout to 30 seconds
});