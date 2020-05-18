var express = require("express");
var notes = require("../db/notes.js");

module.exports = function(app) {

app.get("/notes", function(req, res) {
    notes.getNotes().then(notes => res.json(notes)).catch(err => res.status(500).json(err));
})

app.post("/notes", function(req, res) {
    notes.addNotes(req.body).then(notes => res.json(notes)).catch(err => res.status(500).json(err));
})

app.delete("notes/:id", function(req, res) {
    notes.removeNote(req.params.id).then(notes => res.json({ok: true})).catch(err => res.status(500).json(err));
})

}