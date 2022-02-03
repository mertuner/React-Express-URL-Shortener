const { _hash } = require('../utils/hash');
const fetch = require('node-fetch');
const validUrl = require('valid-url');

const baseUrl = 'brif.live/';
const localBaseUrl = 'localhost:5009/'
const registeredBaseUrl = 'https://www.brif.live/';
const localRegisteredBaseUrl = 'http://localhost:5009/'

let iconBase = 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url='




exports.handleHash = async (req, res, next) => {
    try {
        let originalUrl = req.body.url;
        let hash = _hash(originalUrl);
        let shortUrl = `${baseUrl}${hash}`
        let registeredUrl = `${registeredBaseUrl}${hash}`
        let src = `${iconBase}${originalUrl}&size=64`;
        const response = await fetch(`https://urlshortener-4f4e9-default-rtdb.firebaseio.com/data/${hash}.json`);
        const data = await response.json();
        console.log(src);
        if(data){
            return res.json(data);
        }
        else {
            const data = {
                createdAt: new Date().getTime(),
                originalUrl: originalUrl,
                hash: hash,
                shortUrl: shortUrl,
                registeredUrl: registeredUrl,
                favIcon: src
            }
            const response =  await fetch(`https://urlshortener-4f4e9-default-rtdb.firebaseio.com/data/${hash}.json`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            let responseData = await response.json();
            if(responseData.error){
                return res.json(responseData.error);
            }
            return res.json(data);
        }
    } catch (error) {
        res.json('Error: ', error.message)
    }

}