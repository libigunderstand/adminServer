var jwt = require('jsonwebtoken');

function createToken(userinfo) {

    const command = 'adminserver'

    const config = {
        expiresIn: 60 * 2
    }

    return jwt.sign(userinfo, command, config)
}

module.exports = createToken