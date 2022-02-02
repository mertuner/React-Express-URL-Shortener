const MD5 = require('crypto-js/md5');

exports._hash = (input) => {
    const minimizedHash = MD5(input).toString().slice(0, 8)
    return minimizedHash;
}

