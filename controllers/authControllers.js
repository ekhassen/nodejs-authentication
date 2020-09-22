const mongoose = require('mongoose')
const express = require('express');
const { func } = require('joi');

// create a route
var router = express.Router();
//link
const Auth = mongoose.model('Auths')

// router controller for READ request
router.get('/', (req,res) =>{
    res.render("auth/authAddEdit", {
        viewTitle: "Insert a new auth"
    });
});

// router controller for update request
router.post('/', (req, res) => {
    if(req.body._id == '')
    insertIntoMongoDB(req, res);
    else
    updateIntoMongoDB(req,res);
});

// function to insert data into MongoDB

function inserIntoMongoDB(req, res) {
    var auth = new Auth();
    auth.userName = req.body.userName;
    auth.userId = req.body.userId;
    auth.userBranch = req.body.userBranch;
    auth.userpass = req.body.userpass;
    auth.save((err, doc) => {
        if(!err)
        res.redirect('auth/list');
        else
        console.log('Error during record Insertion '+  err);
    });
}

// function to update data into mongodb
function updateIntoMongoDB(req, res) {
    Auth.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if(!err)
    })
}