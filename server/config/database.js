/**
 * Created by Alexandr on 9/19/2017.
 */
var mysql = require('mysql');
var Promise = require("promise");

var pool = mysql.createPool({
    connectionLimit: 20,
    host: '127.0.0.1',
    user: 'root',
    password: 'Bazadannihna100500pizdatomservere;',
    database: 'family',
    debug: false
});

var Database = function() {
};

Database.getFamilyMembersList = function() {
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            if(err) {
                reject(err);
            } else {
                connection.query('call family_member_list()', function(err, data) {
                    resolve(data);
                });
            }
        });
    });
};

module.exports = Database;