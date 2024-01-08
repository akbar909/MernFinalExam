const mongoose = require('mongoose');

const poetrySchema = new mongoose.Schema({
    poet : {
        type : String,
        required : true,
    },
    data : {
        type : String,
        required : true,
    },
});

module.exports = mongoose.model("Poetry", poetrySchema)