var friends = require('../data/friendsData')

module.exports = (function(app) {

app.get('/api/friends', function(req,res) {
  res.join(friends);
});
  var bestMatch = {
    name: '',
    photo:'',
    friendDifference: 1000
  };
  
  console.log(req.body);
  
  var userData = req.body;
  var userScores = userData.scores;
  
  console.log(userScores);
  
app.post('/api/friends, function(req,res) {
var newFriend = req.body;
friendlist.push(newFriend);
});
