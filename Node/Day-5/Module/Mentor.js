const mongoose = require("mongoose");
const studentSchema = new mongoose.schema({
    name: String,
    student: [{ type: mongoose.Schema.Type.Object}]
});

const Mentor = mongoose.model("student", mentor)

module.exports = Mentor;
