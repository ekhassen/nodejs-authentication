const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
    //get token from the header if present
    const token = req.headers['x-access-token'] || req.headers["authorization"];

    //if no tocken found, return response (without going to the next middleware)
    if (!token) return res.statud(401).send("Acess denied. No token provided.");

    try {
        // if can verify the token, set req.user and pass to the next middleware

        const decoded = jwt.verify(token, config.get("myprivatekey"));
        req.user = decoded;
        next();
    }
    catch (ex) {
        //if invalid token
        res.status(400).send("Invalid token.");
    }
};