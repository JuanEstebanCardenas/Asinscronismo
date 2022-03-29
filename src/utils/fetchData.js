
let XMLhttprequest = require('xmlhttprequest').XMLHttpRequest; 89

//traer url con promise
const fetchData = (url_api, callback) =>{
    return new Promise((resolve , reject)=>{
        const xhttp = new XMLhttprequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (()=>{
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                ? resolve (JSON.parse(xhttp.responseText))
                :reject(new('Error', url_api))
                
            }
        });
        xhttp.send();
    });
    
}

module.exports = fetchData;