var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

const mongoose = require('./db/mongoose');
const Todos = require('./models/Todos');
const User = require('./models/User');

const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());////impotant

//to add to the db
app.post('/todos',(req,res)=>{
	//console.log(req.body);
	var todo = new Todos.Todos({
		text:req.body.text,
		completed:req.body.completed
	});
	todo.save().then((doc)=>{
		res.send(doc);
	},(err)=>{
		res.send(err).status(400);
	});
});

//to get the data from the db
app.get('/todos',(req,res)=>{
	Todos.Todos.find().then((todos)=>{
		res.send({todos});
	},(err)=>{
		res.status(400).sen(err);
	})
});

//get by passing id as below:
//localhost:3000/todos/123
app.get('/Todos/:id',(req,res)=>{
	var id = req.params.id;
	if(!mongodb.ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todos.Todos.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});

	})
	.catch((err)=>{
		res.status(400).send();
	});
});

app.listen(port,()=>{
	console.log(`started on port ${port}`);
});