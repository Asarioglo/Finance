var mongose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var UserSchema = mongose.Schema({
    local: {
        email: String,
        password: String
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.getSalt(8), null);
};

// checking if password is valid
UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongose.model('User', UserSchema);