function add(x,y){
    return x+y;
}
console.log(add(2,3));

var addStr = function(x,y){
    return x+y;
}

console.log(addStr("안녕", "하세요"));

var add = (x,y) => {
    return x+y;
}
console.log(add(2,3));

var add = function(x,y){
    return x+y;
}

var add = (x,y)=> x+y;

var add = (x,y)=>(x+y);

var square = function(x){
    return x*x;
}

var square = x => x*x;

var person = function (name, age){
    return {
        name: name,
        age: age,
    };
}

var person = (name,age)=> ({name: name, age: age});