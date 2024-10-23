const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
});

const allTodo = mongoose.model('allTodo', todoSchema);

module.exports = allTodo;