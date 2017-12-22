var database = require('../config/database.js');

function handleError(req, res, err) {
    console.log(err);
    res.status(500).end();
}

module.exports = {
    familyList: function(req, res) {
        database.getFamilyMembersList()
            .then(function(data) {
                res.json(data[0]);
            }, function(err) {
                handleError(req, res, error);
            })
    }
};