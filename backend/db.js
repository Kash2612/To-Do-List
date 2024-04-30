// npm install mongoose

const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://kashgupta20:nOXJu4IVxMnPEGRX@cluster0.lm5xjgw.mongodb.net/")

const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model("todos", todoSchema);

module.exports={
    todo
}