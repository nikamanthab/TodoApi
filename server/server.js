var express = require('express');
var bodyParser = require('body-parser');

const mongoose = require('./db/mongoose');
const Todos = require('./models/Todos');
const User = require('./models/User');

var app = express();

app.use(bodyParser.json());

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

app.listen(3000,()=>{
	console.log('started on port 3000');
})