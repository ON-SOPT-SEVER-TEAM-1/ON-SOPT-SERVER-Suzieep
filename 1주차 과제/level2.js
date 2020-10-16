// 자신의 팀원들을 소개할 수 있는 json Array 만들기(팀원들의 이름, 사는곳, 나이, 취미, 정보를 출력하는 함수를 포함!)

const team1 = require('./team1members.js');
const team1Members = team1.team1members;

function printOurTeamMembers () {
    
    for(const member of team1Members){
        
        const {name, address, age, hobby } = member
        console.log(`이름:${name}\n거주지:${address}\n나이:${age}\n취미:${hobby}\n\n`)
    }
    
}

printOurTeamMembers()