
function encryptPassword(password){
    return new Promise((resolve, reject)=>{
        const crypto = require('crypto');
        crypto.randomBytes(64,(err,buf)=>{
            const salt = buf.toString('base64');
            crypto.pbkdf2('비밀번호',salt,100000,64,'sha512',(err,key)=>{
                //console.log(`password:${key.toString('base64')}`)
                resolve(key.toString('base64'));
                
            });
        });
    });
}

function writeFile(data,file){
    const fs = require('fs')
    fs.writeFile(`${file}.txt`, data, () => {
        console.log(`file[${file}.txt] 작성 완료`)
    })
}

async function init(){
    const password = "password"

        const sePassword = await encryptPassword(password)
        writeFile(sePassword,"encryption")
    
}
init()