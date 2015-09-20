var mongoose 	= require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema		= mongoose.Schema;

var UserSchema	= new Schema({
	name: String,
	cosplayName: String,
  	username: { type: String, required: true, unique: true },
  	password: { type: String, required: true }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);