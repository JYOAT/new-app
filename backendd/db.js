const mongoose = require("mongoose");
const { string, boolean } = require("zod");
mongoose.connect("mongodb+srv://jyotsna2003:JJyotsna20032003%40%40@atlascluster.4htwpzx.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo : todo
};
