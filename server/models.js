var config = require('./config');

//////////////////////////////////////////////////////
/*
 * 1. mongoose connection to mongo
 * 2. mongoose schemas, models
 * 3. express restful api to mogoose
 * 4. export models and routers
 */

//////////////////////////////////////////////////////
/*
 * 1. mongoose connection to mongo
 */

var mongoose = require('mongoose');
var chalk = require('chalk');
// var db = mongoose.connect(config.mongoose.local);  // NOTE: need to run mongod on localhost
var db = mongoose.connect(config.mongoose.mlab);
db.connection.on('error', function() {
  console.log('mongoose connection', chalk.red('open ERROR'));
});
db.connection.once('open', function() {
  console.log('mongoose connection', chalk.green('open OK'));
});

//////////////////////////////////////////////////////
/*
 * 2. schemas, models
 */

var UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  comments: [Object] // to be define {}
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


var PostSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  postedByUser: { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'}
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

var UserSequence = require('mongoose-sequence');
var PostSequence = require('mongoose-sequence');
UserSchema.plugin(UserSequence, {inc_field: 'userId'});
PostSchema.plugin(PostSequence, {inc_field: 'postId'});

var UserModel = mongoose.model('User', UserSchema);
var PostModel = mongoose.model('Post', PostSchema);

//////////////////////////////////////////////////////
/*
 * 3. routers
 */

var express = require('express');
var router = express.Router();

router
.route('/users')
.get(function(req, res) {
  console.log('get /users');
  UserModel.find({}, function(err, users) {
    res.status(200).json(users);
  });
})
.post(function(req, res) {
  console.log('post /users', req.body);
  var user = new UserModel(req.body);
  user.save(function() {
    res.status(200).json(user);
  });
})
;

router
.route('/users/:id')
.get(function(req, res) {
  console.log('get /users/:id', req.params.id);
  UserModel.find({userId: req.params.id}, function(err, users) {
    res.status(200).json(users);
  });
})
;

router
.route('/posts')
.get(function(req, res) {
  PostModel.find(function(err, posts) {
    res.status(200).json(posts);
  });
})
.post(function(req, res) {
  console.log('post /posts', req.body);
  var post = new PostModel(req.body);
  post.save(function() {
    res.status(200).json(post);
  });
})
;

router
.route('/posts/:id')
.get(function(req, res) {
  console.log('get /post/:id', req.params.id);
  UserModel.find({postId: req.params.id}, function(err, posts) {
    res.status(200).json(posts);
  });
})
;

//////////////////////////////////////////////////////
/*
 * 4. exports
 */

module.exports = {
  User: UserModel,
  Post: PostModel,
  Router: router
};