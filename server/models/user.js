const mongoose = require('mongoose');

//create a model containing the elements

var User = mongoose.model("User",{
	email:{
		type:String,
		trim:true,
		required:true,
		minlength:1
	}
});

module.exports = {
	User
}