let generator = require("../utilities/generator");
let myStorage = require("../utilities/memoryStorage");
let model = require("../model/noteModel");

exports.getAllNotes = (req, res) => {
  let notes = myStorage.getValues(myStorage.store);
  return res.status(200).send("get all notes...." + JSON.stringify(notes));
};

exports.saveNote = (req, res) => {
  let id = generator.generate();
  let title = req.body.title;
  let content = req.body.content;
  let createdBy = req.body.createdBy;
  let createdOn = new Date();
  if (!title || !content) {
    return res.status(500).send({ error: "something went wrong" });
  }
  let Note = model.Note;
  let note = new Note(id, title, content, createdBy, createdOn);
  myStorage.store.setItem(id, note);

  return res.status(201).send("save note....");
};

exports.updateNote = (req, res) => {
  let noteId = req.body.noteId;
  let title = req.body.title;
  let content = req.body.content;
  let createdBy = req.body.createdBy;
  let createdOn = new Date();
  if (!noteId) {
    return res.status(500).send({ error: "noteId must be exist" });
  }
  if (!myStorage.store.getItem(noteId)) {
    return res.status(500).send({ error: "noteId not exist" });
  }
  if (!title || !content) {
    return res.status(500).send({ error: "something went wrong" });
  }
  let Note = model.Note;
  let note = new Note(noteId, title, content, createdBy, createdOn);
  myStorage.store.setItem(noteId, note);
  return res.status(200).send("update note....");
};

exports.deleteNote = (req, res) => {
  let noteId = req.params.noteId;
  if (!noteId) {
    return res.status(500).send({ error: "noteId must be exist" });
  }
  if (!myStorage.store.getItem(noteId)) {
    return res.status(500).send({ error: "noteId not exist" });
  }
  myStorage.store.removeItem(noteId);
  return res.status(200).send("delete note....");
};
