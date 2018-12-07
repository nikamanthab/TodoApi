const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },( err , client )=>{
	if(err){
		return console.log("unable to connect to the Mongo database server");
	}
	console.log("connected to mongodb server");
	const db = client.db('TodoApp'); ///

	db.collection("Todos").findOneAndUpdate({text: "To complete the course"}, 
		{
			$set: {
				completed: true
			}
		},{
			returnOriginal:false
		}).then((result)=>{
			console.log(result);
		});

	client.close();
});