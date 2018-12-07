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

	//delete Many
	/*db.collection("Todos").deleteMany({ text: "eat dinner" }).then((result)=>{
		console.log(result);      //result: { n: 3, ok: 1 }// n -- no of docu del, ok -- no error occured
	});*/

	//delete one
	/*db.collection("Todos").deleteOne({ text: "eat dinner" }).then((result)=>{
		console.log(result);      //result: { n: 1, ok: 1 }
	});*/

	//findOneAndDelete
	db.collection("Todos").findOneAndDelete({text: "To develop my linkedin account"}).then((result)=>{
		console.log(result);
	});
	
	client.close();
});