const members = require('./members.js')

var iOSMem =[]; 
var YBMem =[]; 
var FeMem =[];

var iOSNum=0;
var YBNum=0;
var FeNum=0;

const result = members.filter(function(item, index){
    return item.gender === '여';
})

console.log(result);

for(const mem of members){

    if (mem.status == "YB"){
        
        YBMem[YBNum] = mem;
        YBNum++;
    }
}

for(const mem of members){

    if (mem.gender == "여"){

        FeMem[FeNum]=mem;
        FeNum++;
    }
}

for(const mem of members){

    if (mem.part == "iOS"){

        iOSMem[iOSNum]=mem;
        iOSNum++;
    }

}
console.log(YBNum);
console.log(FeNum);
console.log(iOSNum);

function sorting() {

    if (mem.status == "YB"){
        
        YBMem[YBNum] = mem;
        YBNum++;
    }

    if (mem.gender == "여"){

        FeMem[FeNum]=mem;
        FeNum++;
    }

    if (mem.part == "iOS"){

        iOSMem[iOSNum]=mem;
        iOSNum++;
    }

}

function getFemale(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{
        
            resolve(FeMem);
        },500)
    })
}

function getYB(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{
            resolve(YBMem);
        },500)    })
}

function getiOS(members) {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{

            resolve(iOSMem);
        },500)    })
}

getFemale() 
    .then(getYB)
    .then(getiOS)
    .then(console.log);