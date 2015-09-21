var mongoose 	= require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 11;
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


UserSchema.pre('save', function(next) {
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
  	 if(err) return next(err);

  	 bcrypt.hash(user.password, salt, function(err, hash) {
  	    if(err) return next(err);
  	    user.password = hash;
  	    next();
	    });
  	});
});

UserSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
     if(err)
       return cb(err);
     cb(null, isMatch);
  });
};

UserSchema.methods.findOrCreate = function(googleResponse, cb) {
  cb(null, true);
};

module.exports = mongoose.model('User', UserSchema);