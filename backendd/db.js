const mongoose = require("mongoose");
const { string, boolean } = require("zod");
mongoose.connect("mongodb+srv://jyotsna2003:JJyotsna20032003@@@atlascluster.4htwpzx.mongodb.net/");
const todoSchema = mongoose.Schema({
    title : string,
    description : string,
    completed : boolean
})

const todo = mongoose.model('todo',todoSchema);
module.exports={
    todo : todo
};
