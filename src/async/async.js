const doSomethingAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve ('do something async', 3000))
        :reject(new Error('Test Error'))
    });
}
//async y await
const doSomething = async ()=>{
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('before');
doSomething();
console.log('after');

const anotherFunction = async ()=>{
    try{
        const something = await doSomethingAsync();
        console.log(something)
    }catch(error){
        console.error(error)
    }
}
console.log('before');
anotherFunction();
console.log('after');