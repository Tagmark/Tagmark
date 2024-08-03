let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let age = 29
        if(age>27){
            resolve("age is more")
        }
        else{
            reject("you are not")
        }
    }, 5000);
})
promise.then(res=>console.log(res)).catch(err=>console.log(err))

check()
async  function check() {
    let data = await Promise;
    console.log(data);
}
console.log("execute")
