let promise=new Promise((resolve,reject)=>{

    let a=1+0
    if(a==2){
        resolve('Promise fulfilled')
    }else{
        reject('Promise not fufilled')
    }
})

promise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})