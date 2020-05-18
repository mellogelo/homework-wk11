const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
    constructor() {
        this.idNum = 0
    }
    read() {
        return readFileAsync("db/db.json", JSON.stringify(note))
    }
    // get notes
    getNotes() {
        return this.read().then(notes => {
            let notesArray;
            try {
                notesArray = [].concat(JSON.parse(notes));
            }
            catch (err) {
                notesArray = [];
            }
            return notesArray;
        })
    }
    // adds note
    addNotes(note) {
        const { title, text } = note;
        const newNote = { title, text, id: ++this.idNum }
        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(uodateNotes => this.write(updateNotes))
        .then(() => newNote)
    }
    // remove note
    removeNote(id) {
        return this.getNotes()
        .then(notes => notes.filter(note => note.id !== parseInt(id)))
        .then(updateNotes => this.write(updateNotes))

    }
}

module.exports = new Notes();