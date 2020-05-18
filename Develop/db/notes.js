const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
    constructor() {
        this.id = 0
    }
    read() {
        return readFileAsync("db/db.json", JSON.stringify(note))
    }
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
}
