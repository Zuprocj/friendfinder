var friends = require('../data/friendsData')

module.exports = (function(app) {

app.get('/api/friends', function(req,res) {
  res.join(friends);
});
  
app.post('/api/friends', function(req, res) {
  
  var bestMatch = {
    name: '',
    photo:'',
    friendDifference: 1000
  };
  
  console.log(req.body);

  var userData = req.body;
  var userScores = userData.scores;
  
  var totalDiffference = 0;
    for (var i = 0; i < friends.length; i++) {
      totalDifference = 0;
      for (var j = 0; i <friends.length; i++) {
        totalDifference += Math.abs(parseInt(userScores[j] - parseInt(friends[i].scores[j])));
          if (totalDiffernece <= bnestMAtch.friendDifference) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }
  
  friends.push(userData);
  res.json(bestMatch);
  });
});

