class NotesClient {   

   loadNotes(callbackFn) {
      let url = 'http://localhost:3000/notes';
      fetch(url)
      .then((response) => response.json()) 
      .then((data) => {
        callbackFn(data)
        // passes the data through the callback function
    });
   }
}

module.exports = NotesClient;