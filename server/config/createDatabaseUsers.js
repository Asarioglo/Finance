var mongoose = require("mongoose");
var User = require('../app/models/user');

mongoose.connect("mongodb://localhost:27017/users", function(err, db) {
    var testUser = new User();
    testUser.local.email = "test@test.com";
    testUser.local.password = testUser.generateHash("testPass");
});