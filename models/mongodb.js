const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-auth', {useNewUrlParser: true}, (err) => {
    if (!err){
        console.log('Successfully established a connection with mongodb');
    }
    else{
        console.log('failed to estableish a connection with error'+err);
    }
});
require('./auths.model');