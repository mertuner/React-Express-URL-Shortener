const { _hash } = require('../utils/hash');
const fetch = require('node-fetch');
const validUrl = require('valid-url');


const baseUrl = 'localhost:5009/'



exports.handleRedirect = async (req, res, next) => {
    try {
        console.log('handling');
        let parsedUrl = req.url;
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