const member = require('./members.js')

function getFemale(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{
            const result = members.filter(function(item, index){
                return item.gender === '여';
            })
            resolve(result);
        },500)
    })
}

function getYB(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{
            const result = members.filter(function(item, index){
            return item.status === 'YB';
        })
        resolve(result);
        },500)    })
}

function getiOS(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{
            const result = members.filter(function(item, index){
                return item.part === 'iOS';
            })
            resolve(result);
        },500)    })
}

getFemale(member) 
    .then(member => getYB(member))
    .then(member => getiOS(member))
    .then(member => console.log(member));