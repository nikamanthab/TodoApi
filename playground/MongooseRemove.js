const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todos} = require('./../server/models/Todos');
const {User} = require('./../server/models/user');
var id = "5c13a64a3361efeb5155704e";

//to remove everything

// Todos.remove({}).then((result)=>{
//     console.log(result);
// });

//find one and reove --takes query object
Todos.findOneAndRemove({_id:id}).then((res)=>{
    console.log(res);
})
//to find and remove by id
// Todos.findByIdAndDelete(id).then((result)=>{
//     console.log(result);
// })