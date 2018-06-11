//api routing

//required file
var friendList = require('../data/friends.js');

//get route
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });

    //post route
    app.post('/api/friends', function (req, res) {

        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        //compare scores against preloaded/already done users
        for (var i = 0; i < friendList.length; i++) {
            var scoresDiff = 0;
            for (var j = 0; j < newFriendScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
            }
            scoresArray.push(scoresDiff);
        }

        //find best match to be returned/displayed
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        //output to modal
        var bff = friendList[bestMatch];
        res.json(bff);

        //add to arry
        friendList.push(req.body);
    });
};