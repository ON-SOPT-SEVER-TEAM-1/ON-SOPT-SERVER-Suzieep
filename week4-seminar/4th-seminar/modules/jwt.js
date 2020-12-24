const jwt = require('jsonwebtoken');
const {
  secretKey,
  options,
  refreshOptions
} = require('../config/secretKey');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
  sign: async (user) => {
    const payload = {
      id: user.id,
      name: user.userName
    };
    const result = {
      accessToken: jwt.sign(payload, secretKey, options),
      refreshToken: jwt.sign(payload, secretKey, refreshOptions),
    };
    return result;
  },
  verify: async (token) => {
    let decoded;
    try {
      decoded = jwt.verify(token, secretKey);
    } catch (err) {
      if (err.message === 'jwt expired') {
        console.log('expired token');
        return TOKEN_EXPIRED;
      } else if (err.message === 'invalid token') {
        console.log('invalid token');
        console.log(TOKEN_INVALID);
        return TOKEN_INVALID;
      } else {
        console.log("invalid token");
        return TOKEN_INVALID;
      }
    }
    return decoded;
  },
  refresh: async (refreshToken) => {
    // refreshToken은 데이터베이스에 저장 (userModel)
    // modules/jwt.js에서 refresh 해주는 메서드 구현.
    try {
      const decoded = await jwt.verify(refreshToken, secretKey)
      if (decoded.id == undefined) {
        return TOKEN_INVALID
      }
      const payload = {
        id: decoded.id,
        name: decoded.name
      }
      const accessToken = await jwt.sign(payload, secretKey, options)

      return accessToken

    } catch (err) {
      if (err.message === 'jwt expired') {
        console.log('expired token');
        return TOKEN_EXPIRED;
      } else if (err.message === 'invalid token') {
        console.log('invalid token');
        console.log(TOKEN_INVALID);
        return TOKEN_INVALID;
      } else {
        console.log("invalid token");
        return TOKEN_INVALID;
      }
    }
  }
}
