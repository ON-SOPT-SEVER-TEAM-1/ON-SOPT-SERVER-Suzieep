const express = require('express');
const router = express.Router();
const ut = require('../../modules/util');
const sc = require('../../modules/statusCode');
const rm = require('../../modules/responseMessage');
const jwt = require('../../modules/jwt');
const TOKEN_EXPIRED = -3
const TOKEN_INVALID = -2

router.get('/', async (req, res) => {
    try{const token = req.headers.jwt; //이 토큰을
    if (!token) {
        return res.json(ut.fail(sc.BAD_REQUEST, rm.EMPTY_TOKEN));
    }
    const user = await jwt.verify(token);//Jwt.verify()메서드를 통해 디코딩
    console.log(user);
    if (user === TOKEN_EXPIRED) {
        return res.status(sc.UNAUTHORIZED).send(ut.fail(sc.UNAUTHORIZED, rm.EXPIRED_TOKEN));
    }
    if (user === TOKEN_INVALID) {
        return res.status(sc.UNAUTHORIZED).send(ut.fail(sc.UNAUTHORIZED, rm.INVALID_TOKEN));
    }
    if (user.id === undefined) {
        return res.status(sc.UNAUTHORIZED).send(ut.fail(sc.UNAUTHORIZED, rm.INVALID_TOKEN));
    }
    else return res.status(sc.OK).send(ut.fail(sc.OK, rm.AUTH_SUCCESS));
} catch (err) {
        console.log(err);
        return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR)); 
    }
});

router.get('/refresh', async (req, res) => {
   try{ const refreshToken = req.headers.refreshToken; //이 토큰을
    if (!refreshToken) {
        return res.json(ut.fail(sc.BAD_REQUEST, rm.EMPTY_TOKEN));
    }
    const newToken = await jwt.refresh(refreshToken);//Jwt.verify()메서드를 통해 디코딩
    console.log(newToken);
    if (newToken === TOKEN_EXPIRED) {
        return res.status(sc.UNAUTHORIZED).send(ut.fail(sc.UNAUTHORIZED, rm.EXPIRED_TOKEN));
    }
    if (newToken === TOKEN_INVALID) {
        return res.status(sc.UNAUTHORIZED).send(ut.fail(sc.UNAUTHORIZED, rm.INVALID_TOKEN));
    }
    
    return res.status(sc.OK).send(ut.fail(sc.OK, rm.AUTH_SUCCESS,{
        accessToken: newToken
    }))
} catch (err) {
    console.log(err);
    return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR)); 
}
});
module.exports = router;