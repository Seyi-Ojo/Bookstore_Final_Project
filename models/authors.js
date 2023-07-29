const mongoose = require("mongoose")

// Define a shema
const Schema = mongoose.Schema;

// Define author schema
const AuthorSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },
    dob: {
        type: String,
    },
    country: {
        type: String,
        required: false
    },
    books: {
        type: Array,
        default: []
    },
    
    createAt: {
        type: Date,
        default: Date.now
    },
    lastUpdateAt: {
        type: Date,
        default: Date.now
    },
});

//Export the model
module.exports = mongoose.model('authors', AuthorSchema); //collection name is Books. This is the name of the collection in the 