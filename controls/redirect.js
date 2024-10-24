const { _hash } = require('../utils/hash');
const fetch = require('node-fetch');
const validUrl = require('valid-url');



exports.handleRedirect = async (req, res, next) => {
    try {
        console.log('redirect hit');
        let parsedUrl = req.url;
        console.log(parsedUrl)
        const response = await fetch(`https://urlshortener-4f4e9-default-rtdb.firebaseio.com/data/${parsedUrl}.json`);
        const data = await response.json();
        console.log(data);
        if (data) {
            console.log('redirecting to ', data.originalUrl)
            res.redirect(data.originalUrl);
        }
        else {
            res.json("Url doesn't exist")
        }
    }
    catch (error) {
        res.send(401, 'Error: ', error.message);
    }
}