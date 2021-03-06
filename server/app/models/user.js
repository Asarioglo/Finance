var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var UserSchema = mongoose.Schema({
    local: {
        email: String,
        password: String
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSalt(8), null);
};

// checking if password is valid
UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);