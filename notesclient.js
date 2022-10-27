class NotesClient {
   loadNotes(callbackFunction) {
    fetch('http://localhost:3000/notes')
    .then((response) => response.json()) 
    .then((data) => {
      console.log(data)
    });
   }
}

module.exports = NotesClient;