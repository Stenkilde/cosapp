// Base Setup for the server
var express		= require('express');
var mongoose	= require('mongoose');
var bodyParser	= require('body-parser');
var jwt			= require('jsonwebtoken');
var morgan		= require('morgan');
var bcrypt		= require('bcrypt');
var app			= express();
var port 		= 1337;

mongoose.connect('mongodb://localhost/cosbox');
//This secret doesn't belong here. Only here for testing
var jwtSecret 	= 'fjkdlsajfoew239053/3uk';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
	res.sendfile('./app/index.html');
});

var User = require('./models/user');

// Router setup
var router 		= express.Router();

router.use(function(res, req, next) {
	console.log('Its happening!')
	next();
})

router.route('/login')
	.post(function(req, res) {
		User.findOne({ username : req.body.username }, function(err, user, hash) {
			if(!user) {
				res.status(401).end('Username or password is wrong')
			}
			if(user) {
			  	user.comparePassword(req.body.password, function(err, isMatch) {
	  	            console.log(req.body);
	  	            console.log(isMatch);
	  	            if(err)
	  	        		res.send(err)
	  	            if(user && isMatch) {
	  	            	var token = jwt.sign({
	  	            		username: req.body.username,
	  	            		name: user.name,
	  	            		cosplayName: user.cosplayName
	  	            	}, jwtSecret);
	  	                console.log({ user : user });
	  	                res.send(200, {
	  	                	token: token
	  	                });
	  	            } else {
	  	            	res.status(401).end('Username or password is wrong')
	  	            }
		  	    });
		  	}
		}); 
	})


router.route('/user')
	.post(function(req,res) {
		var user = new User()

		user.name 			= req.body.name;
		user.cosplayName 	= req.body.cosplayName;
		user.username  		= req.body.username;
		user.password		= req.body.password;

		user.save(function(err) {
			if(err)
				res.status(401).send({err, message: 'User already exists!'});

			res.json({ message: 'User created!' });
			console.log(user);
		});
	});

router.route('/me')
	.post(function(req, res) {
		var decoded = jwt.decode(req.body.token);
		res.send(decoded);
	});

// Test route
router.get('/', function(req, res) {
	res.json({ message: 'Get out of here!'});
});

app.use('/api', router);

function authenticate(req, res, next) {
	var body = req.body;
	if (!body.username || !body.password) {
		res.status(400).end('Must provide username or password');
	}
	if (body.username !== user.username || body.password !== user.password) {
		res.status(401).end('Username or password incorrect');
	}
	next();
}

// Start the server
app.listen(port);
console.log('We are up and running!');