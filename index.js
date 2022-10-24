// Main JS file, loads all other dependencies (source files)
console.log("The notes app is running")

const TodoListModel = require('./NotesModel');
const model = new TodoListModel();
model.addItem("Buy milk")
console.log(model.getItems());