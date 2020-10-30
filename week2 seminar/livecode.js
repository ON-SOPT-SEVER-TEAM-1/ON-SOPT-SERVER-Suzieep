const getNumber= new Promise((resolve, reject)=> {
    console.log("getNumber Pending");
    setTimeout(()=>{

    }, 1000);
})

//fulfilled 성공했을 때

//reject 실패했을 때

getNumber
    .then(value => {
        console.log(value);
        return value * 2;}
        )
    .then(value =>  {
        console.log(value);
        return value * 3;}
        )
    .then(value => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(value + 1000);
            }, 1000)
        })
    })
    .then(value => console.log(value));
    