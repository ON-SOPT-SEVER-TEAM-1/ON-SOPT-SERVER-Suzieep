hoistFunction();

function hoistFunction() {
    console.log(x);
    var x = 'var'
    console.log(x);
}