const allTodo = require('../models/Todo');

const myTodos = async (req,res) => {
    let {text} = req.body;
    try{
        const newTodo = new allTodo({
            text:text
        });
        await newTodo.save();
        return res.json(await allTodo.find())

    }catch(err){
        console.error(err);
        res.status(500).json({ error: "Internal server error" })
    }
}

const getTodo = async (req,res) => {
    try{

        const todos = await allTodo.find()
        return res.status(200).json(todos)
    } catch(err){
        console.log(err)
    }
}

const updateTodo = async (req,res) => {
    try {
        await allTodo.findOneAndUpdate(
            { _id: req.params.id },
            { text: req.body.text }
        )

        const todo = await allTodo.findById(req.params.id);

        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

const deleteTodo = async (req,res) => {
    try {
        const todo = await allTodo.findByIdAndDelete(req.params.id)
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = { myTodos,getTodo,updateTodo,deleteTodo }
