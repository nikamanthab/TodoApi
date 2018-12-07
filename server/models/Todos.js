const mongoose = require('mongoose');


//create a model containing the elements

var Todos = mongoose.model("Todos",{
	text:{
		type:String,
		trim:true,
		required:true,
		minlength:1
	},
	completed:{
		type:Boolean,
		default:false
	},
	CompletedAt:{
		type:Number,
		default:null
	}
});

module.exports = {
	Todos
}