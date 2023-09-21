const mongoose = require("mongoose");
const studentSchema = new mongoose.schema({
    name: String,
    cMentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor"}
    pMentor: [{ type: mongoose.Schema.Type.ObjectId, ref: "Mentor"}]
});

const Student = mongoose.model("student", student)

module.exports = Studemt;
