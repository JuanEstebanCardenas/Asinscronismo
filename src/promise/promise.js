//promesa normal 
const somethingWillHappen = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('hey');
        }else{
            reject('ups');
        }
    });
};

somethingWillHappen()
.then(Response => console.log(Response))
.catch(err => console.log(err));

//logear el error de la promesa como un error y mostrar como fue el proceso en el codigo
const somethingWillHappen2 = ()=>{
    return new Promise((resolve, reject)=>{
        if (false) {
            setTimeout(()=>{
                resolve('true');
            },2000)
        }else{
            const error = new Error('whooop');
            reject(error)
        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));

//poner los 2 promises en un array
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response =>{
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
})