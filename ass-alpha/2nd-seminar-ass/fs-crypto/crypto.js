const crypto = require('crypto')

const password1 = '123123'
const password2 = '12312'
const base64_1 = crypto.createHash('sha512').update(password1).digest('base64')//짧아서 많이 씀
const base64_2 = crypto.createHash('sha512').update(password2).digest('base64')
const hex = crypto.createHash('sha512').update(password1).digest('hex')

console.log(base64_1);

crypto.randomBytes(64,(err,buf)=>{
    const salt = buf.toString('base64')
    console.log(`salt : ${salt}`)
    crypto.pbkdf2('비밀번호',salt,100000,64,'sha512',(err,key)=>{
        console.log(`password:${key.toString('base64')}`)
    })
})