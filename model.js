var mongoose  = require('mongoose');
require('mongoose-type-email');
var userSchema = mongoose.Schema({
	name:{ type:String, required:true},
	email:{ type:mongoose.SchemaTypes.Email, required:true},
	password: { type:String, required:true}
})

var User = mongoose.model('User',userSchema);

module.exports=User;