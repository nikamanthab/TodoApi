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

	/*db.collection('Todos').insertOne({
		text: 'To complete the course',
		completed:false
	},
	(err ,result)=>{
		if(err){
			return console.log("unable to insert:",err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});*/

	db.collection('Users').insertOne({
		name: 'nitin',
		age:19,
		location:'chennai'
	},
	(err ,result)=>{
		if(err){
			return console.log("unable to insert:",err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	client.close();
});