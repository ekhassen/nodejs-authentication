const mongoose = require('mongoose');
//Attribute of  the auth object 'schema'

var authSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: 'This feild is required'
    },
    userId: {
        type: String
    },
    userBranch: {
        type: String,
        required: 'This feild is required'
    },
    userpass: {
        type: String,
        required: 'This feild is required'
    }
});

mongoose.model('Auths', authSchema);