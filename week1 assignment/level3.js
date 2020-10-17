//가짜 서버파트 members.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘 만들어보기.
//조건1. OB, YB 비율 오차범위를 최소한으로 유지하며 코드 작성

const fakeMem = require('./members.js')

const teamNum = 6;
var OBMem =[] ; 
var YBMem =[]; 

const resultTeam = []

var OBNum=0;
var YBNum=0;


for(const mem of fakeMem){

    if (mem.status == "OB"){

        OBMem[OBNum]=mem;
        OBNum++;
    }
    else{
        YBMem[YBNum] = mem;
        YBNum++;
    }
}

function mixMems(a){
    for(let i=0;i<a.length;i++){
        var j = Math.floor(Math.random()*(i+1));

        [a[j],a[i]]=[a[i],a[j]];

    }
    return a;
}


const mixedOBMem=mixMems(OBMem);
const mixedYBMem=mixMems(YBMem);



const finalTeam = function(teamsNum){ 
    const OBNum = Math.floor(mixedOBMem.length / teamsNum);
    const YBNum = Math.floor(mixedYBMem.length / teamsNum);
    
    putOB = [];
    while(putOB.length < teamsNum){
        putOB.push(mixedOBMem.splice(0, OBNum));
    }
    for (var i = 0; i < mixedOBMem.length; i++){
        putOB[i].push(mixedOBMem[i])
    }
    
    putYB = [];
    while(putYB.length < teamNum){
        putYB.push(mixedYBMem.splice(0, YBNum));
    }
    for (var i = 0; i < mixedYBMem.length; i++){
        putYB[i].push(mixedYBMem[i])
    }

    const resultTeam = []
    for (var i = 0; i < teamNum ; i++){
        resultTeam.push(putOB[i].concat(putYB[i]));
    }
    return resultTeam
}

console.log(finalTeam(6));