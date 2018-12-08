const {mongoose} = require('./../server/db/mongoose');
const {Todos} = require('./../server/models/Todos');

var id = '5c0aa560a9e4562e38e5dc40';


//find all with the attributes specified
Todos.find({
	_id: id
}).then((todos)=>{
	console.log('Todos',todos);
});

//find  one with the particular attributes
Todos.findOne({
	_id: id
}).then((todo)=>{
	console.log('Todo:',todo);
});

//find using id
Todos.findById(id)
.then((todo)=>{
	if(!todo) return console.log("id not found");
	console.log('Todos by id:',todo);
})
.catch((err)=>{
	console.log(err);
});