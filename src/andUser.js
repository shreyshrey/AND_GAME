module.exports = function (getANDTitle) {
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://admin:anddigital@cluster0-shard-00-00-dpss5.mongodb.net:27017,cluster0-shard-00-01-dpss5.mongodb.net:27017,cluster0-shard-00-02-dpss5.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Define a schema
var Schema = mongoose.Schema;

var ANDModelSchema = new Schema({
   name: String,
   ANDTitle: String,
   url:String
});



var ANDuser = mongoose.model('ANDModel', ANDModelSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
ANDuser.find({ 'name': 'Shreya Vashist' }, 'url', function (err, ANDusers) {
 // if (err) return handleError(err);
 // 'athletes' contains the list of athletes that match the criteria.
 return ANDusers[0].url;
});

}
