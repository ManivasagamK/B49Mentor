const mongoose = require('mongoose');

const mentorschema = new mongoose.Schema({
    name: String,
    students: [{type: mongoose.Schema.Types.ObjectId, ref:"Student"}]
})

const Mentor= mongoose.model("Mentor", mentorschema);

module.exports = Mentor;