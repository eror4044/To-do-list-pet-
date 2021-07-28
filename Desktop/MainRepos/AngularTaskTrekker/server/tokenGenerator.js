const {secret} = require("./config")
const jwt = require('jsonwebtoken');


module.exports = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"} )
} 